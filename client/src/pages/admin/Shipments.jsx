import {
    Eye,
    Pencil,
    Trash2,
    Search,
    X,
    Package,
    MapPin,
    Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Shipments() {
    const navigate = useNavigate();

    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const [viewShipment, setViewShipment] = useState(null);
    const [editShipment, setEditShipment] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const [editForm, setEditForm] = useState({
        service: "",
        pickupDate: "",
        pickupWindow: "",
        status: "Booked",
    });

    useEffect(() => {
        getShipments();
    }, []);

    const getShipments = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/v1/shipments",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Failed to fetch shipments");
                return;
            }

            setShipments(data.shipments || []);
        } catch (error) {
            console.error("Error fetching shipments:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredShipments = shipments.filter((shipment) => {
        const text = search.toLowerCase();

        const searchMatch =
            shipment.trackingNumber?.toLowerCase().includes(text) ||
            shipment.sender?.name?.toLowerCase().includes(text) ||
            shipment.receiver?.name?.toLowerCase().includes(text);

        const statusMatch =
            status === "All" || shipment.status === status;

        return searchMatch && statusMatch;
    });

    const formatDate = (date) => {
        if (!date) return "—";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const openEdit = (shipment) => {
        setEditShipment(shipment);

        setEditForm({
            service: shipment.service || "",
            pickupDate: shipment.pickupDate
                ? new Date(shipment.pickupDate)
                    .toISOString()
                    .split("T")[0]
                : "",
            pickupWindow: shipment.pickupWindow || "",
            status: shipment.status || "Booked",
        });
    };

    const handleEditChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        });
    };

    const updateShipment = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/shipments/${editShipment._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(editForm),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Failed to update shipment");
                return;
            }

            setShipments(
                shipments.map((shipment) =>
                    shipment._id === editShipment._id
                        ? data.shipment
                        : shipment
                )
            );

            setEditShipment(null);
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    const deleteShipment = async () => {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/shipments/${deleteId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Failed to delete shipment");
                return;
            }

            setShipments(
                shipments.filter(
                    (shipment) => shipment._id !== deleteId
                )
            );

            setDeleteId(null);
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc]">

            <div className="border-b border-gray-200 bg-white px-5 py-5 sm:px-7">
                <h1 className="text-2xl font-bold text-[#4f0714] sm:text-3xl">
                    Shipment Management
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View and manage customer shipments.
                </p>
            </div>

            <div className="p-5 sm:p-7">

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                    <div className="flex flex-col gap-4 sm:flex-row">

                        <div className="relative flex-1">

                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search tracking number, sender or receiver"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="w-full rounded-xl border border-gray-200 bg-[#f8f7fc] py-3 pl-12 pr-4 text-sm outline-none focus:border-[#6b0717]"
                            />

                        </div>

                        <select
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                            className="rounded-xl border border-gray-200 bg-[#f8f7fc] px-4 py-3 text-sm font-semibold text-gray-600 outline-none focus:border-[#6b0717]"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Booked">Booked</option>
                            <option value="Picked Up">Picked Up</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Out for Delivery">
                                Out for Delivery
                            </option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>

                    </div>

                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {loading ? (
                        <div className="p-10 text-center">
                            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#eef0ff] border-t-[#680818]" />

                            <p className="mt-3 text-sm text-gray-500">
                                Loading shipments...
                            </p>
                        </div>
                    ) : filteredShipments.length === 0 ? (
                        <div className="p-10 text-center">

                            <Package className="mx-auto h-10 w-10 text-gray-300" />

                            <h3 className="mt-3 text-lg font-bold text-[#4f0714]">
                                No Shipments Found
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Try another search or filter.
                            </p>

                        </div>
                    ) : (
                        <div className="overflow-x-auto">

                            <table className="min-w-[900px] w-full">

                                <thead className="bg-[#f8f7fc]">

                                    <tr className="border-b border-gray-200 text-left">

                                        <th className="px-5 py-4 text-xs font-bold uppercase text-gray-400">
                                            Tracking Number
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase text-gray-400">
                                            Sender
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase text-gray-400">
                                            Receiver
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase text-gray-400">
                                            Status
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase text-gray-400">
                                            Pickup Date
                                        </th>

                                        <th className="px-5 py-4 text-right text-xs font-bold uppercase text-gray-400">
                                            Actions
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredShipments.map((shipment) => (
                                        <tr
                                            key={shipment._id}
                                            className="border-b border-gray-100 last:border-0 hover:bg-[#faf9fb]"
                                        >

                                            <td className="px-5 py-4">
                                                <p className="text-sm font-bold text-[#4f0714]">
                                                    {shipment.trackingNumber}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4">
                                                <p className="text-sm font-semibold text-gray-700">
                                                    {shipment.sender?.name || "—"}
                                                </p>

                                                <p className="text-xs text-gray-400">
                                                    {shipment.sender?.city || "—"}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4">
                                                <p className="text-sm font-semibold text-gray-700">
                                                    {shipment.receiver?.name || "—"}
                                                </p>

                                                <p className="text-xs text-gray-400">
                                                    {shipment.receiver?.city || "—"}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4">
                                                <StatusBadge
                                                    status={shipment.status}
                                                />
                                            </td>

                                            <td className="px-5 py-4 text-sm text-gray-600">
                                                {formatDate(
                                                    shipment.pickupDate
                                                )}
                                            </td>

                                            <td className="px-5 py-4">

                                                <div className="flex justify-end gap-2">

                                                    <button
                                                        onClick={() =>
                                                            setViewShipment(
                                                                shipment
                                                            )
                                                        }
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef0ff] text-[#680818] hover:bg-[#e3e6ff]"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            openEdit(
                                                                shipment
                                                            )
                                                        }
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff1df] text-[#8c421c] hover:bg-[#ffe6c7]"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            setDeleteId(
                                                                shipment._id
                                                            )
                                                        }
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>
                    )}

                </div>

            </div>

            {viewShipment && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

                        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                            <div>
                                <p className="text-xs font-bold uppercase text-gray-400">
                                    Shipment Details
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#4f0714]">
                                    {viewShipment.trackingNumber}
                                </h2>
                            </div>

                            <button
                                onClick={() =>
                                    setViewShipment(null)
                                }
                                className="rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200"
                            >
                                <X className="h-5 w-5" />
                            </button>

                        </div>

                        <div className="grid gap-5 p-5 sm:grid-cols-2">

                            <div className="rounded-xl bg-[#f8f7fc] p-4">

                                <div className="flex items-center gap-2">
                                    <Truck className="h-5 w-5 text-[#680818]" />

                                    <h3 className="font-bold text-[#4f0714]">
                                        Shipment
                                    </h3>
                                </div>

                                <div className="mt-4 space-y-3 text-sm">

                                    <p>
                                        <span className="text-gray-400">
                                            Service:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            {viewShipment.service}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="text-gray-400">
                                            Status:
                                        </span>{" "}
                                        <StatusBadge
                                            status={viewShipment.status}
                                        />
                                    </p>

                                    <p>
                                        <span className="text-gray-400">
                                            Pickup:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            {formatDate(
                                                viewShipment.pickupDate
                                            )}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="text-gray-400">
                                            Window:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            {viewShipment.pickupWindow}
                                        </span>
                                    </p>

                                </div>

                            </div>

                            <div className="rounded-xl bg-[#f8f7fc] p-4">

                                <div className="flex items-center gap-2">
                                    <Package className="h-5 w-5 text-[#680818]" />

                                    <h3 className="font-bold text-[#4f0714]">
                                        Parcel
                                    </h3>
                                </div>

                                <div className="mt-4 space-y-3 text-sm">

                                    <p>
                                        <span className="text-gray-400">
                                            Type:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            {viewShipment.parcel?.packageType ||
                                                "—"}
                                        </span>
                                    </p>

                                    <p>
                                        <span className="text-gray-400">
                                            Weight:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            {viewShipment.parcel?.weight || "—"}{" "}
                                            kg
                                        </span>
                                    </p>

                                    <p>
                                        <span className="text-gray-400">
                                            Size:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            {viewShipment.parcel?.length || "—"} ×{" "}
                                            {viewShipment.parcel?.width || "—"} ×{" "}
                                            {viewShipment.parcel?.height || "—"}
                                        </span>
                                    </p>

                                </div>

                            </div>

                            <AddressBox
                                title="Sender"
                                data={viewShipment.sender}
                            />

                            <AddressBox
                                title="Receiver"
                                data={viewShipment.receiver}
                            />

                        </div>

                    </div>

                </div>
            )}

            {editShipment && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                    <form
                        onSubmit={updateShipment}
                        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
                    >

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs font-bold uppercase text-gray-400">
                                    Edit Shipment
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#4f0714]">
                                    {editShipment.trackingNumber}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setEditShipment(null)
                                }
                                className="rounded-lg bg-gray-100 p-2 text-gray-500"
                            >
                                <X className="h-5 w-5" />
                            </button>

                        </div>

                        <div className="mt-5 space-y-4">

                            <input
                                type="text"
                                name="service"
                                value={editForm.service}
                                onChange={handleEditChange}
                                placeholder="Service"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                            />

                            <input
                                type="date"
                                name="pickupDate"
                                value={editForm.pickupDate}
                                onChange={handleEditChange}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                            />

                            <input
                                type="text"
                                name="pickupWindow"
                                value={editForm.pickupWindow}
                                onChange={handleEditChange}
                                placeholder="Pickup Window"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                            />

                            <select
                                name="status"
                                value={editForm.status}
                                onChange={handleEditChange}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                            >
                                <option value="Booked">Booked</option>
                                <option value="Picked Up">Picked Up</option>
                                <option value="In Transit">In Transit</option>
                                <option value="Out for Delivery">
                                    Out for Delivery
                                </option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>

                        </div>

                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() =>
                                    setEditShipment(null)
                                }
                                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-[#6b0717] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4f0714]"
                            >
                                Save Changes
                            </button>

                        </div>

                    </form>

                </div>
            )}

            {deleteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100">
                            <Trash2 className="h-5 w-5 text-red-600" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-[#4f0714]">
                            Delete Shipment?
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Are you sure you want to delete this shipment?
                            This action cannot be undone.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                onClick={() => setDeleteId(null)}
                                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={deleteShipment}
                                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

const StatusBadge = ({ status }) => {
    const styles = {
        Booked: "bg-[#eef0ff] text-[#680818]",
        "Picked Up": "bg-[#fff1df] text-[#8c421c]",
        "In Transit": "bg-[#ffe4d3] text-[#8c421c]",
        "Out for Delivery": "bg-[#e8f3ff] text-[#245b8f]",
        Delivered: "bg-green-50 text-green-700",
        Cancelled: "bg-red-50 text-red-600",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold ${styles[status] || "bg-gray-100 text-gray-600"
                }`}
        >
            {status || "Unknown"}
        </span>
    );
};

const AddressBox = ({ title, data }) => {
    return (
        <div className="rounded-xl border border-gray-200 p-4">

            <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#680818]" />

                <h3 className="font-bold text-[#4f0714]">
                    {title}
                </h3>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-600">

                <p className="font-semibold text-gray-800">
                    {data?.name || "—"}
                </p>

                <p>{data?.phone || "—"}</p>

                <p>{data?.email || "—"}</p>

                <p>{data?.address || "—"}</p>

                <p>
                    {data?.city || "—"}, {data?.state || "—"} -{" "}
                    {data?.zip || "—"}
                </p>

            </div>

        </div>
    );
};

export default Shipments;
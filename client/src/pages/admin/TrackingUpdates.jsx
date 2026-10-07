import {
    MapPin,
    Package,
    Clock,
    Truck,
    Plus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TrackingUpdates() {
    const navigate = useNavigate();

    const [shipments, setShipments] = useState([]);
    const [selectedShipment, setSelectedShipment] = useState("");
    const [trackingUpdates, setTrackingUpdates] = useState([]);

    const [form, setForm] = useState({
        status: "Booked",
        location: "",
        dateTime: "",
        remarks: "",
    });

    const [loading, setLoading] = useState(true);
    const [historyLoading, setHistoryLoading] = useState(false);
    const [saving, setSaving] = useState(false);

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

    const getTrackingHistory = async (trackingNumber) => {
        if (!trackingNumber) {
            setTrackingUpdates([]);
            return;
        }

        setHistoryLoading(true);

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/tracking/${trackingNumber}`
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Failed to fetch tracking history");
                return;
            }

            setTrackingUpdates(data.trackingUpdates || []);
        } catch (error) {
            console.error("Error fetching tracking:", error);
        } finally {
            setHistoryLoading(false);
        }
    };

    const handleShipmentChange = (e) => {
        const trackingNumber = e.target.value;

        setSelectedShipment(trackingNumber);

        getTrackingHistory(trackingNumber);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const addTrackingUpdate = async (e) => {
        e.preventDefault();

        if (!selectedShipment) {
            alert("Please select a shipment");
            return;
        }

        if (!form.location || !form.dateTime) {
            alert("Location and date/time are required");
            return;
        }

        const token = localStorage.getItem("token");

        setSaving(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/v1/tracking",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        trackingNumber: selectedShipment,
                        status: form.status,
                        location: form.location,
                        dateTime: form.dateTime,
                        remarks: form.remarks,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Failed to add tracking update");
                return;
            }

            alert("Tracking update added successfully");

            setTrackingUpdates([
                ...trackingUpdates,
                data.trackingUpdate,
            ]);

            setForm({
                status: form.status,
                location: "",
                dateTime: "",
                remarks: "",
            });
        } catch (error) {
            console.error("Error adding tracking update:", error);
        } finally {
            setSaving(false);
        }
    };

    const formatDate = (date) => {
        if (!date) {
            return "—";
        }

        return new Date(date).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const getStatusColor = (status) => {
        if (status === "Delivered") {
            return "bg-green-50 text-green-700";
        }

        if (status === "Cancelled") {
            return "bg-red-50 text-red-600";
        }

        if (status === "Out for Delivery") {
            return "bg-[#e8f3ff] text-[#245b8f]";
        }

        if (
            status === "Picked Up" ||
            status === "In Transit"
        ) {
            return "bg-[#fff1df] text-[#8c421c]";
        }

        return "bg-[#eef0ff] text-[#680818]";
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc]">

            <div className="border-b border-gray-200 bg-white px-5 py-5 sm:px-7">
                <h1 className="text-2xl font-bold text-[#4f0714] sm:text-3xl">
                    Tracking Updates
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Add shipment status updates and view tracking history.
                </p>
            </div>

            <div className="p-5 sm:p-7">

                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef0ff]">
                                <Plus className="h-5 w-5 text-[#680818]" />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#4f0714]">
                                    Add Tracking Update
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Update the current shipment status.
                                </p>
                            </div>

                        </div>

                        <form
                            onSubmit={addTrackingUpdate}
                            className="mt-6 space-y-4"
                        >

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Select Shipment
                                </label>

                                <select
                                    value={selectedShipment}
                                    onChange={handleShipmentChange}
                                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                >
                                    <option value="">
                                        {loading
                                            ? "Loading shipments..."
                                            : "Select tracking number"}
                                    </option>

                                    {shipments.map((shipment) => (
                                        <option
                                            key={shipment._id}
                                            value={shipment.trackingNumber}
                                        >
                                            {shipment.trackingNumber} -{" "}
                                            {shipment.receiver?.name || "Customer"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                >
                                    <option value="Booked">Booked</option>
                                    <option value="Picked Up">
                                        Picked Up
                                    </option>
                                    <option value="In Transit">
                                        In Transit
                                    </option>
                                    <option value="Out for Delivery">
                                        Out for Delivery
                                    </option>
                                    <option value="Delivered">
                                        Delivered
                                    </option>
                                    <option value="Cancelled">
                                        Cancelled
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Location
                                </label>

                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        name="location"
                                        value={form.location}
                                        onChange={handleChange}
                                        placeholder="Enter current location"
                                        className="w-full rounded-lg border border-gray-200 px-10 py-3 text-sm outline-none focus:border-[#6b0717]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Date & Time
                                </label>

                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="datetime-local"
                                        name="dateTime"
                                        value={form.dateTime}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-200 px-10 py-3 text-sm outline-none focus:border-[#6b0717]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Remarks
                                </label>

                                <textarea
                                    name="remarks"
                                    value={form.remarks}
                                    onChange={handleChange}
                                    placeholder="Add a short remark"
                                    rows="4"
                                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={saving}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6b0717] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4f0612] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Plus className="h-4 w-4" />

                                {saving
                                    ? "Adding Update..."
                                    : "Add Tracking Update"}
                            </button>

                        </form>

                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef0ff]">
                                <Truck className="h-5 w-5 text-[#680818]" />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#4f0714]">
                                    Tracking History
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Previous updates for the selected shipment.
                                </p>
                            </div>

                        </div>

                        {!selectedShipment ? (
                            <div className="mt-8 rounded-xl bg-[#f8f7fc] p-8 text-center">

                                <Package className="mx-auto h-10 w-10 text-gray-300" />

                                <h3 className="mt-3 text-lg font-bold text-[#4f0714]">
                                    Select a Shipment
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Choose a tracking number to view its history.
                                </p>

                            </div>
                        ) : historyLoading ? (
                            <div className="mt-8 p-8 text-center">
                                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#eef0ff] border-t-[#680818]" />

                                <p className="mt-3 text-sm text-gray-500">
                                    Loading tracking history...
                                </p>
                            </div>
                        ) : trackingUpdates.length === 0 ? (
                            <div className="mt-8 rounded-xl bg-[#f8f7fc] p-8 text-center">

                                <MapPin className="mx-auto h-9 w-9 text-gray-300" />

                                <h3 className="mt-3 text-lg font-bold text-[#4f0714]">
                                    No Tracking Updates
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Add the first tracking update for this shipment.
                                </p>

                            </div>
                        ) : (
                            <div className="mt-6 space-y-5">

                                {trackingUpdates.map((update, index) => (
                                    <div
                                        key={update._id}
                                        className="relative flex gap-4"
                                    >

                                        {index !== trackingUpdates.length - 1 && (
                                            <div className="absolute left-5 top-10 h-full w-px bg-gray-200" />
                                        )}

                                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef0ff]">
                                            <MapPin className="h-4 w-4 text-[#680818]" />
                                        </div>

                                        <div className="min-w-0 flex-1 rounded-xl border border-gray-200 p-4">

                                            <div className="flex flex-wrap items-center justify-between gap-2">

                                                <span
                                                    className={`rounded-full px-3 py-1 text-[11px] font-bold ${getStatusColor(
                                                        update.status
                                                    )}`}
                                                >
                                                    {update.status}
                                                </span>

                                                <span className="text-xs text-gray-400">
                                                    {formatDate(update.dateTime)}
                                                </span>

                                            </div>

                                            <p className="mt-3 text-sm font-semibold text-gray-700">
                                                {update.location}
                                            </p>

                                            {update.remarks && (
                                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                                    {update.remarks}
                                                </p>
                                            )}

                                        </div>

                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default TrackingUpdates;
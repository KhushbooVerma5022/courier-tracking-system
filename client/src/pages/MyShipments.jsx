import { useEffect, useState } from "react";
import { CalendarDays, ChevronRight, MapPin, Package, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const MyShipments = () => {
    const navigate = useNavigate();

    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchShipments = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login to view your shipments.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:5000/api/v1/shipments/my",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    setError(data.message || "Unable to fetch your shipments.");
                    return;
                }

                setShipments(data.shipments || []);
            } catch (error) {
                setError("Unable to connect to the server. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchShipments();
    }, []);

    const formatDate = (date) => {
        if (!date) {
            return "—";
        }

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc] pt-[120px] text-[#24151a]">
            <main className="px-5 py-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500" />

                                    <p className="text-[12px] font-bold uppercase tracking-wider text-gray-500">
                                        Trackly Shipments
                                    </p>
                                </div>

                                <h1 className="mt-1 text-2xl font-bold text-[#4f0714] sm:text-4xl">
                                    My Shipments
                                </h1>

                                <p className="mt-1 text-[13px] text-gray-500 sm:text-[14px]">
                                    View and track all your booked shipments in one place.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg bg-[#eef0ff] px-4 py-3">
                                <Package className="h-5 w-5 text-[#680818]" />

                                <div>
                                    <p className="text-[12px] font-bold uppercase text-gray-500">
                                        Total Shipments
                                    </p>

                                    <p className="text-lg font-bold text-[#680818]">
                                        {shipments.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-6">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold sm:text-2xl">
                                Your Shipments
                            </h2>

                            <p className="mt-1 text-[13px] text-gray-500">
                                Check the latest status and details of your shipments.
                            </p>
                        </div>

                        {loading ? (
                            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#eef0ff] border-t-[#680818]" />

                                <p className="mt-3 text-[14px] font-semibold text-gray-500">
                                    Loading your shipments...
                                </p>
                            </div>
                        ) : error ? (
                            <div className="rounded-xl bg-red-50 p-5 text-center shadow-sm">
                                <p className="text-[13px] font-semibold text-red-600">
                                    {error}
                                </p>
                            </div>
                        ) : shipments.length > 0 ? (
                            <div className="grid gap-5 lg:grid-cols-2">
                                {shipments.map((shipment) => (
                                    <ShipmentCard
                                        key={shipment._id}
                                        shipment={shipment}
                                        formatDate={formatDate}
                                        onTrack={() =>
                                            navigate(
                                                `/tracking?trackingNumber=${encodeURIComponent(
                                                    shipment.trackingNumber
                                                )}`
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef0ff]">
                                    <Package className="h-7 w-7 text-[#680818]" />
                                </div>

                                <h2 className="mt-4 text-xl font-bold">
                                    No Shipments Yet
                                </h2>

                                <p className="mx-auto mt-2 max-w-md text-[13px] leading-5 text-gray-500">
                                    You have not booked any shipments yet. Your booked
                                    shipments will appear here.
                                </p>
                            </div>
                        )}
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

const ShipmentCard = ({ shipment, formatDate, onTrack }) => {
    return (
        <div className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">

            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <p className="text-[12px] font-bold uppercase tracking-wide text-gray-500">
                        Tracking Number
                    </p>

                    <h3 className="mt-1 text-[16px] font-bold text-[#24151a] sm:text-lg">
                        {shipment.trackingNumber}
                    </h3>
                </div>

                <StatusBadge status={shipment.status} />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <DetailBox
                    icon={<MapPin />}
                    label="From"
                    value={shipment.sender?.city || "—"}
                />

                <DetailBox
                    icon={<MapPin />}
                    label="To"
                    value={shipment.receiver?.city || "—"}
                    dark
                />

            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">

                <InfoRow
                    icon={<Truck />}
                    label="Service"
                    value={shipment.service || "—"}
                />

                <InfoRow
                    icon={<CalendarDays />}
                    label="Pickup Date"
                    value={formatDate(shipment.pickupDate)}
                />

            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                    <p className="text-[12px] font-bold uppercase text-gray-400">
                        Receiver
                    </p>

                    <p className="mt-1 text-[14px] font-semibold">
                        {shipment.receiver?.name || "—"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onTrack}
                    className="flex items-center gap-2 rounded-lg bg-[#680818] px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#500612]"
                >
                    Track Parcel
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

        </div>
    );
};

const StatusBadge = ({ status }) => {
    const statusStyles = {
        Booked: "bg-[#eef0ff] text-[#680818]",
        "Picked Up": "bg-[#fff1df] text-[#8c421c]",
        "In Transit": "bg-[#ffe4d3] text-[#8c421c]",
        "Out for Delivery": "bg-[#e8f3ff] text-[#245b8f]",
        Delivered: "bg-green-50 text-green-700",
        Cancelled: "bg-red-50 text-red-600",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold ${statusStyles[status] || "bg-gray-100 text-gray-600"
                }`}
        >
            {status || "Unknown"}
        </span>
    );
};

const DetailBox = ({ icon, label, value, dark }) => {
    return (
        <div className="flex items-center gap-3 rounded-lg bg-[#eef0ff] p-3">
            <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${dark
                        ? "bg-[#680818] text-white"
                        : "bg-white text-[#680818]"
                    }`}
            >
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase text-gray-500">
                    {label}
                </p>

                <p className="mt-1 truncate text-[14px] font-bold">
                    {value}
                </p>
            </div>
        </div>
    );
};

const InfoRow = ({ icon, label, value }) => {
    return (
        <div className="flex items-center gap-2 rounded-lg bg-[#f4f4fb] px-3 py-2.5">
            <span className="text-[#680818]">
                {icon}
            </span>

            <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase text-gray-400">
                    {label}
                </p>

                <p className="truncate text-[13px] font-semibold text-gray-700">
                    {value}
                </p>
            </div>
        </div>
    );
};

export default MyShipments;
import { useState } from "react";
import {
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronRight,
    Headphones,
    MapPin,
    Package,
    Phone,
    Search,
    ShieldCheck,
    Truck,
} from "lucide-react";
import Footer from "../components/Footer";

const Tracking = () => {
    const [trackingNumber, setTrackingNumber] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (!trackingNumber.trim()) {
            return;
        }

        console.log("Tracking number:", trackingNumber);
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc] pt-[120px] text-[#24151a]">
            <main className="px-5 py-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    {/* Header & Search */}
                    <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500" />

                                    <p className="text-[12px] font-bold uppercase tracking-wider text-gray-500">
                                        Trackly Tracking
                                    </p>
                                </div>

                                <h1 className="mt-1 text-2xl font-bold text-[#4f0714] sm:text-4xl">
                                    Track Your Parcel
                                </h1>

                                <p className="mt-1 text-[13px] text-gray-500 sm:text-[14px]">
                                    Enter your tracking number to check your shipment status.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSearch}
                                className="flex w-full gap-2 lg:max-w-md"
                            >
                                <div className="flex min-w-0 flex-1 items-center rounded-lg bg-[#eef0ff] px-3">

                                    <Search className="h-4 w-4 shrink-0 text-gray-400" />

                                    <input
                                        type="text"
                                        value={trackingNumber}
                                        onChange={(e) =>
                                            setTrackingNumber(e.target.value)
                                        }
                                        className="min-w-0 w-full bg-transparent px-2 py-3 text-[14px] font-semibold outline-none"
                                        placeholder="Enter tracking number"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex shrink-0 items-center gap-2 rounded-lg bg-[#680818] px-4 py-3 text-[13px] font-bold text-white transition hover:bg-[#500612]"
                                >
                                    <Search className="h-4 w-4" />

                                    <span className="hidden sm:inline">
                                        Track Parcel
                                    </span>

                                    <span className="sm:hidden">
                                        Track
                                    </span>
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Main Content */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">

                        {/* Left Side */}
                        <div className="space-y-6">

                            {/* Shipment Summary */}
                            <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                <div className="flex flex-wrap items-center justify-between gap-3">

                                    <div>
                                        <p className="text-[12px] font-bold uppercase text-gray-500">
                                            Tracking Number
                                        </p>

                                        <h2 className="mt-1 text-lg font-bold sm:text-xl">
                                            {trackingNumber || "TRK-9842-8492"}
                                        </h2>
                                    </div>

                                    <span className="rounded-full bg-[#ffe4d3] px-3 py-1 text-[12px] font-bold text-[#8c421c]">
                                        ● IN TRANSIT
                                    </span>
                                </div>

                                {/* Information Cards */}
                                <div className="mt-5 grid gap-2 md:grid-cols-3">

                                    <InfoBlock
                                        title="Estimated Delivery"
                                        value="Tomorrow, Oct 25"
                                        subtext="Expected delivery"
                                    />

                                    <InfoBlock
                                        title="Service"
                                        value="Express Delivery"
                                        subtext="Fast delivery service"
                                    />

                                    <InfoBlock
                                        title="Current Location"
                                        value="Delhi Sorting Center"
                                        subtext="Parcel is in transit"
                                    />

                                </div>

                                {/* From / To */}
                                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                                    <LocationCard
                                        title="From"
                                        name="Delhi"
                                        location="Origin Location"
                                    />

                                    <LocationCard
                                        title="To"
                                        name="Noida"
                                        location="Destination"
                                        dark
                                    />

                                </div>

                                {/* Small Details */}
                                <div className="mt-3 grid grid-cols-2 gap-2 rounded-lg bg-[#eef0ff] p-3 sm:grid-cols-3">

                                    <SmallDetail
                                        icon={<Truck />}
                                        text="Weight: 2 kg"
                                    />

                                    <SmallDetail
                                        icon={<Package />}
                                        text="Package: Standard"
                                    />

                                    <SmallDetail
                                        icon={<ShieldCheck />}
                                        text="Status: Active"
                                    />

                                </div>
                            </section>

                            {/* Shipment Progress */}
                            <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h2 className="text-xl font-bold sm:text-2xl">
                                            Shipment Progress
                                        </h2>

                                        <p className="mt-1 text-[13px] text-gray-500">
                                            Follow the current status of your parcel.
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-[#eef0ff] px-3 py-1 text-[12px] font-semibold text-[#680818]">
                                        In Progress
                                    </span>
                                </div>

                                <div className="mt-7 overflow-x-auto pb-2">
                                    <div className="min-w-[600px]">

                                        <div className="relative grid grid-cols-5">

                                            {/* Progress Line */}
                                            <div className="absolute left-[10%] right-[10%] top-5 h-1 bg-gray-200" />

                                            <div className="absolute left-[10%] top-5 h-1 w-[40%] bg-[#680818]" />

                                            <Milestone
                                                active
                                                title="Booked"
                                                date="Oct 23"
                                            />

                                            <Milestone
                                                active
                                                title="Picked Up"
                                                date="Oct 23"
                                            />

                                            <Milestone
                                                current
                                                title="In Transit"
                                                date="Current"
                                            />

                                            <Milestone
                                                title="Out for Delivery"
                                                date="Expected"
                                            />

                                            <Milestone
                                                title="Delivered"
                                                date="Pending"
                                            />

                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tracking History */}
                            <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                <div>
                                    <h2 className="text-xl font-bold sm:text-2xl">
                                        Tracking History
                                    </h2>

                                    <p className="mt-1 text-[13px] text-gray-500">
                                        Recent updates about your shipment.
                                    </p>
                                </div>

                                <div className="relative mt-7">

                                    <div className="absolute left-[7px] top-2 bottom-4 w-px bg-[#d6d9e8]" />

                                    <div className="space-y-6">

                                        <ActivityItem
                                            active
                                            title="In Transit"
                                            status="CURRENT"
                                            date="Oct 24, 10:30 AM"
                                            location="Delhi Sorting Center"
                                            description="Your parcel is currently on the way to the destination."
                                        />

                                        <ActivityItem
                                            title="Picked Up"
                                            status="PICKED UP"
                                            date="Oct 23, 04:20 PM"
                                            location="Delhi"
                                            description="Your parcel was picked up successfully."
                                        />

                                        <ActivityItem
                                            title="Shipment Booked"
                                            status="BOOKED"
                                            date="Oct 23, 10:00 AM"
                                            location="Delhi"
                                            description="Your shipment was created successfully."
                                        />

                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Side */}
                        <aside className="space-y-5 lg:sticky lg:top-[140px] lg:self-start">

                            {/* Shipment Actions */}
                            <section className="rounded-xl bg-white p-5 shadow-sm">

                                <div className="flex items-center gap-2">
                                    <Truck className="h-4 w-4 text-[#680818]" />

                                    <h2 className="text-lg font-bold">
                                        Shipment Actions
                                    </h2>
                                </div>

                                <p className="mt-2 text-[13px] leading-5 text-gray-500">
                                    Need help with your shipment? You can contact
                                    our support team.
                                </p>

                                <div className="mt-5 space-y-2">

                                    <ActionButton
                                        icon={<Headphones />}
                                        title="Contact Support"
                                        text="Get help with your shipment"
                                    />

                                    <ActionButton
                                        icon={<CalendarDays />}
                                        title="Delivery Information"
                                        text="Check your expected delivery"
                                    />

                                </div>
                            </section>

                            {/* Package Details */}
                            <section className="rounded-xl bg-white p-5 shadow-sm">

                                <div className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-[#680818]" />

                                    <h2 className="text-lg font-bold">
                                        Package Details
                                    </h2>
                                </div>

                                <div className="mt-4 space-y-2">

                                    <StatusRow
                                        status="Service"
                                        text="Express"
                                    />

                                    <StatusRow
                                        status="Weight"
                                        text="2 kg"
                                    />

                                    <StatusRow
                                        status="Package"
                                        text="Standard"
                                    />

                                    <StatusRow
                                        status="Current Status"
                                        text="In Transit"
                                        active
                                    />

                                </div>
                            </section>

                            {/* Support */}
                            <section className="rounded-xl bg-white p-5 shadow-sm">

                                <div className="flex items-center gap-2">
                                    <Headphones className="h-4 w-4 text-[#680818]" />

                                    <h2 className="text-lg font-bold">
                                        Need Help?
                                    </h2>
                                </div>

                                <p className="mt-2 text-[13px] leading-5 text-gray-500">
                                    If you have any questions about your parcel,
                                    our support team is here to help.
                                </p>

                                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] py-2.5 text-[13px] font-bold text-white transition hover:bg-[#500612]">
                                    <Phone className="h-3 w-3" />
                                    Contact Support
                                </button>

                            </section>

                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

/* Information Card */

const InfoBlock = ({ title, value, subtext }) => {
    return (
        <div className="rounded-lg bg-[#eef0ff] p-3">
            <p className="text-[12px] font-bold uppercase text-gray-500">
                {title}
            </p>

            <p className="mt-1 text-[15px] font-semibold text-[#24151a]">
                {value}
            </p>

            <p className="mt-1 text-[13px] text-gray-500">
                {subtext}
            </p>
        </div>
    );
};

/* Location Card */

const LocationCard = ({ title, name, location, dark }) => {
    return (
        <div className="flex items-center gap-3 rounded-lg bg-[#eef0ff] p-3">

            <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    dark
                        ? "bg-[#680818] text-white"
                        : "bg-white text-[#680818]"
                }`}
            >
                <MapPin className="h-4 w-4" />
            </div>

            <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase text-gray-500">
                    {title}
                </p>

                <p className="mt-1 truncate text-[14px] font-bold">
                    {name}
                </p>

                <p className="text-[13px] text-gray-500">
                    {location}
                </p>
            </div>
        </div>
    );
};

/* Small Details */

const SmallDetail = ({ icon, text }) => {
    return (
        <div className="flex items-center gap-2 text-[13px] text-gray-600">

            <span className="text-[#680818]">
                {icon}
            </span>

            <span>{text}</span>
        </div>
    );
};

/* Progress Milestone */

const Milestone = ({ title, date, active, current }) => {
    return (
        <div className="relative z-10 flex flex-col items-center text-center">

            <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white ${
                    current
                        ? "bg-[#e0854c] text-white shadow-[0_0_0_2px_#e0854c]"
                        : active
                        ? "bg-[#680818] text-white"
                        : "bg-[#eef0ff] text-gray-400"
                }`}
            >
                {current ? (
                    <Truck className="h-4 w-4" />
                ) : active ? (
                    <Check className="h-4 w-4" />
                ) : (
                    <CheckCircle2 className="h-4 w-4" />
                )}
            </div>

            <p className="mt-2 text-[13px] font-semibold">
                {title}
            </p>

            <p className="mt-1 text-[12px] text-gray-400">
                {date}
            </p>
        </div>
    );
};

/* Tracking History Item */

const ActivityItem = ({
    title,
    status,
    date,
    location,
    description,
    active,
}) => {
    return (
        <div className="relative pl-7">

            <div
                className={`absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white ${
                    active ? "bg-[#e0854c]" : "bg-[#680818]"
                }`}
            >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>

            <div className="rounded-lg bg-[#f4f4fb] p-3">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex flex-wrap items-center gap-2">

                        <h3 className="text-[14px] font-bold">
                            {title}
                        </h3>

                        <span className="rounded-full bg-[#ffe4d3] px-2 py-0.5 text-[10px] font-bold text-[#8c421c]">
                            {status}
                        </span>

                    </div>

                    <span className="text-[12px] text-gray-500">
                        {date}
                    </span>
                </div>

                <p className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-gray-600">
                    <MapPin className="h-3 w-3 text-[#680818]" />
                    {location}
                </p>

                <p className="mt-2 text-[13px] leading-5 text-gray-500">
                    {description}
                </p>

            </div>
        </div>
    );
};

/* Sidebar Action */

const ActionButton = ({ icon, title, text }) => {
    return (
        <button className="flex w-full items-center gap-3 rounded-lg bg-[#eef0ff] p-3 text-left transition hover:bg-[#e5e7fb]">

            <div className="text-[#680818]">
                {icon}
            </div>

            <div className="min-w-0 flex-1">

                <p className="text-[14px] font-semibold">
                    {title}
                </p>

                <p className="mt-1 text-[12px] text-gray-500">
                    {text}
                </p>

            </div>

            <ChevronRight className="h-4 w-4 text-gray-500" />
        </button>
    );
};

/* Sidebar Status */

const StatusRow = ({ status, text, active }) => {
    return (
        <div
            className={`flex items-center justify-between rounded px-2 py-2 ${
                active ? "bg-[#ffe7d8]" : "bg-[#f4f3fb]"
            }`}
        >
            <span className="text-[13px] font-semibold">
                {status}
            </span>

            <span className="text-[12px] text-gray-500">
                {text}
            </span>
        </div>
    );
};

export default Tracking;
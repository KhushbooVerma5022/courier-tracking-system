import { useState } from "react";
import {
    ArrowRight,
    Building2,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock3,
    Copy,
    Download,
    FileText,
    Headphones,
    MapPin,
    Package,
    Phone,
    Radio,
    Route,
    Search,
    ShieldCheck,
    Truck,
    UserRound,
} from "lucide-react";
import Footer from "../components/Footer";

const Tracking = () => {
    const [trackingNumber, setTrackingNumber] = useState("TRK-9842-8492");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Tracking number:", trackingNumber);
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc] pt-[120px] text-[#24151a]">

            <main className="px-5 py-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500" />

                                    <p className="text-[12px] font-bold uppercase tracking-wider text-gray-500">
                                        Telemetry Network Active
                                    </p>
                                </div>

                                <h1 className="mt-1 text-2xl font-bold text-[#4f0714] sm:text-4xl">
                                    Live Parcel Tracking
                                </h1>

                                <p className="mt-1 text-[13px] text-gray-500 sm:text-[14px]">
                                    Updated 4 minutes ago • Source: Hub Terminal #4, Chicago IL
                                </p>
                            </div>

                            <form
                                onSubmit={handleSearch}
                                className="flex w-full gap-2 lg:max-w-md"
                            >
                                <div className="flex min-w-0 flex-1 items-center rounded-lg bg-[#eef0ff] px-3">
                                    <Radio className="h-4 w-4 shrink-0 text-gray-400" />

                                    <input
                                        type="text"
                                        value={trackingNumber}
                                        onChange={(e) =>
                                            setTrackingNumber(e.target.value)
                                        }
                                        className="min-w-0 w-full bg-transparent px-2 py-3 text-[14px] font-semibold outline-none"
                                        placeholder="Enter tracking number"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigator.clipboard?.writeText(
                                                trackingNumber
                                            )
                                        }
                                        className="text-gray-400 transition hover:text-[#680818]"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="flex shrink-0 items-center gap-2 rounded-lg bg-[#680818] px-4 py-3 text-[13px] font-bold text-white transition hover:bg-[#500612]"
                                >
                                    <Search className="h-4 w-4" />
                                    <span className="hidden sm:inline">
                                        Search / Refresh
                                    </span>
                                    <span className="sm:hidden">Search</span>
                                </button>
                            </form>

                        </div>

                    </section>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">

                        <div className="space-y-6">

                            <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                <div className="flex flex-wrap items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-bold sm:text-xl">
                                            {trackingNumber}
                                        </h2>

                                        <button className="text-gray-400 hover:text-[#680818]">
                                            <Copy className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <span className="rounded-full bg-[#ffe4d3] px-3 py-1 text-[12px] font-bold text-[#8c421c]">
                                        ● IN TRANSIT
                                    </span>

                                </div>

                                <div className="mt-5 grid gap-2 md:grid-cols-3">

                                    <InfoBlock
                                        title="Estimated Delivery"
                                        value="Tomorrow, Oct 25"
                                        subtext="by 12:30 PM Window"
                                    />

                                    <InfoBlock
                                        title="Transit Level"
                                        value="Express Priority"
                                        subtext="Air & Ground Scheduled"
                                    />

                                    <InfoBlock
                                        title="Current Facility"
                                        value="Chicago O'Hare (ORD)"
                                        subtext="Regional Hub Sort Unit #4"
                                    />

                                </div>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                                    <LocationCard
                                        icon={<MapPin />}
                                        title="Origin Dispatcher"
                                        name="Apex Hardware Ltd"
                                        location="Seattle, WA 98101"
                                        extra="Depot Hub #12"
                                    />

                                    <LocationCard
                                        icon={<MapPin />}
                                        title="Target Destination"
                                        name="David Miller"
                                        location="Columbus, OH 43215"
                                        extra="Direct Delivery"
                                        dark
                                    />

                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-2 rounded-lg bg-[#eef0ff] p-3 sm:grid-cols-4">

                                    <SmallDetail
                                        icon={<Truck />}
                                        text="Weight: 4.2 kg"
                                    />

                                    <SmallDetail
                                        icon={<Package />}
                                        text="Dimensions: 30 × 20 × 15 cm"
                                    />

                                    <SmallDetail
                                        icon={<ShieldCheck />}
                                        text="Coverage: $450 Declared"
                                    />

                                    <SmallDetail
                                        icon={<FileText />}
                                        text="Signature: Required"
                                    />

                                </div>

                            </section>

                            <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h2 className="text-xl font-bold sm:text-2xl">
                                            Waybill Milestones
                                        </h2>
                                    </div>

                                    <span className="rounded-full bg-[#eef0ff] px-3 py-1 text-[12px] font-semibold text-[#680818]">
                                        Phase 3 of 5 In Progress
                                    </span>
                                </div>

                                <div className="mt-7 overflow-x-auto pb-2">
                                    <div className="min-w-[650px]">  

                                        <div className="relative grid grid-cols-5">

                                            <div className="absolute left-[10%] right-[10%] top-5 h-1 bg-gray-200" />

                                            <div className="absolute left-[10%] top-5 h-1 w-[40%] bg-[#680818]" />

                                            <Milestone
                                                active
                                                title="Booked"
                                                date="Oct 22"
                                            />

                                            <Milestone
                                                active
                                                title="Picked Up"
                                                date="Oct 23"
                                            />

                                            <Milestone
                                                current
                                                title="In Transit"
                                                date="Chicago Hub"
                                            />

                                            <Milestone
                                                title="Out for Delivery"
                                                date="Expected Oct 25"
                                            />

                                            <Milestone
                                                title="Delivered"
                                                date="Final Handover"
                                            />

                                        </div>

                                    </div>
                                </div>

                            </section>

                            <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold sm:text-2xl">
                                            Transit Activity Log
                                        </h2>

                                        <p className="text-[13px] text-gray-500">
                                            Immutable checkpoint timestamps logged through Trackly Central Relay
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="rounded bg-[#680818] px-3 py-1 text-[12px] font-bold text-white">
                                            All (5)
                                        </button>

                                        <button className="rounded bg-[#eef0ff] px-3 py-1 text-[12px] font-semibold text-gray-600">
                                            In Transit Only
                                        </button>
                                    </div>
                                </div>

                                <div className="relative mt-7">

                                    <div className="absolute left-[7px] top-2 bottom-4 w-px bg-[#d6d9e8]" />

                                    <div className="space-y-6">

                                        <ActivityItem
                                            active
                                            title="Departed Sorting Facility"
                                            status="IN TRANSIT"
                                            date="Oct 24, 2024 • 14:15 PM"
                                            location="Chicago Logistics Central Hub, IL (Zone ORD-4)"
                                            description="Departed sorting facility. Package has been reassigned to linehaul ground unit LH-882 enroute to Columbus Regional Distribution Depot."
                                        />

                                        <ActivityItem
                                            title="Arrived at Regional Hub"
                                            status="IN TRANSIT"
                                            date="Oct 24, 2024 • 09:30 AM"
                                            location="Chicago Logistics Central Hub, IL"
                                            description="Arrived at sorting facility and scanned onto linehaul unit. Automated dimension inspection passed with zero variance."
                                        />

                                        <ActivityItem
                                            title="Departed Origin Facility"
                                            status="PICKED UP"
                                            date="Oct 23, 2024 • 18:45 PM"
                                            location="Seattle Express Depot (SEA), WA"
                                            description="Departed origin facility via priority cargo flight TK-402 heading to Chicago Midway sort facility."
                                        />

                                        <ActivityItem
                                            title="Package Handed Over to Courier"
                                            status="PICKED UP"
                                            date="Oct 23, 2024 • 11:20 AM"
                                            location="Sender Location - Seattle, WA"
                                            description="Courier agent James W. collected package from sender manifest dock. Handheld barcode check complete."
                                        />

                                        <ActivityItem
                                            title="Shipment Manifest Created"
                                            status="BOOKED"
                                            date="Oct 22, 2024 • 16:05 PM"
                                            location="Trackly Cloud Logistics Gateway"
                                            description="Shipment order created and shipping label generated by commercial shipper Apex Hardware Ltd."
                                        />

                                    </div>

                                </div>

                            </section>

                        </div>

                        <aside className="space-y-5 lg:sticky lg:top-[140px] lg:self-start">

                            <section className="rounded-xl bg-white p-5 shadow-sm">

                                <div className="flex items-center gap-2">
                                    <Route className="h-4 w-4 text-[#680818]" />

                                    <h2 className="text-lg font-bold">
                                        Delivery Options & Actions
                                    </h2>
                                </div>

                                <p className="mt-2 text-[13px] leading-5 text-gray-500">
                                    Manage package handling specifications before
                                    final dispatch in Columbus, OH.
                                </p>

                                <div className="mt-5 space-y-2">

                                    <ActionButton
                                        icon={<UserRound />}
                                        title="Leave with Neighbor"
                                        text="Authorize trusted neighbor drop-off"
                                    />

                                    <ActionButton
                                        icon={<CalendarDays />}
                                        title="Reschedule Delivery"
                                        text="Postpone or create a new slot"
                                    />

                                    <ActionButton
                                        icon={<FileText />}
                                        title="Airway Bill (AWB)"
                                        text="Download PDF proof of transit"
                                        download
                                    />

                                </div>

                            </section>

                            <section className="rounded-xl bg-white p-5 shadow-sm">

                                <div className="flex items-center gap-2">
                                    <Headphones className="h-4 w-4 text-[#680818]" />

                                    <h2 className="text-lg font-bold">
                                        Courier Support
                                    </h2>
                                </div>

                                <p className="mt-2 text-[13px] leading-5 text-gray-500">
                                    Need intervention or route assistance with this
                                    active consignment? Our 24/7 flight & fleet
                                    dispatchers are on duty.
                                </p>

                                <div className="mt-4 rounded-lg bg-[#eef0ff] p-3">
                                    <p className="text-[12px] font-bold uppercase text-gray-500">
                                        Regional Dispatch Desk
                                    </p>

                                    <p className="mt-1 text-[14px] font-bold">
                                        Midwest Linehaul Sector 04
                                    </p>

                                    <p className="mt-1 text-[12px] text-gray-500">
                                        Agent: James K. (Callsign: ORD-R4)
                                    </p>
                                </div>

                                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] py-2.5 text-[13px] font-bold text-white">
                                    <Phone className="h-3 w-3" />
                                    Call Quick Helpline
                                </button>

                                <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#eef0ff] py-2.5 text-[13px] font-semibold text-gray-700">
                                    <Radio className="h-3 w-3" />
                                    Live Operations Chat
                                </button>

                            </section>

                            <section className="rounded-xl bg-white p-5 shadow-sm">

                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-[#680818]" />

                                    <h2 className="text-lg font-bold">
                                        Status Standard Matrix
                                    </h2>
                                </div>

                                <p className="mt-2 text-[13px] text-gray-500">
                                    Trackly precision consignment taxonomy guidelines.
                                </p>

                                <div className="mt-4 space-y-1">

                                    <StatusRow
                                        color="bg-gray-500"
                                        status="Booked"
                                        text="Label generated"
                                    />

                                    <StatusRow
                                        color="bg-[#680818]"
                                        status="Picked Up"
                                        text="Origin scanned"
                                    />

                                    <StatusRow
                                        color="bg-[#e0854c]"
                                        status="In Transit"
                                        text="Moving between hubs"
                                        active
                                    />

                                    <StatusRow
                                        color="bg-orange-400"
                                        status="Out for Delivery"
                                        text="On local delivery van"
                                    />

                                    <StatusRow
                                        color="bg-green-500"
                                        status="Delivered"
                                        text="Signed & completed"
                                    />

                                    <StatusRow
                                        color="bg-red-500"
                                        status="Cancelled"
                                        text="Terminated or return"
                                    />

                                </div>

                            </section>

                            <section className="rounded-xl border border-[#18213a] bg-[#18213a] p-5 text-white shadow-sm">

                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-[#e0854c]" />

                                    <h2 className="text-[14px] font-bold">
                                        Zero-Discrepancy Guarantee
                                    </h2>
                                </div>

                                <p className="mt-3 text-[13px] leading-5 text-gray-300">
                                    Every waypoint scan is verified against calibrated
                                    load cell weighbridges and laser volume scanning.
                                </p>

                                <div className="mt-4 flex justify-between text-[12px] font-bold">
                                    <span className="text-[#e0854c]">
                                        SCAN CHECK: SHA-256
                                    </span>

                                    <span className="text-[#e0854c]">
                                        SYNC: REALTIME
                                    </span>
                                </div>

                            </section>

                        </aside>

                    </div>

                </div>
            </main>
            <Footer/>

        </div>
    );
};

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

const LocationCard = ({
    icon,
    title,
    name,
    location,
    extra,
    dark,
}) => {
    return (
        <div className="flex items-center gap-3 rounded-lg bg-[#eef0ff] p-3">

            <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    dark
                        ? "bg-[#680818] text-white"
                        : "bg-white text-[#680818]"
                }`}
            >
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase text-gray-500">
                    {title}
                </p>

                <p className="mt-1 truncate text-[14px] font-bold">
                    {name}
                </p>

                <p className="text-[13px] text-gray-500">
                    {location} ({extra})
                </p>
            </div>

        </div>
    );
};

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

const Milestone = ({
    title,
    date,
    active,
    current,
}) => {
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

const ActionButton = ({
    icon,
    title,
    text,
    download,
}) => {
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

            {download ? (
                <Download className="h-4 w-4 text-gray-500" />
            ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
            )}

        </button>
    );
};

const StatusRow = ({
    color,
    status,
    text,
    active,
}) => {
    return (
        <div
            className={`flex items-center justify-between rounded px-2 py-1 ${
                active ? "bg-[#ffe7d8]" : "bg-[#f4f3fb]"
            }`}
        >
            <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${color}`} />

                <span className="text-[13px] font-semibold">
                    {status}
                </span>
            </div>

            <span className="text-[12px] text-gray-500">
                {text}
            </span>
        </div>
    );
};

export default Tracking;
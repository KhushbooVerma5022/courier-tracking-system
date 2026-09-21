import {
    ArrowRight,
    Check,
    Clock3,
    Globe,
    HeartHandshake,
    LockKeyhole,
    MapPin,
    Package,
    Route,
    ShieldCheck,
    Truck,
    Warehouse,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
    {
        icon: <Route className="h-5 w-5" />,
        label: "PILLAR 1",
        title: "Absolute Telemetry & Transparency",
        text: "Continuous GPS tracking, instant milestone visibility and easy access to shipment information.",
        footer: "Sub-second shipment updates",
    },
    {
        icon: <Zap className="h-5 w-5" />,
        label: "PILLAR 2",
        title: "Speed Without Compromise",
        text: "Guaranteed delivery windows with optimized routing and priority handling.",
        footer: "Guaranteed morning commitments",
    },
    {
        icon: <ShieldCheck className="h-5 w-5" />,
        label: "PILLAR 3",
        title: "Enterprise Reliability & Care",
        text: "Secure logistics operations backed by dedicated support and shipment protection.",
        footer: "$2,500 standard protection",
    },
];

const infrastructure = [
    {
        icon: <Zap className="h-4 w-4" />,
        title: "Automated Optical Sorting",
        text: "High-speed automated sorting helps shipments move efficiently through regional hubs.",
    },
    {
        icon: <Truck className="h-4 w-4" />,
        title: "Dedicated Highway Corridors",
        text: "Freight routes connect major logistics centers with predictable transit times.",
    },
    {
        icon: <Globe className="h-4 w-4" />,
        title: "Low-Emission Last-Mile Fleet",
        text: "Modern delivery operations designed for efficient urban fulfillment.",
    },
    {
        icon: <Route className="h-4 w-4" />,
        title: "Priority Air Cargo Integrations",
        text: "Priority routing options for urgent domestic and regional shipments.",
    },
];

const team = [
    {
        image: "/images/team1.jpg",
        department: "OPERATIONS & LAUNCH",
        name: "Marcus Vance",
        role: "Executive Operations Lead",
        text: "Focused on building reliable delivery operations and scalable logistics workflows.",
    },
    {
        image: "/images/team2.jpg",
        department: "TELEMETRY & AI",
        name: "Elena Rostova",
        role: "Logistics Technology Director",
        text: "Leads tracking infrastructure and technology-driven shipment visibility.",
    },
    {
        image: "/images/team3.jpg",
        department: "SPECIALTY FREIGHT",
        name: "Julian Alvarez",
        role: "Freight Operations Lead",
        text: "Specializes in commercial shipments, freight handling and specialized logistics.",
    },
    {
        image: "/images/team4.jpg",
        department: "CLIENT ESCALATION",
        name: "Sarah Jenkins",
        role: "Customer Experience Director",
        text: "Leads customer support and enterprise shipment coordination.",
    },
];

const certifications = [
    {
        icon: <Globe className="h-4 w-4" />,
        title: "ISO 9001:2015",
        text: "Quality Management",
    },
    {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "TSA Known Shipper",
        text: "Direct Commercial Air Cargo",
    },
    {
        icon: <LockKeyhole className="h-4 w-4" />,
        title: "SOC 2 Type II",
        text: "Audited Platform Operations",
    },
    {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "256-Bit SSL",
        text: "Encrypted Web Infrastructure",
    },
    {
        icon: <Zap className="h-4 w-4" />,
        title: "GDP Compliant",
        text: "Cold Chain Distribution",
    },
];

const About = () => {
    return (
        <div className="min-h-screen bg-[#faf8fc] pt-[120px] text-[#24151a]">

            <div className="border-b border-gray-200 bg-white px-5 py-2">
                <div className="mx-auto flex max-w-7xl items-center justify-between text-[9px] text-gray-500">
                    <p>Home › Company Overview › About Us</p>

                    <div className="hidden items-center gap-4 sm:flex">
                        <span className="text-green-600">
                            ● SYSTEM: ALL CORRIDORS NORMAL
                        </span>
                        <span className="text-[#680818]">
                            DISPATCHING ACROSS HIGHWAY CORE
                        </span>
                    </div>
                </div>
            </div>

            <section className="px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">

                        <div>
                            <span className="inline-flex rounded-full bg-[#ffe9ed] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#680818]">
                                About Trackly Logistics & Expedited Courier
                            </span>

                            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#3b1118] sm:text-5xl">
                                Architecting the Next Era of Precision
                                <span className="block">
                                    Logistics
                                </span>
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">
                                Founded on the principle of zero-discrepancy transit,
                                TRACKLY blends proprietary fleet telemetry, national
                                operational standards, and dedicated courier networks
                                to deliver reliable shipment visibility.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-[#680818] p-2 text-white">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[9px] font-bold uppercase text-gray-400">
                                        Operational Standard
                                    </p>

                                    <h3 className="mt-1 text-sm font-bold text-gray-900">
                                        Zero-Discrepancy Manifest
                                    </h3>
                                </div>
                            </div>

                            <p className="mt-4 text-xs leading-5 text-gray-500">
                                Every shipment is processed through structured
                                operational controls designed for reliable handling
                                and visibility.
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-[#202a43] p-4 text-white sm:grid-cols-4">

                        <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                            <p className="text-[9px] uppercase text-white/50">
                                Annual Volume
                            </p>
                            <p className="mt-1 text-xl font-bold">
                                2.4M+
                            </p>
                            <p className="text-[9px] text-white/60">
                                Packages Handled Annually
                            </p>
                        </div>

                        <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                            <p className="text-[9px] uppercase text-white/50">
                                Infrastructure
                            </p>
                            <p className="mt-1 text-xl font-bold">
                                50+
                            </p>
                            <p className="text-[9px] text-white/60">
                                Regional Sort Hubs
                            </p>
                        </div>

                        <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                            <p className="text-[9px] uppercase text-white/50">
                                Precision SLA
                            </p>
                            <p className="mt-1 text-xl font-bold text-[#ffb05d]">
                                99.94%
                            </p>
                            <p className="text-[9px] text-white/60">
                                On-Time Service Window
                            </p>
                        </div>

                        <div className="p-3">
                            <p className="text-[9px] uppercase text-white/50">
                                Network Throughput
                            </p>
                            <p className="mt-1 text-xl font-bold">
                                180+
                            </p>
                            <p className="text-[9px] text-white/60">
                                Dedicated Route Corridors
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">

                    <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#680818]">
                            The Ground Reality of Speed
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-[#17151b] sm:text-3xl">
                            Where Industrial Precision Meets
                            <span className="block">
                                Algorithmic Agility
                            </span>
                        </h2>

                        <p className="mt-4 text-xs leading-6 text-gray-500">
                            TRACKLY was engineered from the ground up to address
                            the systematic fragility in legacy carrier networks.
                            While others rely on fragmented contracts and manual
                            waypoints, our operation is designed around connected
                            visibility and structured workflows.
                        </p>

                        <p className="mt-3 text-xs leading-6 text-gray-500">
                            Today, our delivery network supports time-sensitive
                            shipments across multiple delivery environments while
                            maintaining a transparent operational process.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <p className="text-sm font-bold text-[#680818]">
                                    &lt; 45 Min
                                </p>
                                <p className="mt-1 text-xs font-semibold">
                                    Cross-Dock Dwell
                                </p>
                                <p className="mt-2 text-[10px] leading-4 text-gray-500">
                                    Rapid movement between regional sorting
                                    facilities.
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <p className="text-sm font-bold text-[#680818]">
                                    100% Bonded
                                </p>
                                <p className="mt-1 text-xs font-semibold">
                                    Secure Handover
                                </p>
                                <p className="mt-2 text-[10px] leading-4 text-gray-500">
                                    Structured chain-of-custody handling.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                            <img
                                src="/images/warehouse.jpg"
                                alt="Trackly logistics facility"
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-3">
                                <p className="text-[9px] font-bold text-[#680818]">
                                    ORD_CROSSDOCK_01
                                </p>
                                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                                    Central logistics sorting and shipment
                                    consolidation facility.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="overflow-hidden rounded-xl">
                                <div className="relative">
                                    <img
                                        src="/images/delivery.jpg"
                                        alt="Trackly delivery"
                                        className="h-32 w-full object-cover"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-[#680818]/90 p-3 text-white">
                                        <p className="text-xs font-bold">
                                            24/7 Ops Floor
                                        </p>
                                        <p className="mt-1 text-[9px]">
                                            Real-time monitoring and dispatch
                                            coordination.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <img
                                src="/images/courier.jpg"
                                alt="Trackly courier"
                                className="h-32 w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#f0f2ff] px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#680818]">
                                Operating Principles
                            </p>

                            <h2 className="mt-1 text-2xl font-bold">
                                The Three Pillars of the TRACKLY Standard
                            </h2>
                        </div>

                        <p className="max-w-md text-xs leading-5 text-gray-500">
                            Every policy, corridor investment and line of tracking
                            code is shaped by our commitment to uncompromising
                            industrial excellence.
                        </p>
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="rounded-xl bg-white p-5 shadow-sm"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0f2] text-[#680818]">
                                    {pillar.icon}
                                </div>

                                <p className="mt-5 text-[8px] font-bold uppercase text-gray-400">
                                    {pillar.label}
                                </p>

                                <h3 className="mt-1 text-sm font-bold">
                                    {pillar.title}
                                </h3>

                                <p className="mt-2 text-[10px] leading-5 text-gray-500">
                                    {pillar.text}
                                </p>

                                <div className="mt-5 rounded-lg bg-[#f7f7fc] px-3 py-2 text-[9px] text-gray-500">
                                    <Check className="mr-1 inline h-3 w-3 text-[#680818]" />
                                    {pillar.footer}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#680818]">
                        National Footprint
                    </p>

                    <h2 className="mt-1 text-2xl font-bold">
                        A Resilient Nationwide Infrastructure
                    </h2>

                    <p className="mt-2 max-w-3xl text-xs leading-5 text-gray-500">
                        Engineered for redundancy, fault-tolerance and extreme
                        throughput. Our physical grid mirrors the distributed
                        architecture of modern software networks.
                    </p>

                    <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between bg-white px-4 py-3">
                                <p className="text-[9px] font-bold">
                                    ● National Transit Grid
                                </p>

                                <p className="text-[8px] text-gray-400">
                                    ● Super-Hub ● Cross-Dock
                                </p>
                            </div>

                            <div className="relative h-72 overflow-hidden bg-[#e5eaf3]">
                                <img
                                    src="/images/logistics-map.jpg"
                                    alt="Trackly logistics network"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#680818] px-4 py-2 text-sm font-bold text-white shadow-lg">
                                    Chicago
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-gray-100">
                                <div className="p-3 text-center">
                                    <p className="text-sm font-bold text-[#680818]">
                                        50+ Hubs
                                    </p>
                                    <p className="text-[8px] text-gray-400">
                                        Cross-dock nodes
                                    </p>
                                </div>

                                <div className="border-x border-gray-100 p-3 text-center">
                                    <p className="text-sm font-bold text-[#680818]">
                                        120+ Metro
                                    </p>
                                    <p className="text-[8px] text-gray-400">
                                        Active delivery zones
                                    </p>
                                </div>

                                <div className="p-3 text-center">
                                    <p className="text-sm font-bold text-[#680818]">
                                        3,400+ Units
                                    </p>
                                    <p className="text-[8px] text-gray-400">
                                        Fleet capacity
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {infrastructure.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff0f2] text-[#680818]">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-[10px] leading-5 text-gray-500">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#f0f2ff] px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#680818]">
                                Operations & Strategy
                            </p>

                            <h2 className="mt-1 text-2xl font-bold">
                                Executive & Operations Leadership
                            </h2>
                        </div>

                        <p className="max-w-md text-xs leading-5 text-gray-500">
                            Decades of hands-on leadership, software architecture
                            and high-stakes freight execution.
                        </p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="overflow-hidden rounded-xl bg-white shadow-sm"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-52 w-full object-cover"
                                />

                                <div className="p-4">
                                    <p className="text-[8px] font-bold uppercase text-[#680818]">
                                        {member.department}
                                    </p>

                                    <h3 className="mt-1 text-sm font-bold">
                                        {member.name}
                                    </h3>

                                    <p className="text-[9px] font-semibold text-gray-400">
                                        {member.role}
                                    </p>

                                    <p className="mt-3 text-[10px] leading-5 text-gray-500">
                                        {member.text}
                                    </p>

                                    <div className="mt-5 border-t border-gray-100 pt-3 text-[8px] font-bold text-gray-400">
                                        TRACKLY OPERATIONS
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl text-center">

                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#680818]">
                        Regulatory Adherence
                    </p>

                    <h2 className="mt-1 text-2xl font-bold">
                        Validated Standards & Certifications
                    </h2>

                    <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-500">
                        Rigorous third-party audits ensure our operational,
                        data integrity and transportation protocols exceed
                        industry expectations.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {certifications.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl bg-white p-5 shadow-sm"
                            >
                                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f2] text-[#680818]">
                                    {item.icon}
                                </div>

                                <h3 className="mt-3 text-xs font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-[9px] text-gray-400">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="px-5 pb-12 sm:px-8 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-xl bg-[#680818] px-6 py-10 text-white shadow-lg sm:px-10 lg:flex-row lg:items-center lg:justify-between">

                    <div className="max-w-2xl">
                        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[8px] font-bold uppercase tracking-wider text-[#ffd5c8]">
                            Enterprise Freight & Courier Scale
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Ready to Transform Your Shipping
                            <span className="block">
                                & Logistics?
                            </span>
                        </h2>

                        <p className="mt-3 text-xs leading-5 text-white/70">
                            Experience the precision of zero-discrepancy
                            fulfillment. Connect directly with our logistics
                            team for custom shipping requirements and API
                            integrations.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                to="/shipment-request"
                                className="flex items-center gap-2 rounded-lg bg-[#ff9d35] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#f28b20]"
                            >
                                Request Custom Corporate Tariff
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                to="/services"
                                className="rounded-lg bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
                            >
                                Explore Standard Services
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <Package className="h-40 w-40 text-white/10" />
                    </div>

                </div>
            </section>

        </div>
    );
};

export default About;
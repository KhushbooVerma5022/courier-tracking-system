import {
    ArrowRight,
    Check,
    Globe,
    LockKeyhole,
    MapPin,
    Package,
    Route,
    ShieldCheck,
    Truck,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const pillars = [
    {
        icon: <Route className="h-5 w-5" />,
        label: "PILLAR 1",
        title: "Absolute Telemetry & Transparency",
        text: "Continuous GPS tracking, ambient temperature and humidity sensor arrays for cold-chain parcels, tilt monitors, and cryptographic digital proof-of-delivery captured at every threshold.",
        footer: "Sub-second shipment updates",
    },
    {
        icon: <Zap className="h-5 w-5" />,
        label: "PILLAR 2",
        title: "Speed Without Compromise",
        text: "Guaranteed 10:30 AM next-day express lines across major regional zones, combined with point-to-point same-day dedicated urban couriers dispatched via dynamic route recalculations..",
        footer: "Guaranteed morning commitments",
    },
    {
        icon: <ShieldCheck className="h-5 w-5" />,
        label: "PILLAR 3",
        title: "Enterprise Reliability & Care",
        text: "Bonded cargo protection with $2,500 standard inclusive liability, dedicated corporate linehaul account managers, and an around-the-clock human operations escalation desk.",
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
        text: "Fixed nightly trunk lines connecting 120+ metro economic centers without intermediate third-party breakbulks.",
    },
    {
        icon: <Globe className="h-4 w-4" />,
        title: "Low-Emission Last-Mile Fleet",
        text: "42% converted electric and ultra-efficient sprinter fleet utilizing dynamic traffic-aware waypoint micro-routing.",
    },
    {
        icon: <Route className="h-4 w-4" />,
        title: "Priority Air Cargo Integrations",
        text: "Direct tarmac cargo charters ensuring urgent medical, industrial, and next-day shipments cross coasts seamlessly overnight.",
    },
];

const certifications = [
    {
        icon: <Globe className="h-4 w-4" />,
        title: "ISO 9001:2015",
        text: "Quality Management System Certified",
    },
    {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "TSA Known Shipper",
        text: "Direct Commercial Air Cargo Clerance",
    },
    {
        icon: <LockKeyhole className="h-4 w-4" />,
        title: "SOC 2 Type II",
        text: "Audited Telematics & Dispatch Platform",
    },
    {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "256-Bit SSL",
        text: "Cryptographic Waybill & Manifest Ledger",
    },
    {
        icon: <Zap className="h-4 w-4" />,
        title: "GDP Compliant",
        text: "Cold Chain Good Distribution Practice",
    },
];

const About = () => {
    return (
        <div className="min-h-screen bg-[#faf8fc] pt-[120px] text-[#24151a]">

            <section className="px-5 py-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">

                        <div>
                            <span className="inline-flex rounded-full bg-[#ffe9ed] px-3 py-2 text-[12px] font-bold uppercase tracking-wider text-[#680818]">
                                About Trackly Logistics & Expedited Courier
                            </span>

                            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#680818] sm:text-4xl">
                                Architecting the Next Era of Precision Logistics

                            </h1>

                            <p className="mt-4 max-w-2xl text-md leading-6 text-gray-500">
                                Founded on the principle of zero-discrepancy transit,
                                TRACKLY blends proprietary fleet telemetry, national
                                operational standards, and dedicated courier networks
                                to deliver reliable shipment visibility.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-[#680818] p-3 text-white">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase text-gray-400">
                                        Operational Standard
                                    </p>

                                    <h3 className="text-md font-bold text-gray-900">
                                        Zero-Discrepancy Manifest
                                    </h3>
                                </div>
                            </div>

                            <p className="mt-3 text-[14px] leading-5 text-gray-500">
                                Every shipment is processed through structured
                                operational controls designed for reliable handling
                                and visibility.
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-[#202a43] p-4 text-white sm:grid-cols-4">

                        <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                            <p className="text-[12px] font-semibold uppercase text-[#ffe9ed]">
                                Annual Volume
                            </p>
                            <p className="text-3xl font-bold">
                                2.4M+
                            </p>
                            <p className="text-[12px] text-white/60">
                                Packages Handled Annually
                            </p>
                        </div>

                        <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                            <p className="text-[12px] font-semibold uppercase text-[#ffe9ed]">
                                Infrastructure
                            </p>
                            <p className="text-3xl font-bold">
                                50+
                            </p>
                            <p className="text-[12px] font-semibold text-white/60">
                                Regional Sort Hubs
                            </p>
                        </div>

                        <div className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                            <p className="text-[12px] font-semibold uppercase text-[#ffe9ed]">
                                Precision SLA
                            </p>
                            <p className="text-3xl font-bold text-[#ffb05d]">
                                99.94%
                            </p>
                            <p className="text-[12px] text-white/60">
                                On-Time Service Window
                            </p>
                        </div>

                        <div className="p-3">
                            <p className="text-[12px] font-semibold uppercase text-[#ffe9ed]">
                                Network Throughput
                            </p>
                            <p className="text-3xl font-bold">
                                180+
                            </p>
                            <p className="text-[12px] text-white/60">
                                Dedicated Route Corridors
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">

                    <div>
                        <p className="text-[12px] font-bold uppercase tracking-widest text-[#680818]">
                            The Ground Reality of Speed
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-[#17151b] sm:text-3xl">
                            Where Industrial Precision Meets
                            <span className="block">
                                Algorithmic Agility
                            </span>
                        </h2>

                        <p className="mt-4 text-md leading-6 text-maroon-400">
                            TRACKLY was engineered from the ground up to address
                            the systematic fragility in legacy carrier networks.
                            While others rely on fragmented contracts and manual
                            waypoints, our operation is designed around connected
                            visibility and structured workflows.
                        </p>

                        <p className="mt-3 text-md leading-6 text-maroon-400">
                            Today, our delivery network supports time-sensitive
                            shipments across multiple delivery environments while
                            maintaining a transparent operational process.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <p className="text-xl font-semibold text-[#9C5C07]">
                                    &lt; 45 Min
                                </p>
                                <p className="mt-1 text-lg font-semibold">
                                    Cross-Dock Dwell
                                </p>
                                <p className="mt-2 text-[13px] leading-4 text-gray-500">
                                    Packages route from intake bay to outgoing linehaul trailers in under 45 minutes.
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <p className="text-xl font-semibold text-[#9C5C07]">
                                    100% Bonded
                                </p>
                                <p className="mt-1 text-lg font-semibold">
                                    Secure Handover
                                </p>
                                <p className="mt-2 text-[13px] leading-4 text-gray-500">
                                    Biometric validation and chain-of-custody cryptographic seals on every high-value tote.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="overflow-hidden">
                            <img
                                src="/images/Aboutusimage2.png"
                                alt="Trackly logistics facility"
                                className="h-64 w-full rounded-xl object-cover shadow-sm"
                            />

                            <div className="h-30 mt-4 rounded-lg bg-white p-4 shadow-sm">
                                <p className="text-[16px] font-semibold text-[#680818]">
                                    ORD_CROSSDOCK_01
                                </p>

                                <p className="mt-1 text-[14px] leading-5 text-gray-500">
                                    Central Midwest Sortation Hub spanning 420,000 sq. ft. of
                                    automated continuous conveyors.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex h-32 flex-col justify-center rounded-xl bg-[#680818] p-4 text-white shadow-sm">
                                <p className="text-[16px] font-semibold">
                                    24/7 Ops Floor
                                </p>

                                <p className="mt-1 text-[14px] leading-5 text-white/70">
                                    Real-time monitoring and dispatch coordination.
                                </p>
                            </div>

                            <div className="mt-4">
                                <img
                                    src="/images/Aboutusimage1.png"
                                    alt="Trackly courier"
                                    className="h-64 w-full rounded-xl object-cover shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#f0f2ff] px-5 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                        <div>
                            <p className="text-[12px] font-bold uppercase tracking-widest text-[#680818]">
                                Operating Principles
                            </p>

                            <h2 className="mt-1 text-4xl font-semibold">
                                The Three Pillars of the TRACKLY Standard
                            </h2>
                        </div>

                        <p className="max-w-md text-md leading-5 text-gray-500">
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
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fff0f2] text-[#680818]">
                                    {pillar.icon}
                                </div>

                                <p className="mt-5 text-[11px] font-bold uppercase text-[#CC770A]">
                                    {pillar.label}
                                </p>

                                <h3 className="mt-1 text-xl font-semibold">
                                    {pillar.title}
                                </h3>

                                <p className="mt-2 text-[15px] leading-5 text-gray-500">
                                    {pillar.text}
                                </p>

                                <div className="mt-5 rounded-lg bg-[#f7f7fc] px-3 py-2 text-[12px] text-black">
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

                    <p className="text-[12px] font-bold uppercase tracking-widest text-[#CC770A]">
                        National Footprint
                    </p>

                    <h2 className="mt-1 text-3xl font-semibold text-[#680818] ">
                        A Resilient Nationwide Infrastructure
                    </h2>

                    <p className="mt-2 max-w-3xl text-md leading-5 text-gray-500">
                        Engineered for redundancy, fault-tolerance and extreme
                        throughput. Our physical grid mirrors the distributed
                        architecture of modern software networks.
                    </p>

                    <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between bg-white px-4 py-3">
                                <p className="text-[16px] font-semibold">
                                    ● National Transit Grid
                                </p>

                                <p className="text-[12px] text-gray-900 font-bold">
                                    ● Super-Hub ● Cross-Dock
                                </p>
                            </div>

                            <div className="relative h-72 overflow-hidden bg-[#e5eaf3]">
                                <img
                                    src="/images/AboutusMap.png"
                                    alt="Trackly logistics network"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-3 border-t border-gray-100">
                                <div className="p-2 my-3 ml-3 mr-1 text-center bg-[#f0f2ff]">
                                    <p className="text-lg font-semibold text-[#680818]">
                                        50+ Hubs
                                    </p>
                                    <p className="text-[12px] text-gray-700">
                                        Cross-dock nodes
                                    </p>
                                </div>

                                <div className="bg-[#f0f2ff] p-2 my-3 mx-1 text-center">
                                    <p className="text-lg font-semibold text-[#680818]">
                                        120+ Metro
                                    </p>
                                    <p className="text-[12px] text-gray-700">
                                        Active delivery zones
                                    </p>
                                </div>

                                <div className="p-2 my-3 mr-3 ml-1 text-center bg-[#f0f2ff]">
                                    <p className="text-lg font-semibold text-[#680818]">
                                        3,400+ Units
                                    </p>
                                    <p className="text-[12px] text-gray-700">
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
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#fff0f2] text-[#680818]">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-[14px] leading-5 text-gray-500">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <section className="px-5 py-8 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl text-center">

                    <p className="text-[14px] font-bold uppercase tracking-widest text-[#CC770A]">
                        Regulatory Adherence
                    </p>

                    <h2 className="mt-1 text-3xl font-semibold">
                        Validated Standards & Certifications
                    </h2>

                    <p className="mx-auto mt-2 max-w-2xl text-md leading-5 text-gray-700">
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
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0f2] text-[#680818]">
                                    {item.icon}
                                </div>

                                <h3 className="mt-3 text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-[13px] text-maroon-600">
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
                        <span className="inline-flex rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#ffd5c8]">
                            Enterprise Freight & Courier Scale
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Ready to Transform Your Shipping
                            <span className="block">
                                & Logistics?
                            </span>
                        </h2>

                        <p className="mt-3 text-md leading-5 text-white/70">
                            Experience the precision of zero-discrepancy
                            fulfillment. Connect directly with our logistics
                            team for custom shipping requirements and API
                            integrations.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                to="/shipment-request"
                                className="flex items-center gap-2 rounded-lg bg-[#ff9d35] px-5 py-3 text-md font-bold text-white transition hover:bg-[#f28b20]"
                            >
                                Request Custom Corporate Tariff
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                to="/services"
                                className="rounded-lg bg-white/10 px-5 py-3 text-md font-bold text-white transition hover:bg-white/20"
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

            <Footer />

        </div>
    );
};

export default About;
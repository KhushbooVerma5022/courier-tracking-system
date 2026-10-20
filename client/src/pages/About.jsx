import {
    ArrowRight,
    Check,
    Globe,
    LockKeyhole,
    MapPin,
    Package,
    Route,
    ShieldCheck,
    CheckCircle,
    Truck,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import IndiaNetworkMap from "../components/IndiaNetworkMap";

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

    const [aboutImage1, setAboutImage1] = useState("");
    const [aboutImage2, setAboutImage2] = useState("");


    useEffect(() => {
        const fetchAboutImages = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/v1/gallery"
                );

                if (!response.ok) {
                    return;
                }

                const data = await response.json();
                const galleryItems = data.galleryItems || [];

                const image1 = galleryItems.find(
                    (item) =>
                        item.category === "banner" &&
                        item.isActive &&
                        item.title.trim().toLowerCase() === "aboutusimage1"
                );

                const image2 = galleryItems.find(
                    (item) =>
                        item.category === "banner" &&
                        item.isActive &&
                        item.title.trim().toLowerCase() === "aboutusimage2"
                );

                if (image1) {
                    setAboutImage1(`http://localhost:5000${image1.image}`);
                }

                if (image2) {
                    setAboutImage2(`http://localhost:5000${image2.image}`);
                }
            } catch (error) {
                console.error("Error fetching About Us images:", error);
            }
        };

        fetchAboutImages();
    }, []);


    return (
        <div className="min-h-screen bg-[#faf8fc] pt-[80px] text-[#24151a]">


            <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-10 lg:px-12">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fff7f8] via-white to-[#ffe9ed]" />

                <div className="absolute -left-24 top-10 -z-10 h-64 w-64 rounded-full bg-[#680818]/10 blur-3xl" />

                <div className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />

                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#680818] sm:text-4xl lg:text-5xl">
                        Architecting the Next Era of{" "}
                        <span className="bg-gradient-to-r from-[#680818] via-[#a51c39] to-[#d45b72] bg-clip-text text-transparent">
                            Precision Logistics
                        </span>
                    </h1>

                    {/* <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        Founded on the principle of zero-discrepancy transit,
                        TRACKLY combines organized operations, shipment visibility,
                        and dedicated courier networks to help deliver a reliable
                        shipping experience from pickup to delivery.
                    </p> */}

                    <div className="group relative mx-auto mt-10 max-w-2xl cursor-default overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 text-left shadow-[0_15px_50px_rgba(104,8,24,0.10)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#680818]/20 hover:shadow-[0_25px_60px_rgba(104,8,24,0.18)] sm:p-8">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-rose-300/50" />

                        <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#680818] to-[#a51c39] text-white shadow-lg shadow-[#680818]/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                <ShieldCheck className="h-8 w-8" />
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a51c39]">
                                    Our Commitment
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
                                    Reliable Handling. Clear Visibility.
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Every shipment deserves careful handling and clear
                                    tracking information. Our focus is on making the
                                    delivery journey easier to follow and simpler to manage.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#680818] to-[#ffb05d] transition-all duration-500 group-hover:w-full" />
                    </div>

                    <div className="mt-8 items-center justify-center gap-4">
                        <a
                            href="/tracking"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#680818] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#680818]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#500612] hover:shadow-lg"
                        >
                            Track Your Shipment
                            <ArrowRight className="h-4 w-4" />
                        </a>

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
                                src={aboutImage2 || "/images/Aboutusimage2.png"}
                                alt="Trackly logistics facility"
                                className="h-64 w-full rounded-xl object-cover shadow-sm"
                            />


                            <div className="h-32 mt-4 rounded-lg bg-white p-4 shadow-sm">
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
                                    src={aboutImage1 || "/images/Aboutusimage1.png"}
                                    alt="Trackly courier"
                                    className="h-64 w-full rounded-xl object-cover shadow-sm"
                                />

                            </div>
                        </div>
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

                            <div className="relative isolate z-0 h-72 overflow-hidden bg-[#e5eaf3]">
                                <IndiaNetworkMap />
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
                <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-xl bg-[#680818] px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10 lg:grid-cols-[1.5fr_0.7fr]">

                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <span className="inline-flex rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#ffd5c8]">
                            Enterprise Freight & Courier Scale
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Ready to Transform Your Shipping
                            <span className="block">& Logistics?</span>
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
                            Experience the precision of zero-discrepancy
                            fulfillment. Connect directly with our logistics
                            team for custom shipping requirements and API
                            integrations.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                to="/shipment-request"
                                className="flex items-center gap-2 rounded-lg bg-[#ff9d35] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#f28b20]"
                            >
                                Request Custom Corporate Tariff
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                to="/services"
                                className="rounded-lg bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                            >
                                Explore Standard Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Illustration */}
                    <div className="relative hidden h-64 items-center justify-center lg:flex">
                        <div className="absolute h-52 w-52 rounded-full border border-white/15 bg-white/5" />
                        <div className="absolute h-40 w-40 rounded-full border border-white/20" />

                        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-xl">
                            <Package
                                className="h-24 w-24 text-[#ffd78c]"
                                strokeWidth={1.3}
                            />
                        </div>

                        <div className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#680818] shadow-lg">
                            <Truck className="h-8 w-8" />
                        </div>

                        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffd78c] text-[#680818] shadow-lg">
                            <MapPin className="h-6 w-6" />
                        </div>

                        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#680818] bg-emerald-400 text-white shadow-lg">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                    </div>

                </div>
            </section>

            <Footer />

        </div>
    );
};

export default About;
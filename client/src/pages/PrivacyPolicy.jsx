import { Link } from "react-router-dom";
import {
    Home,
    ChevronRight,
    ShieldCheck,
    Database,
    Package,
    LockKeyhole,
    UserCheck,
    Mail,
    FileText,
} from "lucide-react";

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            content:
                "When you use TRACKLY, you may provide information such as your name, email address, phone number, pickup address, delivery address, and shipment details. The information collected depends on the features you use.",
        },
        {
            icon: Package,
            title: "Shipment and Tracking Information",
            content:
                "We use shipment details and tracking numbers to help you view parcel status and delivery progress. Please keep your shipment information secure and share tracking details only with people who need them.",
        },
        {
            icon: UserCheck,
            title: "How We Use Your Information",
            content:
                "Your information may be used to manage shipment requests, provide tracking updates, respond to customer enquiries, maintain our services, and improve the website experience.",
        },
        {
            icon: LockKeyhole,
            title: "Data Security",
            content:
                "We aim to protect personal information through appropriate security measures. However, no online system or electronic storage method can be guaranteed to be completely secure.",
        },
        {
            icon: ShieldCheck,
            title: "Sharing of Information",
            content:
                "Personal information may be shared with relevant delivery partners or service providers when needed to provide a requested service, or when disclosure is required by applicable law.",
        },
        {
            icon: UserCheck,
            title: "Your Privacy Choices",
            content:
                "Depending on applicable law, you may be able to request access to, correction of, or deletion of your personal information. You can contact our team to raise a privacy-related request.",
        },
        {
            icon: Database,
            title: "Cookies and Website Data",
            content:
                "TRACKLY may use cookies or similar technologies if they are implemented in the website to support functionality, remember preferences, or understand website usage.",
        },
        {
            icon: FileText,
            title: "Updates to This Policy",
            content:
                "We may update this Privacy Policy when our services or data practices change. Any revised policy should be published on this page with its updated effective date.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#faf9f7] pt-[100px] text-[#24151a]">

            {/* Page Header */}

            <section className="border-b border-gray-200 bg-[#faf8f7] px-5 py-8 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl flex flex-col items-center text-center">

                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-7 flex items-center justify-center gap-2 text-sm text-gray-500"
                    >
                        <Link
                            to="/"
                            className="flex items-center gap-1 transition hover:text-[#680818]"
                        >
                            <Home size={15} />
                            Home
                        </Link>

                        <ChevronRight size={15} />

                        <span className="font-medium text-[#680818]">
                            Privacy Policy
                        </span>
                    </nav>

                    <div className="flex flex-col items-center gap-4">

                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b0717]">
                                Your Privacy Matters
                            </p>

                            <h1 className="mt-2 text-3xl font-bold leading-tight text-[#4f0714] sm:text-4xl lg:text-5xl">
                                Privacy Policy
                            </h1>
                        </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                        At TRACKLY, we understand the importance of protecting
                        your personal information. This page explains how your
                        information may be collected, used, and protected when
                        you use our courier and parcel tracking services.
                    </p>

                </div>
            </section>


            {/* Policy Content */}
            <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    {/* Introduction */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f2] text-[#680818] sm:flex">
                                <FileText size={22} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-[#4f0714] sm:text-2xl">
                                    Introduction
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                                    This Privacy Policy describes our approach to
                                    handling personal information through the TRACKLY
                                    website. The information we process depends on
                                    the services and features available in your
                                    version of the application.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {sections.map((section, index) => {
                            const Icon = section.icon;

                            return (
                                <article
                                    key={section.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#680818]/25 hover:shadow-md sm:p-7"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f2] text-[#680818]">
                                            <Icon size={21} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs font-bold tracking-widest text-[#6b0717]">
                                                {String(index + 1).padStart(2, "0")}
                                            </p>

                                            <h2 className="mt-1 text-lg font-bold leading-snug text-[#4f0714]">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-gray-600">
                                        {section.content}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#590715] to-[#8b2632] px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                            <div className="max-w-2xl">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                                    <Mail size={22} />
                                </div>

                                <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                                    Have Questions About Your Privacy?
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
                                    If you have questions about this policy or your
                                    personal information, our team is here to help.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#680818] transition hover:bg-rose-100"
                            >
                                Contact Us
                            </Link>

                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-8 flex justify-center">
                        <Link
                            to="/"
                            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#4f0714] transition hover:border-[#680818] hover:text-[#680818]"
                        >
                            Back to Home
                        </Link>
                    </div>

                    <p className="mt-8 text-center text-xs leading-6 text-gray-500">
                        This policy should be reviewed and updated to reflect
                        the actual information collected and processed by TRACKLY.
                    </p>

                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;

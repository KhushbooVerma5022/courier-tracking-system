import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    Radio,
    FileText,
    Zap,
    ShieldCheck,
    Headphones,
    Star,
    Package,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!formData.email || !formData.password) {
            setError("Email and password are required");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Login failed");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch (error) {
            setError("Unable to connect to the server");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7fb] text-[#26171a]">
            <Navbar />

            <main className="px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-24 lg:pt-32">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl lg:grid lg:grid-cols-[0.8fr_1.2fr]">

                    <section className="bg-gradient-to-br from-[#5b0018] via-[#72001e] to-[#8a1825] p-6 text-white sm:p-8 lg:p-10">

                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6b0717]">
                                <Package className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-wide">
                                    TRACKLY
                                </h1>

                                <p className="text-[8px] font-semibold tracking-[0.18em] text-[#f9c8bd]">
                                    SHIP. TRACK. DELIVER.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f9d5ca]">
                            <span className="h-2 w-2 rounded-full bg-[#f39b45]" />
                            Carrier & Client Gateway
                        </div>

                        <h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                            Access Your Dispatch & Tracking Portal
                        </h2>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
                            Unified command interface for precision cargo dispatch,
                            global multimodal route monitoring, and live waybill issuance.
                        </p>

                        <div className="mt-8 space-y-5">

                            <Feature
                                icon={<Radio />}
                                title="Real-time fleet telemetry"
                                text="Continuous GPS, ambient temperature, and vibration tracking on all high-priority freight."
                            />

                            <Feature
                                icon={<Zap />}
                                title="Fast-book shipment manifests"
                                text="Instant booking engine with calibrated automated carrier assignment in under 60 seconds."
                            />

                            <Feature
                                icon={<FileText />}
                                title="Consignment history & airway bills"
                                text="One-click audit trail downloads, certified customs documentation, and proof-of-delivery receipts."
                            />

                        </div>

                        <div className="mt-8 rounded-xl border border-white/10 bg-white/10 p-4 sm:p-5">

                            <div className="flex gap-1 text-[#f6bd38]">
                                <Star size={15} fill="currentColor" />
                                <Star size={15} fill="currentColor" />
                                <Star size={15} fill="currentColor" />
                                <Star size={15} fill="currentColor" />
                                <Star size={15} fill="currentColor" />
                            </div>

                            <p className="mt-3 text-sm italic leading-6 text-white/90">
                                "TRACKLY slashed our supply chain dispute turnaround by 64%.
                                The instant manifests and live tracking telemetry give our
                                ops complete certainty."
                            </p>

                            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                    <p className="text-sm font-bold">
                                        Julian Alvarez
                                    </p>

                                    <p className="text-xs text-white/60">
                                        VP Logistics, Apex Meridian Global
                                    </p>
                                </div>

                                <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80">
                                    Verified Enterprise
                                </span>
                            </div>

                        </div>
                    </section>

                    <section className="flex flex-col justify-between p-6 sm:p-8 lg:p-28">

                        <div className="mx-auto w-full max-w-xl">

                            <div className="flex items-center justify-between gap-4">
                                <p className="text-xs font-bold uppercase tracking-wide text-[#9a4b18]">
                                    Unified Authentication
                                </p>

                            </div>

                            <h2 className="mt-2 text-3xl font-bold text-[#111827] sm:text-4xl">
                                Welcome Back
                            </h2>

                            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                                Sign in to manage active shipments, generate waybills,
                                and view tracking telemetry.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                                <div>
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <label className="text-sm font-semibold text-gray-800">
                                            Email Address <span className="text-[#8b001c]">*</span>
                                        </label>

                                        <span className="hidden text-xs text-gray-500 sm:block">
                                            Corporate or personal ID
                                        </span>
                                    </div>

                                    <div className="flex h-12 items-center rounded-lg bg-[#eef0ff] px-4 transition focus-within:ring-2 focus-within:ring-[#680818]/20">
                                        <Mail className="h-5 w-5 shrink-0 text-gray-500" />

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email address"
                                            className="ml-3 h-full w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                                        Password <span className="text-[#8b001c]">*</span>
                                    </label>

                                    <div className="flex h-12 items-center rounded-lg bg-[#eef0ff] px-4 transition focus-within:ring-2 focus-within:ring-[#680818]/20">
                                        <LockKeyhole className="h-5 w-5 shrink-0 text-gray-500" />

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            className="ml-3 h-full w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="ml-3 shrink-0 text-gray-500 transition hover:text-[#680818]"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#500612] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                                >
                                    {loading ? "Signing In..." : "Sign In to Portal"}
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </form>
                            <div className="my-5 flex items-center gap-3">
                                <div className="h-px flex-1 bg-gray-200" />
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-bold text-[#680818] hover:underline"
                                >
                                    Register for TRACKLY
                                </Link>
                            </p>

                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-3 rounded-xl bg-[#eef0ff] px-4 py-4 text-center text-xs text-gray-500 sm:grid-cols-3">

                            <div className="flex items-center justify-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-[#8b5a18]" />
                                256-Bit SSL Encrypted
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-[#8b5a18]" />
                                ISO 27001 Certified Dispatch Security
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <Headphones className="h-4 w-4 text-[#39b9b0]" />
                                24/7 Operations Support
                            </div>

                        </div>

                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

const Feature = ({ icon, title, text }) => {
    return (
        <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ffd7cc]">
                {icon}
            </div>

            <div>
                <h3 className="text-base font-bold sm:text-lg">
                    {title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/65 sm:text-sm">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Login;
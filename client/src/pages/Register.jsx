import { useState } from "react";
import { Link } from "react-router-dom";
import {
    User,
    Mail,
    Phone,
    LockKeyhole,
    Eye,
    EyeOff,
    Package,
    BadgeDollarSign,
    FileText,
    Bell,
    BookOpen,
    CheckCircle,
    Truck,
    ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("REGISTER BUTTON CLICKED");
    console.log("FORM DATA:", formData);

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
    }

    try {
        setLoading(true);

        console.log("SENDING REQUEST...");

        const response = await fetch(
            "http://localhost:5000/api/v1/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        console.log("RESPONSE STATUS:", response.status);

        const data = await response.json();

        console.log("RESPONSE DATA:", data);

        if (!response.ok) {
            setError(data.message || "Registration failed");
            return;
        }

        setSuccess(data.message);

        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        });
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        setError("Unable to connect to the server");
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="min-h-screen bg-[#f8f7fb]">
            <Navbar />

            <main className="px-4 pb-14 pt-28 sm:px-6 lg:px-24 lg:pt-32">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl lg:grid lg:grid-cols-[0.8fr_1.2fr]">

                    <section className="bg-gradient-to-br from-[#5b0018] via-[#72001e] to-[#8a1825] p-6 text-white sm:p-8 lg:p-10">

                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6b0717]">
                                <Package className="h-5 w-5 text-white" />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    TRACKLY
                                </h2>

                                <p className="text-[9px] tracking-[0.2em] text-[#ffd7cc]">
                                    SHIP. TRACK. DELIVER.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 text-xs font-bold uppercase tracking-wide text-[#f7cdbf]">
                            Personal Shipping Gateway
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight">
                            Create Your TRACKLY Shipping Account
                        </h1>

                        <p className="mt-4 text-white/75">
                            Create your personal shipping account and manage your deliveries with TRACKLY.
                        </p>

                        <div className="mt-8 space-y-4">
                            <Feature
                                icon={<BadgeDollarSign />}
                                title="Affordable Shipping Rates"
                                text="Get reliable delivery options for your everyday shipments."
                            />

                            <Feature
                                icon={<FileText />}
                                title="Simple Shipment Booking"
                                text="Create and manage your shipments from one place."
                            />

                            <Feature
                                icon={<Bell />}
                                title="Live Tracking Updates"
                                text="Stay updated with your parcel delivery status."
                            />

                            <Feature
                                icon={<BookOpen />}
                                title="Easy Shipment Management"
                                text="View your shipment details and delivery history easily."
                            />
                        </div>

                        <div className="mt-8 rounded-xl bg-white/10 p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold">
                                        99.98%
                                    </p>

                                    <p className="text-sm text-white/70">
                                        On-Time Delivery
                                    </p>
                                </div>

                                <CheckCircle className="h-7 w-7 text-[#54e2c4]" />
                            </div>

                            <div className="mt-4 flex justify-between text-xs text-white/60">
                                <span>24/7 Support</span>
                                <span>Reliable Delivery</span>
                            </div>
                        </div>

                    </section>

                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-28">

                        <div className="flex items-center justify-between">
                            <p className="text-xs font-bold uppercase tracking-wide text-[#9a4b18]">
                                Create Account
                            </p>

                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="h-2 w-2 rounded-full bg-[#49c5b6]" />
                                Registration Ready
                            </div>
                        </div>

                        <h2 className="mt-3 text-3xl font-bold">
                            Get Started with TRACKLY
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Create your personal shipping account in under 2 minutes.
                        </p>

                        <div className="mt-6 space-y-4">

                            <Input
                                icon={<User />}
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<Mail />}
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<Phone />}
                                placeholder="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <div className="grid gap-4 md:grid-cols-2">

                                <PasswordInput
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    show={showPassword}
                                    setShow={setShowPassword}
                                />

                                <PasswordInput
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    show={showConfirm}
                                    setShow={setShowConfirm}
                                />

                            </div>

                        </div>

                        <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] py-4 font-bold text-white transition hover:bg-[#500612]">
                            Create My TRACKLY Account
                            <span className="text-[#f5a623]">→</span>
                        </button>

                        <p className="mt-4 text-center text-sm text-gray-500">
                            Already registered?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-[#680818] hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>

                        <div className="mt-8 grid gap-3 rounded-xl bg-[#eef0ff] p-4 text-xs text-gray-600 sm:grid-cols-3">

                            <div className="flex items-center justify-center gap-2">
                                <ShieldCheck size={15} />
                                Secure Account
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <ShieldCheck size={15} />
                                Protected Data
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <ShieldCheck size={15} />
                                256-Bit Encryption
                            </div>

                        </div>

                    </form>
                </div>

                <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-5 rounded-2xl bg-[#eef0ff] p-6 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="rounded-xl bg-white p-3">
                            <Truck className="text-[#680818]" />
                        </div>

                        <div>
                            <h3 className="font-bold">
                                Need Help With Your Shipment?
                            </h3>

                            <p className="text-sm text-gray-500">
                                Our support team is available to help with your delivery.
                            </p>
                        </div>

                    </div>

                    <Link
                        to="/contact"
                        className="rounded-lg bg-[#680818] px-5 py-3 text-center font-semibold text-white"
                    >
                        Contact Support
                    </Link>

                </div>
            </main>

            <Footer />
        </div>
    );
};

const Feature = ({ icon, title, text }) => {
    return (
        <div className="flex gap-3 rounded-xl bg-white/10 p-4">
            <div className="rounded-lg bg-[#f39b45] p-2">
                {icon}
            </div>

            <div>
                <h3 className="font-semibold">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                    {text}
                </p>
            </div>
        </div>
    );
};

const Input = ({ icon, placeholder, name, value, onChange }) => {
    return (
        <div className="flex items-center rounded-lg bg-[#eef0ff] px-4">
            <div className="text-gray-500">
                {icon}
            </div>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-gray-400"
            />
        </div>
    );
};

const PasswordInput = ({
    placeholder,
    name,
    value,
    onChange,
    show,
    setShow,
}) => {
    return (
        <div className="flex items-center rounded-lg bg-[#eef0ff] px-4">
            <LockKeyhole className="text-gray-500" />

            <input
                type={show ? "text" : "password"}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-gray-400"
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="text-gray-500 transition hover:text-[#680818]"
            >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    );
};

export default Register;
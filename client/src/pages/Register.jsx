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
} from "lucide-react";

import Navbar from "../components/Navbar";

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

        setError("");
        setSuccess("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

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

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Registration failed");
                return;
            }

            setSuccess(data.message || "Registration successful. Please sign in.");

            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            });
        } catch {
            setError("Unable to connect to the server");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#f8f7fb]">
            <Navbar />

            <main className="mt-[104px] flex min-h-[calc(100vh-104px)] items-center justify-center px-4 py-3 sm:px-6">
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:p-7">
                    <div className="mb-5 text-center">

                        <h1 className="mt-2 text-2xl font-bold text-gray-900">
                            Create Your TRACKLY Account
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Enter your details to get started.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <Input
                            icon={<User size={18} />}
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <Input
                            icon={<Mail size={18} />}
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <Input
                            icon={<Phone size={18} />}
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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

                        {error && (
                            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] py-3 font-semibold text-white transition hover:bg-[#500612] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                            {!loading && <span>→</span>}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already registered?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-[#680818] hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                    <p className="mt-3 text-center text-xs text-gray-400">
                        Your shipping account, managed by TRACKLY.
                    </p>
                </div>
            </main>
        </div>
    );
};

const Input = ({
    icon,
    type,
    placeholder,
    name,
    value,
    onChange,
}) => {
    return (
        <div className="flex items-center rounded-lg border border-gray-200 bg-[#f8f7fb] px-3 focus-within:border-[#680818]">
            <span className="text-gray-500">{icon}</span>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-400"
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
        <div className="flex min-w-0 items-center rounded-lg border border-gray-200 bg-[#f8f7fb] px-3 focus-within:border-[#680818]">
            <LockKeyhole size={18} className="shrink-0 text-gray-500" />

            <input
                type={show ? "text" : "password"}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                className="w-full min-w-0 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="shrink-0 text-gray-500 transition hover:text-[#680818]"
                aria-label={show ? "Hide password" : "Show password"}
            >
                {show ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
        </div>
    );
};

export default Register;
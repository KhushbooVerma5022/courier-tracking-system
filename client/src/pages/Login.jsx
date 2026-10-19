import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    Package,
} from "lucide-react";
import Navbar from "../components/Navbar";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [attemptsLeft, setAttemptsLeft] = useState(null);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    const navigate = useNavigate();

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
            setError("Email and password are required.");
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
                setError(data.message || "Login failed.");

                if (typeof data.attemptsLeft === "number") {
                    setAttemptsLeft(data.attemptsLeft);
                }

                if (data.locked) {
                    setRemainingSeconds(data.remainingSeconds || 0);
                } else {
                    setRemainingSeconds(0);
                }

                return;
            }

            setAttemptsLeft(null);
            setRemainingSeconds(0);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch (error) {
            setError("Unable to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#f8f7fb] text-[#26171a]">
            <Navbar />

            <main className="mt-[104px] flex min-h-[calc(100vh-104px)] items-center justify-center px-4 py-5 sm:px-6">
                <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">

                    <div className="text-center">

                        <h1 className="mt-2 text-3xl font-bold text-[#4f0714]">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Sign in to manage your shipments and track deliveries.
                        </p>

                    </div>

                    {error && (
                        <div className="mt-3 rounded-lg border border-red-100 bg-red-50 px-4 py-1 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                Email Address <span className="text-[#8b001c]">*</span>
                            </label>

                            <div className="flex h-12 items-center rounded-lg bg-[#eef0ff] px-4 transition focus-within:ring-2 focus-within:ring-[#680818]/20">
                                <Mail className="h-5 w-5 shrink-0 text-gray-500" />

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    required
                                    className="ml-3 h-full w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                Password <span className="text-[#8b001c]">*</span>
                            </label>

                            <div className="flex h-12 items-center rounded-lg bg-[#eef0ff] px-4 transition focus-within:ring-2 focus-within:ring-[#680818]/20">
                                <LockKeyhole className="h-5 w-5 shrink-0 text-gray-500" />

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="ml-3 h-full w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
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

                        {attemptsLeft !== null && attemptsLeft > 0 && (
                            <p className="mt-2 text-sm text-red-600">
                                You have {attemptsLeft} login attempts remaining.
                            </p>
                        )}

                        {attemptsLeft === 0 && remainingSeconds > 0 && (
                            <p className="mt-2 text-sm font-medium text-red-600">
                                Account temporarily locked. Try again in{" "}
                                {Math.ceil(remainingSeconds / 60)} minutes.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading || remainingSeconds > 0}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#500612] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Signing In..." : "Sign In to Trackly"}
                            <ArrowRight className="h-5 w-5" />
                        </button>

                    </form>

                    <div className="my-5 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-xs text-gray-400">NEW TO TRACKLY?</span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-bold text-[#680818] hover:underline"
                        >
                            Register Now
                        </Link>
                    </p>

                </section>
            </main>
        </div>
    );
};

export default Login;
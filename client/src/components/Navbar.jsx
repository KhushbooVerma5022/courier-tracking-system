
import { useState, useEffect } from "react";
import {
    NavLink,
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";
import {
    Menu,
    X,
    Package,
    LogOut,
} from "lucide-react";

const getAuthInfo = () => {
    const token = localStorage.getItem("token");
    let role = "";

    try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        role = user.role || "";
    } catch {
        role = "";
    }

    return { token, role };
};

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [auth, setAuth] = useState(getAuthInfo);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setAuth(getAuthInfo());
        setMenuOpen(false);
    }, [location.pathname]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setAuth({ token: null, role: "" });
        setMenuOpen(false);

        navigate("/");
    };

    const navClass = ({ isActive }) =>
        `text-md font-semibold transition ${isActive
            ? "text-[#6b0717]"
            : "text-gray-600 hover:text-[#6b0717]"
        }`;

    const mobileNavClass = ({ isActive }) =>
        `border-b border-gray-100 py-3 text-sm font-semibold transition ${isActive
            ? "text-[#6b0717]"
            : "text-gray-700 hover:text-[#6b0717]"
        }`;

    const isLoggedIn = Boolean(auth.token);
    const isCustomer = isLoggedIn && auth.role === "customer";
    const isAdmin = isLoggedIn && auth.role === "admin";

    return (
        <>
            <div className="fixed top-0 z-50 w-full overflow-hidden bg-[#132142] py-2 text-xs text-white sm:text-sm">
                <div className="flex w-max animate-[marquee_10s_linear_infinite]">
                    <div className="flex shrink-0 items-center gap-8 px-8">
                        <span> • Same-Day Dispatch Available</span>
                        <span> • Track Your Shipment Anytime</span>
                        <span> • Domestic & Express Delivery</span>
                        <span> • Customer Support Available 24/7</span>
                    </div>

                    <div className="flex shrink-0 items-center gap-8 px-8">
                        <span> • Same-Day Dispatch Available</span>
                        <span> • Track Your Shipment Anytime</span>
                        <span> • Domestic & Express Delivery</span>
                        <span> • Customer Support Available 24/7</span>
                    </div>
                </div>
            </div>

            <nav className="fixed top-8 z-50 w-full bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6b0717]">
                            <Package className="h-5 w-5 text-white" />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold tracking-wide text-[#132142]">
                                TRACK<span className="text-[#5d0715]">LY</span>
                            </h1>

                            <p className="text-[9px] font-bold tracking-widest text-gray-500">
                                SHIP. TRACK. DELIVER.
                            </p>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-7 lg:flex">
                        <NavLink to="/" end className={navClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={navClass}>
                            About Us
                        </NavLink>

                        <NavLink to="/shipment-request" className={navClass}>
                            Request Shipment
                        </NavLink>

                        <NavLink to="/services" className={navClass}>
                            Services
                        </NavLink>

                        <NavLink to="/tracking" className={navClass}>
                            Track Parcel
                        </NavLink>

                        {isCustomer && (
                            <NavLink to="/my-shipments" className={navClass}>
                                My Shipments
                            </NavLink>
                        )}

                        {isAdmin && (
                            <NavLink to="/admin/dashboard" className={navClass}>
                                Admin Dashboard
                            </NavLink>
                        )}
                    </div>

                    <div className="hidden items-center gap-4 lg:flex">
                        {!isLoggedIn ? (
                            <>
                                <NavLink to="/login" className={navClass}>
                                    Login
                                </NavLink>

                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        `rounded-full px-4 py-2 text-md font-semibold text-white transition ${isActive
                                            ? "bg-[#6b0717]"
                                            : "bg-[#680818] hover:bg-[#4f0612]"
                                        }`
                                    }
                                >
                                    Register
                                </NavLink>
                            </>
                        ) : (
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="inline-flex items-center gap-2 rounded-full bg-[#680818] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4f0612]"
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-2 lg:hidden">
                        {!isLoggedIn && (
                            <NavLink
                                to="/register"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `rounded-lg px-3 py-1.5 text-xs font-semibold text-white ${isActive
                                        ? "bg-[#6b0717]"
                                        : "bg-[#680818]"
                                    }`
                                }
                            >
                                Register
                            </NavLink>
                        )}

                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-[#6b0717]"
                        >
                            {menuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="border-t border-gray-100 bg-white px-4 py-3 shadow-md lg:hidden">
                        <div className="flex flex-col">
                            <NavLink
                                to="/"
                                end
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/services"
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to="/tracking"
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                Track Parcel
                            </NavLink>

                            {isCustomer && (
                                <NavLink
                                    to="/my-shipments"
                                    onClick={closeMenu}
                                    className={mobileNavClass}
                                >
                                    My Shipments
                                </NavLink>
                            )}

                            {isAdmin && (
                                <NavLink
                                    to="/admin/dashboard"
                                    onClick={closeMenu}
                                    className={mobileNavClass}
                                >
                                    Admin Dashboard
                                </NavLink>
                            )}

                            <NavLink
                                to="/shipment-request"
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                Request Shipment
                            </NavLink>

                            <NavLink
                                to="/about"
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                About Us
                            </NavLink>

                            {!isLoggedIn ? (
                                <NavLink
                                    to="/login"
                                    onClick={closeMenu}
                                    className={mobileNavClass}
                                >
                                    Login
                                </NavLink>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 border-b border-gray-100 py-3 text-left text-sm font-semibold text-[#680818] transition hover:text-[#4f0612]"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;

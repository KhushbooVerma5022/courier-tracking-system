import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Package } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navClass = ({ isActive }) =>
        `text-md font-semibold transition ${
            isActive
                ? "text-[#6b0717]"
                : "text-gray-600 hover:text-[#6b0717]"
        }`;

    const mobileNavClass = ({ isActive }) =>
        `border-b border-gray-100 py-3 text-sm font-semibold transition ${
            isActive
                ? "text-[#6b0717]"
                : "text-gray-700 hover:text-[#6b0717]"
        }`;

    return (
        <>
            <div className="fixed top-0 z-50 w-full bg-[#132142] px-4 py-2 text-xs text-white sm:px-6">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <p>
                        24/7 Priority Dispatch{" "}
                        <span className="text-[#E0854C]">
                            • 1-800-TRACKLY
                        </span>
                    </p>

                    <span className="hidden font-semibold text-[#FA6305] sm:block">
                        OPERATING 24/7
                    </span>
                </div>
            </div>

            <nav className="fixed top-8 z-50 w-full bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">

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

                        <NavLink
                            to="/"
                            end
                            className={navClass}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/services"
                            className={navClass}
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/track"
                            className={navClass}
                        >
                            Track Parcel
                        </NavLink>

                        <NavLink
                            to="/shipment-request"
                            className={navClass}
                        >
                            Request Shipment
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={navClass}
                        >
                            About Us
                        </NavLink>

                    </div>

                    <div className="hidden items-center gap-4 lg:flex">

                        <NavLink
                            to="/login"
                            className={navClass}
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `rounded-lg px-4 py-2 text-md font-semibold text-white transition ${
                                    isActive
                                        ? "bg-[#6b0717]"
                                        : "bg-[#680818] hover:bg-[#4f0612]"
                                }`
                            }
                        >
                            Register
                        </NavLink>

                    </div>

                    <div className="flex items-center gap-2 lg:hidden">

                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-1.5 text-xs font-semibold text-white ${
                                    isActive
                                        ? "bg-[#6b0717]"
                                        : "bg-[#680818]"
                                }`
                            }
                        >
                            Register
                        </NavLink>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
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
                                to="/track"
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                Track Parcel
                            </NavLink>

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

                            <NavLink
                                to="/login"
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                Login
                            </NavLink>

                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
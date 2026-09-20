import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Package } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

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

            <nav className="fixed top-7 z-50 w-full bg-white shadow-sm">
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
                            <h1 className="text-xl font-bold tracking-wide text-[#5d0715]">
                                TRACKLY
                            </h1>

                            <p className="text-[7px] font-semibold tracking-widest text-gray-500">
                                SHIP. TRACK. DELIVER.
                            </p>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-7 lg:flex">

                        <Link
                            to="/"
                            className="text-sm font-semibold text-[#6b0717]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/services"
                            className="text-sm text-gray-600 transition hover:text-[#6b0717]"
                        >
                            Services
                        </Link>

                        <Link
                            to="/track"
                            className="text-sm text-gray-600 transition hover:text-[#6b0717]"
                        >
                            Track Parcel
                        </Link>

                        <Link
                            to="/shipment-request"
                            className="text-sm text-gray-600 transition hover:text-[#6b0717]"
                        >
                            Request Shipment
                        </Link>

                        <Link
                            to="/about"
                            className="text-sm text-gray-600 transition hover:text-[#6b0717]"
                        >
                            About Us
                        </Link>

                    </div>

                    <div className="hidden items-center gap-4 lg:flex">

                        <Link
                            to="/login"
                            className="text-sm font-medium text-gray-700 transition hover:text-[#6b0717]"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-lg bg-[#680818] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4f0612]"
                        >
                            Register
                        </Link>

                    </div>

                    <div className="flex items-center gap-2 lg:hidden">

                        <Link
                            to="/register"
                            className="rounded-lg bg-[#680818] px-3 py-1.5 text-xs font-semibold text-white"
                        >
                            Register
                        </Link>

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

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="border-b border-gray-100 py-3 text-sm font-semibold text-[#6b0717]"
                            >
                                Home
                            </Link>

                            <Link
                                to="/services"
                                onClick={closeMenu}
                                className="border-b border-gray-100 py-3 text-sm text-gray-700"
                            >
                                Services
                            </Link>

                            <Link
                                to="/track"
                                onClick={closeMenu}
                                className="border-b border-gray-100 py-3 text-sm text-gray-700"
                            >
                                Track Parcel
                            </Link>

                            <Link
                                to="/shipment-request"
                                onClick={closeMenu}
                                className="border-b border-gray-100 py-3 text-sm text-gray-700"
                            >
                                Request Shipment
                            </Link>

                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className="border-b border-gray-100 py-3 text-sm text-gray-700"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="py-3 text-sm font-semibold text-[#6b0717]"
                            >
                                Login
                            </Link>

                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
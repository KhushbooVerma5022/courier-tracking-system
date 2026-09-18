import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Home, PackageSearch, User, Package } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 z-50 w-full bg-[#132142] px-6 py-3 text-sm text-white sm:px-10 lg:px-14">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <p>
                        24/7 Global Priority Dispatch{" "}
                        <span className="text-[#E0854C]">
                            • 1-800-TRACKLY
                        </span>
                    </p>

                    <div className="hidden items-center gap-7 sm:flex">
                        <span>Quick Shipment Hotline: +1 (800) 872-2559</span>

                        <span className="font-semibold text-[#FA6305]">
                            OPERATING 24/7
                        </span>
                    </div>
                </div>
            </div>

            <nav className="fixed top-10 z-50 w-full shadow-sm bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">

                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6b0717]">
                            <Package className="h-6 w-6 text-white" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold tracking-wide text-[#5d0715]">
                                TRACKLY
                            </h1>

                            <p className="text-[9px] font-semibold tracking-widest text-gray-500">
                                SHIP. TRACK. DELIVER.
                            </p>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-9 lg:flex">

                        <Link
                            to="/"
                            className="text-base font-semibold text-[#6b0717]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/services"
                            className="text-base text-gray-600 transition hover:text-[#6b0717]"
                        >
                            Services
                        </Link>

                        <Link
                            to="/track"
                            className="text-base text-gray-600 transition hover:text-[#6b0717]"
                        >
                            Track Parcel
                        </Link>

                        <Link
                            to="/shipment-request"
                            className="text-base text-gray-600 transition hover:text-[#6b0717]"
                        >
                            Request Shipment
                        </Link>

                        <Link
                            to="/about"
                            className="text-base text-gray-600 transition hover:text-[#6b0717]"
                        >
                            About Us
                        </Link>

                    </div>

                    <div className="flex items-center gap-5">

                        <Link
                            to="/login"
                            className="hidden text-base font-medium text-gray-700 transition hover:text-[#6b0717] sm:block"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-lg bg-[#680818] px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[#4f0612]"
                        >
                            Register
                        </Link>

                    </div>
                </div>
            </nav>

            <div className="fixed bottom-0 z-50 flex w-full border-t bg-white lg:hidden">

                <NavLink
                    to="/"
                    className="flex flex-1 flex-col items-center py-3 text-sm text-gray-600"
                >
                    <Home size={23} />
                    Home
                </NavLink>

                <NavLink
                    to="/track"
                    className="flex flex-1 flex-col items-center py-3 text-sm text-gray-600"
                >
                    <PackageSearch size={23} />
                    Track
                </NavLink>

                <NavLink
                    to="/login"
                    className="flex flex-1 flex-col items-center py-3 text-sm text-gray-600"
                >
                    <User size={23} />
                    Account
                </NavLink>

            </div>
        </>
    );
}

export default Navbar;
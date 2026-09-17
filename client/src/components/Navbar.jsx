import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Home, PackageSearch, User } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-[#3F000F] shadow-md">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

                    <Link to="/" className="flex flex-col">
                        <img
                            src="/images/logoss.png"
                            alt="Trackly"
                            className="h-20 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        <NavLink
                            to="/"
                            className="text-white hover:text-[#D98A98]"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/services"
                            className="text-white hover:text-[#D98A98]"
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/track"
                            className="text-white hover:text-[#D98A98]"
                        >
                            Track
                        </NavLink>

                        <NavLink
                            to="/about"
                            className="text-white hover:text-[#D98A98]"
                        >
                            About
                        </NavLink>
                    </div>

                    <div className="hidden items-center gap-3 lg:flex">
                        <Link
                            to="/login"
                            className="rounded-lg border border-[#D98A98] px-4 py-2 text-white hover:bg-[#560319]"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-lg bg-[#660000] px-4 py-2 text-white hover:bg-[#560319]"
                        >
                            Register
                        </Link>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white lg:hidden"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="bg-[#2F0909] px-5 pb-5 lg:hidden">
                        <div className="flex flex-col gap-2">
                            <NavLink
                                to="/services"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-white hover:bg-[#560319]"
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-white hover:bg-[#560319]"
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-white hover:bg-[#560319]"
                            >
                                Contact
                            </NavLink>

                            <NavLink
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-white hover:bg-[#560319]"
                            >
                                Login
                            </NavLink>

                            <NavLink
                                to="/register"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-white hover:bg-[#560319]"
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>

            <div className="fixed bottom-0 z-50 flex w-full border-t bg-white lg:hidden">
                <NavLink
                    to="/"
                    className="flex flex-1 flex-col items-center py-2 text-sm text-gray-600"
                >
                    <Home size={22} />
                    Home
                </NavLink>

                <NavLink
                    to="/track"
                    className="flex flex-1 flex-col items-center py-2 text-sm text-gray-600"
                >
                    <PackageSearch size={22} />
                    Track
                </NavLink>

                <NavLink
                    to="/login"
                    className="flex flex-1 flex-col items-center py-2 text-sm text-gray-600"
                >
                    <User size={22} />
                    Account
                </NavLink>
            </div>
        </>
    );
}

export default Navbar;
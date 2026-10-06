import {
    LayoutDashboard,
    Package,
    MapPin,
    Truck,
    Images,
    Users,
    UserCircle,
    LogOut,
    ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const menuSections = [
    {
        title: "MAIN",
        items: [
            {
                name: "Dashboard",
                path: "/admin/dashboard",
                icon: LayoutDashboard,
            },
        ],
    },
    {
        title: "SHIPMENT MANAGEMENT",
        items: [
            {
                name: "Shipments",
                path: "/admin/shipments",
                icon: Package,
            },
            {
                name: "Tracking Updates",
                path: "/admin/tracking",
                icon: MapPin,
            },
        ],
    },
    {
        title: "CONTENT MANAGEMENT",
        items: [
            {
                name: "Services",
                path: "/admin/services",
                icon: Truck,
            },
            {
                name: "Gallery / Content",
                path: "/admin/gallery",
                icon: Images,
            },
        ],
    },
    {
        title: "USER MANAGEMENT",
        items: [
            {
                name: "Users",
                path: "/admin/users",
                icon: Users,
            },
        ],
    },
];

function AdminLayout() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#f8f7fc]">

            <aside className="hidden h-screen w-64 shrink-0 flex-col bg-[#132142] text-white lg:flex">

                <div className="border-b border-white/10 px-5 py-5">
                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                            <Package className="h-5 w-5 text-[#132142]" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold tracking-wide">
                                TRACK<span className="text-[#E0854C]">LY</span>
                            </h1>

                            <p className="text-[10px] font-medium tracking-widest text-white/60">
                                ADMIN PANEL
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex-1 px-3 py-2">

                    {menuSections.map((section) => (
                        <div
                            key={section.title}
                            className="mb-6"
                        >
                            <p className="mb-2 px-3 text-[10px] font-bold tracking-wider text-white/40">
                                {section.title}
                            </p>

                            <div className="space-y-1">

                                {section.items.map((item) => {
                                    const Icon = item.icon;
                                    const active =
                                        location.pathname === item.path;

                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() =>
                                                navigate(item.path)
                                            }
                                            className={`group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition ${active
                                                    ? "bg-white text-[#132142]"
                                                    : "text-white/70 hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">

                                                <Icon
                                                    className={`h-5 w-5 ${active
                                                            ? "text-[#132142]"
                                                            : "text-white/60 group-hover:text-white"
                                                        }`}
                                                />

                                                <span className="text-sm font-semibold">
                                                    {item.name}
                                                </span>

                                            </div>

                                            {active && (
                                                <ChevronRight className="h-4 w-4" />
                                            )}

                                        </button>
                                    );
                                })}

                            </div>
                        </div>
                    ))}

                </div>

                <div className="border-t border-white/10 p-3">

                    <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                            <UserCircle className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">

                            <p className="truncate text-sm font-semibold">
                                Admin
                            </p>

                            <p className="truncate text-[11px] text-white/50">
                                Administrator
                            </p>

                        </div>

                        <button
                            onClick={() =>
                                setShowLogoutModal(true)
                            }
                            className="text-white/50 transition hover:text-white"
                        >
                            <LogOut className="h-5 w-5" />
                        </button>

                    </div>

                </div>

            </aside>

            <main className="min-w-0 flex-1 overflow-y-auto">
                <Outlet />
            </main>

            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100">
                                <LogOut className="h-5 w-5 text-red-600" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#4f0714]">
                                    Confirm Logout
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Are you sure you want to logout from the admin panel?
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                onClick={() =>
                                    setShowLogoutModal(false)
                                }
                                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleLogout}
                                className="rounded-lg bg-[#6b0717] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4f0714]"
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default AdminLayout;
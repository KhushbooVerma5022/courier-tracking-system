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
    Clock3,
    CircleCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menuSections = [
    {
        title: "MAIN",
        items: [
            { name: "Dashboard", icon: LayoutDashboard },
        ],
    },
    {
        title: "SHIPMENT MANAGEMENT",
        items: [
            { name: "Shipments", icon: Package },
            { name: "Tracking Updates", icon: MapPin },
        ],
    },
    {
        title: "CONTENT MANAGEMENT",
        items: [
            { name: "Services", icon: Truck },
            { name: "Gallery / Content", icon: Images },
        ],
    },
    {
        title: "USER MANAGEMENT",
        items: [
            { name: "Users", icon: Users },
        ],
    },
];

function AdminDashboard() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [stats, setStats] = useState({
        totalShipments: 0,
        pendingShipments: 0,
        deliveredShipments: 0,
        customerCount: 0,
    });

    const summaryCards = [
        {
            title: "Total Shipments",
            value: stats.totalShipments,
            text: "All shipments in system",
            icon: Package,
            iconBg: "bg-[#eef0ff]",
            iconColor: "text-[#680818]",
        },
        {
            title: "Pending Shipments",
            value: stats.pendingShipments,
            text: "Currently in progress",
            icon: Clock3,
            iconBg: "bg-[#fff1df]",
            iconColor: "text-[#8c421c]",
        },
        {
            title: "Delivered",
            value: stats.deliveredShipments,
            text: "Successfully delivered",
            icon: CircleCheck,
            iconBg: "bg-green-50",
            iconColor: "text-green-600",
        },
        {
            title: "Customers",
            value: stats.customerCount,
            text: "Registered customers",
            icon: Users,
            iconBg: "bg-[#e8f3ff]",
            iconColor: "text-[#245b8f]",
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const [shipmentResponse, customerResponse] = await Promise.all([
                    fetch("http://localhost:5000/api/v1/shipments", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }),

                    fetch("http://localhost:5000/api/v1/auth/customers/count", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }),
                ]);

                const shipmentData = await shipmentResponse.json();
                const customerData = await customerResponse.json();

                console.log("Shipments data:", shipmentData);
                console.log("Customer data:", customerData);

                if (!shipmentResponse.ok) {
                    console.error(
                        shipmentData.message || "Failed to fetch shipments"
                    );
                    return;
                }

                if (!customerResponse.ok) {
                    console.error(
                        customerData.message || "Failed to fetch customers"
                    );
                    return;
                }

                const shipments = shipmentData.shipments || [];

                const deliveredShipments = shipments.filter(
                    (shipment) => shipment.status === "Delivered"
                ).length;

                const pendingShipments = shipments.filter(
                    (shipment) =>
                        shipment.status === "Booked" ||
                        shipment.status === "Picked Up" ||
                        shipment.status === "In Transit" ||
                        shipment.status === "Out for Delivery"
                ).length;

                setStats({
                    totalShipments: shipments.length,
                    pendingShipments,
                    deliveredShipments,
                    customerCount: customerData.customerCount,
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        fetchDashboardData();
    }, [navigate]);

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
                        <div key={section.title} className="mb-6">

                            <p className="mb-2 px-3 text-[10px] font-bold tracking-wider text-white/40">
                                {section.title}
                            </p>

                            <div className="space-y-1">

                                {section.items.map((item) => {
                                    const Icon = item.icon;

                                    const pathMap = {
                                        Dashboard: "/admin/dashboard",
                                        Shipments: "/admin/shipments",
                                    };

                                    const itemPath = pathMap[item.name];

                                    const active = itemPath === location.pathname;

                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => {
                                                if (itemPath) {
                                                    navigate(itemPath);
                                                }
                                            }}
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
                            onClick={() => setShowLogoutModal(true)}
                            className="text-white/50 transition hover:text-white"
                        >
                            <LogOut className="h-5 w-5" />
                        </button>

                    </div>

                </div>

            </aside>

            <main className="min-w-0 flex-1 overflow-y-auto">

                <div className="border-b border-gray-200 bg-white px-5 py-4 sm:px-7">

                    <h2 className="text-2xl font-bold text-[#4f0714] sm:text-3xl">
                        Dashboard
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Overview of Trackly shipments and customer activity.
                    </p>

                </div>

                <div className="p-5 sm:p-7">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                            Overview
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-[#4f0714] sm:text-3xl">
                            Shipment Summary
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                            Monitor the current shipment and customer totals from one place.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        {summaryCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >

                                    <div className="flex items-start justify-between">

                                        <div>
                                            <p className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                                                {card.title}
                                            </p>

                                            <p className="mt-3 text-3xl font-bold text-[#4f0714]">
                                                {card.value}
                                            </p>
                                        </div>

                                        <div
                                            className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}
                                        >
                                            <Icon
                                                className={`h-5 w-5 ${card.iconColor}`}
                                            />
                                        </div>

                                    </div>

                                    <p className="mt-4 text-[13px] text-gray-500">
                                        {card.text}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                    <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef0ff]">
                                <LayoutDashboard className="h-5 w-5 text-[#680818]" />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-[#4f0714]">
                                    Dashboard Overview
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Detailed shipment management will be handled from the admin sections.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

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
                                onClick={() => setShowLogoutModal(false)}
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

export default AdminDashboard;
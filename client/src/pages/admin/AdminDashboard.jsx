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
                                    const active = item.name === "Dashboard";

                                    return (
                                        <button
                                            key={item.name}
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

                        <button className="text-white/50 transition hover:text-white">
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
                        Manage Trackly shipments and operations.
                    </p>
                </div>

                <div className="p-5 sm:p-7">
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
                        <LayoutDashboard className="mx-auto h-9 w-9 text-[#680818]" />

                        <h3 className="mt-3 text-xl font-bold text-[#4f0714]">
                            Admin Dashboard
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Dashboard statistics and shipment activity will be added here.
                        </p>
                    </div>
                </div>

            </main>

        </div>
    );
}

export default AdminDashboard;

import { useEffect, useMemo, useState } from "react";
import {
    Search,
    Users as UsersIcon,
    Mail,
    Phone,
    CalendarDays,
    RefreshCw,
} from "lucide-react";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchCustomers = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                throw new Error("Please log in as an admin to view customers.");
            }

            const response = await fetch(
                "http://localhost:5000/api/v1/auth/users",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to fetch customers."
                );
            }

            setCustomers(data.customers || []);
        } catch (error) {
            setError(error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const filteredCustomers = useMemo(() => {
        const searchText = search.trim().toLowerCase();

        return customers.filter((customer) => {
            return (
                customer.name?.toLowerCase().includes(searchText) ||
                customer.email?.toLowerCase().includes(searchText) ||
                customer.phone?.includes(search.trim())
            );
        });
    }, [customers, search]);

    const formatDate = (date) => {
        if (!date) return "—";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc] p-5 sm:p-8">
            <div className="mx-auto max-w-7xl">

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#CC770A]">
                            Customer Management
                        </p>

                        <h1 className="mt-2 text-3xl font-bold text-[#132142]">
                            Customers
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            View registered Trackly customers and their contact details.
                        </p>
                    </div>

                    <button
                        onClick={fetchCustomers}
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[#132142] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#680818] disabled:opacity-60 sm:self-auto"
                    >
                        <RefreshCw
                            className={`h-4 w-4 ${loading ? "animate-spin" : ""
                                }`}
                        />
                        Refresh
                    </button>
                </div>

                <div className="mt-7 max-w-sm rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Total Customers
                            </p>

                            <p className="mt-2 text-3xl font-bold text-[#132142]">
                                {customers.length}
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#fff0f2] p-3 text-[#680818]">
                            <UsersIcon className="h-6 w-6" />
                        </div>
                    </div>
                </div>

                <div className="mt-7 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

                    <div className="flex h-11 items-center gap-3 rounded-lg border border-gray-200 px-3 focus-within:border-[#680818]">
                        <Search className="h-5 w-5 shrink-0 text-gray-400" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, email or phone..."
                            className="w-full bg-transparent text-sm outline-none"
                        />
                    </div>

                    {error && (
                        <div className="mt-5 rounded-lg bg-red-50 p-4 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    {loading ? (
                        <div className="py-16 text-center text-sm text-gray-500">
                            Loading customers...
                        </div>
                    ) : !error && filteredCustomers.length === 0 ? (
                        <div className="py-16 text-center">
                            <UsersIcon className="mx-auto h-10 w-10 text-gray-300" />

                            <p className="mt-3 font-semibold text-gray-700">
                                No customers found
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                {search
                                    ? "Try a different search term."
                                    : "Registered customers will appear here."}
                            </p>
                        </div>
                    ) : !error ? (
                        <div className="mt-5 overflow-x-auto">
                            <table className="w-full min-w-[650px] text-left">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50">
                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                                            Customer
                                        </th>

                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                                            Contact
                                        </th>

                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                                            Joined
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredCustomers.map((customer) => (
                                        <tr
                                            key={customer._id}
                                            className="border-b border-gray-50 transition hover:bg-[#fff9fa]"
                                        >
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f2] font-bold text-[#680818]">
                                                        {customer.name
                                                            ?.charAt(0)
                                                            .toUpperCase() || "C"}
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-gray-800">
                                                            {customer.name || "—"}
                                                        </p>

                                                        <p className="mt-1 text-xs text-gray-400">
                                                            ID:{" "}
                                                            {customer._id
                                                                ?.slice(-6) || "—"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4">
                                                <p className="flex items-center gap-2 text-sm text-gray-700">
                                                    <Mail className="h-4 w-4 shrink-0 text-gray-400" />
                                                    {customer.email || "No email"}
                                                </p>

                                                <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                                                    <Phone className="h-4 w-4 shrink-0 text-gray-400" />
                                                    {customer.phone || "No phone"}
                                                </p>
                                            </td>

                                            <td className="px-4 py-4">
                                                <p className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-600">
                                                    <CalendarDays className="h-4 w-4 shrink-0 text-gray-400" />
                                                    {formatDate(customer.createdAt)}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <p className="mt-4 text-sm text-gray-500">
                                Showing {filteredCustomers.length} of{" "}
                                {customers.length} customers
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Customers;

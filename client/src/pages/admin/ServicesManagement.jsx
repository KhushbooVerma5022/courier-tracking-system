import { useEffect, useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    Package,
    Search,
    X,
    Power,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ServicesManagement() {
    const navigate = useNavigate();

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [showForm, setShowForm] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState({
        name: "",
        category: "",
        description: "",
        priceLabel: "Starting at",
        price: "",
        features: "",
    });

    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/v1/services/admin",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Unable to load services.");
                return;
            }

            setServices(data.services || []);
            setError("");
        } catch (error) {
            console.error("Error fetching services:", error);
            setError("Unable to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    const filteredServices = services.filter((service) => {
        const searchText = search.toLowerCase();

        return (
            service.name?.toLowerCase().includes(searchText) ||
            service.category?.toLowerCase().includes(searchText)
        );
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const openAddForm = () => {
        setEditingService(null);

        setForm({
            name: "",
            category: "",
            description: "",
            priceLabel: "Starting at",
            price: "",
            features: "",
        });

        setMessage("");
        setError("");
        setShowForm(true);
    };

    const openEditForm = (service) => {
        setEditingService(service);

        setForm({
            name: service.name || "",
            category: service.category || "",
            description: service.description || "",
            priceLabel: service.priceLabel || "Starting at",
            price: service.price || "",
            features: (service.features || []).join("\n"),
        });

        setMessage("");
        setError("");
        setShowForm(true);
    };

    const saveService = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        const serviceData = {
            name: form.name.trim(),
            category: form.category.trim(),
            description: form.description.trim(),
            priceLabel: form.priceLabel.trim(),
            price: form.price.trim(),
            features: form.features
                .split("\n")
                .map((feature) => feature.trim())
                .filter((feature) => feature !== ""),
        };

        setSaving(true);
        setError("");
        setMessage("");

        try {
            const url = editingService
                ? `http://localhost:5000/api/v1/services/${editingService._id}`
                : "http://localhost:5000/api/v1/services";

            const response = await fetch(url, {
                method: editingService ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(serviceData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Unable to save service.");
                return;
            }

            if (editingService) {
                setServices((currentServices) =>
                    currentServices.map((service) =>
                        service._id === editingService._id
                            ? data.service
                            : service
                    )
                );

                setMessage("Service updated successfully.");
            } else {
                setServices((currentServices) => [
                    data.service,
                    ...currentServices,
                ]);

                setMessage("Service added successfully.");
            }

            setShowForm(false);
            setEditingService(null);
            setError("");
        } catch (error) {
            console.error("Error saving service:", error);
            setError("Unable to connect to the server.");
        } finally {
            setSaving(false);
        }
    };

    const toggleServiceStatus = async (service) => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        setError("");
        setMessage("");

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/services/${service._id}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        isActive: !service.isActive,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Unable to update service status.");
                return;
            }

            setServices((currentServices) =>
                currentServices.map((item) =>
                    item._id === service._id ? data.service : item
                )
            );

            setMessage(
                data.service.isActive
                    ? "Service activated successfully."
                    : "Service deactivated successfully."
            );
        } catch (error) {
            console.error("Error updating service status:", error);
            setError("Unable to connect to the server.");
        }
    };

    const deleteService = async () => {
        const token = localStorage.getItem("token");

        if (!token || !deleteId) {
            return;
        }

        setError("");
        setMessage("");

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/services/${deleteId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Unable to delete service.");
                setDeleteId(null);
                return;
            }

            setServices((currentServices) =>
                currentServices.filter((service) => service._id !== deleteId)
            );

            setDeleteId(null);
            setMessage("Service deleted successfully.");
        } catch (error) {
            console.error("Error deleting service:", error);
            setError("Unable to connect to the server.");
            setDeleteId(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc]">

            <div className="border-b border-gray-200 bg-white px-5 py-5 sm:px-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h1 className="text-2xl font-bold text-[#4f0714] sm:text-3xl">
                            Services Management
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Add, edit and manage Trackly delivery services.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={openAddForm}
                        className="flex w-fit items-center justify-center gap-2 rounded-lg bg-[#680818] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4f0612]"
                    >
                        <Plus className="h-4 w-4" />
                        Add Service
                    </button>

                </div>
            </div>

            <div className="p-5 sm:p-7">

                <div className="grid gap-4 sm:grid-cols-2">

                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef0ff] text-[#680818]">
                                <Package className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                    Total Services
                                </p>

                                <p className="mt-1 text-2xl font-bold text-[#4f0714]">
                                    {services.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                <Power className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                    Active Services
                                </p>

                                <p className="mt-1 text-2xl font-bold text-[#4f0714]">
                                    {services.filter((service) => service.isActive).length}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {(message || error) && (
                    <div
                        className={`mt-5 rounded-lg p-4 text-sm font-semibold ${error
                            ? "bg-red-50 text-red-600"
                            : "bg-green-50 text-green-700"
                            }`}
                    >
                        {error || message}
                    </div>
                )}

                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by service name or category..."
                            className="w-full rounded-xl border border-gray-200 bg-[#f8f7fc] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#6b0717]"
                        />
                    </div>

                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {loading ? (
                        <div className="p-10 text-center">
                            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#eef0ff] border-t-[#680818]" />

                            <p className="mt-3 text-sm text-gray-500">
                                Loading services...
                            </p>
                        </div>
                    ) : filteredServices.length === 0 ? (
                        <div className="p-10 text-center">
                            <Package className="mx-auto h-10 w-10 text-gray-300" />

                            <h2 className="mt-3 text-lg font-bold text-[#4f0714]">
                                No Services Found
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Add a service or try another search.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] text-left">

                                <thead className="bg-[#f8f7fc]">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-gray-400">
                                            Service
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-gray-400">
                                            Category
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-gray-400">
                                            Price
                                        </th>

                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-gray-400">
                                            Status
                                        </th>

                                        <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-gray-400">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredServices.map((service) => (
                                        <tr
                                            key={service._id}
                                            className="border-b border-gray-100 last:border-0 hover:bg-[#faf9fb]"
                                        >
                                            <td className="max-w-sm px-5 py-4">
                                                <p className="text-sm font-bold text-[#4f0714]">
                                                    {service.name}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    {service.description}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4 text-sm text-gray-600">
                                                {service.category}
                                            </td>

                                            <td className="px-5 py-4">
                                                <p className="text-sm font-bold text-[#4f0714]">
                                                    {service.price}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-400">
                                                    {service.priceLabel}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-bold ${service.isActive
                                                        ? "bg-green-50 text-green-700"
                                                        : "bg-gray-100 text-gray-500"
                                                        }`}
                                                >
                                                    {service.isActive
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4">
                                                <div className="flex justify-end gap-2">

                                                    <button
                                                        type="button"
                                                        onClick={() => openEditForm(service)}
                                                        title="Edit service"
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef0ff] text-[#680818] transition hover:bg-[#e1e4ff]"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => toggleServiceStatus(service)}
                                                        title={
                                                            service.isActive
                                                                ? "Deactivate service"
                                                                : "Activate service"
                                                        }
                                                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${service.isActive
                                                            ? "bg-[#fff1df] text-[#8c421c] hover:bg-[#ffe6c7]"
                                                            : "bg-green-50 text-green-600 hover:bg-green-100"
                                                            }`}
                                                    >
                                                        <Power className="h-4 w-4" />
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => setDeleteId(service._id)}
                                                        title="Delete service"
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition hover:bg-red-100"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    )}

                </div>

            </div>

            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">

                    <form
                        onSubmit={saveService}
                        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wide text-[#680818]">
                                    {editingService ? "Update Service" : "New Service"}
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#4f0714]">
                                    {editingService ? "Edit Service" : "Add Service"}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-5 space-y-4">

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Service Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                    placeholder="Domestic Standard Delivery"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Category
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                    placeholder="Economy Ground"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Description
                                </label>

                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                    placeholder="Describe this delivery service"
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                        Price Label
                                    </label>

                                    <input
                                        type="text"
                                        name="priceLabel"
                                        value={form.priceLabel}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                        placeholder="Starting at"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                        Price
                                    </label>

                                    <input
                                        type="text"
                                        name="price"
                                        value={form.price}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                        placeholder="$8.50 / parcel"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Features
                                </label>

                                <textarea
                                    name="features"
                                    value={form.features}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#6b0717]"
                                    placeholder={"Doorstep pickup\nShipment tracking\nDelivery confirmation"}
                                />

                                <p className="mt-1 text-xs text-gray-400">
                                    Enter one feature per line.
                                </p>
                            </div>

                            {error && (
                                <p className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-600">
                                    {error}
                                </p>
                            )}

                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={saving}
                                className="rounded-lg bg-[#680818] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4f0612] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {saving
                                    ? "Saving..."
                                    : editingService
                                        ? "Save Changes"
                                        : "Add Service"}
                            </button>
                        </div>

                    </form>

                </div>
            )}

            {deleteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100">
                            <Trash2 className="h-5 w-5 text-red-600" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-[#4f0714]">
                            Delete Service?
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Are you sure you want to permanently delete this service?
                            This action cannot be undone.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setDeleteId(null)}
                                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={deleteService}
                                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                            >
                                Delete Service
                            </button>
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
}

export default ServicesManagement;
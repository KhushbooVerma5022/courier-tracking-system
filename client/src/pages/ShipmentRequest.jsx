import { useState } from "react";
import {
    CalendarDays,
    ChevronDown,
    Clock3,
    LockKeyhole,
    MapPin,
    Package,
    ShieldCheck,
    Truck,
    UserRound,
} from "lucide-react";
import Footer from "../components/Footer";

const RequestShipment = () => {
    const [service, setService] = useState("Express Next-Day");

    const [formData, setFormData] = useState({
        senderName: "",
        senderEmail: "",
        senderPhone: "",
        senderAddress: "",
        senderCity: "",
        senderState: "",
        senderZip: "",
        receiverName: "",
        receiverEmail: "",
        receiverPhone: "",
        receiverAddress: "",
        receiverCity: "",
        receiverState: "",
        receiverZip: "",
        packageType: "Standard Box (Carton Container)",
        weight: "",
        length: "",
        width: "",
        height: "",
        pickupDate: "",
        pickupWindow: "Morning 8–12 PM",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [trackingNumber, setTrackingNumber] = useState("");

    const resetForm = () => {
        setFormData({
            senderName: "",
            senderEmail: "",
            senderPhone: "",
            senderAddress: "",
            senderCity: "",
            senderState: "",
            senderZip: "",
            receiverName: "",
            receiverEmail: "",
            receiverPhone: "",
            receiverAddress: "",
            receiverCity: "",
            receiverState: "",
            receiverZip: "",
            packageType: "",
            weight: "",
            length: "",
            width: "",
            height: "",
            pickupDate: "",
            pickupWindow: "",
        });

        setService("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form Data:", formData);

        setError("");
        setSuccess("");
        setTrackingNumber("");

        const token = localStorage.getItem("token");

        if (!token) {
            setError("Please login before booking a shipment.");
            return;
        }

        const shipmentData = {
            sender: {
                name: formData.senderName,
                email: formData.senderEmail,
                phone: formData.senderPhone,
                address: formData.senderAddress,
                city: formData.senderCity,
                state: formData.senderState,
                zip: formData.senderZip,
            },
            receiver: {
                name: formData.receiverName,
                email: formData.receiverEmail,
                phone: formData.receiverPhone,
                address: formData.receiverAddress,
                city: formData.receiverCity,
                state: formData.receiverState,
                zip: formData.receiverZip,
            },
            parcel: {
                packageType: formData.packageType,
                weight: Number(formData.weight),
                length: Number(formData.length),
                width: Number(formData.width),
                height: Number(formData.height),
            },
            service,
            pickupDate: formData.pickupDate,
            pickupWindow: formData.pickupWindow,
        };

        console.log("Shipment Data:", shipmentData);
        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/v1/shipments",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(shipmentData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Unable to create shipment.");
                return;
            }

            setSuccess(data.message || "Shipment created successfully.");
            setTrackingNumber(data.shipment?.trackingNumber || "");
            resetForm();

        } catch (error) {
            setError("Unable to connect to the server. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7fc] pt-[120px] text-[#24151a]">

            <section className="px-5 py-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                        <div>
                            <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#680818]">
                                Enterprise & Domestic Logistics
                            </p>

                            <h1 className="mt-2 text-2xl font-bold text-[#4f0714] sm:text-3xl lg:text-4xl">
                                Request a New Shipment
                            </h1>

                            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-gray-500 sm:text-[15px]">
                                Fill in sender, recipient, and parcel details for
                                instant courier pickup and automated dispatch across
                                our high-performance freight network.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                            <div className="rounded-lg bg-[#fff0f2] p-2 text-[#680818]">
                                <ShieldCheck className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-[12px] font-bold uppercase text-gray-400">
                                    Transit Guarantee
                                </p>

                                <p className="text-[15px] font-bold text-gray-800">
                                    Precision On-Time SLA
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-7 rounded-xl bg-white p-3 shadow-sm sm:p-4">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                            <div className="flex items-center gap-3 rounded-lg bg-[#eef0ff] p-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#680818] text-white">
                                    1
                                </div>

                                <div>
                                    <p className="text-[12px] font-bold uppercase text-[#680818]">
                                        Step 1 (Active)
                                    </p>
                                    <p className="text-[15px] font-semibold">
                                        Sender & Receiver Details
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-lg bg-[#faf9fd] p-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eeeef8] text-gray-700">
                                    2
                                </div>

                                <div>
                                    <p className="text-[12px] font-bold uppercase text-gray-400">
                                        Step 2
                                    </p>
                                    <p className="text-[15px] font-semibold">
                                        Parcel Specifications
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-lg bg-[#faf9fd] p-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eeeef8] text-gray-700">
                                    3
                                </div>

                                <div>
                                    <p className="text-[12px] font-bold uppercase text-gray-400">
                                        Step 3
                                    </p>
                                    <p className="text-[15px] font-semibold">
                                        Review & Schedule
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8">

                        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

                            <div className="space-y-6">

                                <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="rounded-lg bg-[#680818] p-2 text-white">
                                                <UserRound className="h-4 w-4" />
                                            </div>

                                            <h2 className="text-xl font-bold sm:text-2xl">
                                                Section 1: Sender Information (Origin)
                                            </h2>
                                        </div>

                                        <span className="hidden text-[12px] font-bold uppercase text-[#680818] sm:block">
                                            Origin-Hub
                                        </span>
                                    </div>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                        <FormInput
                                            label="Full Name"
                                            required
                                            name="senderName"
                                            value={formData.senderName}
                                            onChange={handleChange}
                                            placeholder="Sarah Jenkins"
                                        />

                                        <FormInput
                                            label="Email Address"
                                            required
                                            type="email"
                                            name="senderEmail"
                                            value={formData.senderEmail}
                                            onChange={handleChange}
                                            placeholder="sarah@company.com"
                                        />

                                        <FormInput
                                            label="Phone Number"
                                            required
                                            name="senderPhone"
                                            value={formData.senderPhone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 234-5678"
                                        />

                                        <FormInput
                                            label="Street Address"
                                            required
                                            name="senderAddress"
                                            value={formData.senderAddress}
                                            onChange={handleChange}
                                            placeholder="742 Evergreen Terrace"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        <FormInput
                                            label="City"
                                            required
                                            name="senderCity"
                                            value={formData.senderCity}
                                            onChange={handleChange}
                                            placeholder="Seattle"
                                        />

                                        <FormInput
                                            label="State"
                                            required
                                            name="senderState"
                                            value={formData.senderState}
                                            onChange={handleChange}
                                            placeholder="WA"
                                        />

                                        <FormInput
                                            label="ZIP Code"
                                            required
                                            name="senderZip"
                                            value={formData.senderZip}
                                            onChange={handleChange}
                                            placeholder="98101"
                                        />
                                    </div>

                                </section>

                                <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="rounded-lg bg-[#e0854c] p-2 text-white">
                                                <MapPin className="h-4 w-4" />
                                            </div>

                                            <h2 className="text-xl font-bold sm:text-2xl">
                                                Section 2: Receiver Information (Destination)
                                            </h2>
                                        </div>

                                        <span className="hidden text-[12px] font-bold uppercase text-[#680818] sm:block">
                                            Dest-Gateway
                                        </span>
                                    </div>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                        <FormInput
                                            label="Recipient Full Name"
                                            required
                                            name="receiverName"
                                            value={formData.receiverName}
                                            onChange={handleChange}
                                            placeholder="Marcus Vance"
                                        />

                                        <FormInput
                                            label="Recipient Email Address"
                                            required
                                            type="email"
                                            name="receiverEmail"
                                            value={formData.receiverEmail}
                                            onChange={handleChange}
                                            placeholder="m.vance@techcorp.io"
                                        />

                                        <FormInput
                                            label="Recipient Phone Number"
                                            required
                                            name="receiverPhone"
                                            value={formData.receiverPhone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 876-5432"
                                        />

                                        <FormInput
                                            label="Delivery Street Address"
                                            required
                                            name="receiverAddress"
                                            value={formData.receiverAddress}
                                            onChange={handleChange}
                                            placeholder="100 Industrial Parkway, Suite 400"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        <FormInput
                                            label="City"
                                            required
                                            name="receiverCity"
                                            value={formData.receiverCity}
                                            onChange={handleChange}
                                            placeholder="Columbus"
                                        />

                                        <FormInput
                                            label="State"
                                            required
                                            name="receiverState"
                                            value={formData.receiverState}
                                            onChange={handleChange}
                                            placeholder="OH"
                                        />

                                        <FormInput
                                            label="ZIP Code"
                                            required
                                            name="receiverZip"
                                            value={formData.receiverZip}
                                            onChange={handleChange}
                                            placeholder="43215"
                                        />
                                    </div>

                                </section>

                                <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="rounded-lg bg-[#680818] p-2 text-white">
                                                <Package className="h-4 w-4" />
                                            </div>

                                            <h2 className="text-xl font-bold sm:text-2xl">
                                                Section 3: Parcel Details & Dimensions
                                            </h2>
                                        </div>

                                        <span className="rounded-full bg-[#eef0ff] px-3 py-1 text-[12px] font-bold text-[#680818]">
                                            STANDARD PARCEL
                                        </span>
                                    </div>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                        <div>
                                            <label className="mb-2 block text-[14px] font-semibold text-gray-600">
                                                Package Type
                                            </label>

                                            <div className="relative">
                                                <select
                                                    name="packageType"
                                                    value={formData.packageType}
                                                    onChange={handleChange}
                                                    className="w-full appearance-none rounded-lg bg-[#eef0ff] px-3 py-3 text-[15px] outline-none"
                                                >
                                                    <option>
                                                        Standard Box (Carton Container)
                                                    </option>
                                                    <option>
                                                        Envelope
                                                    </option>
                                                    <option>
                                                        Fragile Package
                                                    </option>
                                                    <option>
                                                        Pallet
                                                    </option>
                                                </select>

                                                <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>

                                        <FormInput
                                            label="Weight"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleChange}
                                            placeholder="4.2"
                                            suffix="KG"
                                        />

                                    </div>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                                        <FormInput
                                            label="Length (cm)"
                                            name="length"
                                            value={formData.length}
                                            onChange={handleChange}
                                            placeholder="38"
                                        />

                                        <FormInput
                                            label="Width (cm)"
                                            name="width"
                                            value={formData.width}
                                            onChange={handleChange}
                                            placeholder="28"
                                        />

                                        <FormInput
                                            label="Height (cm)"
                                            name="height"
                                            value={formData.height}
                                            onChange={handleChange}
                                            placeholder="16"
                                        />

                                    </div>

                                    <div className="mt-5 flex items-center gap-3 rounded-lg bg-[#eef0ff] p-3">
                                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                                            <img
                                                src="/images/Package.png"
                                                alt="Package"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[15px] font-bold">
                                                Automated Dimensioning Active
                                            </p>

                                            <p className="mt-1 text-[13px] leading-4 text-gray-500">
                                                High-speed optical scanners verify cargo
                                                cubic volume at the outbound terminal
                                                hub for seamless billing and zero
                                                hold-ups.
                                            </p>
                                        </div>
                                    </div>

                                </section>

                                <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="rounded-lg bg-[#e0854c] p-2 text-white">
                                                <Truck className="h-4 w-4" />
                                            </div>

                                            <h2 className="text-xl font-bold sm:text-2xl">
                                                Section 4: Service Level & Pickup Preferences
                                            </h2>
                                        </div>

                                        <span className="hidden text-[12px] font-bold uppercase text-[#680818] sm:block">
                                            Routing-Tier
                                        </span>
                                    </div>

                                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                                        <ServiceOption
                                            title="Standard"
                                            subtitle="2–3 Business Days"
                                            price="$14.50"
                                            selected={service === "Standard"}
                                            onClick={() => setService("Standard")}
                                        />

                                        <ServiceOption
                                            title="Express Next-Day"
                                            subtitle="Guaranteed by 12 PM"
                                            price="$29.00"
                                            selected={service === "Express Next-Day"}
                                            recommended
                                            onClick={() =>
                                                setService("Express Next-Day")
                                            }
                                        />

                                        <ServiceOption
                                            title="Same-Day Rush"
                                            subtitle="Select Metro Dispatch"
                                            price="$48.00"
                                            selected={service === "Same-Day Rush"}
                                            onClick={() =>
                                                setService("Same-Day Rush")
                                            }
                                        />

                                    </div>

                                    <div className="mt-5 grid gap-4 sm:grid-cols-2">

                                        <div>
                                            <label className="mb-2 block text-[14px] font-semibold text-gray-600">
                                                Preferred Pickup Date
                                            </label>

                                            <div className="flex items-center rounded-lg bg-[#eef0ff] px-3">
                                                <CalendarDays className="h-4 w-4 text-gray-400" />

                                                <input
                                                    type="date"
                                                    name="pickupDate"
                                                    value={formData.pickupDate}
                                                    onChange={handleChange}
                                                    className="w-full bg-transparent px-2 py-3 text-[15px] outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-[14px] font-semibold text-gray-600">
                                                Pickup Time Window
                                            </label>

                                            <div className="grid grid-cols-2 gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            pickupWindow:
                                                                "Morning 8–12 PM",
                                                        }))
                                                    }
                                                    className={`rounded-lg px-3 py-3 text-[13px] font-semibold ${formData.pickupWindow ===
                                                        "Morning 8–12 PM"
                                                        ? "bg-[#eef0ff] text-[#680818]"
                                                        : "border border-gray-200 bg-white text-gray-500"
                                                        }`}
                                                >
                                                    Morning 8–12 PM
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            pickupWindow:
                                                                "Afternoon 1–5 PM",
                                                        }))
                                                    }
                                                    className={`rounded-lg px-3 py-3 text-[13px] font-semibold ${formData.pickupWindow ===
                                                        "Afternoon 1–5 PM"
                                                        ? "bg-[#eef0ff] text-[#680818]"
                                                        : "border border-gray-200 bg-white text-gray-500"
                                                        }`}
                                                >
                                                    Afternoon 1–5 PM
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </section>

                            </div>

                            <aside className="xl:sticky xl:top-[140px] xl:self-start">

                                <div className="rounded-xl bg-white p-5 shadow-md">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Package className="h-4 w-4 text-[#680818]" />

                                            <h2 className="text-sm font-bold">
                                                Shipment Summary
                                            </h2>
                                        </div>

                                        <span className="rounded-full bg-[#d9f5ec] px-2 py-1 text-[9px] font-bold text-green-700">
                                            ESTIMATE LIVE
                                        </span>
                                    </div>

                                    <div className="mt-5 rounded-lg bg-[#eef0ff] p-4">

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[12px] uppercase text-gray-400">
                                                    Origin
                                                </p>

                                                <p className="mt-1 text-[15px] font-bold">
                                                    {formData.senderCity || "Seattle"}, {formData.senderState || "WA"}
                                                </p>

                                                <p className="text-[12px] text-gray-400">
                                                    Hub #98101
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[12px] uppercase text-gray-400">
                                                    Destination
                                                </p>

                                                <p className="mt-1 text-[15px] font-bold">
                                                    {formData.receiverCity || "Columbus"}, {formData.receiverState || "OH"}
                                                </p>

                                                <p className="text-[12px] text-gray-400">
                                                    Hub #43215
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center gap-2 border-t border-gray-200 pt-3 text-[13px] font-semibold text-[#680818]">
                                            <Clock3 className="h-3 w-3" />
                                            {service}
                                        </div>

                                    </div>

                                    <div className="mt-5 space-y-3">

                                        <SummaryRow
                                            label="Base courier rate"
                                            value={
                                                service === "Express Next-Day"
                                                    ? "$29.00"
                                                    : service === "Same-Day Rush"
                                                        ? "$48.00"
                                                        : "$14.50"
                                            }
                                        />

                                        <SummaryRow
                                            label="Weight surcharge (4.2kg)"
                                            value="$6.40"
                                        />

                                        <SummaryRow
                                            label="Value protection & insurance"
                                            value="$4.00"
                                        />

                                        <SummaryRow
                                            label="Signature confirmation"
                                            value="$2.50"
                                        />

                                    </div>

                                    <div className="mt-5 border-t-2 border-[#eef0ff] pt-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-bold">
                                                    Estimated Total
                                                </p>

                                                <p className="text-[12px] text-gray-400">
                                                    Taxes and card fees included
                                                </p>
                                            </div>

                                            <p className="text-2xl font-bold text-[#680818] sm:text-3xl">
                                                $41.90
                                            </p>
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-600">
                                            {error}
                                        </div>
                                    )}

                                    {success && (
                                        <div className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-[13px] font-semibold text-green-700">
                                            <p>{success}</p>
                                            {trackingNumber && (
                                                <p className="mt-1 text-[15px] font-bold text-[#680818]">
                                                    Tracking Number: {trackingNumber}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#680818] px-4 py-3 text-[15px] font-bold text-white transition hover:bg-[#500612] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <LockKeyhole className="h-4 w-4" />
                                        {loading ? "Booking Shipment..." : "Confirm & Book Shipment"}
                                    </button>

                                    <button
                                        type="button"
                                        className="mt-2 w-full rounded-lg bg-[#eef0ff] px-4 py-3 text-[14px] font-semibold text-gray-600"
                                    >
                                        Save as Draft
                                    </button>

                                    <div className="mt-4 flex gap-2 rounded-lg bg-[#f4f3fb] p-3">
                                        <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#680818]" />

                                        <p className="text-[13px] leading-5 text-gray-500">
                                            Ready to dispatch once confirmed.
                                            Pickup window locks instantly upon
                                            checkout.
                                        </p>
                                    </div>

                                </div>

                            </aside>

                        </div>

                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

const FormInput = ({
    label,
    required,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    suffix,
}) => {
    return (
        <div>
            <label className="mb-2 block text-[14px] font-semibold text-gray-600">
                {label}{" "}
                {required && (
                    <span className="text-[#680818]">*</span>
                )}
            </label>

            <div className="flex items-center rounded-lg bg-[#eef0ff] px-3">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-transparent px-1 py-3 text-[15px] text-gray-700 outline-none placeholder:text-gray-400"
                />

                {suffix && (
                    <span className="text-[12px] font-bold text-gray-400">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
};

const ServiceOption = ({
    title,
    subtitle,
    price,
    selected,
    recommended,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative rounded-lg p-4 text-left transition ${selected
                ? "bg-[#dfe4ff] ring-2 ring-[#680818]/20"
                : "bg-[#eef0ff]"
                }`}
        >
            {recommended && (
                <span className="absolute -top-2 right-3 rounded bg-[#e0854c] px-2 py-0.5 text-[11px] font-bold text-white">
                    RECOMMENDED
                </span>
            )}

            <div className="flex items-center gap-2">
                <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected
                        ? "border-[#680818] bg-[#680818]"
                        : "border-gray-400"
                        }`}
                >
                    {selected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                </span>

                <p className="text-[15px] font-semibold">
                    {title}
                </p>
            </div>

            <p className="mt-2 text-[13px] text-gray-500">
                {subtitle}
            </p>

            <p className="mt-1 text-xl font-bold text-[#680818]">
                {price}
            </p>
        </button>
    );
};

const SummaryRow = ({ label, value }) => {
    return (
        <div className="flex items-center justify-between gap-3 text-[13px]">
            <span className="text-gray-500">
                {label}
            </span>

            <span className="font-semibold text-gray-800">
                {value}
            </span>
        </div>
    );
};

export default RequestShipment;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock3,
  Headphones,
  MapPin,
  Package,
  ShieldCheck,
  Thermometer,
  Truck,
  Warehouse,
} from "lucide-react";
import Footer from "../components/Footer";

const logistics = [
  {
    image: "/images/temperature.png",
    icon: <Thermometer className="h-4 w-4" />,
    title: "Temperature-Controlled",
    subtitle: "8 Pharmaceutical Shipments",
    text: "Validated insulated shipping with continuous temperature monitoring for sensitive cargo.",
    link: "View Cold Chain Protocols",
  },
  {
    image: "/images/high-value.png",
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "High-Value Secure Escort",
    subtitle: "Tamper-verified 24/7",
    text: "Secure, fully monitored transportation for valuable and sensitive shipments.",
    link: "Security Specs",
  },
  {
    image: "/images/same-day.png",
    icon: <Truck className="h-4 w-4" />,
    title: "Same-Day Metro Courier",
    subtitle: "Point-to-point urban delivery",
    text: "Direct metropolitan delivery with dedicated local couriers and minute-level tracking.",
    link: "Urban Hub Coverage",
  },
  {
    image: "/images/warehouse.png",
    icon: <Warehouse className="h-4 w-4" />,
    title: "Warehousing & Cross-Dock",
    subtitle: "Dedicated facilities",
    text: "Temporary inventory storage, pallet handling and rapid cross-dock operations.",
    link: "Depot Directory",
  },
];

const matrixRows = [
  ["Transit Window", "2–3 Business Days", "Next Business Day", "Custom Schedule"],
  ["Doorstep Collection", "✓", "✓", "✓"],
  ["Included Daily Window", "✓", "✓", "Scheduled"],
  ["Priority Hour Window", "—", "✓", "Custom"],
  ["Dedicated Dock / Tailgate", "—", "—", "✓"],
  ["Live GPS Tracking", "Station Milestone Scans", "Real-Time Live Driver Map", "Continuous Fleet Telematics"],
  ["Max Weight per Item", "Up to 30kg", "Up to 50kg", "Unlimited / Palletized Cargo"],
  ["Included Insurance", "Up to $100 Included", "Up to $2,500 Included", "Custom Commercial Cargo Policy"],
  ["Proof of Delivery", "Photo Confirmation", "Digital Recipient Signature", "Multi-Part Signed Bill of Lading"],
  ["Customer Support", "Standard Help Center", "24/7 Priority Express Desk", "Dedicated Enterprise Key Account"],
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState("");

  const [origin, setOrigin] = useState("NY-10001");
  const [destination, setDestination] = useState("IL-60601");
  const [service, setService] = useState("");
  const [weight, setWeight] = useState("3");
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/services"
        );

        const data = await response.json();

        if (!response.ok) {
          setServicesError(
            data.message || "Unable to load services."
          );
          return;
        }

        const activeServices = data.services || [];

        setServices(activeServices);

        const expressService = activeServices.find((item) =>
          item.name?.toLowerCase().includes("express")
        );

        setService(
          expressService?.name || activeServices[0]?.name || ""
        );
      } catch (error) {
        console.error("Error fetching services:", error);
        setServicesError(
          "Unable to connect to the server. Please try again."
        );
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  const selectedService = services.find(
    (item) => item.name === service
  );

  const getButtonText = (item) => {
    const name = item.name?.toLowerCase() || "";
    const category = item.category?.toLowerCase() || "";

    if (
      name.includes("freight") ||
      name.includes("business") ||
      category.includes("enterprise")
    ) {
      return "Contact Logistics Specialist";
    }

    if (name.includes("express")) {
      return "Book Express";
    }

    if (
      name.includes("standard") ||
      name.includes("domestic")
    ) {
      return "Book Standard Delivery";
    }

    return "Book Service";
  };

  const handlePriceUpdate = () => {
    setShowPrice(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f7fc] pt-[90px] text-[#25161a]">

      <section className="border-b border-[#e8e4f0] bg-gradient-to-br from-[#f8f7ff] via-[#faf8fc] to-[#f6eef2] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[12px] font-bold uppercase tracking-wider text-[#6b0717] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6b0717]" />
                Enterprise & Domestic Courier Solutions
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#18151c] sm:text-4xl">
                Precision Delivery Services
                <span className="block text-[#680818]">
                  Tailored for Every Package
                </span>
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
                Whether you require guaranteed same-day urgent dispatch,
                nationwide express air corridors, or heavy LTL freight
                logistics, TRACKLY delivers with transparent operational
                control and zero-compromise security.
              </p>

            </div>

            <Link
              to="/shipment-request"
              className="flex w-fit items-center gap-2 rounded-lg bg-[#680818] px-5 py-3 text-lg font-bold text-white transition hover:bg-[#500612]"
            >
              Instant Rate Estimator
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm sm:gap-5">
              <div className="rounded-lg bg-[#fff0f2] p-2 text-[#680818]">
                <Clock3 className="h-7 w-7" />
              </div>

              <div>
                <p className="text-lg font-bold">99.4%</p>
                <p className="text-[10px] font-semibold uppercase text-[#680818]">
                  On-Time SLA Guarantee
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm sm:gap-5">
              <div className="rounded-lg bg-[#fff3ea] p-2 text-[#e0854c]">
                <Truck className="h-7 w-7" />
              </div>

              <div>
                <p className="text-lg font-bold">50+</p>
                <p className="text-[10px] font-semibold uppercase text-[#680818]">
                  Regional Sort Hubs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm sm:gap-5">
              <div className="rounded-lg bg-[#eafcf8] p-2 text-teal-600">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <div>
                <p className="text-lg font-bold">100%</p>
                <p className="text-[10px] font-semibold uppercase text-[#680818]">
                  Insured Safe Transit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm sm:gap-5">
              <div className="rounded-lg bg-[#f1efff] p-2 text-indigo-600">
                <Headphones className="h-7 w-7" />
              </div>

              <div>
                <p className="text-lg font-bold">24/7</p>
                <p className="text-[10px] font-semibold uppercase text-[#680818]">
                  Priority Hotline
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#C28608]">
              Core Logistics Portfolio
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Flexible Capacity for Any Consignment Scale
            </h2>

            <p className="mt-3 text-md leading-5 text-maroon-500">
              Select the precise dispatch tier that matches your transit
              deadline and handling protocol.
            </p>
          </div>

          {servicesLoading ? (
            <div className="mt-10 rounded-xl bg-white p-10 text-center shadow-sm">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#eef0ff] border-t-[#680818]" />

              <p className="mt-3 text-sm text-gray-500">
                Loading services...
              </p>
            </div>
          ) : servicesError ? (
            <div className="mt-10 rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="font-semibold text-red-600">
                {servicesError}
              </p>
            </div>
          ) : services.length === 0 ? (
            <div className="mt-10 rounded-xl bg-white p-8 text-center shadow-sm">
              <Package className="mx-auto h-9 w-9 text-[#680818]" />

              <h3 className="mt-3 text-lg font-bold text-gray-900">
                No Services Available
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Please check back later for available delivery services.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 lg:grid-cols-3">

              {services.map((item) => {
                const featured = item.name
                  ?.toLowerCase()
                  .includes("express");

                return (
                  <div
                    key={item._id}
                    className={`relative flex flex-col rounded-xl border bg-white p-5 shadow-sm ${featured
                        ? "border-[#680818] shadow-lg"
                        : "border-gray-200"
                      }`}
                  >
                    {featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#e0854c] px-4 py-1 text-[9px] font-bold uppercase text-white">
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-gray-200 bg-[#f6f6ff] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
                        {item.category || "Courier Service"}
                      </span>

                      <span className="text-[9px] font-bold text-green-600">
                        Available
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-[#680818]">
                      {item.name}
                    </h3>

                    <p className="mt-2 min-h-[60px] text-[14px] leading-5 text-gray-500">
                      {item.description}
                    </p>

                    <div
                      className={`mt-4 flex items-center gap-3 rounded-lg p-4 ${featured
                          ? "bg-[#680818] text-white"
                          : "bg-[#eef0ff]"
                        }`}
                    >
                      <p
                        className={`text-2xl font-bold ${featured
                            ? "text-white"
                            : "text-gray-900"
                          }`}
                      >
                        {item.price}
                      </p>

                      <p
                        className={`text-[12px] ${featured
                            ? "text-white/70"
                            : "text-gray-700"
                          }`}
                      >
                        {item.priceLabel || "Service pricing"}
                      </p>
                    </div>

                    <div className="mt-5 flex-1 space-y-2">
                      {(item.features || []).map(
                        (feature, index) => (
                          <div
                            key={`${item._id}-${index}`}
                            className="flex items-start gap-2 text-[14px] text-gray-600"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#680818]" />
                            <span>{feature}</span>
                          </div>
                        )
                      )}
                    </div>

                    <Link
                      to="/shipment-request"
                      className={`mt-6 flex items-center justify-center rounded-lg px-4 py-3 text-sm font-bold ${featured
                          ? "bg-[#680818] text-white"
                          : "bg-[#eef0ff] text-[#680818]"
                        }`}
                    >
                      {getButtonText(item)}
                    </Link>
                  </div>
                );
              })}

            </div>
          )}

        </div>
      </section>

      <section className="bg-[#f1f3ff] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#680818]">
                Engineered Delivery Corridors
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                Specialized Logistics Solutions
              </h2>
            </div>

            <p className="max-w-xl text-[14px] leading-5 text-gray-500">
              Tailored transit protocols built to navigate strict
              medical regulatory compliance, ultra-high security
              requirements and high-density urban geography.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logistics.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover"
                />

                <div className="p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0f2] text-[#680818]">
                    {item.icon}
                  </div>

                  <p className="text-[9px] font-bold uppercase text-[#680818]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-gray-500">
                    {item.text}
                  </p>

                  <button
                    type="button"
                    className="mt-4 text-sm font-bold text-[#680818]"
                  >
                    {item.link} →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="text-[14px] font-bold uppercase tracking-wider text-[#C28608]">
            Transparent Logistics Capabilities
          </p>

          <h2 className="mt-1 text-3xl font-bold text-gray-900">
            Tier-by-Tier Feature Matrix
          </h2>

          <p className="mt-2 text-[14px] text-gray-500">
            Examine service inclusions, insurance caps and courier
            protocols across each delivery tier.
          </p>

          <div className="mt-7 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[800px] text-left text-md">
              <thead className="bg-[#f0f1ff]">
                <tr>
                  <th className="px-5 py-4 font-bold">
                    Feature & Service Parameter
                  </th>

                  <th className="px-5 py-4 font-bold">
                    Domestic Standard
                  </th>

                  <th className="px-5 py-4 font-bold text-[#680818]">
                    Express Next-Day
                  </th>

                  <th className="px-5 py-4 font-bold">
                    Enterprise Freight
                  </th>
                </tr>
              </thead>

              <tbody>
                {matrixRows.map((row, index) => (
                  <tr
                    key={row[0]}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50/50"
                    }
                  >
                    <td className="px-5 py-3 font-medium text-gray-700">
                      {row[0]}
                    </td>

                    <td className="px-5 py-3 text-gray-500">
                      {row[1]}
                    </td>

                    <td className="px-5 py-3 text-gray-500">
                      {row[2]}
                    </td>

                    <td className="px-5 py-3 text-gray-500">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div>
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#C28608]">
              Instant Pricing Engine
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              Estimate Transit Costs in Seconds
            </h2>

            <p className="mt-1 text-md text-gray-500">
              Select a service to view its listed price before booking.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-5">

            <div>
              <label className="mb-2 block text-[14px] font-bold text-gray-500">
                Origin Postal / Hub
              </label>

              <div className="flex items-center rounded-lg bg-[#eef0ff] px-3">
                <MapPin className="h-4 w-4 shrink-0 text-gray-400" />

                <input
                  value={origin}
                  onChange={(e) => {
                    setOrigin(e.target.value);
                    setShowPrice(false);
                  }}
                  className="w-full bg-transparent px-2 py-3 text-xs outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-bold text-gray-500">
                Destination Postal / City
              </label>

              <div className="flex items-center rounded-lg bg-[#eef0ff] px-3">
                <MapPin className="h-4 w-4 shrink-0 text-gray-400" />

                <input
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowPrice(false);
                  }}
                  className="w-full bg-transparent px-2 py-3 text-xs outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-bold text-gray-500">
                Service Tier
              </label>

              <select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  setShowPrice(false);
                }}
                className="w-full rounded-lg bg-[#eef0ff] px-3 py-3 text-xs outline-none"
                disabled={servicesLoading || services.length === 0}
              >
                <option value="">Select a service</option>

                {services.map((item) => (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-bold text-gray-500">
                Parcel Weight (kg)
              </label>

              <input
                type="number"
                min="0.1"
                step="0.1"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  setShowPrice(false);
                }}
                className="w-full rounded-lg bg-[#eef0ff] px-3 py-3 text-xs outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handlePriceUpdate}
              disabled={!selectedService}
              className="self-end rounded-lg bg-[#680818] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#500612] disabled:cursor-not-allowed disabled:opacity-50"
            >
              View Price
            </button>

          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-lg bg-[#f6f6ff] p-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-[#680818]" />

              <div>
                <p className="text-[14px] text-gray-400">
                  Listed Service Price
                </p>

                {showPrice && selectedService ? (
                  <div className="mt-1">
                    <p className="text-lg font-bold text-[#680818]">
                      {selectedService.price}
                    </p>

                    <p className="text-xs text-gray-500">
                      {selectedService.priceLabel || "Service pricing"}
                    </p>
                  </div>
                ) : (
                  <p className="mt-1 text-sm text-gray-500">
                    Select a service and click View Price.
                  </p>
                )}
              </div>
            </div>

            <p className="text-[12px] text-gray-500">
              Contact the team for a shipment-specific quote.
            </p>

          </div>

        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl bg-[#680818] px-6 py-10 text-white shadow-lg sm:px-10 md:flex-row md:items-center md:justify-between">

          <div className="max-w-2xl">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#f3b29b]">
              Rapid Enterprise Onboarding
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Ready to Dispatch Your
              <span className="block">
                Consignment?
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-5 text-white/70">
              Create an immediate parcel waybill or connect with our
              corporate logistics team for custom freight agreements
              and API access.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/shipment-request"
                className="rounded-lg bg-white px-4 py-3 text-md font-bold text-[#680818]"
              >
                Request a Shipment Now
              </Link>

              <Link
                to="/tracking"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white"
              >
                Track Parcel
              </Link>
            </div>
          </div>

          <div className="hidden text-white/10 md:block">
            <Package className="h-36 w-36" />
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Services;
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Truck,
  User,
  Zap,
  Warehouse,
  CalendarDays,
  Headphones,
  CircleCheck,
  Star,
  Clock,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#26171a] pt-[120px]">

      <div className="w-full border-b border-[#eadfe0] bg-[#EAEEFB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1 sm:px-8 lg:px-12">

          <div className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm font-[Fredoka]">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span>Reliable delivery, simplified, Ship With Confidence</span>
          </div>

          <span className="hidden text-xs font-bold uppercase tracking-widest text-[#6b0717] md:block">
            SHIP • TRACK • DELIVER
          </span>

        </div>
      </div>

      <main>
        <section className="px-5 py-12 sm:px-8 lg:px-20 lg:py-10">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6c5ca] bg-[#F5CDC1] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#6b0717]">
                <Zap className="h-4 w-4" />
                Next-Gen Courier Logistics
              </div>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-tight text-[#6B1F3A] sm:text-5xl lg:text-5xl">
                Reliable, Ultra-Fast Courier & Parcel Delivery Nationwide
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Seamless end-to-end logistics with real-time tracking,
                scheduled doorstep pickups, and reliable delivery services
                for individuals and businesses.
              </p>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:p-5">

                <div className="mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-[#E0854C]" />

                  <h2 className="text-base font-bold sm:text-lg">
                    Track Your Parcel
                  </h2>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                  <div className="flex flex-1 items-center rounded-lg border border-gray-200 bg-[#EAEEFB] px-4">
                    <Search className="h-5 w-5 text-gray-400" />

                    <input
                      type="text"
                      placeholder="Enter your tracking number [e.g. TRK123456789]"
                      className="w-full rounded-xl bg-[#EAEEFB] px-4 py-3 text-base text-gray-600 outline-none placeholder:font-bold placeholder:tracking-wide placeholder:text-[#6b6470] sm:text-base"
                    />
                  </div>

                  <Link
                    to="/track"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#680818] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#500612] sm:text-base"
                  >
                    Track Parcel
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </div>

                <p className="mt-3 text-xs text-gray-400 sm:text-sm">
                  Tracking available 24/7
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                <SmallStat
                  icon={<CheckCircle />}
                  title="99.4%"
                  text="On-Time Arrival"
                />

                <SmallStat
                  icon={<ShieldCheck />}
                  title="100% Insured"
                  text="Full Value Guard"
                />

                <SmallStat
                  icon={<MapPin />}
                  title="Telemetry"
                  text="Live Fleet Radar"
                />

                <SmallStat
                  icon={<Package />}
                  title="2.4M+ Packages"
                  text="Safely Handed Off"
                />

              </div>
            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-3xl border border-[#eadde0] bg-[#EAEEFB] p-4s shadow-xl">

                <img
                  src="/images/maphomepage.png"
                  alt="Trackly parcel tracking"
                  className="h-[420px] w-full rounded-2xl object-cover sm:h-[500px]"
                />

              </div>

              <div className="absolute -bottom-1 -left-1 -right-1 rounded-2xl border border-gray-200 bg-white shadow-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f2]">
                      <Truck className="h-6 w-6 text-[#E0854C]" />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-[#4f0714] sm:text-xl">
                        Express Delivery
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Fast & Priority Service
                      </p>
                    </div>

                  </div>

                  <span className="shrink-0 rounded-full bg-[#fff2dd] px-4 py-2 text-xs font-bold text-[#9a5b00] sm:text-sm">
                    PRIORITY
                  </span>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">

                  <div>
                    <p className="text-xs text-gray-400">
                      Delivery Type
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#4f0714]">
                      Door-to-Door
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Service
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#4f0714]">
                      Priority Handling
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        <section className="border-y border-gray-200 bg-white px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                  Precision Dispatch Matrix
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#4f0714] sm:text-4xl">
                  Tailored Delivery Speeds for Every Package
                </h2>

                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                  Whether dispatching emergency legal documents across town or
                  coordinating palletized bulk freight nationwide, TRACKLY provides
                  structured courier tiers backed by zero-compromise guarantees.
                </p>
              </div>

              <Link
                to="/services"
                className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#6b0717]"
              >
                Explore All Logistics Solutions
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <ServiceCard
                icon={<Truck className="h-6 w-6" />}
                iconText="Economy Ground"
                title="Domestic Standard Delivery"
                description="Reliable, cost-effective door-to-door ground courier delivery across all 50 states within 2–3 business days."
                features={[
                  "Complimentary doorstep courier pickup",
                  "Photo Proof of Delivery with geolocation",
                  "Standard SMS milestone notifications",
                  "Up to $150 basic shipment protection",
                ]}
                priceLabel="Starting at"
                price="$8.50 / parcel"
                buttonText="Book Service"
              />

              <ServiceCard
                icon={<Zap className="h-6 w-6" />}
                iconText="Guaranteed 10:30 AM"
                title="Express Next-Day Delivery"
                description="Time-critical transit routed via dedicated regional air corridors with prioritized sorting and morning delivery guarantee."
                features={[
                  "Guaranteed arrival before 10:30 AM",
                  "Direct driver dispatch call confirmation",
                  "Real-time GPS turn-by-turn map access",
                  "Comprehensive insurance up to $1,000",
                ]}
                priceLabel="Starting at"
                price="$24.90 / parcel"
                buttonText="Book Express"
                featured
              />

              <ServiceCard
                icon={<Warehouse className="h-6 w-6" />}
                iconText="Enterprise & B2B"
                title="Business & Freight Logistics"
                description="Heavy LTL/FTL logistics, multi-location pallet transport, automated shipping APIs, and corporate invoice billing."
                features={[
                  "Volume pricing tiers (up to 40% discount)",
                  "Full REST API integration & Webhooks",
                  "Dedicated corporate route manager",
                  "Scheduled automated recurring pickups",
                ]}
                priceLabel="Contract Rates"
                price="Custom / volume"
                buttonText="Talk to Sales"
              />

            </div>

          </div>
        </section>

        <section className="bg-[#f4f1f3] px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                Simple Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#4f0714] sm:text-4xl">
                How TRACKLY Works
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-500">
                From booking to final delivery, every step is simple and
                easy to track.
              </p>

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <StepCard
                number="01"
                icon={<CalendarDays />}
                title="Book Shipment"
                description="Enter your shipment details and schedule a pickup."
              />

              <StepCard
                number="02"
                icon={<Package />}
                title="Pickup"
                description="Our courier partner collects your parcel from your location."
              />

              <StepCard
                number="03"
                icon={<MapPin />}
                title="Track Parcel"
                description="Follow your parcel through every stage of its journey."
              />

              <StepCard
                number="04"
                icon={<CircleCheck />}
                title="Delivered"
                description="Your parcel reaches the destination safely and securely."
              />

            </div>

          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/HomeAdvantage.jpg"
                alt="Trackly logistics"
                className="h-[320px] w-full object-cover sm:h-[400px]"
              />

              <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
                <div className="mt-4 flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm sm:mt-0">
                  <h6>100%</h6>
                  <p>Climate Monitored</p>
                  <p>Pharma & perishable cargo vaults maintained at exact tolerances.</p>
                </div>
                <div className="mt-4 flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm sm:mt-0">
                  <h6>256-Bit</h6>
                  <p>Chain of Custody</p>

                  <p>Cryptographic tracking events logged on immutable logistics ledger.</p>
                </div>
              </div>
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                Why TRACKLY
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#4f0714] sm:text-4xl">
                Built Around Reliability and Transparency
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600">
                TRACKLY makes courier delivery easier by keeping customers
                informed from pickup to final delivery.
              </p>

              <div className="mt-7 space-y-4">

                <Advantage
                  icon={<ShieldCheck />}
                  title="Secure Shipments"
                  text="Your shipment information is handled securely throughout the delivery process."
                />

                <Advantage
                  icon={<MapPin />}
                  title="Real-Time Tracking"
                  text="Track your parcel and view its current delivery status."
                />

                <Advantage
                  icon={<Headphones />}
                  title="Customer Support"
                  text="Get assistance whenever you need help with your shipment."
                />

              </div>

            </div>

          </div>
        </section>

        <section className="bg-[#f4f1f3] px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-10">

              <div className="grid gap-10 lg:grid-cols-2">

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                    Shipping Estimate
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#4f0714] sm:text-4xl">
                    Estimate Your Shipping Cost
                  </h2>

                  <p className="mt-4 text-base leading-7 text-gray-500">
                    Get an approximate shipping cost based on your pickup,
                    destination, weight and delivery priority.
                  </p>

                  <div className="mt-7 rounded-xl bg-[#fff3f4] p-5">

                    <div className="flex gap-3">

                      <Truck className="h-6 w-6 text-[#6b0717]" />

                      <div>
                        <h3 className="text-sm font-bold">
                          Business Shipping
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Regular business shipments can benefit from
                          flexible pricing and scheduled pickups.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-[#f8f7fa] p-5 sm:p-6">

                  <div className="grid gap-5 sm:grid-cols-2">

                    <InputField
                      label="From"
                      placeholder="Pickup city"
                    />

                    <InputField
                      label="To"
                      placeholder="Destination city"
                    />

                    <InputField
                      label="Package Weight"
                      placeholder="e.g. 5 kg"
                    />

                    <InputField
                      label="Delivery Type"
                      placeholder="Express"
                    />

                  </div>

                  <div className="mt-7 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="text-xs uppercase text-gray-400">
                        Estimated Cost
                      </p>

                      <p className="mt-1 text-3xl font-bold text-[#6b0717]">
                        ₹1,499
                      </p>
                    </div>

                    <Link
                      to="/shipment-request"
                      className="rounded-lg bg-[#680818] px-6 py-3 text-center text-sm font-semibold text-white"
                    >
                      Request Shipment
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                Customer Reviews
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#4f0714] sm:text-4xl">
                Trusted by Our Customers
              </h2>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <Testimonial
                name="Ananya Sharma"
                role="Online Business Owner"
                text="The tracking system makes it very easy to know where my shipments are."
              />

              <Testimonial
                name="Rahul Mehta"
                role="Business Customer"
                text="The shipment process is simple and the delivery updates are very clear."
              />

              <Testimonial
                name="Priya Verma"
                role="Regular Customer"
                text="I like how easy it is to book a shipment and track it from one place."
              />

            </div>

          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-[#590715] to-[#8b2632] px-6 py-12 text-white sm:px-10">

            <p className="text-xs font-bold uppercase tracking-widest text-[#ffd78c]">
              Ship With Confidence
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Ready to Send Your Parcel?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
              Schedule a pickup and let TRACKLY handle your shipment
              from collection to final delivery.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/shipment-request"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#680818]"
              >
                Request Shipment
              </Link>

              <Link
                to="/track"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white"
              >
                Track Parcel
              </Link>

            </div>

          </div>
        </section>

      </main>

      <footer className="bg-[#051136] px-5 py-12 text-white sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-lg bg-[#680818] p-2">
                <Package className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  TRACKLY
                </h3>

                <p className="text-[9px] tracking-widest text-gray-400">
                  SHIP. TRACK. DELIVER.
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Modern courier and parcel delivery services built around
              reliable tracking and simple shipment management.
            </p>

          </div>

          <FooterColumn
            title="Services"
            links={[
              "Domestic Delivery",
              "Express Delivery",
              "Business Delivery",
            ]}
          />

          <FooterColumn
            title="Customer"
            links={[
              "Track Parcel",
              "Request Shipment",
              "My Shipments",
              "Contact",
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              "About Us",
              "Privacy Policy",
              "Terms of Service",
              "Support",
            ]}
          />

        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 TRACKLY. All rights reserved.
          </p>

          <p>
            SHIP. TRACK. DELIVER.
          </p>

        </div>

      </footer>

    </div>
  );
};

const SmallStat = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-100 bg-white px-2 shadow-sm">

      <div className="shrink-0 text-[#E0854C]">
        {React.cloneElement(icon, { size: 21 })}
      </div>

      <div>
        <p className="text-sm font-semi-bold text-[#4f0714] sm:text-base">
          {title}
        </p>

        <p className="text-xs text-gray-400 sm:text-sm">
          {text}
        </p>
      </div>

    </div>
  );
};

const ServiceCard = ({
  icon,
  iconText,
  title,
  description,
  features,
  priceLabel,
  price,
  buttonText,
  featured,
}) => {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${featured
        ? "border-[#6b0717] shadow-md"
        : "border-gray-200"
        }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-[#6b0717] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0f2] text-[#E0854C]">
          {icon}
        </div>

        <p className="text-sm font-semibold text-[#6b0717]">
          {iconText}
        </p>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-[#4f0714]">
        {title}
      </h3>

      <p className="mt-3 min-h-[64px] text-sm leading-6 text-gray-500">
        {description}
      </p>

      <div className="mt-5 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span
              className={`mt-0.5 font-bold ${featured ? "text-[#E0854C]" : "text-[#6b0717]"
                }`}
            >
              →
            </span>

            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-7 overflow-hidden rounded-xl bg-[#EEF6FF]">
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-xs font-medium text-gray-500">
              {priceLabel}
            </p>

            <p className="mt-1 text-xl font-bold text-[#4f0714]">
              {price}
            </p>
          </div>

          <Link
            to="/shipment-request"
            className="shrink-0 rounded-lg bg-[#6b0717] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#4f0612]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0f2] text-[#6b0717]">
          {React.cloneElement(icon, { size: 20 })}
        </div>

        <span className="text-3xl font-bold text-gray-200">
          {number}
        </span>

      </div>

      <h3 className="mt-6 text-lg font-bold text-[#4f0714]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>

    </div>
  );
};

const Advantage = ({ icon, title, text }) => {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff0f2] text-[#6b0717]">
        {React.cloneElement(icon, { size: 19 })}
      </div>

      <div>
        <h3 className="text-base font-bold">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {text}
        </p>
      </div>

    </div>
  );
};

const InputField = ({ label, placeholder }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-600">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#6b0717]"
      />
    </div>
  );
};

const Testimonial = ({ name, role, text }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex gap-1 text-[#e1a000]">

        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />

      </div>

      <p className="mt-5 text-sm leading-6 text-gray-600">
        "{text}"
      </p>

      <div className="mt-6 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4dfe2]">
          <User className="h-5 w-5 text-[#6b0717]" />
        </div>

        <div>
          <p className="text-sm font-bold">
            {name}
          </p>

          <p className="text-xs text-gray-400">
            {role}
          </p>
        </div>

      </div>

    </div>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div>

      <h3 className="text-sm font-bold">
        {title}
      </h3>

      <div className="mt-4 space-y-3">

        {links.map((link, index) => (
          <p
            key={index}
            className="text-sm text-gray-400"
          >
            {link}
          </p>
        ))}

      </div>

    </div>
  );
};

export default Home;
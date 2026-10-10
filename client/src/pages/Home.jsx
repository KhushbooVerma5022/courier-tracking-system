import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import {
  CheckCircle,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
  User,
  Zap,
  Warehouse,
  CalendarDays,
  Headphones,
  CircleCheck,
  Star,
  Thermometer,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#26171a] pt-[100px]">

      <main>
        <section className="relative overflow-hidden bg-[#faf8f7] lg:min-h-[calc(100vh-96px)]">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 hidden h-full w-full object-cover lg:block"
          >
            <source src="/images/trackly-hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 hidden lg:block" />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pb-8 pt-8 sm:px-8 lg:min-h-[calc(100vh-96px)] lg:justify-between lg:px-10 lg:pb-8 lg:pt-6">

            <div className="flex flex-1 items-center">

              <div className="max-w-2xl">

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#680818] sm:text-base">
                  Fast • Safe • Nationwide
                </p>

                <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#24151a] sm:text-5xl lg:text-6xl">
                  Reliable, Ultra-Fast Courier & Parcel
                  <span className="text-[#680818]"> Delivery</span>
                  <span className="text-[#911010]"> Nationwide</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                  Seamless end-to-end logistics with real-time tracking, scheduled
                  doorstep pickups, and strictly guaranteed arrival windows for
                  individual senders and high-volume commercial enterprises.
                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

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

        </section>

        <section className="border-y border-gray-200 bg-white px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">

              <p className="text-xs font-bold uppercase tracking-widest text-[#6b0717]">
                Precision Dispatch Matrix
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#4f0714] sm:text-4xl">
                Tailored Delivery Speeds for Every Package
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-gray-500">
                Whether dispatching emergency legal documents across town or
                coordinating palletized bulk freight nationwide, TRACKLY provides
                structured courier tiers backed by zero-compromise guarantees.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-3 md:auto-rows-fr">

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

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-2">

              <div className="lg:max-w-lg">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b0717]">
                  Operational Simplicity
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#4f0714] sm:text-4xl lg:text-5xl">
                  How TRACKLY Delivers in 4 Seamless Steps
                </h2>

                <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
                  From parcel creation to the recipient's signature, our
                  computerized routing engine automates every micro-stage.
                </p>

                <div className="mt-7 h-1 w-16 rounded-full bg-[#E0854C]" />

                <p className="mt-6 text-sm leading-6 text-gray-500">
                  Simple booking, reliable pickup, real-time movement and
                  secure delivery — all connected in one smooth workflow.
                </p>

              </div>

              <div className="relative">

                <div className="absolute -left-4 top-1/2 hidden h-[70%] w-px -translate-y-1/2 bg-[#d9c8cd] lg:block" />

                <div className="absolute left-1/2 top-1/2 hidden h-px w-[82%] -translate-x-1/2 -translate-y-1/2 bg-[#d9c8cd] lg:block" />

                <div className="grid gap-5 sm:grid-cols-2">

                  <StepCard
                    number="01"
                    icon={<CalendarDays />}
                    title="Book & Schedule"
                    description="Enter sender & recipient details in under 2 minutes. Choose your pickup slot and speed preference with automated instant waybill creation."
                  />

                  <StepCard
                    number="02"
                    icon={<Package />}
                    title="Doorstep Pickup"
                    description="Our uniformed field courier arrives at your location with mobile scales, scans the parcel barcode, and provides physical custody receipt immediately."
                  />

                  <StepCard
                    number="03"
                    icon={<MapPin />}
                    title="Real-Time Transit"
                    description="Watch your parcel travel in real time. Dynamic radar telemetry, airport transfers, sorting scans, and ETA updates streamed directly to your phone."
                  />

                  <StepCard
                    number="04"
                    icon={<CircleCheck />}
                    title="Secure Hand-Off"
                    description="Package delivered safely to recipient's hands or secured locker with digital e-signature capture, timestamp stamp, and instant photo confirmation."
                  />

                </div>

              </div>

            </div>

          </div>
        </section>

        <section className="bg-white px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <p className="mb-8 text-center text-md font-bold uppercase tracking-widest text-[#6b0717]">
              Why TRACKLY
            </p>

            <div className="grid items-stretch gap-10 lg:grid-cols-2">

              <div className="flex h-full flex-col overflow-hidden rounded-2xl">

                <div className="relative">
                  <img
                    src="/images/HomeAdvantage.jpg"
                    alt="Trackly logistics"
                    className="h-[280px] w-full object-cover sm:h-[300px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="absolute bottom-5 left-5 max-w-md sm:bottom-7 sm:left-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F9C8BD]">
                      Automated Sorting Technology
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                      22 National Regional Hubs
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-200 sm:text-sm">
                      Cross-dock sorting completed in under 45 minutes per shipment batch.
                    </p>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-4 pt-4 sm:grid-cols-2">

                  <div className="flex min-h-[120px] items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e9]">
                      <Thermometer className="h-5 w-5 text-[#E0854C]" />
                    </div>

                    <div>
                      <h6 className="text-lg font-bold text-[#4f0714]">
                        100%
                      </h6>

                      <p className="mt-0.5 text-sm font-semibold text-[#4f0714]">
                        Climate Monitored
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Pharma & perishable cargo vaults maintained at exact tolerances.
                      </p>
                    </div>
                  </div>

                  <div className="flex min-h-[120px] items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e9]">
                      <ShieldCheck className="h-5 w-5 text-[#E0854C]" />
                    </div>

                    <div>
                      <h6 className="text-lg font-bold text-[#4f0714]">
                        256-Bit
                      </h6>

                      <p className="mt-0.5 text-sm font-semibold text-[#4f0714]">
                        Chain of Custody
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Cryptographic tracking events logged on immutable logistics ledger.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex h-full flex-col justify-center">

                <h2 className="text-3xl font-bold leading-tight text-[#4f0714] sm:text-4xl">
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

          </div>
        </section>

        <section className="bg-[#f4f1f3] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-10">

              <div className="grid gap-10 lg:grid-cols-2">

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-[#FA6305]">
                    INSTANT COST ESTIMATOR
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#4f0714] sm:text-4xl">
                    Estimate Your Shipping Cost
                  </h2>

                  <p className="mt-4 text-base leading-7 text-gray-500">
                    Calculate instant courier shipping costs based on parcel weight, dimensions, and destination zone before placing your dispatch order.
                  </p>

                  <div className="mt-7 rounded-xl bg-[#EAEEFB] p-5">

                    <div className="flex gap-3">

                      <Truck className="h-6 w-6 text-[#FA6305]" />

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

                <div className="rounded-2xl bg-[#EAEEFB] p-5 sm:p-6">

                  <div className="grid gap-5 sm:grid-cols-2">

                    <InputField
                      label="From (ZIP / City)"
                      placeholder="Pickup city"
                    />

                    <InputField
                      label="To (ZIP / City)"
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
                        Estimated Transit  Cost
                      </p>

                      <p className="mt-1 text-3xl font-bold text-[#6b0717]">
                        $28.40
                      </p>
                    </div>

                    <Link
                      to="/shipment-request"
                      className="rounded-lg bg-[#680818] px-6 py-3 text-center text-sm font-semibold text-white"
                    >
                      Book This Shipment
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

      <Footer />

    </div>
  );
};

const SmallStat = ({ icon, title, text }) => {
  return (
    <div className="flex min-h-[88px] items-center gap-4 rounded-xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-md sm:min-h-[96px]">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e7eb] text-[#680818]">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#24151a] sm:text-xl">
          {title}
        </h3>

        <p className="mt-1 text-[13px] font-medium text-gray-500 sm:text-sm">
          {text}
        </p>
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


export default Home;
import {
  ArrowRight,
  Package,
  Clock3,
  Building2,
  ShieldCheck,
  MapPin,
  Headphones,
  CheckCircle2,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-16 lg:pb-0">

      {/* Hero Section */}
      <section className="bg-[#0B2A4A]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Our Services
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Courier Solutions Built
              <span className="block text-blue-400">
                Around Your Needs.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              From everyday parcel deliveries to time-sensitive shipments
              and business requirements, Trackly provides simple and
              reliable courier solutions for different delivery needs.
            </p>
          </div>

        </div>
      </section>

      {/* Main Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              What We Offer
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0B2A4A] sm:text-4xl">
              Choose the right service for your shipment
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Trackly offers flexible courier services designed to make
              sending parcels easier, faster, and more convenient.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <ServiceCard
              icon={<Package size={30} />}
              title="Domestic Delivery"
              description="Send parcels safely between cities and locations with a simple and dependable delivery process."
            />

            <ServiceCard
              icon={<Clock3 size={30} />}
              title="Express Delivery"
              description="Choose priority delivery when your shipment needs faster handling and timely transportation."
            />

            <ServiceCard
              icon={<Building2 size={30} />}
              title="Business Delivery"
              description="Flexible courier solutions for businesses handling regular shipments and delivery requirements."
            />

          </div>

        </div>
      </section>

      {/* Domestic Delivery */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Domestic Delivery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2A4A] sm:text-4xl">
              Reliable delivery across locations
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our domestic courier service is designed for customers who
              need to send parcels from one city or location to another.
              Trackly keeps the shipment process simple, while tracking
              updates help you stay informed about your parcel.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-[#2563EB]"
                />
                <p className="text-slate-600">
                  Convenient shipment request process
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-[#2563EB]"
                />
                <p className="text-slate-600">
                  Track your parcel using a unique tracking number
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-[#2563EB]"
                />
                <p className="text-slate-600">
                  Shipment status updates throughout the journey
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-[#0B2A4A] p-8 shadow-lg sm:p-10">

            <MapPin size={42} className="text-blue-400" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              From pickup to destination
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Keep track of your shipment journey with clear status
              updates from booking and pickup to transit and final
              delivery.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-xl font-bold text-blue-400">
                  Simple
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Shipment Process
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-xl font-bold text-blue-400">
                  Clear
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Tracking Updates
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Express Delivery */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">

          <div className="order-2 rounded-2xl bg-[#123B63] p-8 shadow-lg lg:order-1 sm:p-10">

            <Clock3 size={42} className="text-blue-300" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              When time matters
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Express delivery is designed for shipments that require
              priority handling and faster transportation.
            </p>

            <div className="mt-7 flex items-center gap-3 rounded-xl bg-white/10 p-4">
              <ShieldCheck size={24} className="text-blue-300" />

              <p className="text-sm leading-6 text-slate-200">
                Your shipment information remains organized throughout
                the delivery process.
              </p>
            </div>

          </div>

          <div className="order-1 lg:order-2">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Express Delivery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2A4A] sm:text-4xl">
              Faster handling for important shipments
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Some shipments need to reach their destination sooner.
              Trackly's express delivery option focuses on priority
              handling for time-sensitive parcel requirements.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Customers can submit their shipment details and use their
              tracking number to follow the parcel journey.
            </p>

          </div>

        </div>
      </section>

      {/* Business Delivery */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Business Delivery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2A4A] sm:text-4xl">
              Courier support for growing businesses
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Businesses often need to manage multiple shipments and
              delivery requirements. Trackly provides a structured
              platform where shipment information can be submitted,
              managed, and tracked.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              With organized shipment records and tracking updates,
              businesses can keep better visibility over their courier
              activities.
            </p>

            <a
              href="/shipment-request"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#123B63] px-6 py-3 font-semibold text-white transition hover:bg-[#174A7A]"
            >
              Create Shipment
              <ArrowRight size={18} />
            </a>

          </div>

          <div className="rounded-2xl bg-[#0B2A4A] p-8 shadow-lg sm:p-10">

            <Building2 size={42} className="text-blue-400" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Organized shipment management
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Keep important shipment details organized and make it
              easier to follow the delivery status of your parcels.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-400" />
                <span className="text-slate-200">
                  Organized shipment information
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-400" />
                <span className="text-slate-200">
                  Easy parcel tracking
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-400" />
                <span className="text-slate-200">
                  Clear delivery status
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Why Trackly */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why Trackly
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0B2A4A] sm:text-4xl">
              A simpler courier experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Trackly brings shipment requests, parcel tracking, and
              delivery information together in one convenient platform.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Package size={32} className="mx-auto text-[#2563EB]" />
              <h3 className="mt-4 font-bold text-[#0B2A4A]">
                Easy Shipping
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Submit shipment details through a straightforward process.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <MapPin size={32} className="mx-auto text-[#2563EB]" />
              <h3 className="mt-4 font-bold text-[#0B2A4A]">
                Parcel Tracking
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Follow your parcel using its unique tracking number.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <ShieldCheck size={32} className="mx-auto text-[#2563EB]" />
              <h3 className="mt-4 font-bold text-[#0B2A4A]">
                Secure Information
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Shipment information is managed through a secure platform.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Headphones size={32} className="mx-auto text-[#2563EB]" />
              <h3 className="mt-4 font-bold text-[#0B2A4A]">
                Customer Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Get assistance with shipment and courier-related queries.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2A4A] py-14">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to send your parcel?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Submit your shipment details and start your delivery journey
            with Trackly.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/shipment-request"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#123B63] px-6 py-3 font-semibold text-white transition hover:bg-[#174A7A]"
            >
              Create Shipment
              <ArrowRight size={18} />
            </a>

            <a
              href="/track"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Track Parcel
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Services;

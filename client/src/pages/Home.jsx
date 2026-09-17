import {
  ArrowRight,
  Package,
  ShieldCheck,
  Clock3,
  MapPin,
  Headphones,
  Search,
  Mail,
  Truck,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F8] pt-24 pb-16 lg:pb-0">

      <section className="bg-[#FFE6E6]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-12">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#560319">
              Reliable Courier Services
            </p>

            <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Your Packages.
              <span className="block text-[#560319]">
                Our Priority.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-[560319] sm:text-lg">
              Send your parcels with confidence and track every step of
              their journey with Trackly. Stay informed with simple,
              reliable, and hassle-free delivery at every stage.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="/services"
                className="flex items-center gap-2 rounded-lg bg-[#560319] px-6 py-3 font-semibold text-white transition hover:bg-[#660000]"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>

              <a
                href="/track"
                className="rounded-lg border border-red-800 bg-transparent px-6 py-3 font-semibold text-[#560319] transition hover:bg-[#560319] hover:text-white"
              >
                Track Parcel
              </a>

            </div>

            <div className="mt-6 max-w-xl">

              <p className="mb-2 text-sm font-medium text-white">
                Track your shipment
              </p>

              <div className="flex items-center rounded-xl border border-white/20 bg-white p-2 shadow-lg">

                <Search
                  size={21}
                  className="ml-3 shrink-0 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Enter your tracking number"
                  className="min-w-0 flex-1 px-3 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
                />

                <button
                  type="button"
                  className="rounded-lg bg-[#560319] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#660000] sm:px-7"
                >
                  Track
                </button>

              </div>

            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/courierHome.png"
              alt="Courier delivery"
              className="w-full max-w-lg rounded-2xl object-contain shadow-lg"
            />
          </div>

        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#660000]">
                About Trackly
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#3F000F] sm:text-4xl">
                A simpler way to send and track your parcels
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Trackly is designed to make courier management easier
                for both customers and businesses. From submitting a
                shipment request to checking its current location,
                everything is organized in one convenient platform.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Our focus is on providing a clear shipment experience
                where customers can access courier services, submit
                their parcel details, and track their shipment using a
                unique tracking number.
              </p>

              <a
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#660000] hover:text-[#3F000F]"
              >
                Learn more about Trackly
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-2xl bg-[#3F000F] p-8 text-white shadow-lg">

              <Truck size={38} className="text-[#D98A98]" />

              <h3 className="mt-5 text-2xl font-bold">
                Every shipment, clearly managed.
              </h3>

              <p className="mt-4 leading-7 text-red-100">
                From pickup to delivery, shipment information and
                tracking updates help customers stay informed throughout
                the delivery journey.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold text-[#D98A98]">
                    Easy
                  </p>
                  <p className="mt-1 text-sm text-red-100">
                    Shipment Process
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold text-[#D98A98]">
                    Simple
                  </p>
                  <p className="mt-1 text-sm text-red-100">
                    Parcel Tracking
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#FFF8F8] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#660000]">
              Our Services
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#3F000F] sm:text-4xl">
              Courier solutions for every requirement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Whether you are sending a personal parcel or managing
              business shipments, Trackly offers flexible delivery
              services to suit different requirements.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <ServiceCard
              icon={<Package size={28} />}
              title="Domestic Delivery"
              description="Reliable parcel delivery for shipments between cities and locations."
            />

            <ServiceCard
              icon={<Clock3 size={28} />}
              title="Express Delivery"
              description="Priority delivery for shipments that need faster handling."
            />

            <ServiceCard
              icon={<MapPin size={28} />}
              title="Business Delivery"
              description="Flexible courier solutions for regular business shipment requirements."
            />

          </div>

          <div className="mt-8 text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-[#660000] hover:text-[#3F000F]"
            >
              Explore all services
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#660000]">
              Why Choose Trackly
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#3F000F] sm:text-4xl">
              Designed for a better delivery experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              We focus on making the courier process clear, convenient,
              and easy to follow from shipment to delivery.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-red-100 bg-white p-6 text-center shadow-sm">
              <ShieldCheck size={32} className="mx-auto text-[#660000]" />
              <h3 className="mt-4 font-bold text-[#3F000F]">
                Secure Shipments
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Shipment information is handled carefully throughout
                the delivery process.
              </p>
            </div>

            <div className="rounded-xl border border-red-100 bg-white p-6 text-center shadow-sm">
              <Clock3 size={32} className="mx-auto text-[#660000]" />
              <h3 className="mt-4 font-bold text-[#3F000F]">
                Timely Delivery
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Reliable courier services designed around your delivery
                requirements.
              </p>
            </div>

            <div className="rounded-xl border border-red-100 bg-white p-6 text-center shadow-sm">
              <MapPin size={32} className="mx-auto text-[#660000]" />
              <h3 className="mt-4 font-bold text-[#3F000F]">
                Easy Tracking
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Check the latest shipment status using your tracking
                number.
              </p>
            </div>

            <div className="rounded-xl border border-red-100 bg-white p-6 text-center shadow-sm">
              <Headphones size={32} className="mx-auto text-[#660000]" />
              <h3 className="mt-4 font-bold text-[#3F000F]">
                Customer Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Get assistance with your shipment and courier-related
                questions.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#FFF8F8] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#660000]">
              Customer Stories
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#3F000F] sm:text-4xl">
              What our customers say
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <p className="leading-7 text-slate-600">
                "The tracking process was simple and I could easily
                check where my parcel was."
              </p>
              <p className="mt-5 font-semibold text-[#3F000F]">
                Rahul Sharma
              </p>
              <p className="text-sm text-slate-500">Customer</p>
            </div>

            <div className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <p className="leading-7 text-slate-600">
                "The shipment process was straightforward and easy to
                understand."
              </p>
              <p className="mt-5 font-semibold text-[#3F000F]">
                Priya Mehta
              </p>
              <p className="text-sm text-slate-500">Customer</p>
            </div>

            <div className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <p className="leading-7 text-slate-600">
                "Being able to track the parcel with a tracking number
                made the delivery process much easier."
              </p>
              <p className="mt-5 font-semibold text-[#3F000F]">
                Aman Verma
              </p>
              <p className="text-sm text-slate-500">Customer</p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#3F000F] py-14">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Need help with your shipment?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-red-100">
            Have a question about our courier services or your parcel?
            Our team is here to help you with your shipment-related
            queries.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-[#560319] px-6 py-3 font-semibold text-white hover:bg-[#660000]"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:support@trackly.com"
              className="flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              <Mail size={18} />
              Email Support
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;

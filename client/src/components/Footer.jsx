
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import ContactModal from "./ContactModal";

const FooterColumn = ({ title, links, onContactClick }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>

      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <div key={link.name}>
            {link.name === "Contact" ? (
              <button
                type="button"
                onClick={onContactClick}
                className="inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </button>
            ) : link.path ? (
              <Link
                to={link.path}
                className="inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </Link>
            ) : (
              <a
                href={`mailto:support@trackly.com?subject=${encodeURIComponent(
                  link.name
                )}`}
                className="inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#051136] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="rounded-lg bg-[#680818] p-2">
                <Package className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold">TRACKLY</h3>

                <p className="text-[9px] tracking-widest text-gray-400">
                  SHIP. TRACK. DELIVER.
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Modern courier and parcel delivery services built around
              reliable tracking and simple shipment management.
            </p>
          </div>

          {/* Services */}
          <FooterColumn
            title="Services"
            links={[
              { name: "Domestic Delivery", path: "/services" },
              { name: "Express Delivery", path: "/services" },
              { name: "Business Delivery", path: "/services" },
            ]}
          />

          {/* Customer */}
          <FooterColumn
            title="Customer"
            links={[
              { name: "Track Parcel", path: "/tracking" },
              { name: "Request Shipment", path: "/shipment-request" },
              { name: "My Shipments", path: "/my-shipments" },
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              { name: "About Us", path: "/about" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Contact" },
            ]}
            onContactClick={() => setIsContactOpen(true)}
          />
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} TRACKLY. All rights reserved.
          </p>

          <p>SHIP. TRACK. DELIVER.</p>
        </div>
      </footer>

      {/* Contact Popup */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Footer;

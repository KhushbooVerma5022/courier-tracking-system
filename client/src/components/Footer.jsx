import { Link } from "react-router-dom";
import { Package } from "lucide-react";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>

      <div className="mt-4 space-y-3">
        {links.map((link, index) => (
          <p key={index} className="text-sm text-gray-400">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
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
  );
};

export default Footer;
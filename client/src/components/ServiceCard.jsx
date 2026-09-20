import { Link } from "react-router-dom";

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
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
        featured
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
          <div
            key={index}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <span
              className={`mt-0.5 font-bold ${
                featured
                  ? "text-[#E0854C]"
                  : "text-[#6b0717]"
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

export default ServiceCard;
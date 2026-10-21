import { X, Mail, Phone, Package, ArrowUpRight } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-title"
                className="relative w-full max-w-md rounded-2xl bg-[#faf9f7] p-6 shadow-2xl sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close contact popup"
                    className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-[#fff0f2] hover:text-[#680818]"
                >
                    <X size={21} />
                </button>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#680818] text-white">
                    <Package size={25} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b0717]">
                    TRACKLY Support
                </p>

                <h2
                    id="contact-title"
                    className="mt-2 text-3xl font-bold text-[#4f0714]"
                >
                    Get in Touch
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                    Have a question about your shipment? We're here to help.
                    Contact our team using the details below.
                </p>

                <div className="my-6 border-t border-gray-200" />

                <a
                    href="mailto:support@trackly.com"
                    className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-[#fff0f2]"
                >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f2] text-[#680818]">
                        <Mail size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#26171a]">
                            Email Us
                        </p>
                        <p className="mt-1 break-all text-sm text-[#680818]">
                            Courier@trackly.com
                        </p>
                    </div>

                    <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#680818] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </a>

                <div className="mt-2 flex items-center gap-4 rounded-xl p-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f2] text-[#680818]">
                        <Phone size={21} />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-[#26171a]">
                            Call Us
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            +91 123-456-7890
                        </p>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-5">
                    <p className="text-xs tracking-widest text-gray-500">
                        TRACKLY · SHIP. TRACK. DELIVER.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;

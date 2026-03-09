import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const PHONE = "97145548286";

const options = [
  {
    label: "How can we help you?",
    message: "Hello, I'd like to learn more about EDG Gold & Petroleum and how you can help me.",
  },
  {
    label: "Request Supply Offer",
    message: "Hello, I would like to request a supply offer for petroleum products or precious metals.",
  },
  {
    label: "Become a Strategic Partner",
    message: "Hello, I am interested in becoming a strategic partner with EDG Gold & Petroleum.",
  },
  {
    label: "Submit Trading Inquiry",
    message: "Hello, I would like to submit a trading inquiry for commodity products.",
  },
];

const waUrl = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate the label every 2.5s when tooltip is closed
  useEffect(() => {
    if (open) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % options.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Options panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2 items-end"
          >
            {options.map((opt, idx) => (
              <motion.a
                key={opt.label}
                href={waUrl(opt.message)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2.5 bg-white rounded-[12px] px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.14)] border border-[#f0f0f0] hover:border-[#25D366]/40 hover:shadow-[0_4px_24px_rgba(37,211,102,0.18)] transition-all group cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <span className="font-sans text-[13px] font-medium text-[#151515] group-hover:text-[#128C7E] transition-colors whitespace-nowrap">
                  {opt.label}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rotating tooltip chip — shown only when closed */}
      <AnimatePresence mode="wait">
        {!open && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.12)] border border-[#f0f0f0] pointer-events-none"
          >
            <span className="font-sans text-[12px] font-medium text-[#151515] whitespace-nowrap">
              {options[activeIndex].label}
            </span>
            {/* small triangle pointing down */}
            <span className="absolute -bottom-[6px] right-[22px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        className="w-[56px] h-[56px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:bg-[#20bc5a] transition-colors relative"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25 pointer-events-none" />
      </motion.button>
    </div>
  );
};

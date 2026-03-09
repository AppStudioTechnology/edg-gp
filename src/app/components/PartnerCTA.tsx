import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Handshake } from "lucide-react";

export const PartnerCTA = () => {
  return (
    <section className="bg-white py-0 pb-[56px] lg:pb-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[16px] bg-[#0a0a0a] px-8 sm:px-12 py-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-[10px] bg-[#ceae5a]/10 flex items-center justify-center shrink-0">
              <Handshake className="size-5 text-[#ceae5a]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-sans font-semibold text-[18px] text-white">Become a Strategic Partner</h3>
              <p className="font-sans text-[14px] text-white/50 leading-[1.6] max-w-[520px]">
                EDG actively seeks long-term relationships with logistics providers, refineries, national oil companies, and commodity traders. If you're looking to grow through a trusted international trading partnership, let's connect.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <button className="bg-[#A98C49] hover:bg-[#967a3f] text-white px-6 py-3 rounded-[12px] font-sans font-medium text-[14px] transition-all whitespace-nowrap active:scale-95 shrink-0">
              Partner With Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

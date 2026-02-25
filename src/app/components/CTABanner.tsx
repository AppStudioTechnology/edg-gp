import React from "react";
import { motion } from "motion/react";
import imgSection from "@/assets/0c4be190a8eb1ce8c184bdb17b1fc6ac0ee2159b.png";

interface CTABannerProps {
  title?: string;
  description?: string;
  badge?: string;
}

export const CTABanner = ({ 
  title = "Let's Create a Better Future Together",
  description = "Join hands with EDG Gold & Petroleum DMCC as we navigate the complexities of global energy markets and commodities trading with precision and integrity.",
  badge = "YOUR GLOBAL TRADING PARTNER"
}: CTABannerProps) => {
  return (
    <section className="relative py-[60px] sm:py-[80px] lg:py-[96px] px-4 sm:px-8 lg:px-[80px] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSection}
          alt="Industrial background"
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-[#CEAE5A] font-bold text-[11px] uppercase tracking-[0.4em] font-sans">
            {badge}
          </span>
          <h2 className="text-[28px] md:text-[36px] font-extralight text-white font-sans leading-[1.1] tracking-[-1px] max-w-[800px]">
            {title}
          </h2>
          <p className="text-white/60 text-[16px] md:text-[18px] font-sans leading-[1.8] max-w-[800px]">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#222222] px-[28px] py-[12px] rounded-[12px] font-medium text-[14px] font-sans transition-all"
            >
              Request A Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#A98C49] text-white px-[28px] py-[12px] rounded-[12px] font-medium text-[14px] font-sans transition-all hover:bg-[#967a3f]"
            >
              Get A Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
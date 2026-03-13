import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import imgHeroHeader from "@/assets/8fefd188229e3a9ca69fac13417d3ec9eba5d830.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[680px] lg:min-h-[760px] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={imgHeroHeader}
            alt="Dubai Skyline"
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] pt-[96px] md:pt-[104px] pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-[28px] md:gap-[36px] max-w-[860px]"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-[#ceae5a]" />
            <span className="font-sans text-[12px] font-medium tracking-[2px] uppercase text-[#ceae5a]">
              International Commodity Trading Group
            </span>
          </motion.div>

          <h1 className="text-white text-[40px] sm:text-[52px] md:text-[62px] lg:text-[76px] font-extralight leading-[1.05] tracking-[-1.2px] font-sans">
            Bridging Markets,<br />
            Fueling Prosperity
          </h1>

          <p className="text-white/80 text-[15px] md:text-[16px] lg:text-[18px] leading-[1.7] font-normal font-sans max-w-[640px]">
            EDG Gold & Petroleum is a global trading platform operating across energy and precious metals markets — delivering reliability, compliance, and sustainable value to governments, institutions, and corporations worldwide.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="pt-2"
          >
            <Link to="/contact">
              <button className="bg-[#A98C49] hover:bg-[#967a3f] text-white px-6 py-3 rounded-[12px] font-sans font-medium text-[14px] transition-all active:scale-95 whitespace-nowrap">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

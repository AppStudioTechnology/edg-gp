import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgSection from "@/assets/whoweare2.png";

export const EnergyOpportunity = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-[60px]">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[#CEAE5A] font-bold text-[11px] uppercase tracking-[0.3em] font-sans">
                STRATEGIC VISION
              </span>
              <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-extralight text-[#0B2B3F] font-sans leading-[1.1] tracking-[-1px]">
                Energy & Opportunity Aligned
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[#555] text-[15px] sm:text-[16px] lg:text-[18px] font-sans leading-[1.7]">
              <p>
                At the heart of our operations is a commitment to excellence, integrity, and sustainability. We leverage our deep market expertise and logistical capabilities to provide efficient and reliable energy and commodities solutions to our clients.
              </p>
              <p>
                Through our integrated supply chain and strategic partnerships, we ensure that every trade contributes to growth and development while maintaining the highest standards of transparency and accountability.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#A98C49] text-white px-[28px] py-[12px] rounded-[12px] font-medium text-[14px] font-sans w-fit transition-all hover:bg-[#967a3f]"
            >
              View Our Service
            </motion.button>
          </motion.div>
        </div>
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[12px] overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={imgSection}
              alt="Workers discussing over a tablet"
              className="max-w-none w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
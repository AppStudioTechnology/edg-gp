import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgSection from "@/assets/0c4be190a8eb1ce8c184bdb17b1fc6ac0ee2159b.png";

export const EnergyOpportunity = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-8 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-[60px]">
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
              <h2 className="text-[28px] lg:text-[36px] font-extralight text-[#0B2B3F] font-sans leading-[1.1] tracking-[-1px]">
                Energy & Opportunity Aligned
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[#555] text-[16px] lg:text-[18px] font-sans leading-[1.7]">
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
              className="bg-[#CEAE5A] text-white px-[30px] py-[14px] rounded-[6px] font-bold text-[13px] uppercase tracking-wider w-fit transition-all hover:bg-[#B89B4F] shadow-lg shadow-[#CEAE5A]/20"
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
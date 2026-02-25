import React from "react";
import { motion } from "motion/react";
import imgIndustrial from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";
import { Droplets, Coins } from "lucide-react";

export const StrategicSectors = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Hero Header - Industrial tanks at sunset */}
      <div className="relative w-full h-[360px] lg:h-[440px]">
        <img
          src={imgIndustrial}
          alt="Industrial storage tanks"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[720px]"
          >
            <h2 className="font-sans font-extralight text-[28px] sm:text-[34px] lg:text-[40px] text-white leading-[1.1] tracking-[-1px] mb-5">
              Bridging Two Strategic Sectors
            </h2>
            <p className="font-sans text-[15px] lg:text-[17px] text-white/90 leading-[1.6]">
              At EDG Gold & Petroleum, our business model is truly unique—seamlessly integrating two of the most strategic sectors in the global marketplace.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content - 3 columns: Petroleum card | Precious Metals card | Text block */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] py-[48px] lg:py-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Card - Petroleum Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#faf8f5] border border-[#e8e6e3] rounded-[12px] p-8 flex flex-col gap-6 shadow-sm"
          >
            <div className="w-[72px] h-[72px] rounded-full bg-[#f5f3ef] flex items-center justify-center">
              <Droplets className="size-9 text-[#A98C49]" strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-bold text-[17px] lg:text-[18px] text-[#151515]">
              Petroleum Products
            </h3>
          </motion.div>

          {/* Middle Card - Precious Metals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-4 bg-[#faf8f5] border border-[#e8e6e3] rounded-[12px] p-8 flex flex-col gap-6 shadow-sm"
          >
            <div className="w-[72px] h-[72px] rounded-full bg-[#f5f3ef] flex items-center justify-center">
              <Coins className="size-9 text-[#A98C49]" strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-bold text-[17px] lg:text-[18px] text-[#151515] leading-[1.3]">
              Precious Metals led by gold
            </h3>
          </motion.div>

          {/* Right - Text block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <p className="font-sans text-[15px] lg:text-[17px] text-[#333] leading-[1.7]">
              By combining these two critical industries into a unified commercial framework, we achieve exceptional risk management, optimized capital returns, and resilient market positioning. This integrated model enables us to balance sector-specific fluctuations, ranging from direct fuel supplies, and deliver sustainable growth for our stakeholders.
            </p>
            <p className="font-sans text-[15px] lg:text-[17px] text-[#333] leading-[1.7]">
              Executing such a model demands a high level of professionalism and operational discipline. Every measure, from sourcing to delivery, is designed with the most rigorous quality, compliance, and efficiency standards. Beyond trading, our focus extends to strategic investments in infrastructure, logistics, and value-added industries connected to both gold and petroleum. These investments in turn allow us to multiply and scale our successful models across multiple regions and continents.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

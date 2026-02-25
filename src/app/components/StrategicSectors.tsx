import React from "react";
import { motion } from "motion/react";
import imgWorkers from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";
import { Droplets, Coins } from "lucide-react";

export const StrategicSectors = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px]">
        {/* Main layout: image with overlapping text block */}
        <div className="relative">
          {/* Background Image */}
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-[10px] overflow-hidden">
            <img
              src={imgWorkers}
              alt="Workers on site"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(44,37,18,0.5)]" />

            {/* Title overlay - bottom left of image */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:pl-[56px] lg:pb-[69px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-[500px]"
              >
                <h2 className="font-sans font-extralight text-[28px] sm:text-[36px] lg:text-[44px] text-white leading-[1.15] tracking-[-1px] mb-4">
                  Bridging Two Strategic Sectors
                </h2>
                <p className="font-sans text-[15px] sm:text-[16px] lg:text-[18px] text-white leading-[1.5] tracking-[-0.5px]">
                  At EDG Gold & Petroleum, our business model is truly unique—seamlessly integrating two of the most strategic sectors in the global marketplace:
                </p>
              </motion.div>
            </div>
          </div>

          {/* Text block - overlapping right side of image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:absolute lg:right-0 lg:bottom-0 bg-white rounded-tl-[10px] lg:w-[45%] xl:w-[42%] p-6 sm:p-8 lg:px-[50px] lg:py-[40px]"
          >
            <div className="flex flex-col gap-6">
              <p className="font-sans text-[15px] lg:text-[16px] text-[#555] leading-[1.65] tracking-[-0.18px]">
                By combining these two critical industries into a unified commercial framework, we achieve exceptional risk management, optimized capital returns, and resilient market positioning. This integrated model enables us to balance cyclical market fluctuations, leverage cross-sector synergies, and deliver sustainable growth for our stakeholders.
              </p>
              <p className="font-sans text-[15px] lg:text-[16px] text-[#555] leading-[1.65] tracking-[-0.18px]">
                Executing such a model demands a high level of professionalism and operational discipline. Every process, from sourcing to delivery, is designed to meet rigorous quality, compliance, and efficiency standards. Beyond trading, our focus extends to strategic investments in the infrastructure, logistics, and value-added industries connected to both gold and petroleum. These investments have allowed us to replicate and scale our successful model across multiple regions and continents.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Two cards below - left aligned, horizontal layout */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 mt-8 lg:mt-10 pb-[48px] lg:pb-[64px] lg:max-w-[55%]">
          {/* Petroleum Products Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white border border-[#dce0e3] rounded-[8px] px-8 sm:px-10 py-8 flex items-center gap-5"
          >
            <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#A98C49]/10 flex items-center justify-center shrink-0">
              <Droplets className="size-8 sm:size-9 text-[#A98C49]" strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-medium text-[18px] sm:text-[20px] text-black leading-[1.3] tracking-[-0.5px]">
              Petroleum Products
            </h3>
          </motion.div>

          {/* Precious Metals Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex-1 bg-white border border-[#dce0e3] rounded-[8px] px-8 sm:px-10 py-8 flex items-center gap-5"
          >
            <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#A98C49]/10 flex items-center justify-center shrink-0">
              <Coins className="size-8 sm:size-9 text-[#A98C49]" strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-medium text-[18px] sm:text-[20px] text-black leading-[1.3] tracking-[-0.5px]">
              Precious metals, led by gold
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

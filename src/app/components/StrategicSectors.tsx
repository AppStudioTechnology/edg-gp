import React from "react";
import { motion } from "motion/react";
import imgWorkers from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";

export const StrategicSectors = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[45px] pb-[48px] lg:pb-[64px]">
        <div className="relative w-full h-[400px] sm:h-[520px] lg:h-[640px] rounded-[10px] overflow-hidden">
          <img
            src={imgWorkers}
            alt="Workers on site"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(44,37,18,0.5)]" />

          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:pl-[56px] lg:pb-[56px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[560px]"
            >
              <h2 className="font-sans font-extralight text-[28px] sm:text-[36px] lg:text-[44px] text-white leading-[1.15] tracking-[-1px] mb-4">
                Bridging Two Strategic Sectors
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] lg:text-[18px] text-white/85 leading-[1.5] tracking-[-0.5px]">
                At EDG Gold & Petroleum, our business model is truly unique—seamlessly integrating two of the most strategic sectors in the global marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

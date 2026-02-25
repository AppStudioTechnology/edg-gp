import React from "react";
import { motion } from "motion/react";
import imgMap from "@/assets/fdbccf296bd7cc610ec3339dcf093645e563d721.png";

const pins = [
  { top: "26%", left: "73.5%" },
  { top: "50%", left: "60.7%" },
  { top: "47%", left: "47.1%" },
  { top: "43%", left: "40%" },
  { top: "21%", left: "26.4%" },
  { top: "25%", left: "35%" },
  { top: "27%", left: "47.6%" },
  { top: "26%", left: "54.5%" }
];

export const MarketPresence = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px] items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <span className="font-sans font-semibold text-[16px] lg:text-[18px] text-black uppercase">
              Our Market Presence
            </span>
            <span className="font-sans font-medium text-[14px] lg:text-[15px] text-[#ceae5a]">
              Middle East & Africa
            </span>
          </div>

          <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px]">
            Strategic Regions. <br />
            Expansive Opportunities. <br />
            Lasting Impact.
          </h2>
          
          <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed max-w-[717px]">
            At EDG Gold & Petroleum, the Middle East and Africa (MEA) are more than just markets—they are the beating heart of our business operations and a cornerstone of our long-term growth strategy. These regions offer a unique blend of natural wealth, industrial demand, and strategic geographic positioning that aligns perfectly with our core competencies in petroleum and precious metals trading.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[1071/519]"
        >
          <img src={imgMap} alt="World Map" className="w-full h-full object-contain grayscale opacity-80" />
          
          {/* Pins Overlay */}
          <div className="absolute inset-0">
            {pins.map((pin, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                className="absolute w-[15px] h-[48px] -translate-x-1/2 -translate-y-[calc(100%-7px)]"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="relative w-full h-full flex flex-col items-center">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#ceae5a] shadow-lg" />
                  <div className="w-[1px] h-full bg-black/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

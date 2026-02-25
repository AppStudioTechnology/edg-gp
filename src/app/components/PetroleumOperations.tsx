import React from "react";
import { motion } from "motion/react";
import imgPumpjack from "@/assets/3a4c879691ae817b0a2cf2a3818c3ff693d5145e.png";

const highlights = [
  { label: "Optimal Reach:", text: "Seamless access to some of the world’s most strategic markets." },
  { label: "Competitive Edge:", text: "Leveraging partnerships and scale to deliver cost efficiencies." },
  { label: "Continuity & Resilience:", text: "Safeguarding supply chains against market volatility and geopolitical risks." }
];

export const PetroleumOperations = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative h-auto min-h-[400px] lg:h-[774px] rounded-[10px] overflow-hidden group shadow-2xl flex items-center">
          <img src={imgPumpjack} alt="Oil Operations" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 p-6 sm:p-10 lg:p-[72px] max-w-[700px]">
            <h2 className="font-sans font-extralight text-[22px] sm:text-[26px] lg:text-[32px] text-white leading-[1.1] tracking-[-1px]">
              Our petroleum division operates across key trade corridors in the Middle East, Africa, and Asia, ensuring: <span className="text-[#ceae5a]">.</span>
            </h2>
          </div>

          {/* Highlights Overlay Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:absolute right-0 lg:top-[calc(50%+152px)] lg:-translate-y-1/2 bg-white w-full lg:w-[45%] p-6 sm:p-10 lg:p-[66px] rounded-tl-[10px] shadow-2xl z-20"
          >
            <div className="flex flex-col gap-0">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 sm:gap-6 py-6 sm:py-10 border-b border-gray-100 last:border-0 group/item">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#ceae5a] shrink-0" />
                  <div className="flex flex-col gap-2">
                    <span className="font-sans font-semibold text-[14px] sm:text-[15px] lg:text-[17px] text-black">
                      {item.label}
                    </span>
                    <p className="font-sans text-[15px] sm:text-[17px] lg:text-[19px] text-[#555]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
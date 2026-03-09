import React from "react";
import { motion } from "motion/react";
import imgValuesMetron2 from "@/assets/c09daf8815cbf8141d45e5907ad2d5e544327ae8.png";

export const StrategicRegions = () => {
  const regions = ["Middle East", "Africa", "Asia"];

  return (
    <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center overflow-hidden py-[60px] lg:py-[72px]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src={imgValuesMetron2}
            alt="Earth at night"
            className="absolute max-w-none object-cover size-full"
            style={{ width: "181.89%" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start lg:items-end">

          {/* Regions + Button - second on mobile (order-2), first on desktop (order-1) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col gap-[36px] lg:flex-1 order-2 lg:order-1"
          >
            <div className="flex flex-col gap-[19px]">
              {regions.map((region) => (
                <div key={region} className="flex items-center gap-[11px]">
                  <div className="w-[32px] h-[32px] shrink-0 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="4" fill="#CEAE5A" />
                      <circle cx="16" cy="16" r="10" stroke="#CEAE5A" strokeWidth="1" opacity="0.4" />
                      <circle cx="16" cy="16" r="15" stroke="#CEAE5A" strokeWidth="0.5" opacity="0.2" />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-[12px] lg:text-[13px] text-white uppercase leading-[20px]">
                    {region}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#967a3f" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#A98C49] text-white px-[28px] py-[12px] rounded-[12px] font-sans font-medium text-[14px] transition-all w-fit uppercase hover:bg-[#967a3f]"
            >
              Our Market Presence
            </motion.button>
          </motion.div>

          {/* Heading + Description - first on mobile (order-1), second on desktop (order-2) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col gap-[36px] lg:flex-1 max-w-[709px] order-1 lg:order-2"
          >
            <div className="bg-[#ceae5a] px-[8px] py-px rounded-[6px] w-fit">
              <span className="font-sans font-medium text-[10px] lg:text-[11px] text-white uppercase leading-[20px]">
                Our Market Presence
              </span>
            </div>

            <h2 className="font-sans font-extralight text-[28px] md:text-[36px] lg:text-[42px] text-white leading-[1.1] tracking-[-1px]">
              Strategic Regions.<br />
              Expansive Opportunities.<br />
              Lasting Impact.
            </h2>

            <p className="font-sans font-normal text-[15px] lg:text-[16px] text-white leading-[1.65] lg:leading-[24px]">
              EDG's operational footprint spans three of the world's most dynamic trading corridors — the Middle East, Africa, and Asia. These are not just markets; they are the backbone of our supply and sourcing network, the destinations of our trading flows, and the regions where we have built lasting institutional relationships over decades. From government supply contracts in Sub-Saharan Africa to bullion distribution across Asia-Pacific, we operate with local expertise and global standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "motion/react";
import imgEarthNight from "@/assets/c09daf8815cbf8141d45e5907ad2d5e544327ae8.png";

const regions = [
  {
    name: "Middle East",
    hq: "Dubai, UAE",
    role: "Headquarters & Primary Trading Hub",
    details: [
      "DMCC-registered trading entity",
      "Government supply contracts",
      "Refinery partnerships",
      "LPG & LNG distribution network",
    ],
    products: "EN590 · Jet A1 · Gasoline · Gold Bullion",
    color: "#ceae5a",
    number: "01",
  },
  {
    name: "Africa",
    hq: "Sub-Saharan & West Africa",
    role: "Primary Sourcing & Supply Market",
    details: [
      "Gold Dore sourcing from verified mines",
      "Petroleum supply to national entities",
      "Bitumen for infrastructure projects",
      "Fuel Oil for industrial operators",
    ],
    products: "Gold Dore · Fuel Oil · Bitumen · EN590",
    color: "#8a7240",
    number: "02",
  },
  {
    name: "Asia",
    hq: "South & Southeast Asia",
    role: "Refined Gold & Energy Distribution",
    details: [
      "Refined gold distribution",
      "Bullion trading to financial institutions",
      "LNG supply partnerships",
      "Gasoline & Diesel supply agreements",
    ],
    products: "Refined Gold · Bullion · LNG · Gasoline",
    color: "#ceae5a",
    number: "03",
  },
];

export const GlobalPresence = () => {
  return (
    <section className="relative py-[72px] lg:py-[100px] px-4 sm:px-6 lg:px-[45px] overflow-hidden">
      {/* Background: night earth */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src={imgEarthNight}
            alt="Earth at night"
            className="absolute max-w-none object-cover size-full"
            style={{ width: "181.89%" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/82" />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col gap-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start lg:items-end justify-between"
        >
          <div className="flex flex-col gap-4 max-w-[520px]">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#ceae5a]" />
              <span className="font-sans text-[11px] font-medium tracking-[2px] uppercase text-[#ceae5a]">
                Global Presence
              </span>
            </div>
            <h2 className="font-sans font-extralight text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] tracking-[-1px]">
              Operating Across<br />
              Three Continents
            </h2>
          </div>
          <p className="font-sans text-[15px] lg:text-[17px] text-white/80 leading-[1.7] max-w-[520px]">
            EDG has built a structured presence across the Middle East, Africa, and Asia — key corridors that represent the world's most active energy and precious metals trading routes.
          </p>
        </motion.div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {regions.map((region, idx) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="flex flex-col gap-6 p-8 rounded-[16px] border border-white/20 bg-white/10 hover:border-[#ceae5a]/60 hover:bg-white/15 transition-all duration-300 group backdrop-blur-sm"
            >
              {/* Number + Region */}
              <div className="flex items-start justify-between">
                <span className="font-sans text-[48px] font-extralight text-white/20 leading-none">
                  {region.number}
                </span>
                <div className="px-3 py-1 rounded-full border border-[#ceae5a]/30 bg-[#ceae5a]/10">
                  <span className="font-sans text-[11px] text-[#ceae5a] font-medium">{region.hq}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-light text-[26px] text-white leading-tight tracking-[-0.5px]">
                  {region.name}
                </h3>
                <p className="font-sans text-[13px] text-[#ceae5a]/80">{region.role}</p>
              </div>

              {/* Details */}
              <ul className="flex flex-col gap-2.5">
                {region.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#ceae5a] mt-[7px] shrink-0" />
                    <span className="font-sans text-[13px] text-white/85 leading-[1.5]">{d}</span>
                  </li>
                ))}
              </ul>

              {/* Products */}
              <div className="pt-4 border-t border-white/20">
                <p className="font-sans text-[11px] text-white/50 uppercase tracking-wider mb-1.5">Key Products</p>
                <p className="font-sans text-[13px] text-white/85">{region.products}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

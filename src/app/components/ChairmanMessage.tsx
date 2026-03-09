import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-ixy99k2xf7";

export const ChairmanMessage = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-6 sm:px-6 lg:px-[45px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 lg:gap-10"
        >
          {/* Top label */}
          <span className="text-[#ceae5a] text-[12px] lg:text-[14px] font-medium font-sans uppercase tracking-wider">
            Chairman&apos;s Message
          </span>

          {/* Title block + Quote icon */}
          <div className="relative">
            <div className="flex flex-col gap-1">
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-extralight text-black leading-[1.1] tracking-[-1px] font-sans">
                Chairman
              </h2>
              <p className="text-[#555] text-[16px] lg:text-[18px] font-normal font-sans">
                EDG Gold &amp; Petroleum
              </p>
            </div>
            {/* Large golden quote icon - positioned top right */}
            <div className="absolute top-0 right-0 h-[64px] lg:h-[80px] w-auto aspect-[97/64] opacity-80">
              <svg className="block h-full w-full" fill="none" viewBox="0 0 97 64">
                <path clipRule="evenodd" d={svgPaths.p34cfc200} fill="#CEAE5A" fillRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Bold introductory statement */}
          <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-[1.5] font-sans">
            At EDG Gold &amp; Petroleum, our journey has always been guided by a singular purpose: to create lasting value through responsible global trade. From the heart of the UAE to emerging and established markets across the Middle East and Africa, our company has evolved into a trusted name in energy and precious metals trading.
          </p>

          {/* Body paragraphs */}
          <div className="text-[#555] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.75] font-normal font-sans space-y-6">
            <p>
              In a world where access to reliable energy and ethically sourced resources defines both economic growth and social stability, our role has never been more critical. We take pride in being at the intersection of opportunity and responsibility—delivering high-quality oil, gas, and gold products to clients who rely on our consistency, transparency, and market insight.
            </p>
            <p>
              What sets us apart is not just our ability to move commodities efficiently across borders—it&apos;s our commitment to integrity, innovation, and long-term partnerships. Our customers and partners know that when they work with EDG, they are choosing a team that stands for ethical business practices, operational excellence, and forward-thinking strategies.
            </p>
            <p>
              As we continue to expand our footprint, invest in smarter logistics, and embrace sustainable practices, our mission remains clear: to be a catalyst for progress—not only for our stakeholders but for the communities and industries we serve. I am proud of our achievements, grateful for the trust placed in us, and optimistic about the future we are building—together.
            </p>
          </div>

          {/* Signature */}
          <div className="flex flex-col gap-0.5 text-[#555] font-sans leading-[27px] pt-4">
            <p className="text-[15px] lg:text-[16px] font-normal">Warm regards,</p>
            <p className="text-[16px] lg:text-[17px] font-semibold text-black">Chairman</p>
            <p className="text-[15px] lg:text-[16px] font-normal text-[#ceae5a]">EDG Gold &amp; Petroleum</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-7eu6a3g9p9";
import imgVisionMission from "@/assets/e82cf92c9617fe67354327de7e9e517a2e5bc58a.png";

export const VisionMission = () => {
  return (
    <section className="relative h-auto lg:h-[560px] flex flex-col items-center justify-end overflow-hidden rounded-[10px] mx-2 sm:mx-4 lg:mx-[45px]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={imgVisionMission}
            alt="Industrial excellence"
            className="absolute max-w-none h-[169%] left-0 top-[-66%] w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(160.937deg, rgba(0,0,0,0) 32.933%, rgba(0,0,0,0.5) 67.854%)" }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-1 lg:pl-[30%] xl:pl-[24%] pb-0">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 backdrop-blur-[10.7px] border border-white/20 flex flex-col gap-[20px] p-[22px] pt-[24px] pb-[28px] rounded-tl-[10px] lg:rounded-tl-[10px] min-h-0"
          style={{ backgroundImage: "linear-gradient(213.303deg, rgba(0,0,0,0) 58.539%, rgba(0,0,0,0.8) 88.96%), linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 100%), linear-gradient(90deg, rgba(206,174,90,0.1) 0%, rgba(206,174,90,0.1) 100%)" }}
        >
          <div className="flex items-center gap-[27px]">
            <div className="h-[22px] w-[19px] lg:h-[26px] lg:w-[24px] shrink-0 opacity-80">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
                <path d={svgPaths.p270af370} fill="#CEAE5A" />
                <path d={svgPaths.p255b1f00} fill="#CEAE5A" />
                <path d={svgPaths.p2704b200} fill="#CEAE5A" />
              </svg>
            </div>
            <span className="text-[#ceae5a] text-[22px] lg:text-[28px] font-extralight font-sans">
              Vision
            </span>
          </div>
          <p className="text-[#f3f3f3] text-[14px] lg:text-[15px] leading-[22px] font-normal font-sans lg:min-h-[200px]">
            To become the first-choice partner for investors in the energy and precious metals sectors. Our long-term goal is to expand strategic corridors, lead in ethical sourcing, and enable access to essential commodities, especially across high-growth regions in the Middle East and Africa.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 backdrop-blur-[10.7px] border border-white/20 flex flex-col gap-[20px] p-[22px] pt-[24px] pb-[28px] rounded-tr-[10px] lg:rounded-tr-[10px] min-h-0"
          style={{ backgroundImage: "linear-gradient(146.6deg, rgba(0,0,0,0) 58.578%, rgba(0,0,0,0.8) 97.515%), linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 100%), linear-gradient(90deg, rgba(206,174,90,0.1) 0%, rgba(206,174,90,0.1) 100%)" }}
        >
          <div className="flex items-center gap-[27px]">
            <div className="h-[22px] w-[21px] lg:h-[26px] lg:w-[26px] shrink-0 opacity-80">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 35">
                <path d={svgPaths.p2a25ac80} fill="#CEAE5A" />
                <path d={svgPaths.p2866b800} fill="#CEAE5A" />
              </svg>
            </div>
            <span className="text-[#ceae5a] text-[22px] lg:text-[28px] font-extralight font-sans">
              Mission
            </span>
          </div>
          <p className="text-[#f3f3f3] text-[14px] lg:text-[15px] leading-[22px] font-normal font-sans lg:min-h-[200px]">
            To support the energy and precious metals sectors through an integrated business model that enhances sustainability, advances infrastructure, and maximizes value for every EDG partner—through strategic, intelligent solutions that deliver long-term growth and impact. We are driven by our dedication to operational efficiency, responsible sourcing, and long-term partnerships that empower global supply chains and energy access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

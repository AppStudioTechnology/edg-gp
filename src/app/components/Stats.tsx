import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-ixy99k2xf7";

const StatCard = ({ title, value, subtext, isDark = false, iconPath }: { title: string, value: string, subtext: string, isDark?: boolean, iconPath: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex-1 min-w-[200px] rounded-[8px] p-6 lg:p-[32px] border transition-all duration-500 flex flex-col gap-[32px] justify-between cursor-pointer ${
        isDark
          ? "bg-black border-transparent hover:shadow-[0_30px_60px_rgba(206,174,90,0.12)]"
          : "bg-white border-[#dce0e3] hover:border-[#ceae5a]/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-[40px] lg:gap-[52px] w-full">
        <h3 className={`text-[13px] lg:text-[15px] font-normal tracking-[-0.3px] leading-[20px] ${isDark ? "text-white" : "text-black"} font-sans`}>
          {title}
        </h3>
        <div className="flex items-end justify-between w-full">
          <div className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] shrink-0">
            <svg className="w-full h-full" viewBox="0 0 50 50">
              <g transform="rotate(180 25 25)">
                <path d={iconPath} fill="#CEAE5A" />
              </g>
            </svg>
          </div>
          <span className={`text-[28px] sm:text-[34px] lg:text-[48px] leading-none font-extralight tracking-[-2px] lg:tracking-[-2.5px] ${isDark ? "text-white" : "text-black"} font-sans`}>
            {value}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        <div className={`h-px w-full ${isDark ? "border-t border-white/40" : "border-t border-black/10"}`} />
        <p className={`text-[13px] lg:text-[14px] leading-[20px] font-normal tracking-[-0.18px] ${isDark ? "text-white" : "text-[#8c8c8c]"} font-sans`}>
          {subtext}
        </p>
      </div>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-6 sm:px-8 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[20px]">
          <StatCard
            title="Years of experience"
            value="30"
            subtext="leaders in industrial manufacturing & technology"
            isDark={true}
            iconPath={svgPaths.p270f2a00}
          />
          <StatCard
            title="Global locations"
            value="75"
            subtext="countries where the Group has built at least one project"
            iconPath={svgPaths.p2efe3f00}
          />
          <StatCard
            title="Total employee"
            value="1.2K"
            subtext="direct and indirect employees working on our projects"
            iconPath={svgPaths.p2134d800}
          />
          <StatCard
            title="Annual revenue"
            value="15B"
            subtext="total project value of all time across the globe"
            iconPath={svgPaths.p18c43880}
          />
        </div>
      </div>
    </section>
  );
};

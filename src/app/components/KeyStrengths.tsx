import React from "react";
import { motion } from "motion/react";
import { Target, Users, Network, Award } from "lucide-react";

const strengths = [
  {
    id: "01",
    title: "Targeted Market Focus",
    desc: "Over 7 years of consistent trade across MENA & East Africa.",
    icon: Target,
  },
  {
    id: "02",
    title: "Long-Term Partnerships",
    desc: "Partnerships with over 9 refineries and multiple governments.",
    icon: Users,
  },
  {
    id: "03",
    title: "Strong Networks",
    desc: "Trusted suppliers and customers spanning continents.",
    icon: Network,
  },
  {
    id: "04",
    title: "Reputation & Commitment",
    desc: "Delivering on promises with an excellent reputation.",
    icon: Award,
  },
];

export const KeyStrengths = () => {
  return (
    <section className="bg-white py-[48px] lg:py-[64px] px-4 sm:px-6 lg:px-[45px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header - Figma: gold label smaller, subtitle larger dark */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-[40px] lg:mb-[48px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#CEAE5A] uppercase tracking-[0.2em] block mb-3">
              Key Strengths
            </span>
            <h2 className="font-sans font-extralight text-[24px] sm:text-[28px] lg:text-[34px] text-[#151515] leading-[1.15] tracking-[-0.5px] max-w-[800px]">
              Beyond bullet points, our strengths define our story.
            </h2>
          </motion.div>

        </div>

        {/* Cards - 4 cards, smaller, luxury look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {strengths.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[12px] p-5 lg:p-6 border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#e8e8e8] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#ceae5a] flex items-center justify-center text-white shrink-0">
                    <IconComponent className="size-6" strokeWidth={2} />
                  </div>
                  <span className="font-sans font-normal text-[13px] text-[#8c8c8c]">
                    {item.id}.
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-[15px] lg:text-[16px] text-[#151515] leading-[1.4] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] lg:text-[14px] text-[#555] leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

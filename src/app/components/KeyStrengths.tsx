import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Target, Users, Network, Award, Layers } from "lucide-react";

const strengths = [
  {
    id: "01",
    title: "Targeted Market Focus",
    desc: "Over 7 years of consistent trade across MENA & East Africa.",
    icon: <Target className="size-10" />
  },
  {
    id: "02",
    title: "Long-Term Partnerships",
    desc: "Partnerships with over 9 refineries and multiple governments.",
    icon: <Users className="size-10" />
  },
  {
    id: "03",
    title: "Strong Networks",
    desc: "Trusted suppliers and customers spanning continents.",
    icon: <Network className="size-10" />
  },
  {
    id: "04",
    title: "Reputation & Commitment",
    desc: "Delivering on promises with an excellent reputation.",
    icon: <Award className="size-10" />
  },
  {
    id: "05",
    title: "Flexible Services",
    desc: "Responsive and tailored solutions for diverse client needs.",
    icon: <Layers className="size-10" />
  }
];

export const KeyStrengths = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (strengths.length - 2)); // Adjust for visible count
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (strengths.length - 2)) % (strengths.length - 2));
  };

  return (
    <section className="bg-[#fafafa] py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-[60px] lg:mb-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="font-sans font-medium text-[20px] lg:text-[24px] text-[#ceae5a] block mb-4">
              Key Strengths
            </span>
            <h2 className="font-sans font-extralight text-[28px] lg:text-[36px] text-black leading-[1.1] tracking-[-1px] max-w-[1010px]">
              Beyond bullet points, our strengths define our story.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <button 
              onClick={prev}
              className="w-[54px] h-[54px] rounded-[8px] border border-[#ceae5a] flex items-center justify-center text-black hover:bg-[#ceae5a] hover:text-white transition-all group"
            >
              <ChevronLeft className="size-6 transition-transform group-active:scale-90" />
            </button>
            <button 
              onClick={next}
              className="w-[54px] h-[54px] rounded-[8px] bg-[#ceae5a] flex items-center justify-center text-white hover:bg-[#b89b4f] transition-all group"
            >
              <ChevronRight className="size-6 transition-transform group-active:scale-90" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <motion.div 
            animate={{ x: `-${currentIndex * (422 + 33)}px` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-[33px]"
          >
            {strengths.map((item) => (
              <div 
                key={item.id}
                className="min-w-[260px] lg:min-w-[320px] bg-white rounded-[15px] p-6 lg:p-8 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.02)] border border-gray-50"
              >
                <div className="flex items-center justify-between mb-[26px]">
                  <div className="w-[84px] h-[84px] rounded-full bg-[#7CC03F] flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="font-sans font-medium text-[14.5px] text-[#8c8c8c]">
                    {item.id}.
                  </span>
                </div>
                
                <h3 className="font-sans font-medium text-[16px] lg:text-[18px] text-[#151515] leading-[1.6] mb-[14px]">
                  {item.title}
                </h3>
                <p className="font-sans text-[17px] lg:text-[19px] text-[#555] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12 lg:mt-[56px]">
          {[0, 1, 2].map((idx) => (
            <div 
              key={idx}
              className={`h-[2px] transition-all duration-300 ${
                currentIndex === idx ? "w-[44px] bg-[#ceae5a]" : "w-[22px] bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgIntegrity from "@/assets/1ac783f921d4f235befbc08ea089608fd5ca7f33.png";
import imgCustomerFocus from "@/assets/7a2bbfab3869ed54c0dac75db39e66942ee54f70.png";
import imgSustainability from "@/assets/c50290f6d265153aa2608cc818b152b7d1e913d3.png";
import imgInnovation from "@/assets/dc0ffd624c21a3b416fa79072c458ee4456224b8.png";

const values = [
  {
    number: "01.",
    title: "Integrity",
    image: imgIntegrity,
    description:
      "We conduct every transaction with honesty, transparency, and a deep respect for ethical practices. Trust is not just earned—it's built through consistent action, and we uphold that trust in every partnership, every time.",
  },
  {
    number: "02.",
    title: "Customer Focus",
    image: imgCustomerFocus,
    description:
      "Our clients are at the center of our strategy. We listen closely, respond swiftly, and deliver tailored solutions that drive results. Your success is our mission—every deal, every delivery, every day.",
  },
  {
    number: "03.",
    title: "Sustainability",
    image: imgSustainability,
    description:
      "We are committed to responsible sourcing, sustainable trading, and minimizing our environmental impact. From ethical gold sourcing to fuel efficiency, we champion practices that benefit both business and the planet.",
  },
  {
    number: "04.",
    title: "Innovation",
    image: imgInnovation,
    description:
      "In a rapidly changing world, we believe in staying ahead. We invest in technology, adopt data-driven insights, and continuously evolve to offer smarter, faster, and more agile trading solutions across our gold and petroleum divisions.",
  },
];

export const CoreValues = () => {
  return (
    <section className="bg-[#F5F5F5] py-[56px] lg:py-[80px] px-6 sm:px-8 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header: label + heading left, intro with gold bar right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#8c8c8c] text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.2em] font-sans">
              <span>WE ARE PROVIDING FOR YOUR BUSINESS.</span>
              <span>[WHY CHOOSE US]</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-extralight text-black font-sans leading-[1.1] tracking-[-1px]">
              Our Core values
            </h2>
          </div>
          <div className="border-l-[3px] border-[#ceae5a] pl-6 max-w-[520px]">
            <p className="text-[#555] text-[15px] lg:text-[17px] leading-[1.75] font-sans">
              At EDG Gold & Petroleum, our values are the foundation of everything we do. They define how we operate, how we serve, and how we grow—together with our clients, partners, and communities.
            </p>
          </div>
        </div>

        {/* 2x2 grid of value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.article
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-[8px] overflow-hidden border border-[#E9ECEF] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="p-5 lg:p-6 flex flex-col gap-4">
                <span className="text-[#ceae5a] font-bold text-[20px] lg:text-[22px] font-sans leading-none">
                  {value.number}
                </span>
                <div className="relative w-full aspect-[16/10] rounded-[6px] overflow-hidden border-b-2 border-r-2 border-[#2d5016]/30 border-solid">
                  <ImageWithFallback
                    src={value.image}
                    alt={value.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-black mb-2 font-sans tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[#555] text-[15px] lg:text-[17px] leading-[1.65] font-sans">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

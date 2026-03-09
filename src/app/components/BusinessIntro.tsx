import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import imgRig from "@/assets/722273c12fe8bd4b22edb18656ad4a5f9cab6430.png";
import imgGold from "@/assets/7bcae03c705cb7635baed22c6a6f334f4613b10e.png";
import { ArrowRight } from "lucide-react";

export const BusinessIntro = () => {
  const specializations = [
    "Petroleum products and derivatives",
    "Precious metals",
    "Infrastructure development for petroleum (storage terminals, ports, and related facilities)",
    "Financing for small to medium-scale mining projects in Africa and selected Asian markets.",
    "Strategic partnerships with gold refineries and crude oil refineries",
    "Alternative energy models and renewable energy project support",
  ];

  return (
    <section className="bg-white py-[56px] lg:py-[72px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Col 1: Tall portrait oil rig image — height matches center column content */}
        <div className="lg:col-span-4 h-[260px] sm:h-[300px] lg:h-[380px] rounded-[8px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <img
              src={imgRig}
              alt="Offshore operations"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Col 2: Gold bars image + bold text + Contact Us button (same total height as col 1) */}
        <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6 lg:h-[380px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[8px] overflow-hidden w-full aspect-[16/10] lg:aspect-[16/9] shrink-0"
          >
            <img src={imgGold} alt="Gold" className="w-full h-full object-cover" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[19px] text-[#1a1a1a] leading-[1.45] tracking-tight"
          >
            Our operations are powered by a diverse and highly skilled team spanning multiple geographies, operating with the same standard of precision and professionalism across all markets.
          </motion.p>
          <Link
            to="/contact"
            className="mt-auto inline-flex w-fit rounded-full overflow-hidden font-medium text-[14px] font-sans transition-all group"
          >
            <span className="bg-[#A98C49] group-hover:bg-[#967a3f] pl-[28px] pr-4 py-[12px] text-white transition-colors">
              Contact Us
            </span>
            <span className="flex items-center justify-center bg-[#222222] px-4 py-[12px] text-white group-hover:bg-[#333] transition-colors">
              <ArrowRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Col 3: Intro heading + bullet list (smaller list text) */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-sans font-semibold text-[15px] sm:text-[17px] lg:text-[19px] text-[#1a1a1a] leading-[1.5] tracking-tight mb-6">
              EDG Gold & Petroleum is a truly global enterprise with a strong presence in multiple GCC states, African nations, and Asian markets. We specialize in:
            </p>
            <ul className="flex flex-col gap-3">
              {specializations.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#CEAE5A] mt-2 shrink-0" />
                  <span className="font-sans text-[14px] sm:text-[15px] lg:text-[17px] text-[#333] leading-[1.55]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
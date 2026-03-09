import React from "react";
import { motion } from "motion/react";
import imgFrame9 from "@/assets/750d2003ab2fbe82c81bdb4dad6706aa07f3b34b.png";
import imgRectangle1 from "@/assets/b25bf13818fd4a847b2b7fc565076139896fafc8.png";

export const GoldTrading = () => {
  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[540px] flex items-end pt-[48px] pb-[60px] lg:pt-[56px] lg:pb-[72px] mt-10 sm:mt-14 lg:mt-0 lg:-mt-[96px]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={imgFrame9}
            alt="Gold Background"
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 59.459%, rgba(0,0,0,0.8) 114.36%), linear-gradient(270deg, rgba(206,174,90,0.3) 0%, rgba(0,0,0,0) 57.057%), linear-gradient(0deg, rgba(0,0,0,0) 45.746%, rgba(44,37,19,0.8) 95.546%), linear-gradient(180deg, rgba(0,0,0,0) 50.05%, rgba(206,174,90,0.5) 95.045%), linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)"
          }}
        />
        {/* Fade from solid black at top — seamless with Energy section */}
        <div
          className="absolute inset-x-0 top-0 h-[55%] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.6) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Left decorative bar */}
      <div className="absolute left-0 top-0 h-full w-[12px] lg:w-[15px] z-10">
        <img src={imgRectangle1} alt="" className="absolute max-w-none object-cover size-full" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[40px] max-w-[960px]"
        >
          <div className="flex flex-col gap-[16px]">
            <div className="bg-[#ceae5a] px-[8px] py-px rounded-[6px] w-fit">
              <span className="font-sans font-medium text-[10px] lg:text-[11px] text-white uppercase leading-[20px]">
                Precious Metals Division
              </span>
            </div>

            <h2 className="font-sans font-extralight text-[28px] md:text-[36px] lg:text-[42px] text-[#ceae5a] leading-[1.1] tracking-[-1px]">
              Gold Trading with Integrity
            </h2>

            <div className="flex flex-col gap-4 max-w-[760px]">
              <p className="font-sans font-normal text-[15px] lg:text-[16px] text-white leading-[1.65] lg:leading-[24px]">
                EDG's precious metals division is a trusted global player in the sourcing, aggregation, and distribution of gold and precious metals. We handle the full value chain — from raw Gold Dore sourced from verified mining operations across Africa and Asia, through to refined gold bullion traded with leading financial institutions and refineries worldwide.
              </p>
              <p className="font-sans font-normal text-[15px] lg:text-[16px] text-white leading-[1.65] lg:leading-[24px]">
                Our product range spans Gold Dore, Refined Investment-Grade Gold, and Bullion Trading, all governed by strict AML compliance, responsible sourcing protocols, and full chain-of-custody documentation. We provide bespoke trading solutions for governments, central banks, and commercial clients.
              </p>
            </div>

            {/* Product tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Gold Dore", "Refined Gold", "Bullion Trading"].map((p) => (
                <span key={p} className="border border-[#ceae5a]/40 text-[#ceae5a] text-[11px] font-sans font-medium px-3 py-1 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#967a3f" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#A98C49] text-white px-[28px] py-[12px] rounded-[12px] font-sans font-medium text-[14px] transition-all w-fit hover:bg-[#967a3f]"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

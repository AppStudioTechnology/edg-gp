import React from "react";
import { motion } from "motion/react";
import imgFrame9 from "@/assets/750d2003ab2fbe82c81bdb4dad6706aa07f3b34b.png";
import imgRectangle1 from "@/assets/b25bf13818fd4a847b2b7fc565076139896fafc8.png";

export const GoldTrading = () => {
  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[540px] flex items-end pt-[48px] pb-[60px] lg:pt-[56px] lg:pb-[72px] -mt-[72px] lg:-mt-[96px]">
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
                In parallel with our energy operations, EDG Gold is a trusted player in the global gold and precious metals trade. We provide end-to-end gold trading services—from sourcing and aggregation to final distribution—ensuring full traceability, compliance, and security at every step.
              </p>
              <p className="font-sans font-normal text-[15px] lg:text-[16px] text-white leading-[1.65] lg:leading-[24px]">
                We support our clients with access to physical gold and custom trading solutions that align with investment, treasury, or commercial goals. Our approach blends traditional values of trust with modern trading platforms and data-driven decision-making.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#b89b4f" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#ceae5a] border border-[#ceae5a] px-[20px] py-[8px] rounded-[8px] font-sans font-medium text-[13px] lg:text-[14px] text-white leading-[22px] transition-all w-fit"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

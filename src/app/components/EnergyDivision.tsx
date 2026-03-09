import React from "react";
import { motion } from "motion/react";
import refineryImg from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";
import imgRectangle1 from "@/assets/b25bf13818fd4a847b2b7fc565076139896fafc8.png";

const products = [
  "EN590 Diesel",
  "Gasoline (RON 91 / RON 95)",
  "Jet A1",
  "Fuel Oil",
  "Bitumen",
  "LPG",
  "LNG",
];

export const EnergyDivision = () => {
  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[540px] flex items-end pt-[60px] pb-[60px] lg:pt-[56px] lg:pb-[72px]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={refineryImg}
            alt="Refinery background"
            className="absolute max-w-none object-cover size-full"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%), linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%)"
          }}
        />
        {/* Fade to solid black at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 25%, rgba(0,0,0,0.75) 60%, #000 100%)",
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
                Energy Division
              </span>
            </div>

            <h2 className="font-sans font-extralight text-[28px] md:text-[36px] lg:text-[42px] text-white leading-[1.1] tracking-[-1px]">
              Energy Division<br />
              Petroleum Trading Excellence
            </h2>

            <div className="flex flex-col gap-4 max-w-[760px]">
              <p className="font-sans font-normal text-[15px] lg:text-[16px] text-white leading-[1.65] lg:leading-[24px]">
                EDG's energy trading division is a full-spectrum refined petroleum products supplier operating across key markets in the Middle East, Africa, and Asia. We serve governments, national oil companies, private corporations, and industrial operators with a complete portfolio of energy commodities — from transportation fuels to industrial and infrastructure-grade products — all delivered with strict compliance, verifiable sourcing, and competitive terms.
              </p>
            </div>

            {/* Product tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {products.map((p) => (
                <span key={p} className="border border-white/30 text-white text-[11px] font-sans font-medium px-3 py-1 rounded-full">
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

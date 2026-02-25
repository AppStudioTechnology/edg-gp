import React from "react";
import { motion } from "motion/react";
import refineryImg from "@/assets/7d6efaa958460cabdaf35603cb1f6b6f408a939a.png";

export const EnergyDivision = () => {
  const products = ["Fuel Oil", "Gas Oil", "Gasoil (D2)", "Gasoline (Mogas)"];

  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[540px] flex items-center pt-[60px] pb-[48px] lg:pt-[72px] lg:pb-[56px]">
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
        <div className="absolute inset-0 bg-black/50" />
        {/* Fade to solid black at bottom — no visible line at seam */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 25%, rgba(0,0,0,0.75) 60%, #000 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-end">

          {/* Products List - shows second on mobile (order-2), first on desktop (order-1) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-[28px] lg:flex-1 order-2 lg:order-1"
          >
            <div className="flex flex-col gap-[18px]">
              <h3 className="font-sans font-semibold text-[14px] lg:text-[16px] text-white leading-[22px]">
                Our Products
              </h3>
              <ul className="flex flex-col gap-[4px]">
                {products.map((item) => (
                  <li key={item} className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] bg-[#ceae5a] shrink-0" />
                    <span className="font-sans font-medium text-[12px] lg:text-[13px] text-white leading-[18px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#967a3f" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#A98C49] text-white px-[28px] py-[12px] rounded-[12px] font-sans font-medium text-[14px] transition-all w-fit hover:bg-[#967a3f]"
            >
              Join as an Investor
            </motion.button>
          </motion.div>

          {/* Heading + Description - shows first on mobile (order-1), second on desktop (order-2) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-[24px] lg:flex-1 order-1 lg:order-2"
          >
            <h2 className="font-sans font-extralight text-[28px] md:text-[36px] lg:text-[42px] text-white leading-[1.1] tracking-[-1px]">
              Energy Division<br />
              Petroleum Trading Excellence
            </h2>
            <p className="font-sans font-normal text-[15px] lg:text-[16px] text-white leading-[1.65] lg:leading-[24px]">
              We supply a wide range of refined oil products tailored to meet the evolving needs of government agencies, public institutions, and private corporations. Our operational strength lies in our ability to offer reliable, on-time delivery with competitive pricing and full compliance with international quality standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

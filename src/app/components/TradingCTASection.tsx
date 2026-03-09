import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Briefcase } from "lucide-react";

export const TradingCTASection = () => {
  return (
    <section className="bg-white py-[72px] lg:py-[100px] px-4 sm:px-6 lg:px-[45px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20 rounded-[20px] border border-[#e8e8e8] bg-[#f8f7f5] px-8 sm:px-12 py-12 lg:py-16"
        >
          {/* Left: label + heading + desc */}
          <div className="flex flex-col gap-5 max-w-[640px]">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#ceae5a]" />
            <span className="font-sans text-[11px] font-medium tracking-[2px] uppercase text-[#ceae5a]">
              Engage With Us
            </span>
          </div>
          <h2 className="font-sans font-extralight text-[32px] md:text-[40px] lg:text-[48px] text-black leading-[1.1] tracking-[-1px]">
            Ready to Trade?<br />
            Submit a Trading Inquiry.
          </h2>
          <p className="font-sans text-[15px] lg:text-[17px] text-[#555] leading-[1.7]">
              Looking to trade petroleum products or precious metals? Connect with our team to discuss spot, forward, and term contract opportunities tailored to your specific requirements. Our trading desk responds within 24 hours.
            </p>
          </div>

          {/* Right: icon card + CTA */}
          <div className="flex flex-col gap-6 shrink-0">
            <div className="flex items-start gap-4 p-6 rounded-[16px] border border-[#ceae5a]/30 bg-white max-w-[320px] shadow-sm">
              <div className="w-11 h-11 rounded-[10px] bg-[#ceae5a]/15 flex items-center justify-center shrink-0">
                <Briefcase className="size-5 text-[#ceae5a]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans font-semibold text-[16px] text-black leading-tight">
                  Submit Trading Inquiry
                </h3>
                <p className="font-sans text-[13px] text-[#777] leading-[1.6]">
                  Petroleum products or precious metals — spot, forward & term contracts available.
                </p>
              </div>
            </div>

            <Link to="/contact">
              <button className="w-full flex items-center justify-center gap-2 bg-[#A98C49] hover:bg-[#967a3f] text-white px-8 py-4 rounded-[12px] font-sans font-medium text-[15px] transition-all active:scale-95 group">
                Submit Inquiry
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

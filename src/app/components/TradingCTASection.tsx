import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, FileText, Handshake, Briefcase } from "lucide-react";

const ctas = [
  {
    icon: FileText,
    title: "Request Supply Offer",
    desc: "Submit your product specifications, volume requirements, and delivery destination. Our trading desk will respond with a competitive supply offer within 24 hours.",
    button: "Request Now",
    style: "gold",
  },
  {
    icon: Briefcase,
    title: "Submit Trading Inquiry",
    desc: "Looking to trade petroleum products or precious metals? Connect with our team to discuss spot, forward, and term contract opportunities tailored to your needs.",
    button: "Submit Inquiry",
    style: "dark",
  },
  {
    icon: Handshake,
    title: "Become a Strategic Partner",
    desc: "We actively seek long-term relationships with logistics providers, refineries, national oil companies, and commodity traders. Let's explore how we can grow together.",
    button: "Partner With Us",
    style: "outline",
  },
];

export const TradingCTASection = () => {
  return (
    <section className="bg-[#0a0a0a] py-[72px] lg:py-[100px] px-4 sm:px-6 lg:px-[45px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[56px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 max-w-[640px]"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#ceae5a]" />
            <span className="font-sans text-[11px] font-medium tracking-[2px] uppercase text-[#ceae5a]">
              Engage With Us
            </span>
          </div>
          <h2 className="font-sans font-extralight text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] tracking-[-1px]">
            Ready to Trade?<br />
            Let's Connect.
          </h2>
          <p className="font-sans text-[15px] lg:text-[17px] text-white/60 leading-[1.7]">
            Whether you need a commodity supply offer, want to submit a trading inquiry, or are looking for a long-term strategic partnership — our team is ready to respond.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ctas.map((cta, idx) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col gap-6 p-8 rounded-[16px] border transition-all duration-300 group cursor-pointer ${
                cta.style === "gold"
                  ? "bg-[#ceae5a] border-[#ceae5a] hover:bg-[#b89b4f]"
                  : cta.style === "dark"
                  ? "bg-[#151515] border-[#2a2a2a] hover:border-[#ceae5a]/40"
                  : "bg-transparent border-white/10 hover:border-[#ceae5a]/40"
              }`}
            >
              <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center ${
                cta.style === "gold" ? "bg-black/20" : "bg-[#ceae5a]/10"
              }`}>
                <cta.icon className={`size-5 ${cta.style === "gold" ? "text-white" : "text-[#ceae5a]"}`} strokeWidth={1.5} />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <h3 className={`font-sans font-semibold text-[18px] leading-tight ${cta.style === "gold" ? "text-white" : "text-white"}`}>
                  {cta.title}
                </h3>
                <p className={`font-sans text-[14px] leading-[1.65] ${cta.style === "gold" ? "text-white/80" : "text-white/50"}`}>
                  {cta.desc}
                </p>
              </div>

              <Link to="/contact">
                <div className={`flex items-center gap-2 font-sans font-medium text-[13px] group/btn ${
                  cta.style === "gold" ? "text-white" : "text-[#ceae5a]"
                }`}>
                  {cta.button}
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

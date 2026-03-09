import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Scale, Leaf, FileCheck, Globe, Lock } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "EDG operates under a robust regulatory framework governed by UAE federal law and international commodity trading standards. All transactions are structured to comply with the applicable legal, financial, and cross-border trade regulations in each jurisdiction of operation.",
  },
  {
    icon: Scale,
    title: "AML Compliance",
    desc: "We maintain a comprehensive Anti-Money Laundering (AML) program aligned with FATF guidelines and UAE Central Bank regulations. This includes rigorous KYC (Know Your Customer) procedures, transaction monitoring, and due diligence on all trading counterparties.",
  },
  {
    icon: Leaf,
    title: "Responsible Sourcing",
    desc: "Our precious metals sourcing program adheres to the OECD Due Diligence Guidance for responsible supply chains. All gold sourced — whether Dore or refined — undergoes origin verification, environmental review, and chain-of-custody documentation.",
  },
  {
    icon: FileCheck,
    title: "Trade Documentation",
    desc: "Every transaction is supported by full and verifiable trade documentation, including certificates of origin, quality certificates, inspection reports, and customs documentation — ensuring transparency from source to delivery.",
  },
  {
    icon: Globe,
    title: "International Standards",
    desc: "Our operations follow internationally recognised standards including ISO quality frameworks, LBMA good delivery standards for gold, and EN590/ASTM standards for petroleum products. We actively engage independent inspectors for quality verification.",
  },
  {
    icon: Lock,
    title: "Data & Counterparty Security",
    desc: "We apply strict information security protocols and counterparty risk frameworks. All trading relationships are subject to ongoing compliance reviews, credit assessments, and periodic audits to protect the interests of all parties involved.",
  },
];

export const ComplianceGovernance = () => {
  return (
    <section className="bg-white py-[72px] lg:py-[100px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start lg:items-end justify-between"
        >
          <div className="flex flex-col gap-4 max-w-[560px]">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#ceae5a]" />
              <span className="font-sans text-[11px] font-medium tracking-[2px] uppercase text-[#ceae5a]">
                Governance Framework
              </span>
            </div>
            <h2 className="font-sans font-extralight text-[32px] md:text-[40px] lg:text-[48px] text-black leading-[1.1] tracking-[-1px]">
              Compliance &<br />
              Governance
            </h2>
          </div>
          <p className="font-sans text-[15px] lg:text-[17px] text-[#555] leading-[1.7] max-w-[560px]">
            Trust is the foundation of global trade. EDG Gold & Petroleum is committed to operating with the highest standards of regulatory compliance, financial integrity, and responsible sourcing — protecting our clients, partners, and the communities we serve.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col gap-5 p-7 rounded-[14px] border border-[#e8e8e8] hover:border-[#ceae5a]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-[10px] bg-[#ceae5a]/10 flex items-center justify-center group-hover:bg-[#ceae5a]/20 transition-colors">
                <pillar.icon className="size-5 text-[#A98C49]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-[16px] text-black leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[14px] text-[#666] leading-[1.65]">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

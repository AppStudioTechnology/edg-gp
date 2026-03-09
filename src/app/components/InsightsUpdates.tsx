import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, Newspaper, Users } from "lucide-react";

const insights = [
  {
    category: "Market Insight",
    icon: TrendingUp,
    title: "Global Energy Markets: Navigating Supply Volatility in 2025",
    excerpt: "With ongoing geopolitical tensions and OPEC+ adjustments, refined product premiums in the Middle East and African markets have seen significant movement. EDG's trading desk provides strategic analysis for buyers and sellers.",
    date: "Q1 2025",
  },
  {
    category: "Industry Update",
    icon: Newspaper,
    title: "Gold Dore Flows: West Africa Maintains Strong Export Momentum",
    excerpt: "West African gold mining output continues to contribute significantly to global supply chains. EDG's responsible sourcing program is actively supporting verified mine operations across the region.",
    date: "Q4 2024",
  },
  {
    category: "Regulatory",
    icon: Newspaper,
    title: "UAE AML Framework Updates: What Commodity Traders Need to Know",
    excerpt: "Recent updates to the UAE's AML regulatory framework introduce new obligations for commodity trading firms. EDG's compliance team has reviewed and updated all internal procedures to ensure full alignment.",
    date: "Q3 2024",
  },
];

export const InsightsUpdates = () => {
  return (
    <section className="bg-white py-[72px] lg:py-[100px] px-4 sm:px-6 lg:px-[45px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-end justify-between"
        >
          <div className="flex flex-col gap-4 max-w-[480px]">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#ceae5a]" />
              <span className="font-sans text-[11px] font-medium tracking-[2px] uppercase text-[#ceae5a]">
                Corporate Insights
              </span>
            </div>
            <h2 className="font-sans font-extralight text-[32px] md:text-[40px] lg:text-[48px] text-black leading-[1.1] tracking-[-1px]">
              Market Insights<br />
              & Updates
            </h2>
          </div>
          <Link to="/contact">
            <button className="flex items-center gap-2 font-sans text-[14px] font-medium text-[#A98C49] hover:text-[#967a3f] transition-colors group">
              View All Insights
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        {/* Insights cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {insights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-5 p-7 rounded-[14px] border border-[#e8e8e8] hover:border-[#ceae5a]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#ceae5a]">
                  {item.category}
                </span>
                <span className="font-sans text-[11px] text-[#aaa]">{item.date}</span>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-sans font-semibold text-[16px] text-black leading-[1.4]">
                  {item.title}
                </h3>
                <p className="font-sans text-[14px] text-[#666] leading-[1.65]">
                  {item.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Careers teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[16px] bg-[#0a0a0a] px-8 sm:px-12 py-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-[10px] bg-[#ceae5a]/10 flex items-center justify-center shrink-0">
              <Users className="size-5 text-[#ceae5a]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-sans font-semibold text-[18px] text-white">Career Opportunities</h3>
              <p className="font-sans text-[14px] text-white/50 leading-[1.6] max-w-[480px]">
                EDG is growing its trading, compliance, and logistics teams across Dubai and regional offices. We seek professionals who combine commodity market expertise with integrity and ambition.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <button className="bg-[#A98C49] hover:bg-[#967a3f] text-white px-6 py-3 rounded-[12px] font-sans font-medium text-[14px] transition-all whitespace-nowrap active:scale-95 shrink-0">
              Explore Careers
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

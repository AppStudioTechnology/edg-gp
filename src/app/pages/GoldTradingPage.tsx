import React, { useEffect } from "react";
import { GoldHero } from "../components/GoldHero";
import { GoldOverview } from "../components/GoldOverview";
import { GoldTradingService } from "../components/GoldTradingService";
import { GoldLogistics } from "../components/GoldLogistics";
import { GoldStats } from "../components/GoldStats";
import { GoldDynamics } from "../components/GoldDynamics";
import { GoldIntegrity } from "../components/GoldIntegrity";
import { CTABanner } from "../components/CTABanner";

export const GoldTradingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Precious Metals & Gold Trading – EDG Gold & Petroleum";
  }, []);

  return (
    <main className="flex flex-col w-full bg-white relative z-0 overflow-x-hidden">
      <GoldHero />
      <GoldOverview />
      <GoldTradingService />
      <GoldLogistics />
      <GoldStats />
      <GoldDynamics />
      <GoldIntegrity />
      <CTABanner />
    </main>
  );
};

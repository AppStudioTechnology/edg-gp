import React, { useEffect } from "react";
import { OperationsHero } from "../components/OperationsHero";
import { MarketPresence } from "../components/MarketPresence";
import { RegionalShowcase } from "../components/RegionalShowcase";
import { FocusOnMEA } from "../components/FocusOnMEA";
import { PartnerTrust } from "../components/PartnerTrust";
import { CTABanner } from "../components/CTABanner";

export const OperationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Operations & Market Presence – EDG Gold & Petroleum";
  }, []);

  return (
    <main className="flex flex-col w-full bg-white relative z-0 overflow-x-hidden">
      <OperationsHero />
      <MarketPresence />
      <RegionalShowcase />
      <FocusOnMEA />
      <PartnerTrust />
      <CTABanner />
    </main>
  );
};

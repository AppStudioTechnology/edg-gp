import React, { useEffect } from "react";
import { BusinessApproachHero } from "../components/BusinessApproachHero";
import { BusinessIntro } from "../components/BusinessIntro";
import { StrategicSectors } from "../components/StrategicSectors";
import { KeyStrengths } from "../components/KeyStrengths";
import { EmpoweringTrade } from "../components/EmpoweringTrade";
import { CTABanner } from "../components/CTABanner";

export const BusinessApproachPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Business Approach – EDG Gold & Petroleum";
  }, []);

  return (
    <main className="flex flex-col w-full bg-white relative z-0 overflow-x-hidden">
      <BusinessApproachHero />
      <BusinessIntro />
      <StrategicSectors />
      <KeyStrengths />
      <EmpoweringTrade />
      <CTABanner />
    </main>
  );
};

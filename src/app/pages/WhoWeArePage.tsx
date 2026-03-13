import React, { useEffect } from "react";
import { HeroWhoWeAre } from "../components/HeroWhoWeAre";
import { IntroSection } from "../components/IntroSection";
import { VisionMission } from "../components/VisionMission";
import { CoreValues } from "../components/CoreValues";
import { EnergyOpportunity } from "../components/EnergyOpportunity";
import { CTABanner } from "../components/CTABanner";

export const WhoWeArePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Who We Are – EDG Gold & Petroleum";
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HeroWhoWeAre />
      <IntroSection />
      <VisionMission />
      <CoreValues />
      <EnergyOpportunity />
      <CTABanner />
    </div>
  );
};

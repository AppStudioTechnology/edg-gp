import React, { useEffect } from "react";
import { ContactHero } from "../components/ContactHero";
import { ContactFormSection } from "../components/ContactFormSection";
import { MapSection } from "../components/MapSection";
import { CTABanner } from "../components/CTABanner";

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us – EDG Gold & Petroleum";
  }, []);

  return (
    <main className="flex flex-col w-full bg-white relative z-0">
      <ContactHero />
      <ContactFormSection />
      <MapSection />
      <CTABanner 
        badge="YOUR JOURNEY STARTS NOW"
        description="Our team is committed to supporting you at every step—offering clear insights, reliable solutions, and prompt responses to all your inquiries. Whether it’s partnership opportunities, product specifications, or operational details, we’re here to help."
      />
    </main>
  );
};

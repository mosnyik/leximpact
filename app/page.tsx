import CommunityVoicesSection from "@/components/CommunityVoicesSection";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import Hero from "@/components/Hero";
import PlatformSection from "@/components/PlatformSection";
import React from "react";

export default async function Home() {
  return (
    <>
      <div>
        <Hero />
        <PlatformSection />
        <CommunityVoicesSection />
        <GetStartedSection />
        <Footer />
      </div>
    </>
  );
}

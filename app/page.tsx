import CommunityVoicesSection from "@/components/CommunityVoicesSection";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import Hero from "@/components/hero";
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

      {/* Arrange your components here
    Navbar
    main
    footer
    Note I left the boilerplate code in place for you to see how it works.
    I would remove it when it is time */}
      {/* <Hero /> */}
      {/* <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main> */}
    </>
  );
}

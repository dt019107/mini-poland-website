import heroFallImg from '../assets/mini/hero-fall.png';
import heroUntamedImg from '../assets/mini/hero-untamed.png';
import heroPaulSmithImg from '../assets/mini/hero-paul-smith.png';

import { MiniHeader } from '../components/mini/MiniHeader';
import { CampaignHero } from '../components/mini/CampaignHero';
import { QuickActionsBar } from '../components/mini/QuickActionsBar';
import { ModelSelectorCarousel } from '../components/mini/ModelSelectorCarousel';
import { LearnMoreGrid } from '../components/mini/LearnMoreGrid';
import { NewsCarousel } from '../components/mini/NewsCarousel';
import { BackToTop } from '../components/mini/BackToTop';
import { MiniFooter } from '../components/mini/MiniFooter';
import { CookieConsentBanner } from '../components/mini/CookieConsentBanner';

export function MiniWebsitePage() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#000000] font-mini-sans antialiased selection:bg-black selection:text-white" id="top">
      {/* 1. Header & Navigation */}
      <MiniHeader />

      <main id="main-content">
        {/* 2. Hero 1: Autumn Campaign with Autoplay Video */}
        <CampaignHero
          id="hero-fall"
          videoSrc={`${import.meta.env.BASE_URL}videos/hero-video.mp4`}
          imageSrc={heroFallImg}
          headline="MOVE INTO A MINI THIS FALL."
          italicSubtitle="Discover our latest benefits offer and make your dream come true!"
          subText="Starting from just PLN 690 net per month."
          primaryCtaText="Check ready for pickup"
          secondaryCtaText="Learn the details of the offer"
          wltpDisclosureText="Fuel consumption (WLTP combined): 4.6-8.2 l/100 km; CO2 emissions (WLTP combined): 120-186 g/km. Electric power consumption (WLTP combined): 14-16.4 kWh/100 km; CO2 emissions (WLTP combined): 0g/km; electric range (WLTP combined): 301-405 km."
        />

        {/* 3. Quick Action Buttons */}
        <QuickActionsBar />

        {/* 4. Hero 2: Countryman Untamed Edition */}
        <CampaignHero
          id="hero-untamed"
          imageSrc={heroUntamedImg}
          headline="NEW MINI COUNTRYMAN UNTAMED EDITION."
          italicSubtitle="No road? Perfect."
          primaryCtaText="Learn more"
          secondaryCtaText="Set up now"
          wltpDisclosureText="MINI Countryman: Untamed page Dis - Fuel consumption (WLTP combined): 5.9-6.9 l/100 km; CO2 emissions (WLTP combined): 133-155 g/km."
        />

        {/* 5. Interactive Model Carousel */}
        <ModelSelectorCarousel />

        {/* 6. Hero 3: MINI Paul Smith Edition */}
        <CampaignHero
          id="hero-paul-smith"
          imageSrc={heroPaulSmithImg}
          headline="MINI PAUL SMITH EDITION."
          italicSubtitle="British classics with a unique character."
          primaryCtaText="Discover more"
          secondaryCtaText="Order"
          wltpDisclosureText="MINI Cooper Electric: Electric consumption (WLTP combined): 13.8-15.5 kWh/100 km; CO2 emissions (WLTP combined): 0g/km; Electric range (WLTP combined): 290-400 km. Financing details"
        />

        {/* 7. "LEARN MORE" 2x2 Feature Grid */}
        <LearnMoreGrid />

        {/* 8. "NEWS FROM MINI" Carousel */}
        <NewsCarousel />

        {/* 9. Back to Top Action */}
        <BackToTop />
      </main>

      {/* 10 & 11. Mega Footer & Legal Notice Bar */}
      <MiniFooter />

      {/* Prominent Cookie Consent Surface Card */}
      <CookieConsentBanner />
    </div>
  );
}

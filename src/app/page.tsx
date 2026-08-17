import { AboutSection } from "@/components/sections/about-section";
import { ClassesSection } from "@/components/sections/classes-section";
import { EditorialBanner } from "@/components/sections/editorial-banner";
import { FeelingGallery } from "@/components/sections/feeling-gallery";
import { HeroSection } from "@/components/sections/hero-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { TeamSection } from "@/components/sections/team-section";
import { SiteFrame } from "@/components/ui/site-frame";

export default function HomePage() {
  return (
    <SiteFrame>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <EditorialBanner />
      <ScheduleSection />
      <TeamSection />
      <FeelingGallery />
    </SiteFrame>
  );
}

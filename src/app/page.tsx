import ExperienceSection from "./components/home/experience-section";
import ProjectsSection from "./components/home/projects-section";
import OtherStuffSection from "./components/home/other-stuff-section";
import AboutMeSection from "./components/home/about-me-section";
import Footer from "./components/home/footer";
import FeaturesSection from "./components/home/features-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 pb-3 lg:pb-6 lg:px-24 lg:pt-16 font-mono bg-white">
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <OtherStuffSection />
      <FeaturesSection />
    </main>
  );
}

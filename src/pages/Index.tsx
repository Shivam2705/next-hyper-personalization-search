import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Consumer360Section from "@/components/Consumer360Section";
import AgenticFlowSection from "@/components/AgenticFlowSection";
import PersonalisedStoreSection from "@/components/PersonalisedStoreSection";
import CustomerStoriesSection from "@/components/CustomerStoriesSection";
import ExplainabilityPanel from "@/components/ExplainabilityPanel";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "store", "how-it-works", "stories"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <HeroSection onEnterStore={() => handleNavigate("store")} />
        <Consumer360Section />
        <AgenticFlowSection />
        <PersonalisedStoreSection />
        <CustomerStoriesSection />
      </main>

      <FooterSection />
      <ExplainabilityPanel />
    </div>
  );
};

export default Index;

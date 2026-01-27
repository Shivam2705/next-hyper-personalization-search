import { useState } from "react";
import { Users } from "lucide-react";
import CustomerStoryCard from "./CustomerStoryCard";

const customerProfiles = [
  {
    id: "emma",
    name: "Emma",
    avatar: "",
    location: "Reading, UK",
    intent: "Workwear / Smart Casual",
    description: "Working professional who shops frequently on NEXT for workwear and smart-casual outfits. She prefers clean silhouettes, neutral colours, and reliable fit. Values quality over trends.",
    whatTheySee: [
      "Tailored midi dresses ranked first",
      "Neutral colours shown prominently",
      "Clean, structured silhouettes prioritised",
      "Fewer trend-heavy items",
    ],
    reasoning: "Ranked higher due to Emma's low return history, preference for structured fits, neutral colours, and past success with workwear purchases.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "david",
    name: "David",
    avatar: "",
    location: "Manchester, UK",
    intent: "Casualwear & Kidswear",
    description: "Value-conscious family shopper who prioritises durability and multi-buy offers. Regularly shops for the whole family, especially kids. Responsive to promotional campaigns.",
    whatTheySee: [
      "Multi-buy offers surfaced first",
      "Casual, durable styles prioritised",
      "Kidswear cross-sell shown early",
      "Value bundles highlighted",
    ],
    reasoning: "Prioritised based on price sensitivity, family purchases, and high offer responsiveness. Cross-sell triggered by kidswear browsing patterns.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "aisha",
    name: "Aisha",
    avatar: "",
    location: "London, UK",
    intent: "Occasion & Eveningwear",
    description: "Trend-forward shopper who engages heavily with new-in categories. Early adopter of new styles, prefers bold colours and statement pieces for occasions and events.",
    whatTheySee: [
      "New-in styles ranked higher",
      "Bolder, statement visuals shown",
      "Trend-led silhouettes prioritised",
      "Occasion-specific recommendations",
    ],
    reasoning: "High engagement with new collections and trend-led categories drives ranking and imagery. Occasion affinity detected from past purchases and browsing.",
    color: "from-purple-500 to-pink-500",
  },
];

const CustomerStoriesSection = () => {
  const [activeProfile, setActiveProfile] = useState<string>("emma");

  return (
    <section id="stories" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real Shopper Experiences</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Customer <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how the same NEXT catalog transforms for different shoppers. 
            Each customer sees a uniquely curated experience.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {customerProfiles.map((profile) => (
            <CustomerStoryCard
              key={profile.id}
              profile={profile}
              isActive={activeProfile === profile.id}
              onClick={() => setActiveProfile(profile.id)}
            />
          ))}
        </div>

        {/* Visual Comparison Hint */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Click on each profile to see their personalised experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;

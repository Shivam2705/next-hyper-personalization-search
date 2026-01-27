import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  ArrowRight, 
  Sparkles,
  MapPin,
  Briefcase,
  ShoppingBag,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Persona {
  id: string;
  name: string;
  title: string;
  location: string;
  intent: string;
  avatar: string;
  description: string;
  style: string;
  priceRange: string;
}

export const personas: Persona[] = [
  {
    id: "emma",
    name: "Emma",
    title: "Working Professional",
    location: "Reading, UK",
    intent: "Workwear & Smart Casual",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    description: "Career-focused shopper who values structured fits, neutral colours, and timeless pieces that transition from office to evening.",
    style: "Clean, Structured",
    priceRange: "Mid-to-Premium"
  },
  {
    id: "david",
    name: "David",
    title: "Family Shopper",
    location: "Manchester, UK",
    intent: "Casualwear & Kidswear",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    description: "Value-conscious parent looking for durable, practical clothing for the whole family. Responds well to multi-buy offers.",
    style: "Casual, Practical",
    priceRange: "Value-Focused"
  },
  {
    id: "aisha",
    name: "Aisha",
    title: "Trend-Forward Shopper",
    location: "London, UK",
    intent: "Occasion & Eveningwear",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    description: "Fashion-forward shopper who loves new arrivals, bold styles, and trend-led pieces for special occasions.",
    style: "Trend-Led, Bold",
    priceRange: "Premium"
  }
];

const Login = () => {
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const handleLogin = () => {
    if (selectedPersona) {
      navigate(`/store?persona=${selectedPersona}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">NEXT</span>
          </div>
          <button 
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Overview
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Demo Experience</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Shopper Persona</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select a persona to experience how the same NEXT catalog appears differently 
              based on individual shopping behavior and preferences.
            </p>
          </div>

          {/* Persona Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {personas.map((persona) => (
              <Card
                key={persona.id}
                className={`cursor-pointer transition-all duration-300 hover-lift bg-card border-2 ${
                  selectedPersona === persona.id 
                    ? "border-primary ring-2 ring-primary/20" 
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedPersona(persona.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className={`relative mb-4 ${selectedPersona === persona.id ? "ring-4 ring-primary/30" : ""} rounded-full`}>
                      <img
                        src={persona.avatar}
                        alt={persona.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      {selectedPersona === persona.id && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Name & Title */}
                    <h3 className="text-xl font-bold mb-1">{persona.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{persona.title}</p>

                    {/* Details */}
                    <div className="w-full space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{persona.location}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{persona.intent}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground mb-4">{persona.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                        {persona.style}
                      </span>
                      <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                        {persona.priceRange}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Login Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleLogin}
              disabled={!selectedPersona}
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enter as {selectedPersona ? personas.find(p => p.id === selectedPersona)?.name : "..."} 
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              You'll see personalized product rankings based on this persona's profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

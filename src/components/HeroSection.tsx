import { ArrowRight, Sparkles, Brain, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onEnterStore: () => void;
}

const HeroSection = ({ onEnterStore }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/15 rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container relative z-10 px-4 md:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Agentic AI × Consumer 360°
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Every Shopper Sees a</span>
            <br />
            <span className="gradient-text">Different NEXT.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Agentic AI dynamically reorders products, visuals, and
            recommendations based on who you are, how you shop, and what you
            need right now.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onEnterStore}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-lg glow-effect"
            >
              <ShoppingBag className="w-5 h-5" />
              Enter Personalised Store
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary text-foreground gap-2 px-8 py-6 text-lg"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Sparkles className="w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-400 grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                360°
              </div>
              <div className="text-sm text-muted-foreground">
                Consumer Signals
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                Real-time
              </div>
              <div className="text-sm text-muted-foreground">
                Personalization
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                Agentic
              </div>
              <div className="text-sm text-muted-foreground">AI Decisions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect } from "react";
import { ArrowDown, ArrowUp, Sparkles, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const genericMetrics = [
  { icon: ArrowDown, label: "15–25% lower conversion", negative: true },
  { icon: ArrowUp, label: "20–30% higher bounce rate", negative: true },
  { icon: ArrowUp, label: "18–25% higher returns", negative: true },
  { icon: ArrowDown, label: "Lower decision confidence", negative: true },
];

const agenticMetrics = [
  { icon: ArrowUp, label: "20–35% conversion lift", negative: false },
  { icon: ArrowUp, label: "25–40% add-to-bag uplift", negative: false },
  { icon: ArrowUp, label: "10–20% AOV increase", negative: false },
  { icon: ArrowDown, label: "15–30% return reduction", negative: false },
];

const ChoiceOverloadSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCurated, setShowCurated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowCurated(true);
        setTimeout(() => {
          setShowCurated(false);
          setIsAnimating(false);
        }, 3000);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            More Products Don't Drive Conversion.
            <br />
            <span className="gradient-text">Relevant Products Do.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Agentic AI increases shopper confidence by curating fewer, more relevant results per search.
          </p>
        </div>

        {/* Comparison Panels */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 relative">
          {/* Center Connector - Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="glass-card px-4 py-3 flex items-center gap-2 cursor-help border-primary/30">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    Agentic AI removes irrelevance — not choice.
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Powered by Agentic Ranking & Visual Intelligence</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* LEFT PANEL - Generic Search */}
          <div className="glass-card p-6 lg:p-8 border-destructive/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent" />
            
            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-sm font-semibold text-destructive uppercase tracking-wider">
                  Uncurated Search Results
                </span>
              </div>

              {/* Dense Product Grid */}
              <div className="relative mb-6">
                <div className="grid grid-cols-6 md:grid-cols-8 gap-1.5 opacity-60">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "aspect-[3/4] rounded bg-muted/50 border border-border/30",
                        "transition-all duration-500"
                      )}
                      style={{
                        opacity: Math.random() * 0.4 + 0.4,
                      }}
                    />
                  ))}
                </div>
                {/* Overlay showing overwhelm */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-xs text-muted-foreground/70">32+ similar items</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {genericMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive/80 border border-destructive/20"
                  >
                    <metric.icon className="w-3 h-3" />
                    {metric.label}
                  </div>
                ))}
              </div>

              {/* Micro-caption */}
              <p className="text-sm text-muted-foreground italic">
                Too many similar options increase hesitation and abandonment.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL - Agentic Curated */}
          <div className="glass-card p-6 lg:p-8 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Agentic AI-Curated Results
                </span>
              </div>

              {/* Focused Product Grid */}
              <div className="relative mb-6">
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "aspect-[3/4] rounded-lg bg-secondary/80 border border-primary/20 relative overflow-hidden",
                        "transition-all duration-300",
                        i === 0 && "ring-2 ring-primary/50 ring-offset-2 ring-offset-card"
                      )}
                    >
                      {/* Ranking indicator */}
                      {i < 3 && (
                        <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-primary/90 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                        </div>
                      )}
                      {/* Match indicator */}
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-primary/20 backdrop-blur-sm">
                        <span className="text-[9px] font-medium text-primary">{95 - i * 5}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-1 left-0 right-0 text-center">
                  <span className="text-xs text-primary/70 font-medium">Same catalogue, intelligently reordered</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {agenticMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    <metric.icon className="w-3 h-3" />
                    {metric.label}
                  </div>
                ))}
              </div>

              {/* Micro-caption */}
              <p className="text-sm text-muted-foreground italic">
                Relevance reduces effort, accelerates decisions, and improves outcomes.
              </p>
            </div>
          </div>

          {/* Center Connector - Mobile */}
          <div className="lg:hidden flex justify-center -my-4 relative z-20">
            <div className="glass-card px-4 py-2 flex items-center gap-2 border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">
                Agentic AI removes irrelevance — not choice.
              </span>
            </div>
          </div>
        </div>

        {/* Animated Visualization */}
        <div className="flex justify-center mb-10">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="glass-card px-6 py-4 flex items-center gap-6 cursor-help">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "flex gap-0.5 transition-all duration-1000",
                    isAnimating && "scale-75 opacity-50"
                  )}>
                    {Array.from({ length: showCurated ? 4 : 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-2 h-6 rounded-sm transition-all duration-500",
                          showCurated ? "bg-primary" : "bg-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
                
                <Zap className={cn(
                  "w-5 h-5 transition-all duration-500",
                  showCurated ? "text-primary" : "text-muted-foreground/50"
                )} />
                
                <div className="flex items-center gap-2">
                  <Target className={cn(
                    "w-5 h-5 transition-all duration-500",
                    showCurated ? "text-primary" : "text-muted-foreground/30"
                  )} />
                  <div className={cn(
                    "text-sm font-semibold transition-all duration-500",
                    showCurated ? "text-primary" : "text-muted-foreground/50"
                  )}>
                    {showCurated ? "Higher Conversion" : "Processing..."}
                  </div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Powered by Agentic Ranking & Visual Intelligence</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Contextual Tie-Back */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">NEXT</span> dynamically determines the optimal number of products to show per shopper, based on their Consumer 360 signals — 
            <span className="text-foreground"> style, fit confidence, price sensitivity, intent, and past outcomes.</span>
          </p>
        </div>

        {/* Proof Points */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="glass-card p-5 text-center hover-lift">
            <div className="text-2xl font-bold text-primary mb-1">Conversion</div>
            <p className="text-sm text-muted-foreground">Personalisation is a margin lever, not a feature</p>
          </div>
          <div className="glass-card p-5 text-center hover-lift">
            <div className="text-2xl font-bold text-primary mb-1">Confidence</div>
            <p className="text-sm text-muted-foreground">Fewer choices = faster, better decisions</p>
          </div>
          <div className="glass-card p-5 text-center hover-lift">
            <div className="text-2xl font-bold text-primary mb-1">Outcomes</div>
            <p className="text-sm text-muted-foreground">Optimise decision quality, not catalogue exposure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoiceOverloadSection;

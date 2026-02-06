import { useState } from "react";
import {
  Database,
  Brain,
  Target,
  Sparkles,
  Users,
  ShoppingBag,
  TrendingUp,
  Layers,
  Zap,
  ArrowRight,
  BarChart3,
  Eye,
  Shirt,
  RefreshCw,
} from "lucide-react";

interface PipelineStep {
  id: string;
  phase: string;
  phaseColor: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  visualElements: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "A",
    phase: "Data Foundation",
    phaseColor: "from-primary to-primary/60",
    title: "Consumer 360°",
    subtitle: "Unified Shopper Intelligence",
    description: "Stitch online + offline data into a single, real-time shopper graph that powers every decision.",
    details: [
      "Purchase History & Returns",
      "Browsing & Search Patterns",
      "Loyalty & Campaign Data",
      "Demographics & Life Stage",
    ],
    icon: Database,
    visualElements: ["Profile", "History", "Behavior", "Context"],
  },
  {
    id: "B",
    phase: "Classical AI + ML",
    phaseColor: "from-accent to-accent/60",
    title: "Intelligent Segmentation",
    subtitle: "Dynamic Micro-Clustering",
    description: "ML algorithms cluster shoppers by style, behavior, and purchase patterns — not just demographics.",
    details: [
      "K-Means & Spectral Clustering",
      "Real-time Session Profiling",
      "Style & Price Affinity Models",
      "Life Stage Classification",
    ],
    icon: Brain,
    visualElements: ["Style", "Price", "Life Stage", "Persona"],
  },
  {
    id: "C",
    phase: "Agentic AI Engine",
    phaseColor: "from-brand-pink to-brand-purple",
    title: "Product Ranking",
    subtitle: "Multimodal AgentOps",
    description: "AI agents dynamically rank and prioritize products based on individual shopper intelligence.",
    details: [
      "Style & Brand Affinity Scoring",
      "Fit Confidence Prediction",
      "Return Risk Assessment",
      "Occasion & Seasonal Relevance",
    ],
    icon: Target,
    visualElements: ["Rank", "Score", "Match", "Predict"],
  },
  {
    id: "D",
    phase: "Personalized Experience",
    phaseColor: "from-primary via-accent to-brand-pink",
    title: "Curated Storefront",
    subtitle: "Visual & Narrative AI",
    description:
      "Every shopper sees a uniquely curated store — from product order to imagery to personalized narratives.",
    details: [
      "Dynamic Product Ordering",
      "Intelligent Image Selection",
      "Personalized Descriptions",
      "Contextual Cross-Sell",
    ],
    icon: Sparkles,
    visualElements: ["Visual", "Story", "Layout", "Journey"],
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState<string>("A");
  const activeData = pipelineSteps.find((s) => s.id === activeStep) || pipelineSteps[0];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">End-to-End AI Pipeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">Agentic AI</span> Powers Personalization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Four intelligent stages that transform static catalogs into hyper-personalized journeys.
          </p>
        </div>

        {/* Pipeline Flow - Horizontal Arrow */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-brand-pink -translate-y-1/2 hidden lg:block" />

            {pipelineSteps.map((step, idx) => (
              <div key={step.id} className="flex items-center flex-1">
                {/* Step Circle */}
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`relative z-10 flex flex-col items-center transition-all duration-300 w-full group ${
                    activeStep === step.id ? "scale-105" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Phase Label */}
                  <div
                    className={`text-xs font-semibold mb-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.phaseColor} text-primary-foreground`}
                  >
                    {step.phase}
                  </div>

                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      activeStep === step.id
                        ? `bg-gradient-to-br ${step.phaseColor} shadow-lg shadow-primary/30`
                        : "bg-card border border-border group-hover:border-primary/50"
                    }`}
                  >
                    <step.icon
                      className={`w-8 h-8 md:w-10 md:h-10 ${
                        activeStep === step.id ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>

                  {/* Step ID */}
                  <div
                    className={`mt-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      activeStep === step.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Title */}
                  <div className="mt-2 text-center">
                    <div
                      className={`font-semibold text-sm md:text-base ${
                        activeStep === step.id ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </button>

                {/* Arrow */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center mx-2">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Detail Card */}
        <div className="glass-card p-8 md:p-10 animate-fade-in" key={activeStep}>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Description */}
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${activeData.phaseColor} text-primary-foreground text-sm font-medium mb-4`}
              >
                <activeData.icon className="w-4 h-4" />
                {activeData.phase}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeData.title}</h3>
              <p className="text-primary font-medium mb-4">{activeData.subtitle}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{activeData.description}</p>

              {/* Details List */}
              <div className="space-y-3">
                {activeData.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Diagram */}
            <div className="relative">
              {activeStep === "A" && <Consumer360Visual />}
              {activeStep === "B" && <SegmentationVisual />}
              {activeStep === "C" && <RankingVisual />}
              {activeStep === "D" && <CurationVisual />}
            </div>
          </div>
        </div>

        {/* Bottom Flow Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border">
            <RefreshCw className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm text-muted-foreground">
              Continuous learning from clicks, conversions & returns improves ranking intelligence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Visual Component: Consumer 360
const Consumer360Visual = () => (
  <div className="relative h-80 flex items-center justify-center">
    {/* Center Circle */}
    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10 shadow-lg shadow-primary/30">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary-foreground">360°</div>
        <div className="text-xs text-primary-foreground/80">Consumer</div>
      </div>
    </div>

    {/* Orbiting Elements */}
    {[
      { label: "Purchases", angle: 0, icon: ShoppingBag },
      { label: "Browsing", angle: 60, icon: Eye },
      { label: "Loyalty", angle: 120, icon: TrendingUp },
      { label: "Returns", angle: 180, icon: RefreshCw },
      { label: "Profile", angle: 240, icon: Users },
      { label: "Campaigns", angle: 300, icon: Zap },
    ].map((item, idx) => {
      const radius = 120;
      const x = Math.cos((item.angle * Math.PI) / 180) * radius;
      const y = Math.sin((item.angle * Math.PI) / 180) * radius;

      return (
        <div
          key={item.label}
          className="absolute animate-pulse"
          style={{
            transform: `translate(${x}px, ${y}px)`,
            animationDelay: `${idx * 200}ms`,
          }}
        >
          <div className="w-14 h-14 rounded-xl bg-card border border-border flex flex-col items-center justify-center shadow-lg">
            <item.icon className="w-5 h-5 text-primary mb-1" />
            <span className="text-[10px] text-muted-foreground">{item.label}</span>
          </div>
        </div>
      );
    })}

    {/* Connecting Lines */}
    <div
      className="absolute w-64 h-64 rounded-full border-2 border-dashed border-primary/20 animate-spin"
      style={{ animationDuration: "20s" }}
    />
    <div className="absolute w-72 h-72 rounded-full border border-accent/10" />
  </div>
);

// Visual Component: Segmentation
const SegmentationVisual = () => (
  <div className="relative h-80 flex items-center justify-center">
    {/* Funnel Shape */}
    <div className="relative">
      {/* Input Data Points */}
      <div className="flex gap-2 mb-4 justify-center">
        {["Style", "Price", "Life Stage", "Geo", "Cart"].map((label, idx) => (
          <div
            key={label}
            className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div className="relative mx-auto">
        <div
          className="w-64 h-20 bg-gradient-to-b from-accent/30 to-transparent"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" }}
        />
        <div
          className="w-48 h-20 mx-auto bg-gradient-to-b from-accent/40 to-transparent -mt-2"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}
        />
        <div className="w-32 h-16 mx-auto bg-gradient-to-b from-accent/50 to-accent -mt-2 rounded-b-2xl flex items-end justify-center pb-2">
          <Brain className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Output Segments */}
      <div className="flex gap-3 mt-6 justify-center">
        {[
          { label: "Urban Workwear", color: "bg-primary" },
          { label: "Family Value", color: "bg-accent" },
          { label: "Trend Seekers", color: "bg-brand-pink" },
        ].map((seg, idx) => (
          <div
            key={seg.label}
            className={`px-3 py-2 rounded-lg ${seg.color} text-primary-foreground text-xs font-medium animate-scale-in`}
            style={{ animationDelay: `${300 + idx * 150}ms` }}
          >
            {seg.label}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Visual Component: Ranking
const RankingVisual = () => (
  <div className="relative h-80 flex items-center justify-center">
    <div className="space-y-4 w-full max-w-sm">
      {/* Ranking Factors */}
      <div className="text-sm font-medium text-muted-foreground mb-4 text-center">Ranking Signals</div>

      {[
        { label: "Style Affinity", score: 94, color: "bg-primary" },
        { label: "Fit Confidence", score: 88, color: "bg-accent" },
        { label: "Return Risk (Low)", score: 92, color: "bg-green-500" },
        { label: "Occasion Match", score: 85, color: "bg-brand-pink" },
      ].map((factor, idx) => (
        <div key={factor.label} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-foreground">{factor.label}</span>
            <span className="text-sm font-bold text-primary">{factor.score}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full ${factor.color} rounded-full transition-all duration-1000`}
              style={{ width: `${factor.score}%` }}
            />
          </div>
        </div>
      ))}

      {/* Final Score */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-center">
        <div className="text-sm text-muted-foreground mb-1">Hyper-Personalization Score</div>
        <div className="text-3xl font-bold gradient-text">89.7%</div>
      </div>
    </div>
  </div>
);

// Visual Component: Curation
const CurationVisual = () => (
  <div className="relative h-80 flex items-center justify-center">
    <div className="grid grid-cols-3 gap-3 max-w-xs">
      {[1, 2, 3, 4, 5, 6].map((num, idx) => (
        <div
          key={num}
          className={`relative aspect-[3/4] rounded-lg overflow-hidden animate-scale-in ${
            idx === 0 ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
          }`}
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div
            className={`w-full h-full flex items-center justify-center ${
              idx === 0 ? "bg-gradient-to-br from-primary to-accent" : "bg-secondary"
            }`}
          >
            <Shirt className={`w-6 h-6 ${idx === 0 ? "text-primary-foreground" : "text-muted-foreground"}`} />
          </div>

          {idx === 0 && (
            <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-bold">
              #1
            </div>
          )}

          {idx < 3 && (
            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-green-500/90 text-white text-[10px]">
              {98 - idx * 5}%
            </div>
          )}
        </div>
      ))}

      {/* Caption */}
      <div className="col-span-3 text-center mt-4">
        <div className="text-xs text-muted-foreground">Same catalog → Different order per shopper</div>
      </div>
    </div>
  </div>
);

export default HowItWorksSection;

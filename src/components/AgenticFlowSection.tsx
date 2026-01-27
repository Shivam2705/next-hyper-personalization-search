import { Database, Users, Brain, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Unified Consumer 360",
    description: "Online + store data stitched into a single shopper graph",
    detail: "Purchase history, browsing behavior, returns, loyalty data — all unified",
  },
  {
    number: "02",
    icon: Users,
    title: "Micro-Segmentation",
    description: "Shoppers clustered dynamically by style, life stage, and fit confidence",
    detail: "Examples: 'Urban Workwear Seekers', 'Comfort-First Family Shoppers'",
  },
  {
    number: "03",
    icon: Brain,
    title: "Agentic Ranking Engine",
    description: "AI agent decides product order, imagery, and cross-sell strategy",
    detail: "Inputs: Style affinity, returns risk, seasonality, similar shoppers",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Visual Personalization",
    description: "Same product → different image, order & narrative per shopper",
    detail: "Generates personalized product stories for each customer",
  },
];

const AgenticFlowSection = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Intelligence Layer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">Agentic AI</span> Powers
            <br />Hyper-Personalization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four intelligent steps transform raw data into personalized shopping experiences.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="glass-card p-6 h-full hover-lift group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-primary/80 italic">
                    {step.detail}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 rounded-full bg-card border border-border items-center justify-center -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Outcome Banner */}
        <div className="mt-16 glass-card p-8 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">The Outcome</h3>
          </div>
          <p className="text-muted-foreground text-lg">
            The same NEXT catalog appears <span className="text-primary font-medium">differently to every shopper</span> — 
            ordered, styled, and narrated uniquely based on their profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgenticFlowSection;

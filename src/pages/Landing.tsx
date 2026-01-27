import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  Target, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Zap,
  BarChart3,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Customer360Chart from "@/components/Customer360Chart";
import HowItWorksSection from "@/components/HowItWorksSection";

const valueProps = [
  {
    icon: TrendingUp,
    title: "Increased Conversion",
    description: "Personalized product ordering leads to 35% higher conversion rates",
    metric: "+35%"
  },
  {
    icon: RefreshCw,
    title: "Reduced Returns",
    description: "AI-driven fit confidence lowers return rates significantly",
    metric: "-40%"
  },
  {
    icon: Users,
    title: "Customer Lifetime Value",
    description: "Deeper engagement drives repeat purchases and loyalty",
    metric: "+28%"
  },
  {
    icon: Zap,
    title: "Real-Time Decisions",
    description: "Agentic AI makes ranking decisions in milliseconds",
    metric: "<50ms"
  }
];

// How it works data moved to HowItWorksSection component

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">NEXT</span>
            <span className="text-primary text-sm font-medium">Agentic AI</span>
          </div>
          <Button 
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-primary/90"
          >
            Experience Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/5 to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Agentic AI for Retail</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Every Shopper Sees a
            <br />
            <span className="gradient-text">Different NEXT</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Agentic AI transforms static catalogs into dynamically personalized experiences. 
            Products, imagery, and narratives adapt in real-time based on individual shopper intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 text-primary-foreground"
            >
              Experience Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* What is the Solution */}
      <section id="solution" className="section-padding relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Hyper-Personalization</span> Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Move beyond rule-based recommendations. Our agentic approach understands context, 
              predicts intent, and delivers individually curated shopping journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Agentic Intelligence</h3>
                    <p className="text-muted-foreground">
                      Unlike traditional ML models, our AI agent reasons about each shopper, 
                      making contextual decisions about product ranking, visual presentation, and cross-sell strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consumer 360° Foundation</h3>
                    <p className="text-muted-foreground">
                      Every personalization decision is powered by a unified view of the customer — 
                      combining online behavior, store visits, purchase history, and engagement signals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Explainable Decisions</h3>
                    <p className="text-muted-foreground">
                      Every ranking decision comes with clear reasoning. Understand why each product 
                      appears where it does — from style match to return risk prediction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 text-center">
                <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Traditional vs. Agentic</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="text-muted-foreground">Rule-Based</span>
                    <span className="text-destructive">Static Segments</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="text-muted-foreground">Collaborative Filtering</span>
                    <span className="text-yellow-500">Similar Users</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/20 rounded-lg border border-primary/30">
                    <span className="text-foreground font-medium">Agentic AI</span>
                    <span className="text-primary font-semibold">Individual Intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer 360 Section */}
      <section className="section-padding relative bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Consumer <span className="gradient-text">360°</span> Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete, real-time view of every shopper. Interactive signals that power 
              hyper-personalization decisions.
            </p>
          </div>

          <Customer360Chart />
        </div>
      </section>

      {/* How It Works - Enhanced Section */}
      <HowItWorksSection />

      {/* Value Proposition */}
      <section className="section-padding relative bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Measurable <span className="gradient-text">Business Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our hyper-personalization solution delivers tangible results across key retail metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div key={prop.title} className="glass-card p-6 hover-lift text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{prop.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Personalization in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose a shopper persona and watch the same NEXT catalog transform 
                based on their unique preferences and behaviour.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate("/login")}
                className="bg-primary hover:bg-primary/90 text-lg px-10 py-6 text-primary-foreground"
              >
                Start Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>Agentic Hyper-Personalization Demo for NEXT</p>
          <p className="mt-2">Powered by Consumer 360° Intelligence</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

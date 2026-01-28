import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Check, 
  X, 
  Minus, 
  Brain, 
  Sparkles,
  Target,
  Users,
  Zap,
  Shield,
  Database,
  TrendingUp,
  Cpu,
  BarChart3,
  Lightbulb,
  Clock,
  Eye
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    dimension: "Customer Understanding",
    icon: Users,
    category: "Business",
    tooltip: "How well does the system know each shopper?",
    traditional: {
      rulesBased: { value: "Groups customers by age & gender only", status: "poor" },
      collaborativeFiltering: { value: "Finds similar shoppers, assumes they want the same things", status: "medium" },
      contentBased: { value: "Matches products by category, ignores the person", status: "medium" },
      hybridML: { value: "Combines multiple signals, but updates overnight", status: "good" }
    },
    agentic: {
      value: "Builds a complete picture: browsing, purchases, store visits, preferences — updated in real-time",
      status: "excellent"
    }
  },
  {
    dimension: "How It Thinks",
    icon: Cpu,
    category: "Technical",
    tooltip: "The underlying technology powering recommendations",
    traditional: {
      rulesBased: { value: "Simple IF-THEN rules set by humans", status: "poor" },
      collaborativeFiltering: { value: "Math formulas comparing user patterns", status: "medium" },
      contentBased: { value: "Matches product descriptions & tags", status: "medium" },
      hybridML: { value: "Trained models that score products", status: "good" }
    },
    agentic: {
      value: "AI that reasons like a personal stylist — considers context, intent, and 'why' behind each choice",
      status: "excellent"
    }
  },
  {
    dimension: "Business Rules",
    icon: Lightbulb,
    category: "Business",
    tooltip: "How easily can merchandising goals be incorporated?",
    traditional: {
      rulesBased: { value: "Hard-coded: always push high-margin items first", status: "poor" },
      collaborativeFiltering: { value: "Business rules applied as afterthought", status: "medium" },
      contentBased: { value: "Limited category-level controls", status: "medium" },
      hybridML: { value: "Blended scoring, but rigid once set", status: "good" }
    },
    agentic: {
      value: "Naturally balances: margin goals, stock levels, promos, and seasonality — all while staying relevant to each shopper",
      status: "excellent"
    }
  },
  {
    dimension: "Personalization Level",
    icon: Target,
    category: "Business",
    tooltip: "How tailored is the experience for each individual?",
    traditional: {
      rulesBased: { value: "Same experience for millions in each segment", status: "poor" },
      collaborativeFiltering: { value: "~1,000 shopper groups, still broad", status: "medium" },
      contentBased: { value: "Product-focused, not person-focused", status: "medium" },
      hybridML: { value: "Smaller segments, but still 'buckets' of people", status: "good" }
    },
    agentic: {
      value: "True 1-to-1: every shopper sees a uniquely curated experience based on their individual journey",
      status: "excellent"
    }
  },
  {
    dimension: "Speed",
    icon: Clock,
    category: "Technical",
    tooltip: "How fast does the system respond?",
    traditional: {
      rulesBased: { value: "Instant (pre-calculated overnight)", status: "good" },
      collaborativeFiltering: { value: "Noticeable delay (200-500ms)", status: "medium" },
      contentBased: { value: "Quick (50-150ms)", status: "good" },
      hybridML: { value: "Slower due to complexity (300-800ms)", status: "medium" }
    },
    agentic: {
      value: "Under 50ms — faster than a blink, even with deep reasoning",
      status: "excellent"
    }
  },
  {
    dimension: "Sales Conversion",
    icon: TrendingUp,
    category: "ROI",
    tooltip: "Impact on turning browsers into buyers",
    traditional: {
      rulesBased: { value: "Baseline — no lift", status: "poor" },
      collaborativeFiltering: { value: "+8-12% improvement", status: "medium" },
      contentBased: { value: "+5-10% improvement", status: "medium" },
      hybridML: { value: "+15-20% improvement", status: "good" }
    },
    agentic: {
      value: "+35-45% conversion lift — products shown actually match what shoppers want to buy",
      status: "excellent"
    }
  },
  {
    dimension: "Return Rates",
    icon: BarChart3,
    category: "ROI",
    tooltip: "Impact on costly product returns",
    traditional: {
      rulesBased: { value: "No consideration of fit or suitability", status: "poor" },
      collaborativeFiltering: { value: "Assumes 'similar people = similar fit'", status: "medium" },
      contentBased: { value: "Basic size filtering only", status: "medium" },
      hybridML: { value: "Some learning from past returns", status: "good" }
    },
    agentic: {
      value: "40% fewer returns — AI predicts fit confidence based on personal purchase & return history",
      status: "excellent"
    }
  },
  {
    dimension: "Why This Product?",
    icon: Eye,
    category: "Business",
    tooltip: "Can you explain the recommendation to customers and stakeholders?",
    traditional: {
      rulesBased: { value: "Only shows which rule fired", status: "poor" },
      collaborativeFiltering: { value: "Black box — can't explain why", status: "poor" },
      contentBased: { value: "Shows matching attributes", status: "medium" },
      hybridML: { value: "Technical scores, hard to interpret", status: "good" }
    },
    agentic: {
      value: "Clear reasoning: 'Recommended because you love wrap dresses and this fits your usual size'",
      status: "excellent"
    }
  },
  {
    dimension: "New Customers",
    icon: Zap,
    category: "Technical",
    tooltip: "How well does it work for first-time visitors?",
    traditional: {
      rulesBased: { value: "Shows bestsellers to everyone", status: "poor" },
      collaborativeFiltering: { value: "No recommendations until they shop more", status: "poor" },
      contentBased: { value: "Can only match products they've viewed", status: "medium" },
      hybridML: { value: "Some experimentation to learn preferences", status: "good" }
    },
    agentic: {
      value: "Instantly infers preferences from first few clicks — no 'cold start' problem",
      status: "excellent"
    }
  },
  {
    dimension: "Time to Results",
    icon: Clock,
    category: "ROI",
    tooltip: "How long until you see business impact?",
    traditional: {
      rulesBased: { value: "2-4 weeks (manual rule setup)", status: "medium" },
      collaborativeFiltering: { value: "6-12 months (needs lots of data)", status: "poor" },
      contentBased: { value: "2-3 months (catalog processing)", status: "medium" },
      hybridML: { value: "6-9 months (training & tuning)", status: "medium" }
    },
    agentic: {
      value: "4-6 weeks — pre-trained AI adapts quickly to your catalog and customers",
      status: "excellent"
    }
  }
];

const statusConfig = {
  poor: { icon: X, color: "text-destructive", bg: "bg-destructive/10" },
  medium: { icon: Minus, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  good: { icon: Check, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  excellent: { icon: Sparkles, color: "text-primary", bg: "bg-primary/10" }
};

const categoryColors: Record<string, string> = {
  "Technical": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Business": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "ROI": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
};

const StatusIcon = ({ status }: { status: keyof typeof statusConfig }) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  return (
    <div className={`w-5 h-5 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}>
      <Icon className={`w-3 h-3 ${config.color}`} />
    </div>
  );
};

const ComparisonTable = () => {
  return (
    <section id="comparison" className="section-padding relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Side-by-Side Comparison</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Agentic AI</span> is Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Traditional personalisation treats shoppers as segments. Agentic AI treats every customer as an individual — with real understanding and reasoning.
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <Badge variant="outline" className={`gap-2 px-3 py-1.5 ${categoryColors["Business"]}`}>
            <span className="text-xs font-medium">💼 Business Impact</span>
          </Badge>
          <Badge variant="outline" className={`gap-2 px-3 py-1.5 ${categoryColors["Technical"]}`}>
            <span className="text-xs font-medium">⚙️ How It Works</span>
          </Badge>
          <Badge variant="outline" className={`gap-2 px-3 py-1.5 ${categoryColors["ROI"]}`}>
            <span className="text-xs font-medium">📈 ROI & Results</span>
          </Badge>
        </div>

        {/* Approach Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="secondary" className="gap-2 px-3 py-1.5 bg-secondary/50">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <span className="text-xs">Rules-Based</span>
          </Badge>
          <Badge variant="secondary" className="gap-2 px-3 py-1.5 bg-secondary/50">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-xs">Collaborative Filtering</span>
          </Badge>
          <Badge variant="secondary" className="gap-2 px-3 py-1.5 bg-secondary/50">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs">Content-Based</span>
          </Badge>
          <Badge variant="secondary" className="gap-2 px-3 py-1.5 bg-secondary/50">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs">Hybrid ML</span>
          </Badge>
          <Badge className="gap-2 px-3 py-1.5 bg-gradient-to-r from-primary to-accent">
            <Brain className="w-3 h-3" />
            <span className="text-xs font-semibold">Agentic AI</span>
          </Badge>
        </div>

        {/* Table */}
        <div className="glass-card p-1 md:p-2 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead className="w-[200px] font-bold text-foreground">What Matters</TableHead>
                  <TableHead className="min-w-[150px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      <span className="text-xs font-medium">Rules-Based</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[150px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-medium">Collab. Filtering</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[150px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-medium">Content-Based</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[150px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-medium">Hybrid ML</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[220px] bg-primary/5">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-primary">Agentic AI</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, idx) => {
                  const DimensionIcon = row.icon;
                  return (
                    <TableRow 
                      key={row.dimension} 
                      className={`border-border/30 ${idx % 2 === 0 ? 'bg-card/30' : 'bg-transparent'}`}
                    >
                      <TableCell className="font-semibold text-foreground">
                        <div className="flex items-start gap-2">
                          <DimensionIcon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <div className="flex flex-col gap-1">
                            <span className="text-sm">{row.dimension}</span>
                            <span className="text-[10px] text-muted-foreground font-normal leading-tight">
                              {row.tooltip}
                            </span>
                            <Badge 
                              variant="outline" 
                              className={`text-[10px] px-1.5 py-0 w-fit ${categoryColors[row.category]}`}
                            >
                              {row.category}
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <StatusIcon status={row.traditional.rulesBased.status as keyof typeof statusConfig} />
                          <span className="text-xs text-muted-foreground leading-tight">
                            {row.traditional.rulesBased.value}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <StatusIcon status={row.traditional.collaborativeFiltering.status as keyof typeof statusConfig} />
                          <span className="text-xs text-muted-foreground leading-tight">
                            {row.traditional.collaborativeFiltering.value}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <StatusIcon status={row.traditional.contentBased.status as keyof typeof statusConfig} />
                          <span className="text-xs text-muted-foreground leading-tight">
                            {row.traditional.contentBased.value}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <StatusIcon status={row.traditional.hybridML.status as keyof typeof statusConfig} />
                          <span className="text-xs text-muted-foreground leading-tight">
                            {row.traditional.hybridML.value}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="bg-primary/5">
                        <div className="flex items-start gap-2">
                          <StatusIcon status={row.agentic.status as keyof typeof statusConfig} />
                          <span className="text-xs text-primary font-medium leading-tight">
                            {row.agentic.value}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Summary Cards - Plain language benefits */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold mb-2">Know Every Customer</h4>
            <p className="text-sm text-muted-foreground">
              Not segments — individual shoppers with unique preferences and journeys
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">AI That Reasons</h4>
            <p className="text-sm text-muted-foreground">
              Like a personal stylist who understands why, not just what
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="font-semibold mb-2">Proven Results</h4>
            <p className="text-sm text-muted-foreground">
              +35% sales, -40% returns — measurable impact from day one
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Clear Explanations</h4>
            <p className="text-sm text-muted-foreground">
              Know exactly why each product was recommended — no black boxes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

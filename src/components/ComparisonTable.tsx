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
  RefreshCw,
  Users,
  Zap,
  Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    dimension: "Data Foundation",
    traditional: {
      rulesBased: { value: "Static segments", status: "poor" },
      collaborativeFiltering: { value: "User similarity matrix", status: "medium" },
      contentBased: { value: "Product attributes only", status: "medium" },
      hybridML: { value: "Combined signals, batch processed", status: "good" }
    },
    agentic: {
      value: "Consumer 360°: Unified online + offline data graph, real-time",
      status: "excellent"
    }
  },
  {
    dimension: "Personalization Granularity",
    traditional: {
      rulesBased: { value: "Broad segments (e.g., 'Men 25-34')", status: "poor" },
      collaborativeFiltering: { value: "User cohorts based on behaviour", status: "medium" },
      contentBased: { value: "Item similarity clusters", status: "medium" },
      hybridML: { value: "Micro-segments with decay", status: "good" }
    },
    agentic: {
      value: "Individual-level intelligence with contextual reasoning",
      status: "excellent"
    }
  },
  {
    dimension: "Ranking Logic",
    traditional: {
      rulesBased: { value: "Fixed business rules (margin, stock)", status: "poor" },
      collaborativeFiltering: { value: "'Users like you bought...'", status: "medium" },
      contentBased: { value: "'Because you viewed...'", status: "medium" },
      hybridML: { value: "Blended scoring model", status: "good" }
    },
    agentic: {
      value: "Autonomous agent reasons about intent, context, & fit",
      status: "excellent"
    }
  },
  {
    dimension: "Visual Adaptation",
    traditional: {
      rulesBased: { value: "None — same imagery for all", status: "poor" },
      collaborativeFiltering: { value: "None", status: "poor" },
      contentBased: { value: "None", status: "poor" },
      hybridML: { value: "A/B tested hero images", status: "medium" }
    },
    agentic: {
      value: "Dynamic imagery selection per shopper profile",
      status: "excellent"
    }
  },
  {
    dimension: "Narrative & Messaging",
    traditional: {
      rulesBased: { value: "Generic product copy", status: "poor" },
      collaborativeFiltering: { value: "Social proof ('X bought this')", status: "medium" },
      contentBased: { value: "Attribute highlights", status: "medium" },
      hybridML: { value: "Templated personalization", status: "good" }
    },
    agentic: {
      value: "AI-generated stories tailored to individual motivations",
      status: "excellent"
    }
  },
  {
    dimension: "Response Time",
    traditional: {
      rulesBased: { value: "Instant (pre-computed)", status: "good" },
      collaborativeFiltering: { value: "100-500ms (batch matrix)", status: "medium" },
      contentBased: { value: "50-200ms", status: "good" },
      hybridML: { value: "200-800ms", status: "medium" }
    },
    agentic: {
      value: "<50ms — Optimized agentic inference",
      status: "excellent"
    }
  },
  {
    dimension: "Return Rate Impact",
    traditional: {
      rulesBased: { value: "No fit consideration", status: "poor" },
      collaborativeFiltering: { value: "Assumes cohort fit", status: "medium" },
      contentBased: { value: "Size-only filtering", status: "medium" },
      hybridML: { value: "Historical return signals", status: "good" }
    },
    agentic: {
      value: "Fit confidence scoring with personal return history",
      status: "excellent"
    }
  },
  {
    dimension: "Explainability",
    traditional: {
      rulesBased: { value: "Rule logs only", status: "poor" },
      collaborativeFiltering: { value: "Black box similarity", status: "poor" },
      contentBased: { value: "Attribute overlap", status: "medium" },
      hybridML: { value: "Feature importance scores", status: "good" }
    },
    agentic: {
      value: "Full reasoning chain: 'Why this product, in this position'",
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
            <span className="text-sm font-medium text-primary">Deep Dive Comparison</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Traditional Approaches vs. <span className="gradient-text">Agentic AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how Agentic AI fundamentally differs from legacy personalization techniques across every critical dimension.
          </p>
        </div>

        {/* Legend */}
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
            <span className="text-xs">Agentic AI</span>
          </Badge>
        </div>

        {/* Table */}
        <div className="glass-card p-1 md:p-2 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead className="w-[180px] font-bold text-foreground">Dimension</TableHead>
                  <TableHead className="min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      <span className="text-xs font-medium">Rules-Based</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-medium">Collab. Filtering</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-medium">Content-Based</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-medium">Hybrid ML</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[180px] bg-primary/5">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-primary">Agentic AI</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, idx) => (
                  <TableRow 
                    key={row.dimension} 
                    className={`border-border/30 ${idx % 2 === 0 ? 'bg-card/30' : 'bg-transparent'}`}
                  >
                    <TableCell className="font-semibold text-foreground text-sm">
                      {row.dimension}
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
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Individual Intelligence</h4>
            <p className="text-sm text-muted-foreground">
              From broad segments to true 1:1 personalization with autonomous reasoning
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Real-Time Adaptation</h4>
            <p className="text-sm text-muted-foreground">
              Sub-50ms decisions that adapt to context, intent, and moment
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Full Transparency</h4>
            <p className="text-sm text-muted-foreground">
              Complete explainability for every ranking decision made
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

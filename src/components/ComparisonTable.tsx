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
  Eye,
  Layers
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    dimension: "Data Foundation",
    icon: Database,
    category: "Technical",
    traditional: {
      rulesBased: { value: "Siloed data, manual segments, static CSV exports", status: "poor" },
      collaborativeFiltering: { value: "User-item interaction matrix, updated weekly via batch ETL", status: "medium" },
      contentBased: { value: "Product catalog metadata only (SKU attributes)", status: "medium" },
      hybridML: { value: "Federated data lake with overnight batch processing", status: "good" }
    },
    agentic: {
      value: "Consumer 360° Graph: unified online + offline + real-time streaming events (CDP integration)",
      status: "excellent"
    }
  },
  {
    dimension: "Intelligence Engine",
    icon: Cpu,
    category: "Technical",
    traditional: {
      rulesBased: { value: "Deterministic IF-THEN business logic (no ML)", status: "poor" },
      collaborativeFiltering: { value: "Matrix factorization (ALS/SVD) — 'users like you bought...'", status: "medium" },
      contentBased: { value: "TF-IDF similarity matching on product attributes", status: "medium" },
      hybridML: { value: "Ensemble models (XGBoost + embeddings), retrained weekly", status: "good" }
    },
    agentic: {
      value: "Transformer-based reasoning agent — understands intent, context & 'why' behind each decision",
      status: "excellent"
    }
  },
  {
    dimension: "Merchandising Control",
    icon: Lightbulb,
    category: "Business",
    traditional: {
      rulesBased: { value: "Hard-coded priority: margin > stock > relevance", status: "poor" },
      collaborativeFiltering: { value: "Post-hoc business filters applied after ranking", status: "medium" },
      contentBased: { value: "Category-level boost/bury rules only", status: "medium" },
      hybridML: { value: "Weighted multi-objective scoring, rigid once deployed", status: "good" }
    },
    agentic: {
      value: "Dynamic constraint injection: margin goals, inventory, promos, seasonality — balanced per shopper context",
      status: "excellent"
    }
  },
  {
    dimension: "Personalisation Depth",
    icon: Users,
    category: "Business",
    traditional: {
      rulesBased: { value: "5-10 macro-segments (Age × Gender × Region)", status: "poor" },
      collaborativeFiltering: { value: "~1K user clusters via k-means clustering", status: "medium" },
      contentBased: { value: "Item-to-item similarity — ignores individual preferences", status: "medium" },
      hybridML: { value: "~50K micro-segments with recency decay weighting", status: "good" }
    },
    agentic: {
      value: "True 1:1 personalisation — individual reasoning per session with real-time intent detection",
      status: "excellent"
    }
  },
  {
    dimension: "Response Latency",
    icon: Clock,
    category: "Technical",
    traditional: {
      rulesBased: { value: "<10ms (pre-computed lookup tables)", status: "good" },
      collaborativeFiltering: { value: "200-500ms (sparse matrix operations at query time)", status: "medium" },
      contentBased: { value: "50-150ms (vector similarity search)", status: "good" },
      hybridML: { value: "300-800ms (multi-model inference chain)", status: "medium" }
    },
    agentic: {
      value: "<50ms — optimised KV-cache + speculative decoding, faster than page load",
      status: "excellent"
    }
  },
  {
    dimension: "Conversion Impact",
    icon: TrendingUp,
    category: "ROI",
    traditional: {
      rulesBased: { value: "Baseline (0% lift)", status: "poor" },
      collaborativeFiltering: { value: "+8-12% CVR lift (limited by cold-start)", status: "medium" },
      contentBased: { value: "+5-10% lift (good for similar items only)", status: "medium" },
      hybridML: { value: "+15-20% CVR improvement", status: "good" }
    },
    agentic: {
      value: "+35-45% conversion lift — products ranked by actual purchase probability per individual",
      status: "excellent"
    }
  },
  {
    dimension: "Return Rate Impact",
    icon: BarChart3,
    category: "ROI",
    traditional: {
      rulesBased: { value: "No fit/suitability modelling", status: "poor" },
      collaborativeFiltering: { value: "Assumes cohort preferences = individual fit", status: "medium" },
      contentBased: { value: "Static size filters, no silhouette understanding", status: "medium" },
      hybridML: { value: "-10-15% via historical return signal features", status: "good" }
    },
    agentic: {
      value: "-40% returns — personal fit confidence scoring using body type affinity + return history analysis",
      status: "excellent"
    }
  },
  {
    dimension: "Explainability",
    icon: Eye,
    category: "Business",
    traditional: {
      rulesBased: { value: "Rule audit logs (low business insight)", status: "poor" },
      collaborativeFiltering: { value: "Black-box similarity scores — cannot explain 'why'", status: "poor" },
      contentBased: { value: "Attribute overlap reports", status: "medium" },
      hybridML: { value: "SHAP values & feature importance (technical only)", status: "good" }
    },
    agentic: {
      value: "Natural language reasoning: 'Recommended because you love wrap silhouettes & this matches your size preference'",
      status: "excellent"
    }
  },
  {
    dimension: "Cold-Start Handling",
    icon: Zap,
    category: "Technical",
    traditional: {
      rulesBased: { value: "Falls back to bestsellers for all new users", status: "poor" },
      collaborativeFiltering: { value: "No signal until 10+ interactions (data sparsity)", status: "poor" },
      contentBased: { value: "Requires viewed products to make matches", status: "medium" },
      hybridML: { value: "Contextual bandits for explore/exploit tradeoff", status: "good" }
    },
    agentic: {
      value: "Zero-shot inference from first 2-3 clicks via transfer learning — no cold-start problem",
      status: "excellent"
    }
  },
  {
    dimension: "Time to Value",
    icon: Clock,
    category: "ROI",
    traditional: {
      rulesBased: { value: "2-4 weeks (manual rule configuration)", status: "medium" },
      collaborativeFiltering: { value: "6-12 months (requires large interaction dataset)", status: "poor" },
      contentBased: { value: "2-3 months (catalog indexing & taxonomy)", status: "medium" },
      hybridML: { value: "6-9 months (model training, validation, A/B testing)", status: "medium" }
    },
    agentic: {
      value: "4-6 weeks — pre-trained foundation model fine-tuned on your catalog & customer data",
      status: "excellent"
    }
  },
  {
    dimension: "Omnichannel Readiness",
    icon: Layers,
    category: "Business",
    traditional: {
      rulesBased: { value: "Channel-specific rule sets, no unified view", status: "poor" },
      collaborativeFiltering: { value: "Online-only, store data rarely integrated", status: "poor" },
      contentBased: { value: "Catalog-driven, channel-agnostic but limited", status: "medium" },
      hybridML: { value: "Partial integration via data warehouse joins", status: "good" }
    },
    agentic: {
      value: "Seamless online + in-store signals: web browse → store visit → app purchase = one journey",
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
            <span className="text-sm font-medium text-primary">Technical & Business Deep Dive</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Agentic AI</span> Outperforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive comparison across data infrastructure, ML architecture, business flexibility, and measurable ROI — built for both technical and business stakeholders.
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <Badge variant="outline" className={`gap-2 px-3 py-1.5 ${categoryColors["Business"]}`}>
            <span className="text-xs font-medium">💼 Business</span>
          </Badge>
          <Badge variant="outline" className={`gap-2 px-3 py-1.5 ${categoryColors["Technical"]}`}>
            <span className="text-xs font-medium">⚙️ Technical</span>
          </Badge>
          <Badge variant="outline" className={`gap-2 px-3 py-1.5 ${categoryColors["ROI"]}`}>
            <span className="text-xs font-medium">📈 ROI</span>
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
                  <TableHead className="w-[180px] font-bold text-foreground">Dimension</TableHead>
                  <TableHead className="min-w-[160px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      <span className="text-xs font-medium">Rules-Based</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[160px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-medium">Collab. Filtering</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[160px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-medium">Content-Based</span>
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[160px]">
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
                        <div className="flex items-center gap-2">
                          <DimensionIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <div className="flex flex-col gap-1">
                            <span className="text-sm">{row.dimension}</span>
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

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">Consumer 360° Data</h4>
            <p className="text-sm text-muted-foreground">
              Unified customer graph with real-time CDP integration — not batch-processed silos
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold mb-2">Reasoning, Not Rules</h4>
            <p className="text-sm text-muted-foreground">
              Transformer-based agent that understands intent — like a personal stylist at scale
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="font-semibold mb-2">Measurable ROI</h4>
            <p className="text-sm text-muted-foreground">
              +35% conversion, -40% returns — proven metrics with 4-6 week time-to-value
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Auditable Decisions</h4>
            <p className="text-sm text-muted-foreground">
              Natural language explainability — no black-box models, full transparency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

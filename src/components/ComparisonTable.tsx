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
  Layers,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    dimension: "Data Architecture",
    icon: Database,
    category: "Technical",
    traditional: {
      rulesBased: { value: "Siloed tables, manual ETL, static segments", status: "poor" },
      collaborativeFiltering: { value: "Sparse user-item matrix (10⁸ entries)", status: "medium" },
      contentBased: { value: "Product feature vectors only", status: "medium" },
      hybridML: { value: "Federated signals, batch-processed daily", status: "good" }
    },
    agentic: {
      value: "Unified Consumer 360° graph: online + offline + real-time streaming (10⁹ edges)",
      status: "excellent"
    }
  },
  {
    dimension: "ML Model Type",
    icon: Cpu,
    category: "Technical",
    traditional: {
      rulesBased: { value: "No ML — deterministic IF/THEN logic", status: "poor" },
      collaborativeFiltering: { value: "Matrix factorization (ALS, SVD)", status: "medium" },
      contentBased: { value: "TF-IDF / embeddings similarity", status: "medium" },
      hybridML: { value: "XGBoost / LightGBM ensemble", status: "good" }
    },
    agentic: {
      value: "Transformer-based reasoning agent with ReAct chains + retrieval-augmented generation",
      status: "excellent"
    }
  },
  {
    dimension: "Business Rules Integration",
    icon: Layers,
    category: "Business",
    traditional: {
      rulesBased: { value: "Hardcoded margin/stock priority", status: "poor" },
      collaborativeFiltering: { value: "Post-hoc business filters", status: "medium" },
      contentBased: { value: "Category-level constraints", status: "medium" },
      hybridML: { value: "Blended scoring with rule weights", status: "good" }
    },
    agentic: {
      value: "Dynamic rule injection: margin, inventory, seasonality, promo strategy in reasoning context",
      status: "excellent"
    }
  },
  {
    dimension: "Personalization Depth",
    icon: Users,
    category: "Business",
    traditional: {
      rulesBased: { value: "5-10 broad segments (Age × Gender)", status: "poor" },
      collaborativeFiltering: { value: "~1K user clusters via k-means", status: "medium" },
      contentBased: { value: "Item-to-item similarity only", status: "medium" },
      hybridML: { value: "~50K micro-segments with decay", status: "good" }
    },
    agentic: {
      value: "True 1:1 — individual reasoning per shopper session with intent inference",
      status: "excellent"
    }
  },
  {
    dimension: "Inference Latency",
    icon: Clock,
    category: "Technical",
    traditional: {
      rulesBased: { value: "<10ms (pre-computed lookup)", status: "good" },
      collaborativeFiltering: { value: "200-500ms (matrix ops)", status: "medium" },
      contentBased: { value: "50-150ms (vector search)", status: "good" },
      hybridML: { value: "300-800ms (multi-model)", status: "medium" }
    },
    agentic: {
      value: "<50ms — optimized KV-cache + speculative decoding",
      status: "excellent"
    }
  },
  {
    dimension: "Conversion Lift",
    icon: TrendingUp,
    category: "ROI",
    traditional: {
      rulesBased: { value: "Baseline (0%)", status: "poor" },
      collaborativeFiltering: { value: "+8-12% vs. baseline", status: "medium" },
      contentBased: { value: "+5-10%", status: "medium" },
      hybridML: { value: "+15-20%", status: "good" }
    },
    agentic: {
      value: "+35-45% conversion lift with contextual ranking",
      status: "excellent"
    }
  },
  {
    dimension: "Return Rate Reduction",
    icon: BarChart3,
    category: "ROI",
    traditional: {
      rulesBased: { value: "No fit modeling", status: "poor" },
      collaborativeFiltering: { value: "Cohort-based size inference", status: "medium" },
      contentBased: { value: "Static size filters", status: "medium" },
      hybridML: { value: "-10-15% via historical return signals", status: "good" }
    },
    agentic: {
      value: "-40% returns via personal fit confidence scoring + silhouette affinity",
      status: "excellent"
    }
  },
  {
    dimension: "Model Explainability",
    icon: Shield,
    category: "Business",
    traditional: {
      rulesBased: { value: "Rule audit logs (low insight)", status: "poor" },
      collaborativeFiltering: { value: "Black-box similarity scores", status: "poor" },
      contentBased: { value: "Feature overlap metrics", status: "medium" },
      hybridML: { value: "SHAP / feature importance", status: "good" }
    },
    agentic: {
      value: "Full reasoning chain: 'Why this product, rank, and narrative' — auditable & GDPR-compliant",
      status: "excellent"
    }
  },
  {
    dimension: "Cold Start Handling",
    icon: Zap,
    category: "Technical",
    traditional: {
      rulesBased: { value: "Fallback to bestsellers", status: "poor" },
      collaborativeFiltering: { value: "No signal until interactions", status: "poor" },
      contentBased: { value: "Product-only similarity", status: "medium" },
      hybridML: { value: "Contextual bandits (explore/exploit)", status: "good" }
    },
    agentic: {
      value: "Zero-shot persona inference from session context + transfer learning",
      status: "excellent"
    }
  },
  {
    dimension: "Time-to-Value",
    icon: Clock,
    category: "ROI",
    traditional: {
      rulesBased: { value: "2-4 weeks (manual rule setup)", status: "medium" },
      collaborativeFiltering: { value: "6-12 months (data accumulation)", status: "poor" },
      contentBased: { value: "2-3 months (catalog indexing)", status: "medium" },
      hybridML: { value: "6-9 months (model training + tuning)", status: "medium" }
    },
    agentic: {
      value: "4-6 weeks — pre-trained foundation + fine-tuning on your data",
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
            <span className="text-sm font-medium text-primary">Business & Technical Deep Dive</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Traditional Approaches vs. <span className="gradient-text">Agentic AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive comparison across ML architecture, data infrastructure, business logic integration, and measurable ROI impact.
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {Object.entries(categoryColors).map(([category, colorClass]) => (
            <Badge key={category} variant="outline" className={`gap-2 px-3 py-1.5 ${colorClass}`}>
              <span className="text-xs font-medium">{category}</span>
            </Badge>
          ))}
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
                  <TableHead className="w-[200px] font-bold text-foreground">Dimension</TableHead>
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
                  <TableHead className="min-w-[200px] bg-primary/5">
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
                          <DimensionIcon className="w-4 h-4 text-muted-foreground" />
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

        {/* Summary Cards - Enhanced with Business + Technical focus */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">Advanced ML Stack</h4>
            <p className="text-sm text-muted-foreground">
              Transformer reasoning with ReAct chains, not legacy matrix operations
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold mb-2">Business Logic Native</h4>
            <p className="text-sm text-muted-foreground">
              Margin, inventory, and promo rules injected into reasoning context
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="font-semibold mb-2">Proven ROI</h4>
            <p className="text-sm text-muted-foreground">
              +35% conversion, -40% returns, measurable revenue impact
            </p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Full Transparency</h4>
            <p className="text-sm text-muted-foreground">
              Auditable reasoning chains, GDPR-compliant explainability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

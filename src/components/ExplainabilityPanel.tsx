import { useState } from "react";
import { 
  HelpCircle, 
  X, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Zap,
  ChevronUp,
  ChevronDown
} from "lucide-react";

const signals = [
  { label: "Style Affinity", value: 92, icon: TrendingUp },
  { label: "Fit Confidence", value: 88, icon: Shield },
  { label: "Purchase Probability", value: 76, icon: BarChart3 },
  { label: "Seasonal Relevance", value: 94, icon: Zap },
];

const drivers = [
  "Past workwear purchases (12 items in 6 months)",
  "Low return rate on structured fits",
  "High engagement with neutral colour palette",
  "Preferred price range match (£40-100)",
];

const ExplainabilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all glow-effect"
      >
        <HelpCircle className="w-5 h-5" />
        <span className="font-medium">Why am I seeing this?</span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-80 glass-card overflow-hidden transition-all duration-300 ${
        isMinimized ? "h-14" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          <span className="font-semibold">Explainability</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded hover:bg-secondary transition-colors"
          >
            {isMinimized ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded hover:bg-secondary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="p-4 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Confidence Signals */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">
              Key Signals Used
            </h4>
            <div className="space-y-3">
              {signals.map((signal) => (
                <div key={signal.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <signal.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{signal.label}</span>
                      <span className="text-sm font-medium text-primary">{signal.value}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                        style={{ width: `${signal.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ranking Drivers */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">
              Ranking Drivers
            </h4>
            <ul className="space-y-2">
              {drivers.map((driver, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {driver}
                </li>
              ))}
            </ul>
          </div>

          {/* Overall Score */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Overall Confidence
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold gradient-text">87%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              High confidence this product matches your preferences
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplainabilityPanel;

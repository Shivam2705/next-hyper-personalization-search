import { useState } from "react";
import { Brain, TrendingUp, Shield, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { Product } from "@/pages/Store";

interface ProductCardEnhancedProps {
  product: Product;
  personaId: string;
  showReasoning: boolean;
  showReasoningExpanded: boolean;
  rank?: number;
}

const ProductCardEnhanced = ({ 
  product, 
  personaId, 
  showReasoning, 
  showReasoningExpanded,
  rank 
}: ProductCardEnhancedProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scores = product.personalizationScores[personaId];
  const isActuallyExpanded = showReasoningExpanded || isExpanded;

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-400";
    if (score >= 70) return "text-yellow-400";
    if (score >= 50) return "text-orange-400";
    return "text-red-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 85) return "bg-green-500/20 border-green-500/30";
    if (score >= 70) return "bg-yellow-500/20 border-yellow-500/30";
    if (score >= 50) return "bg-orange-500/20 border-orange-500/30";
    return "bg-red-500/20 border-red-500/30";
  };

  return (
    <div className="product-card group relative">
      {/* Rank Badge */}
      {rank && rank <= 3 && (
        <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
          #{rank}
        </div>
      )}

      {/* Personalization Score Badge */}
      {showReasoning && scores && (
        <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-bold border ${getScoreBg(scores.score)}`}>
          <span className={getScoreColor(scores.score)}>{scores.score}%</span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-primary font-medium mb-1">{product.category}</div>
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="text-lg font-bold text-foreground">{product.priceDisplay}</div>

        {/* Reasoning Section */}
        {showReasoning && scores && (
          <div className="mt-3 pt-3 border-t border-border/50">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-xs">
                <TrendingUp className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground">Style:</span>
                <span className={`font-medium ${getScoreColor(scores.styleMatch)}`}>{scores.styleMatch}%</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Shield className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground">Fit:</span>
                <span className={`font-medium ${getScoreColor(scores.fitConfidence)}`}>{scores.fitConfidence}%</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-2">
              {scores.lowReturnRisk && (
                <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 rounded text-[10px] font-medium">
                  Low Return Risk
                </span>
              )}
              <span className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-medium">
                {scores.occasionRelevance}
              </span>
            </div>

            {/* Expandable Reasoning */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors w-full"
            >
              <Brain className="w-3 h-3" />
              <span>Why this product?</span>
              {isActuallyExpanded ? (
                <ChevronUp className="w-3 h-3 ml-auto" />
              ) : (
                <ChevronDown className="w-3 h-3 ml-auto" />
              )}
            </button>

            {isActuallyExpanded && (
              <div className="mt-2 p-2 bg-secondary/50 rounded-lg animate-fade-in">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {scores.reasoning}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardEnhanced;

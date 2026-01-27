import { useState } from "react";
import { Heart, Eye, Check, TrendingUp, Shield, Calendar } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    reasons: {
      styleMatch: number;
      fitConfidence: number;
      lowReturnRisk: boolean;
      occasionRelevance: string;
    };
  };
  showExplainability: boolean;
}

const ProductCard = ({ product, showExplainability }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="product-card relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
              isLiked
                ? "bg-primary text-primary-foreground"
                : "bg-background/70 text-foreground hover:bg-background"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
          <button className="w-9 h-9 rounded-full bg-background/70 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-background transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Ranking Badge */}
        <div className="absolute top-4 left-4">
          <div className="explainability-badge">
            <TrendingUp className="w-3 h-3" />
            Ranked for you
          </div>
        </div>

        {/* Explainability Overlay */}
        {(isHovered || showExplainability) && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-4 animate-fade-in">
            <div className="text-sm font-medium text-foreground mb-3">
              Why this is shown to you:
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Style match: <span className="text-foreground font-medium">{product.reasons.styleMatch}%</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Fit confidence: <span className="text-foreground font-medium">{product.reasons.fitConfidence}%</span>
                </span>
              </div>
              {product.reasons.lowReturnRisk && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-muted-foreground">
                    <span className="text-emerald-400 font-medium">Low return risk</span>
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Occasion: <span className="text-foreground font-medium">{product.reasons.occasionRelevance}</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <h3 className="font-medium text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="text-lg font-semibold text-primary">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

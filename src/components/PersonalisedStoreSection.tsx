import { useState } from "react";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Tailored Midi Dress in Navy",
    price: "£65",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    category: "Workwear",
    reasons: { styleMatch: 94, fitConfidence: 91, lowReturnRisk: true, occasionRelevance: "Office" },
  },
  {
    id: 2,
    name: "Structured Wool Blazer",
    price: "£89",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop",
    category: "Jackets",
    reasons: { styleMatch: 92, fitConfidence: 88, lowReturnRisk: true, occasionRelevance: "Smart Casual" },
  },
  {
    id: 3,
    name: "Slim Fit Trousers",
    price: "£45",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    category: "Trousers",
    reasons: { styleMatch: 89, fitConfidence: 93, lowReturnRisk: true, occasionRelevance: "Versatile" },
  },
  {
    id: 4,
    name: "Silk Blend Blouse",
    price: "£55",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=600&fit=crop",
    category: "Tops",
    reasons: { styleMatch: 91, fitConfidence: 86, lowReturnRisk: false, occasionRelevance: "Office" },
  },
  {
    id: 5,
    name: "Leather Ankle Boots",
    price: "£79",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop",
    category: "Footwear",
    reasons: { styleMatch: 88, fitConfidence: 95, lowReturnRisk: true, occasionRelevance: "All-day" },
  },
  {
    id: 6,
    name: "Cashmere Blend Knit",
    price: "£75",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop",
    category: "Knitwear",
    reasons: { styleMatch: 87, fitConfidence: 90, lowReturnRisk: true, occasionRelevance: "Layering" },
  },
  {
    id: 7,
    name: "Minimalist Tote Bag",
    price: "£49",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=600&fit=crop",
    category: "Accessories",
    reasons: { styleMatch: 85, fitConfidence: 100, lowReturnRisk: true, occasionRelevance: "Work" },
  },
  {
    id: 8,
    name: "Wide Leg Culottes",
    price: "£42",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop",
    category: "Trousers",
    reasons: { styleMatch: 84, fitConfidence: 82, lowReturnRisk: false, occasionRelevance: "Weekend" },
  },
];

const PersonalisedStoreSection = () => {
  const [showExplainability, setShowExplainability] = useState(false);

  return (
    <section id="store" className="section-padding relative">
      <div className="container px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Personalised for Emma</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Your <span className="gradient-text">Personalised</span> Store
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Products ranked and ordered based on how you shop. 
              Hover over any item to see why it was chosen for you.
            </p>
          </div>

          {/* Explainability Toggle */}
          <Button
            variant={showExplainability ? "default" : "outline"}
            onClick={() => setShowExplainability(!showExplainability)}
            className={`gap-2 ${showExplainability ? "bg-primary text-primary-foreground" : "border-border hover:bg-secondary"}`}
          >
            {showExplainability ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide Reasoning
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Why am I seeing this?
              </>
            )}
          </Button>
        </div>

        {/* Personalisation Banner */}
        <div className="glass-card p-4 mb-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-foreground">
              Recommended for You, Based on How You Shop
            </div>
            <div className="text-xs text-muted-foreground">
              Showing workwear & smart casual · Neutral colours prioritised · Structured fits · Size 10
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showExplainability={showExplainability}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalisedStoreSection;

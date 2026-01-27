import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  Sparkles, 
  ArrowUpDown, 
  ChevronDown,
  Brain,
  TrendingUp,
  DollarSign,
  Star,
  SortAsc,
  LogOut,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import ProductCardEnhanced from "@/components/ProductCardEnhanced";
import { personas, Persona } from "./Login";

export interface Product {
  id: number;
  name: string;
  price: number;
  priceDisplay: string;
  image: string;
  category: string;
  popularity: number;
  personalizationScores: {
    [personaId: string]: {
      score: number;
      styleMatch: number;
      fitConfidence: number;
      lowReturnRisk: boolean;
      occasionRelevance: string;
      reasoning: string;
    };
  };
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Tailored Midi Dress in Navy",
    price: 65,
    priceDisplay: "£65",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    category: "Workwear",
    popularity: 92,
    personalizationScores: {
      emma: { score: 98, styleMatch: 94, fitConfidence: 91, lowReturnRisk: true, occasionRelevance: "Office", reasoning: "Perfect match for Emma's workwear preferences. Structured fit aligns with past purchases. Navy is her top colour choice." },
      david: { score: 45, styleMatch: 40, fitConfidence: 50, lowReturnRisk: false, occasionRelevance: "Formal", reasoning: "Not aligned with David's casual family-focused shopping intent." },
      aisha: { score: 62, styleMatch: 55, fitConfidence: 70, lowReturnRisk: true, occasionRelevance: "Work", reasoning: "Could work for office wear but not trend-forward enough for Aisha's preferences." }
    }
  },
  {
    id: 2,
    name: "Structured Wool Blazer",
    price: 89,
    priceDisplay: "£89",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop",
    category: "Jackets",
    popularity: 88,
    personalizationScores: {
      emma: { score: 95, styleMatch: 92, fitConfidence: 88, lowReturnRisk: true, occasionRelevance: "Smart Casual", reasoning: "Strong match with Emma's structured silhouette preference. Similar to past successful purchases." },
      david: { score: 52, styleMatch: 48, fitConfidence: 55, lowReturnRisk: false, occasionRelevance: "Formal", reasoning: "Too formal for David's casual wear focus. Price point above typical range." },
      aisha: { score: 70, styleMatch: 65, fitConfidence: 75, lowReturnRisk: true, occasionRelevance: "Evening", reasoning: "Classic piece that could complement Aisha's wardrobe but not a standout choice." }
    }
  },
  {
    id: 3,
    name: "Slim Fit Trousers",
    price: 45,
    priceDisplay: "£45",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    category: "Trousers",
    popularity: 85,
    personalizationScores: {
      emma: { score: 91, styleMatch: 89, fitConfidence: 93, lowReturnRisk: true, occasionRelevance: "Versatile", reasoning: "Versatile piece matching Emma's style. High fit confidence based on size history." },
      david: { score: 68, styleMatch: 60, fitConfidence: 72, lowReturnRisk: true, occasionRelevance: "Casual", reasoning: "Practical option that fits David's budget consciousness. Good for everyday wear." },
      aisha: { score: 55, styleMatch: 50, fitConfidence: 60, lowReturnRisk: true, occasionRelevance: "Basic", reasoning: "Too basic for Aisha's trend-forward preferences." }
    }
  },
  {
    id: 4,
    name: "Silk Blend Blouse",
    price: 55,
    priceDisplay: "£55",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=600&fit=crop",
    category: "Tops",
    popularity: 78,
    personalizationScores: {
      emma: { score: 88, styleMatch: 91, fitConfidence: 86, lowReturnRisk: false, occasionRelevance: "Office", reasoning: "Elegant workwear option. Slight return risk due to fit sensitivity with silk fabrics." },
      david: { score: 35, styleMatch: 30, fitConfidence: 40, lowReturnRisk: false, occasionRelevance: "Formal", reasoning: "Not aligned with David's shopping patterns or family focus." },
      aisha: { score: 75, styleMatch: 72, fitConfidence: 78, lowReturnRisk: true, occasionRelevance: "Going Out", reasoning: "Versatile piece that could work for Aisha's evening occasions." }
    }
  },
  {
    id: 5,
    name: "Leather Ankle Boots",
    price: 79,
    priceDisplay: "£79",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop",
    category: "Footwear",
    popularity: 95,
    personalizationScores: {
      emma: { score: 85, styleMatch: 88, fitConfidence: 95, lowReturnRisk: true, occasionRelevance: "All-day", reasoning: "Classic footwear matching Emma's style. Excellent fit confidence from past footwear purchases." },
      david: { score: 72, styleMatch: 65, fitConfidence: 80, lowReturnRisk: true, occasionRelevance: "Everyday", reasoning: "Practical footwear option. Good value for quality." },
      aisha: { score: 82, styleMatch: 78, fitConfidence: 85, lowReturnRisk: true, occasionRelevance: "Versatile", reasoning: "Trendy enough to appeal to Aisha while being practical." }
    }
  },
  {
    id: 6,
    name: "Cashmere Blend Knit",
    price: 75,
    priceDisplay: "£75",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop",
    category: "Knitwear",
    popularity: 82,
    personalizationScores: {
      emma: { score: 83, styleMatch: 87, fitConfidence: 90, lowReturnRisk: true, occasionRelevance: "Layering", reasoning: "Quality layering piece for Emma's office wardrobe. Neutral colour options available." },
      david: { score: 58, styleMatch: 55, fitConfidence: 65, lowReturnRisk: true, occasionRelevance: "Casual", reasoning: "Price point slightly high for David's value focus, but quality piece." },
      aisha: { score: 60, styleMatch: 55, fitConfidence: 70, lowReturnRisk: true, occasionRelevance: "Basic", reasoning: "Too understated for Aisha's bold style preferences." }
    }
  },
  {
    id: 7,
    name: "Multi-Pack Cotton Tees (3)",
    price: 25,
    priceDisplay: "£25",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
    category: "Basics",
    popularity: 96,
    personalizationScores: {
      emma: { score: 55, styleMatch: 50, fitConfidence: 80, lowReturnRisk: true, occasionRelevance: "Casual", reasoning: "Basic item for casual wear. Not aligned with Emma's workwear focus." },
      david: { score: 95, styleMatch: 88, fitConfidence: 92, lowReturnRisk: true, occasionRelevance: "Everyday", reasoning: "Perfect for David! Multi-buy value, practical family basics. High engagement with similar offers." },
      aisha: { score: 40, styleMatch: 35, fitConfidence: 75, lowReturnRisk: true, occasionRelevance: "Basics", reasoning: "Too basic for Aisha's fashion-forward preferences." }
    }
  },
  {
    id: 8,
    name: "Kids Denim Dungarees",
    price: 22,
    priceDisplay: "£22",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop",
    category: "Kidswear",
    popularity: 89,
    personalizationScores: {
      emma: { score: 20, styleMatch: 15, fitConfidence: 50, lowReturnRisk: true, occasionRelevance: "N/A", reasoning: "Not relevant to Emma's shopping profile - no kidswear history." },
      david: { score: 92, styleMatch: 85, fitConfidence: 88, lowReturnRisk: true, occasionRelevance: "Kids", reasoning: "Excellent match for David's family shopping! Durable, practical, great value." },
      aisha: { score: 15, styleMatch: 10, fitConfidence: 40, lowReturnRisk: true, occasionRelevance: "N/A", reasoning: "Not relevant to Aisha's profile." }
    }
  },
  {
    id: 9,
    name: "Sequin Evening Dress",
    price: 95,
    priceDisplay: "£95",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
    category: "Eveningwear",
    popularity: 75,
    personalizationScores: {
      emma: { score: 45, styleMatch: 40, fitConfidence: 55, lowReturnRisk: false, occasionRelevance: "Special", reasoning: "Too bold for Emma's understated style. Occasion mismatch with daily needs." },
      david: { score: 25, styleMatch: 20, fitConfidence: 30, lowReturnRisk: false, occasionRelevance: "N/A", reasoning: "Not aligned with David's casual family-focused shopping." },
      aisha: { score: 97, styleMatch: 95, fitConfidence: 88, lowReturnRisk: true, occasionRelevance: "Evening", reasoning: "Perfect for Aisha! Trend-led, statement piece for occasions. Matches her bold style affinity." }
    }
  },
  {
    id: 10,
    name: "Bold Print Maxi Skirt",
    price: 49,
    priceDisplay: "£49",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0edd2?w=400&h=600&fit=crop",
    category: "Skirts",
    popularity: 70,
    personalizationScores: {
      emma: { score: 42, styleMatch: 38, fitConfidence: 50, lowReturnRisk: false, occasionRelevance: "Casual", reasoning: "Bold print doesn't match Emma's neutral colour preference." },
      david: { score: 30, styleMatch: 25, fitConfidence: 35, lowReturnRisk: false, occasionRelevance: "N/A", reasoning: "Not relevant to David's shopping patterns." },
      aisha: { score: 94, styleMatch: 92, fitConfidence: 85, lowReturnRisk: true, occasionRelevance: "Statement", reasoning: "Excellent match! Bold print aligns with Aisha's trend-forward style." }
    }
  },
  {
    id: 11,
    name: "Family Matching PJs Set",
    price: 35,
    priceDisplay: "£35",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=600&fit=crop",
    category: "Sleepwear",
    popularity: 80,
    personalizationScores: {
      emma: { score: 35, styleMatch: 30, fitConfidence: 60, lowReturnRisk: true, occasionRelevance: "Home", reasoning: "Not aligned with Emma's professional wardrobe focus." },
      david: { score: 88, styleMatch: 82, fitConfidence: 85, lowReturnRisk: true, occasionRelevance: "Family", reasoning: "Great family purchase! Matches David's multi-buy and family shopping patterns." },
      aisha: { score: 25, styleMatch: 20, fitConfidence: 55, lowReturnRisk: true, occasionRelevance: "Home", reasoning: "Not aligned with Aisha's fashion-forward preferences." }
    }
  },
  {
    id: 12,
    name: "Statement Earrings",
    price: 18,
    priceDisplay: "£18",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop",
    category: "Accessories",
    popularity: 73,
    personalizationScores: {
      emma: { score: 50, styleMatch: 45, fitConfidence: 100, lowReturnRisk: true, occasionRelevance: "Accent", reasoning: "Could add interest to Emma's outfits but bolder than typical preference." },
      david: { score: 40, styleMatch: 35, fitConfidence: 100, lowReturnRisk: true, occasionRelevance: "Gift", reasoning: "Potential gift purchase but not David's primary focus." },
      aisha: { score: 90, styleMatch: 92, fitConfidence: 100, lowReturnRisk: true, occasionRelevance: "Statement", reasoning: "Perfect accessory for Aisha's bold evening looks. Great add-on recommendation." }
    }
  }
];

type SortOption = "hyper-personalization" | "popular" | "price-low" | "price-high" | "alphabetical" | "relevant";

const sortOptions: { value: SortOption; label: string; icon: React.ElementType; description: string }[] = [
  { value: "hyper-personalization", label: "Hyper-Personalization Score", icon: Brain, description: "AI-ranked for you" },
  { value: "popular", label: "Most Popular", icon: TrendingUp, description: "Best sellers" },
  { value: "price-low", label: "Price: Low to High", icon: DollarSign, description: "Budget first" },
  { value: "price-high", label: "Price: High to Low", icon: DollarSign, description: "Premium first" },
  { value: "alphabetical", label: "Alphabetical", icon: SortAsc, description: "A to Z" },
  { value: "relevant", label: "Most Relevant", icon: Star, description: "Category match" }
];

const Store = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const personaId = searchParams.get("persona") || "emma";
  const [sortBy, setSortBy] = useState<SortOption>("hyper-personalization");
  const [showReasoningForAll, setShowReasoningForAll] = useState(false);

  const persona = personas.find(p => p.id === personaId) || personas[0];

  const sortedProducts = useMemo(() => {
    const products = [...allProducts];
    
    switch (sortBy) {
      case "hyper-personalization":
        return products.sort((a, b) => 
          (b.personalizationScores[personaId]?.score || 0) - (a.personalizationScores[personaId]?.score || 0)
        );
      case "popular":
        return products.sort((a, b) => b.popularity - a.popularity);
      case "price-low":
        return products.sort((a, b) => a.price - b.price);
      case "price-high":
        return products.sort((a, b) => b.price - a.price);
      case "alphabetical":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "relevant":
        return products.sort((a, b) => {
          const aRelevant = a.category.toLowerCase().includes(persona.intent.split(" ")[0].toLowerCase()) ? 1 : 0;
          const bRelevant = b.category.toLowerCase().includes(persona.intent.split(" ")[0].toLowerCase()) ? 1 : 0;
          return bRelevant - aRelevant;
        });
      default:
        return products;
    }
  }, [sortBy, personaId, persona.intent]);

  const currentSortOption = sortOptions.find(opt => opt.value === sortBy) || sortOptions[0];
  const isHyperPersonalized = sortBy === "hyper-personalization";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">NEXT</span>
          </div>
          
          {/* Persona Indicator */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-secondary/50 rounded-full">
              <img 
                src={persona.avatar} 
                alt={persona.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-primary"
              />
              <div className="hidden md:block">
                <span className="text-sm font-medium">{persona.name}</span>
                <span className="text-xs text-muted-foreground ml-2">{persona.title}</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/login")}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Switch Persona</span>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Personalized for {persona.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Your <span className="gradient-text">Curated</span> Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Products ranked and ordered based on your shopping behavior, style preferences, and purchase history. 
            {isHyperPersonalized && " Each item shows why it was selected for you."}
          </p>
        </div>

        {/* Personalization Banner */}
        {isHyperPersonalized && (
          <div className="glass-card p-4 mb-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground mb-1">
                🎯 Agentic AI Ranking Active
              </div>
              <div className="text-xs text-muted-foreground">
                Products ordered by hyper-personalization score · Showing {persona.intent} · {persona.style} styles prioritized · {persona.priceRange} price range
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowReasoningForAll(!showReasoningForAll)}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              {showReasoningForAll ? "Hide" : "Show"} All Reasoning
            </Button>
          </div>
        )}

        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <p className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} products
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 min-w-[280px] justify-between border-border hover:bg-secondary">
                <div className="flex items-center gap-2">
                  <currentSortOption.icon className="w-4 h-4 text-primary" />
                  <span>{currentSortOption.label}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[280px]">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                AI-Powered Sorting
              </div>
              <DropdownMenuItem 
                onClick={() => setSortBy("hyper-personalization")}
                className={`gap-3 ${sortBy === "hyper-personalization" ? "bg-primary/10 text-primary" : ""}`}
              >
                <Brain className="w-4 h-4" />
                <div className="flex-1">
                  <div className="font-medium">Hyper-Personalization Score</div>
                  <div className="text-xs text-muted-foreground">AI-ranked for you</div>
                </div>
                {sortBy === "hyper-personalization" && <Sparkles className="w-4 h-4 text-primary" />}
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                Standard Sorting
              </div>
              
              {sortOptions.filter(opt => opt.value !== "hyper-personalization").map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`gap-3 ${sortBy === option.value ? "bg-secondary" : ""}`}
                >
                  <option.icon className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground">{option.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product, index) => (
            <ProductCardEnhanced
              key={product.id}
              product={product}
              personaId={personaId}
              showReasoning={isHyperPersonalized}
              showReasoningExpanded={showReasoningForAll}
              rank={isHyperPersonalized ? index + 1 : undefined}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Store;

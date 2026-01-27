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
      emma: { 
        score: 98, 
        styleMatch: 94, 
        fitConfidence: 91, 
        lowReturnRisk: true, 
        occasionRelevance: "Office", 
        reasoning: "📊 Based on 8 previous workwear purchases | Navy is Emma's #1 colour (worn 67% of recent outfits) | Structured midi silhouettes have 0% return rate in Emma's history | Price aligns with her £50-80 sweet spot | Similar items browsed for 4+ mins average dwell time."
      },
      david: { 
        score: 45, 
        styleMatch: 40, 
        fitConfidence: 50, 
        lowReturnRisk: false, 
        occasionRelevance: "Formal", 
        reasoning: "⚠️ Category mismatch: David's basket is 85% casualwear/kidswear | No womenswear purchase history | Price point £40 above his typical basket average | No offer bundle available."
      },
      aisha: { 
        score: 62, 
        styleMatch: 55, 
        fitConfidence: 70, 
        lowReturnRisk: true, 
        occasionRelevance: "Work", 
        reasoning: "📉 Style is understated vs. Aisha's trend-forward preference | Navy appears in only 12% of her wardrobe | Could work for office but not her primary shopping intent (occasionwear)."
      }
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
      emma: { 
        score: 95, 
        styleMatch: 92, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Smart Casual", 
        reasoning: "🎯 High affinity: Emma purchased 3 similar blazers (12-month LTV: £420 in outerwear) | Size 12 wool blazers show 0% return rate | Complements 6 items in her recent orders | Smart-casual matches her Mon-Fri browsing pattern."
      },
      david: { 
        score: 52, 
        styleMatch: 48, 
        fitConfidence: 55, 
        lowReturnRisk: false, 
        occasionRelevance: "Formal", 
        reasoning: "⚠️ Price £34 above David's category average | Formal style conflicts with 'casual & practical' segment | Low cross-sell potential with kidswear cart items."
      },
      aisha: { 
        score: 70, 
        styleMatch: 65, 
        fitConfidence: 75, 
        lowReturnRisk: true, 
        occasionRelevance: "Evening", 
        reasoning: "📊 Classic silhouette ranks lower in Aisha's trend-affinity model | Could layer for evening events but not a statement piece she typically seeks."
      }
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
      emma: { 
        score: 91, 
        styleMatch: 89, 
        fitConfidence: 93, 
        lowReturnRisk: true, 
        occasionRelevance: "Versatile", 
        reasoning: "✅ Perfect size match: Emma's trouser size (10 Long) shows 97% fit satisfaction | Versatile piece pairs with 4 tops in her wishlist | Price within preferred range | Similar cut purchased twice with zero returns."
      },
      david: { 
        score: 68, 
        styleMatch: 60, 
        fitConfidence: 72, 
        lowReturnRisk: true, 
        occasionRelevance: "Casual", 
        reasoning: "📊 Price-conscious fit: £45 matches David's value threshold | Could work for everyday but not his primary focus | No multi-buy available to boost ranking."
      },
      aisha: { 
        score: 55, 
        styleMatch: 50, 
        fitConfidence: 60, 
        lowReturnRisk: true, 
        occasionRelevance: "Basic", 
        reasoning: "📉 Ranked lower: Basic silhouette scores 3.2/10 on Aisha's trend-forward index | No statement appeal | Low engagement predicted based on similar items."
      }
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
      emma: { 
        score: 88, 
        styleMatch: 91, 
        fitConfidence: 86, 
        lowReturnRisk: false, 
        occasionRelevance: "Office", 
        reasoning: "🎯 Strong style match: Silk blouses appear in 5 of Emma's saved outfits | Office-appropriate as primary intent | ⚠️ Note: Silk items show 18% return rate in her history (fit sensitivity) — factored into score."
      },
      david: { 
        score: 35, 
        styleMatch: 30, 
        fitConfidence: 40, 
        lowReturnRisk: false, 
        occasionRelevance: "Formal", 
        reasoning: "❌ Low relevance: No womenswear in David's 24-month purchase history | Doesn't fit family shopping context | No gift-intent signals detected."
      },
      aisha: { 
        score: 75, 
        styleMatch: 72, 
        fitConfidence: 78, 
        lowReturnRisk: true, 
        occasionRelevance: "Going Out", 
        reasoning: "📊 Moderate match: Versatile for Aisha's evening occasions | Silk fabric aligns with premium preference | Ranked below bolder statement pieces."
      }
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
      emma: { 
        score: 85, 
        styleMatch: 88, 
        fitConfidence: 95, 
        lowReturnRisk: true, 
        occasionRelevance: "All-day", 
        reasoning: "✅ High fit confidence: Emma's shoe size (6) has 98% satisfaction in ankle boots | Classic style complements workwear wardrobe | Previously viewed similar styles 3x without purchase — price may be factor."
      },
      david: { 
        score: 72, 
        styleMatch: 65, 
        fitConfidence: 80, 
        lowReturnRisk: true, 
        occasionRelevance: "Everyday", 
        reasoning: "📊 Practical choice: Durable footwear aligns with David's 'practical purchases' segment | £79 within acceptable range for quality items | Potential gift purchase detected."
      },
      aisha: { 
        score: 82, 
        styleMatch: 78, 
        fitConfidence: 85, 
        lowReturnRisk: true, 
        occasionRelevance: "Versatile", 
        reasoning: "🎯 Good versatility: Boots work across Aisha's occasion wardrobe | On-trend block heel | Ranked below statement footwear preferences."
      }
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
      emma: { 
        score: 83, 
        styleMatch: 87, 
        fitConfidence: 90, 
        lowReturnRisk: true, 
        occasionRelevance: "Layering", 
        reasoning: "📊 Seasonal relevance: Knitwear demand +40% in Emma's region (Reading) | Neutral colours in stock match her palette | Quality layering for office temperature control."
      },
      david: { 
        score: 58, 
        styleMatch: 55, 
        fitConfidence: 65, 
        lowReturnRisk: true, 
        occasionRelevance: "Casual", 
        reasoning: "⚠️ Price sensitivity flag: £75 is 45% above David's knitwear average (£52) | Quality piece but may not convert without discount."
      },
      aisha: { 
        score: 60, 
        styleMatch: 55, 
        fitConfidence: 70, 
        lowReturnRisk: true, 
        occasionRelevance: "Basic", 
        reasoning: "📉 Low trend score: Classic knitwear doesn't match Aisha's 'new arrivals first' behaviour | Understated for her statement-seeking profile."
      }
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
      emma: { 
        score: 55, 
        styleMatch: 50, 
        fitConfidence: 80, 
        lowReturnRisk: true, 
        occasionRelevance: "Casual", 
        reasoning: "📉 Lower priority: Basics rank low in Emma's workwear-focused journey | May purchase as add-on but not primary driver | Weekend casual not her peak intent."
      },
      david: { 
        score: 95, 
        styleMatch: 88, 
        fitConfidence: 92, 
        lowReturnRisk: true, 
        occasionRelevance: "Everyday", 
        reasoning: "🏆 TOP MATCH: Multi-buy format matches David's value-maximizing behaviour | £8.33/item hits sweet spot | 4 similar multi-packs purchased in 12 months | High offer responsiveness (opened 89% of multi-buy emails) | Family staple category."
      },
      aisha: { 
        score: 40, 
        styleMatch: 35, 
        fitConfidence: 75, 
        lowReturnRisk: true, 
        occasionRelevance: "Basics", 
        reasoning: "❌ Mismatch: Basics never appear in Aisha's browsing sessions | Trend index: 1.2/10 | Deprioritized for fashion-forward profile."
      }
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
      emma: { 
        score: 20, 
        styleMatch: 15, 
        fitConfidence: 50, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: Zero kidswear in Emma's 36-month history | No children detected in household signals | Category excluded from her personalized feed."
      },
      david: { 
        score: 92, 
        styleMatch: 85, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Kids", 
        reasoning: "🏆 HIGH PRIORITY: David's household includes 2 children (ages 4, 7) | Kidswear = 45% of annual spend | Denim durability matches his 'practical & durable' filter | Price within kids budget threshold | Recently browsed similar styles."
      },
      aisha: { 
        score: 15, 
        styleMatch: 10, 
        fitConfidence: 40, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: No children in Aisha's profile | Zero kidswear engagement signals."
      }
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
      emma: { 
        score: 45, 
        styleMatch: 40, 
        fitConfidence: 55, 
        lowReturnRisk: false, 
        occasionRelevance: "Special", 
        reasoning: "📉 Style mismatch: Sequins score 2.1/10 on Emma's understated style index | No evening events detected in calendar signals | Workwear focus doesn't align."
      },
      david: { 
        score: 25, 
        styleMatch: 20, 
        fitConfidence: 30, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Evening womenswear outside David's shopping context | No gift-intent signals active."
      },
      aisha: { 
        score: 97, 
        styleMatch: 95, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Evening", 
        reasoning: "🏆 PERFECT MATCH: Sequins = Aisha's #1 fabric for occasions (worn at 4 recent events) | New-in collection (24hrs) matches her 'first to trend' behaviour | Statement silhouette scores 9.4/10 | 3 upcoming events in social calendar | Size 10 evening dresses: 0% returns."
      }
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
      emma: { 
        score: 42, 
        styleMatch: 38, 
        fitConfidence: 50, 
        lowReturnRisk: false, 
        occasionRelevance: "Casual", 
        reasoning: "📉 Pattern conflict: Bold prints appear in 0% of Emma's purchases | Neutral palette preference (92% of wardrobe) | Return risk elevated for unfamiliar styles."
      },
      david: { 
        score: 30, 
        styleMatch: 25, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Low relevance: Outside David's casualwear/kidswear focus | No womenswear patterns detected."
      },
      aisha: { 
        score: 94, 
        styleMatch: 92, 
        fitConfidence: 85, 
        lowReturnRisk: true, 
        occasionRelevance: "Statement", 
        reasoning: "🎯 STRONG MATCH: Bold prints = 78% of Aisha's recent purchases | Maxi length trending +35% in her style cohort | Instagram-saved similar styles 6x | Perfect for summer events calendar."
      }
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
      emma: { 
        score: 35, 
        styleMatch: 30, 
        fitConfidence: 60, 
        lowReturnRisk: true, 
        occasionRelevance: "Home", 
        reasoning: "📉 Low intent match: Sleepwear is 2% of Emma's browse time | No family matching signals | Professional wardrobe remains priority."
      },
      david: { 
        score: 88, 
        styleMatch: 82, 
        fitConfidence: 85, 
        lowReturnRisk: true, 
        occasionRelevance: "Family", 
        reasoning: "🎯 FAMILY FAVOURITE: Multi-size matching sets = David's top seasonal category | Purchased similar 2x in past year | 'Family activities' segment trigger | Price optimized for household budget | High engagement with family content."
      },
      aisha: { 
        score: 25, 
        styleMatch: 20, 
        fitConfidence: 55, 
        lowReturnRisk: true, 
        occasionRelevance: "Home", 
        reasoning: "❌ Category excluded: No family/home focus in Aisha's profile | Trend relevance: minimal."
      }
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
      emma: { 
        score: 50, 
        styleMatch: 45, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Accent", 
        reasoning: "📊 Moderate add-on potential: Could complement workwear outfits | 'Statement' style bolder than Emma's typical accessory choices | Low price enables impulse add."
      },
      david: { 
        score: 40, 
        styleMatch: 35, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Gift potential: Anniversary date approaching (14 days) | Accessories = common gift category | Low price point enables trial."
      },
      aisha: { 
        score: 90, 
        styleMatch: 92, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Statement", 
        reasoning: "🎯 PERFECT ADD-ON: Statement accessories purchased with 73% of Aisha's evening orders | Bold design matches trend profile | High-margin upsell opportunity | Complements sequin dress recommendation."
      }
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
          <div className="glass-card p-4 mb-6 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">
                  Agentic AI Ranking Active
                </div>
                <div className="text-xs text-muted-foreground">
                  Products ranked by personalization score · {persona.style} styles · {persona.priceRange}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowReasoningForAll(!showReasoningForAll)}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                {showReasoningForAll ? "Hide" : "Expand"} All Reasoning
              </Button>
            </div>
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

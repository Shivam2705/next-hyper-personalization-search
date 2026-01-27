import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  Sparkles, 
  ChevronDown,
  Brain,
  TrendingUp,
  DollarSign,
  Star,
  SortAsc,
  LogOut,
  ArrowDown
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
import PersonaProfile360 from "@/components/PersonaProfile360";
import PastPurchasesSidebar from "@/components/PastPurchasesSidebar";
import ProductFilters, { FilterState } from "@/components/ProductFilters";
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
  // === EMMA'S TOP PICKS: Female Corporate Professional Workwear ===
  // Past purchases: Black Tailored Blazer, Ivory Silk Blouse, Black Pencil Skirt, Camel Cashmere Cardigan, Nude Court Heels
  {
    id: 1,
    name: "Navy Wrap Dress",
    price: 85,
    priceDisplay: "£85",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    category: "Workwear",
    popularity: 88,
    personalizationScores: {
      emma: { 
        score: 98, 
        styleMatch: 96, 
        fitConfidence: 94, 
        lowReturnRisk: true, 
        occasionRelevance: "Office", 
        reasoning: "🏆 NEW RECOMMENDATION: You own a Black Tailored Blazer — this Navy Wrap Dress creates a fresh workwear rotation | Different silhouette from your Pencil Skirt | Same professional aesthetic you love | Size 12 structured fits: 0% return rate | £85 matches your £70-100 workwear budget."
      },
      david: { 
        score: 28, 
        styleMatch: 22, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category mismatch: Women's workwear outside David's family-focused shopping | His history: Boys' Jumpers, Men's Joggers — no womenswear signals."
      },
      aisha: { 
        score: 52, 
        styleMatch: 48, 
        fitConfidence: 65, 
        lowReturnRisk: true, 
        occasionRelevance: "Work", 
        reasoning: "📉 Style gap: Classic navy too understated for Aisha | Her history: Cobalt Wrap Dress, Orange Blazer — she prefers bold statement pieces over classic workwear."
      }
    }
  },
  {
    id: 2,
    name: "White Crepe Blouse",
    price: 65,
    priceDisplay: "£65",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=600&fit=crop",
    category: "Tops",
    popularity: 82,
    personalizationScores: {
      emma: { 
        score: 95, 
        styleMatch: 93, 
        fitConfidence: 91, 
        lowReturnRisk: true, 
        occasionRelevance: "Office", 
        reasoning: "🎯 INSPIRED BY PURCHASE: You loved your Ivory Silk Blouse (5★) — this White Crepe version offers textured upgrade | Different fabric, same elegant style | Complements your Black Blazer | Size 12 blouses: 96% fit satisfaction."
      },
      david: { 
        score: 22, 
        styleMatch: 18, 
        fitConfidence: 30, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: David buys Men's T-shirts & Hoodies, Boys' School items — Women's blouses outside his scope."
      },
      aisha: { 
        score: 58, 
        styleMatch: 52, 
        fitConfidence: 70, 
        lowReturnRisk: true, 
        occasionRelevance: "Basic", 
        reasoning: "📊 Moderate: Classic white blouse lacks the statement factor | Aisha's history shows Pink Tops, Orange Blazers — she prefers bold colours."
      }
    }
  },
  {
    id: 3,
    name: "Grey Tailored Trousers",
    price: 55,
    priceDisplay: "£55",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop",
    category: "Workwear",
    popularity: 85,
    personalizationScores: {
      emma: { 
        score: 94, 
        styleMatch: 92, 
        fitConfidence: 96, 
        lowReturnRisk: true, 
        occasionRelevance: "Versatile", 
        reasoning: "✅ COMPLEMENTS WARDROBE: You own a Black Pencil Skirt — these Grey Tailored Trousers offer different silhouette & colour | Premium wool matches your Cashmere Cardigan quality | Pairs with your Black Blazer | Zero returns on similar cuts."
      },
      david: { 
        score: 25, 
        styleMatch: 20, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Gender mismatch: David's history is Men's Joggers, Hoodies — Women's tailored trousers outside purchase context."
      },
      aisha: { 
        score: 45, 
        styleMatch: 40, 
        fitConfidence: 60, 
        lowReturnRisk: true, 
        occasionRelevance: "Basic", 
        reasoning: "📉 Low priority: Aisha's history: Tropical Skirts, Wrap Dresses — classic workwear trousers don't match her bold, trend-forward preference."
      }
    }
  },
  {
    id: 4,
    name: "Camel Wool Coat",
    price: 120,
    priceDisplay: "£120",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop",
    category: "Outerwear",
    popularity: 90,
    personalizationScores: {
      emma: { 
        score: 92, 
        styleMatch: 90, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Commute", 
        reasoning: "🎯 PATTERN MATCH: You own a Camel Cashmere Cardigan — this Camel Wool Coat extends your neutral layering | Different weight for colder months | Pairs with your professional pieces | Premium quality aligns with your investment-piece behaviour."
      },
      david: { 
        score: 32, 
        styleMatch: 28, 
        fitConfidence: 40, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Outside scope: David's spend: £14-35 range | His outerwear purchases: Boys' Raincoats, Men's Hoodies — Women's premium coats don't fit."
      },
      aisha: { 
        score: 65, 
        styleMatch: 60, 
        fitConfidence: 72, 
        lowReturnRisk: true, 
        occasionRelevance: "Layering", 
        reasoning: "📊 Moderate: Classic camel is timeless but neutral | Aisha's history shows Orange Blazer, Bold accessories — she prefers statement over classic."
      }
    }
  },
  // === DAVID'S TOP PICKS: Family Value ===
  {
    id: 5,
    name: "Boys' Navy Polo Shirt",
    price: 12,
    priceDisplay: "£12",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=600&fit=crop",
    category: "Kidswear",
    popularity: 94,
    personalizationScores: {
      emma: { 
        score: 15, 
        styleMatch: 10, 
        fitConfidence: 50, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: Emma's history is all womenswear (Blazers, Blouses, Trousers) — zero kidswear signals in 36-month profile."
      },
      david: { 
        score: 97, 
        styleMatch: 92, 
        fitConfidence: 94, 
        lowReturnRisk: true, 
        occasionRelevance: "School", 
        reasoning: "🏆 EXTENDS PURCHASE PATTERN: You bought Boys' Grey School Jumper — this Navy Polo completes the uniform set | Different item, same school category | £12 matches your £10-15 kidswear sweet spot | Multi-buy available (3 for £30)."
      },
      aisha: { 
        score: 10, 
        styleMatch: 8, 
        fitConfidence: 40, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Aisha's profile shows eveningwear, accessories — no children or kidswear engagement."
      }
    }
  },
  {
    id: 6,
    name: "Men's Cotton Multi-Pack Tees (5)",
    price: 25,
    priceDisplay: "£25",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
    category: "Menswear Basics",
    popularity: 96,
    personalizationScores: {
      emma: { 
        score: 12, 
        styleMatch: 10, 
        fitConfidence: 20, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Gender mismatch: Emma's purchase history is all womenswear — no menswear signals detected."
      },
      david: { 
        score: 96, 
        styleMatch: 90, 
        fitConfidence: 95, 
        lowReturnRisk: true, 
        occasionRelevance: "Everyday", 
        reasoning: "🏆 VALUE EXTENSION: You bought Men's White T-Shirt 2pk (5★) — this 5-pack offers better value per item | Different colours expand basics rotation | Same quality, £5/tee | Size L: 98% fit satisfaction | Matches your multi-pack buying pattern."
      },
      aisha: { 
        score: 8, 
        styleMatch: 5, 
        fitConfidence: 30, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Aisha's history: Statement dresses, Bold accessories — Men's basics completely outside profile."
      }
    }
  },
  {
    id: 7,
    name: "Boys' Denim Jacket",
    price: 28,
    priceDisplay: "£28",
    image: "https://images.unsplash.com/photo-1445796886651-d31a2c15f3ce?w=400&h=600&fit=crop",
    category: "Kidswear",
    popularity: 88,
    personalizationScores: {
      emma: { 
        score: 18, 
        styleMatch: 15, 
        fitConfidence: 45, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: Emma's wardrobe is professional womenswear — Kidswear excluded from her personalised feed."
      },
      david: { 
        score: 94, 
        styleMatch: 88, 
        fitConfidence: 90, 
        lowReturnRisk: true, 
        occasionRelevance: "Casual", 
        reasoning: "🎯 OUTERWEAR ROTATION: You bought Boys' Waterproof Raincoat — this Denim Jacket adds casual weekend layer | Different style for dry weather | £28 within your kidswear budget | Durable fabric matches your 'practical first' preference."
      },
      aisha: { 
        score: 12, 
        styleMatch: 10, 
        fitConfidence: 40, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Aisha's purchases are all womenswear occasion pieces — no kidswear signals."
      }
    }
  },
  {
    id: 8,
    name: "Men's Casual Weekend Shirt",
    price: 35,
    priceDisplay: "£35",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
    category: "Menswear",
    popularity: 82,
    personalizationScores: {
      emma: { 
        score: 10, 
        styleMatch: 8, 
        fitConfidence: 25, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Gender mismatch: Emma buys womenswear only — her profile shows zero menswear purchase signals."
      },
      david: { 
        score: 91, 
        styleMatch: 86, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Weekend", 
        reasoning: "🎯 STYLE UPGRADE: You own a Navy Hoodie (casual) — this Weekend Shirt elevates your off-duty look | Different category, same casual vibe | £35 in your value range | Size L button-downs: 94% satisfaction | Great for family outings."
      },
      aisha: { 
        score: 8, 
        styleMatch: 5, 
        fitConfidence: 30, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Aisha's history is womenswear occasion pieces — Men's casualwear irrelevant."
      }
    }
  },
  // === AISHA'S TOP PICKS: Trend-Forward Evening ===
  {
    id: 9,
    name: "Black Sequin Party Dress",
    price: 89,
    priceDisplay: "£89",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop",
    category: "Eveningwear",
    popularity: 78,
    personalizationScores: {
      emma: { 
        score: 35, 
        styleMatch: 30, 
        fitConfidence: 50, 
        lowReturnRisk: false, 
        occasionRelevance: "Special", 
        reasoning: "📉 Style clash: Emma owns Black Blazer, Ivory Blouse — sequins too bold vs her understated professional aesthetic | Party wear = 3% of her purchases."
      },
      david: { 
        score: 20, 
        styleMatch: 15, 
        fitConfidence: 25, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: David's profile is kidswear + menswear basics — evening womenswear completely outside scope."
      },
      aisha: { 
        score: 98, 
        styleMatch: 96, 
        fitConfidence: 92, 
        lowReturnRisk: true, 
        occasionRelevance: "Party", 
        reasoning: "🏆 EXTENDS COLLECTION: You own Cobalt Blue Wrap Dress — this Black Sequin adds party-ready option | Different colour & fabric, same occasion category | Complements your Statement accessories | Size 10 evening: 0% returns | 3 upcoming events detected."
      }
    }
  },
  {
    id: 10,
    name: "Fuchsia Satin Blazer",
    price: 75,
    priceDisplay: "£75",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop",
    category: "Statement Pieces",
    popularity: 72,
    personalizationScores: {
      emma: { 
        score: 28, 
        styleMatch: 25, 
        fitConfidence: 45, 
        lowReturnRisk: false, 
        occasionRelevance: "Casual", 
        reasoning: "📉 Colour mismatch: Emma owns Black Blazer, Oatmeal Cardigan — fuchsia is 0% of her neutral wardrobe | Too bold for office setting."
      },
      david: { 
        score: 18, 
        styleMatch: 12, 
        fitConfidence: 30, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Low relevance: David buys practical kidswear & menswear — Statement womenswear outside his focus."
      },
      aisha: { 
        score: 95, 
        styleMatch: 94, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Evening", 
        reasoning: "🎯 COLOUR PATTERN: You loved your Orange Cropped Blazer (5★) — this Fuchsia Satin offers fresh bold alternative | Different colour, same statement blazer style | Pairs with your Silver Necklace | Instagram engagement: 8 similar saves."
      }
    }
  },
  {
    id: 11,
    name: "Floral Maxi Dress",
    price: 65,
    priceDisplay: "£65",
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&h=600&fit=crop",
    category: "Statement Pieces",
    popularity: 75,
    personalizationScores: {
      emma: { 
        score: 32, 
        styleMatch: 28, 
        fitConfidence: 55, 
        lowReturnRisk: false, 
        occasionRelevance: "Casual", 
        reasoning: "📉 Pattern conflict: Emma owns plain Blazers, Trousers — bold florals score 1.9/10 on her style index | Return risk elevated."
      },
      david: { 
        score: 22, 
        styleMatch: 18, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: David's purchases are kidswear & menswear only — Statement womenswear outside scope."
      },
      aisha: { 
        score: 93, 
        styleMatch: 91, 
        fitConfidence: 86, 
        lowReturnRisk: true, 
        occasionRelevance: "Brunch", 
        reasoning: "🎯 PRINT EXTENSION: You own Tropical Print Midi Skirt (4★) — this Floral Maxi Dress offers full-outfit print statement | Different silhouette, same bold pattern preference | Versatile for brunch to evening."
      }
    }
  },
  {
    id: 12,
    name: "Red Evening Gown",
    price: 95,
    priceDisplay: "£95",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
    category: "Eveningwear",
    popularity: 70,
    personalizationScores: {
      emma: { 
        score: 48, 
        styleMatch: 45, 
        fitConfidence: 60, 
        lowReturnRisk: true, 
        occasionRelevance: "Special", 
        reasoning: "📊 Moderate match: Emma's wardrobe is professional neutrals — red gown is elegant but outside her colour comfort zone."
      },
      david: { 
        score: 25, 
        styleMatch: 20, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Low match: David's history shows practical purchases — formal womenswear not his shopping intent."
      },
      aisha: { 
        score: 91, 
        styleMatch: 89, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Evening", 
        reasoning: "🎯 OCCASION ADDITION: You own Cobalt Wrap Dress, Emerald pieces — this Red Gown adds powerful evening colour | Different from your blues/greens | Complements your Black Heels | Event season = peak intent."
      }
    }
  },
  // === CROSS-APPEAL ITEMS ===
  {
    id: 13,
    name: "Classic Black Leather Bag",
    price: 65,
    priceDisplay: "£65",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=600&fit=crop",
    category: "Accessories",
    popularity: 92,
    personalizationScores: {
      emma: { 
        score: 88, 
        styleMatch: 90, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Work", 
        reasoning: "🎯 ACCESSORY UPDATE: You own Nude Court Heels (5★) — this Black Leather Bag completes professional accessories | Different category, same quality aesthetic | Pairs with your Blazer collection | £65 within accessory budget."
      },
      david: { 
        score: 55, 
        styleMatch: 50, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Gift potential: David's practical — but partner's birthday detected | Classic accessory = safe gift | Price within his gift budget."
      },
      aisha: { 
        score: 72, 
        styleMatch: 68, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Everyday", 
        reasoning: "📊 Moderate: Aisha owns Silver Chain Necklace — but prefers bold accessories | Classic black less exciting than her statement pieces."
      }
    }
  },
  {
    id: 14,
    name: "Tan Suede Ankle Boots",
    price: 85,
    priceDisplay: "£85",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop",
    category: "Footwear",
    popularity: 86,
    personalizationScores: {
      emma: { 
        score: 85, 
        styleMatch: 82, 
        fitConfidence: 94, 
        lowReturnRisk: true, 
        occasionRelevance: "Commute", 
        reasoning: "✅ FOOTWEAR ROTATION: You own Nude Court Heels — these Tan Ankle Boots add casual comfort option | Different style for relaxed days | Neutral tone matches your wardrobe | Comfortable for commute."
      },
      david: { 
        score: 45, 
        styleMatch: 40, 
        fitConfidence: 65, 
        lowReturnRisk: true, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Moderate gift potential: Women's footwear could be partner gift | Size uncertainty reduces confidence."
      },
      aisha: { 
        score: 78, 
        styleMatch: 75, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Day-to-Night", 
        reasoning: "📊 Good versatility: Aisha owns Black Platform Boots — these Tan Suede offer daytime alternative | Different colour adds warmth | Ranked below her statement footwear."
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
  const [filters, setFilters] = useState<FilterState>({
    for: [],
    brands: [],
    department: [],
    size: [],
    color: [],
    sizeType: [],
    use: [],
    length: [],
    style: [],
    pattern: [],
    sleeve: [],
    material: [],
    fit: [],
    priceRange: [0, 200]
  });

  const persona = personas.find(p => p.id === personaId) || personas[0];

  const clearAllFilters = () => {
    setFilters({
      for: [],
      brands: [],
      department: [],
      size: [],
      color: [],
      sizeType: [],
      use: [],
      length: [],
      style: [],
      pattern: [],
      sleeve: [],
      material: [],
      fit: [],
      priceRange: [0, 200]
    });
  };

  const sortedProducts = useMemo(() => {
    let products = [...allProducts];
    
    // Apply filters
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 200) {
      products = products.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    }
    
    // Sort
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
  }, [sortBy, personaId, persona.intent, filters]);

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
        {/* Customer 360 Profile Section */}
        <PersonaProfile360 persona={persona} />

        {/* Curated Collection Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-primary-foreground animate-bounce" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {persona.name}'s <span className="gradient-text">Curated</span> Collection
              </h2>
              <p className="text-sm text-muted-foreground">
                Products ranked by the signals above
              </p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <ProductFilters 
          filters={filters}
          onFilterChange={setFilters}
          onClearAll={clearAllFilters}
          personaId={personaId}
        />

        {/* Main Content with Sidebar */}
        <div className="flex gap-6">
          {/* Past Purchases Sidebar - Left */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <PastPurchasesSidebar persona={persona} />
          </aside>

          {/* Products Section - Right */}
          <div className="flex-1 min-w-0">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;

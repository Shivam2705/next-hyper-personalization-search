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
  User,
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
  // === EMMA'S TOP PICKS: Professional Workwear ===
  {
    id: 1,
    name: "Navy Midi Shirtdress",
    price: 85,
    priceDisplay: "£85",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop",
    category: "Workwear",
    popularity: 88,
    personalizationScores: {
      emma: { 
        score: 98, 
        styleMatch: 96, 
        fitConfidence: 94, 
        lowReturnRisk: true, 
        occasionRelevance: "Office", 
        reasoning: "🏆 TOP MATCH: Navy dresses = Emma's #1 category (5 purchased in 18 months) | Size 12 structured fits show 0% return rate | Price £85 within her £70-100 workwear budget | Complements 8 items in current wardrobe | Professional style matches Mon-Fri browsing peak."
      },
      david: { 
        score: 28, 
        styleMatch: 22, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category mismatch: Women's tailoring outside David's family-focused shopping | No womenswear purchase history | Price 60% above his typical item spend."
      },
      aisha: { 
        score: 52, 
        styleMatch: 48, 
        fitConfidence: 65, 
        lowReturnRisk: true, 
        occasionRelevance: "Work", 
        reasoning: "📉 Style gap: Classic navy too understated for Aisha's trend-forward preference | Structured silhouette ranks 4.2/10 on her statement index | Office wear only 8% of her purchases."
      }
    }
  },
  {
    id: 2,
    name: "White Silk Office Blouse",
    price: 65,
    priceDisplay: "£65",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=600&fit=crop",
    category: "Tops",
    popularity: 82,
    personalizationScores: {
      emma: { 
        score: 95, 
        styleMatch: 93, 
        fitConfidence: 91, 
        lowReturnRisk: true, 
        occasionRelevance: "Office", 
        reasoning: "🎯 STRONG MATCH: White blouses appear in 6 of Emma's saved outfits | Silk fabric in her premium preference tier | Size 12 blouses: 96% fit satisfaction | Pairs perfectly with her navy trouser collection | Meeting-appropriate per her calendar integration."
      },
      david: { 
        score: 22, 
        styleMatch: 18, 
        fitConfidence: 30, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: Women's workwear outside David's shopping scope | Zero formal womenswear in 36-month history."
      },
      aisha: { 
        score: 58, 
        styleMatch: 52, 
        fitConfidence: 70, 
        lowReturnRisk: true, 
        occasionRelevance: "Basic", 
        reasoning: "📊 Moderate fit: Classic white blouse too minimal for Aisha's bold aesthetic | Could layer but not a statement piece | Ranks low on her trend-forward index (3.8/10)."
      }
    }
  },
  {
    id: 3,
    name: "Charcoal Wool Trousers",
    price: 55,
    priceDisplay: "£55",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop",
    category: "Workwear",
    popularity: 85,
    personalizationScores: {
      emma: { 
        score: 94, 
        styleMatch: 92, 
        fitConfidence: 96, 
        lowReturnRisk: true, 
        occasionRelevance: "Versatile", 
        reasoning: "✅ PERFECT FIT: Emma's trouser size (10 Long) shows 98% satisfaction in slim cuts | Charcoal = her #2 colour (worn 24% of workdays) | Wool blend matches her quality-first preference | Pairs with 5 blazers in wardrobe | Zero returns on similar silhouettes."
      },
      david: { 
        score: 25, 
        styleMatch: 20, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Gender mismatch: Women's tailored trousers outside David's purchase context | Price £20 above his casualwear average."
      },
      aisha: { 
        score: 45, 
        styleMatch: 40, 
        fitConfidence: 60, 
        lowReturnRisk: true, 
        occasionRelevance: "Basic", 
        reasoning: "📉 Low priority: Classic tailoring scores 2.8/10 on Aisha's trend index | Charcoal not in her vibrant colour palette | Basic workwear not her shopping intent."
      }
    }
  },
  {
    id: 4,
    name: "Camel Wool Coat",
    price: 120,
    priceDisplay: "£120",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop",
    category: "Outerwear",
    popularity: 90,
    personalizationScores: {
      emma: { 
        score: 92, 
        styleMatch: 90, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Commute", 
        reasoning: "🎯 SEASONAL PRIORITY: Camel coats trending +45% in Reading area this month | Neutral tone matches Emma's palette (89% neutral wardrobe) | Structured silhouette aligns with professional aesthetic | Premium outerwear category she engages with quarterly."
      },
      david: { 
        score: 32, 
        styleMatch: 28, 
        fitConfidence: 40, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Outside scope: Women's premium outerwear | £120 significantly above David's £55 average | No womenswear purchase signals."
      },
      aisha: { 
        score: 65, 
        styleMatch: 60, 
        fitConfidence: 72, 
        lowReturnRisk: true, 
        occasionRelevance: "Layering", 
        reasoning: "📊 Moderate: Classic camel is timeless but lacks statement appeal for Aisha | Neutral tone appears in only 15% of her wardrobe | Practical but not trend-driven."
      }
    }
  },
  // === DAVID'S TOP PICKS: Family Value ===
  {
    id: 5,
    name: "Boys' Navy Polo Shirt",
    price: 12,
    priceDisplay: "£12",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop",
    category: "Kidswear",
    popularity: 94,
    personalizationScores: {
      emma: { 
        score: 15, 
        styleMatch: 10, 
        fitConfidence: 50, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: Zero kidswear in Emma's 36-month history | No children detected in household signals | Category excluded from personalized feed."
      },
      david: { 
        score: 97, 
        styleMatch: 92, 
        fitConfidence: 94, 
        lowReturnRisk: true, 
        occasionRelevance: "School", 
        reasoning: "🏆 TOP MATCH: David's sons (ages 7, 9) = primary shopping focus | School-appropriate polo purchased 6x annually | Navy = required uniform colour | Size age 7-8 shows 100% fit accuracy | £12 within his £10-15 kidswear sweet spot | Multi-buy offer available (3 for £30)."
      },
      aisha: { 
        score: 10, 
        styleMatch: 8, 
        fitConfidence: 40, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: No children in Aisha's profile | Zero kidswear engagement signals."
      }
    }
  },
  {
    id: 6,
    name: "Men's Cotton Multi-Pack Tees (5)",
    price: 25,
    priceDisplay: "£25",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=600&fit=crop",
    category: "Menswear Basics",
    popularity: 96,
    personalizationScores: {
      emma: { 
        score: 12, 
        styleMatch: 10, 
        fitConfidence: 20, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Gender mismatch: Men's basics outside Emma's shopping context | No menswear purchase history."
      },
      david: { 
        score: 96, 
        styleMatch: 90, 
        fitConfidence: 95, 
        lowReturnRisk: true, 
        occasionRelevance: "Everyday", 
        reasoning: "🏆 VALUE CHAMPION: Multi-pack format = David's preferred buying pattern | £5/tee hits his value threshold | Size L: 98% fit satisfaction | Purchased 4 similar multi-packs in 12 months | High offer responsiveness (opened 89% of bundle emails) | Cotton basics = 35% of annual spend."
      },
      aisha: { 
        score: 8, 
        styleMatch: 5, 
        fitConfidence: 30, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Men's basics irrelevant to Aisha's fashion-forward profile."
      }
    }
  },
  {
    id: 7,
    name: "Kids' Denim Jacket",
    price: 28,
    priceDisplay: "£28",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=600&fit=crop",
    category: "Kidswear",
    popularity: 88,
    personalizationScores: {
      emma: { 
        score: 18, 
        styleMatch: 15, 
        fitConfidence: 45, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ No relevance: Kidswear category excluded from Emma's professional wardrobe focus."
      },
      david: { 
        score: 94, 
        styleMatch: 88, 
        fitConfidence: 90, 
        lowReturnRisk: true, 
        occasionRelevance: "Casual", 
        reasoning: "🎯 HIGH MATCH: Denim durability = David's #1 kidswear priority | Matches his 'practical & durable' filter | Age 9 size in stock | £28 within outerwear budget | Previously purchased denim for both sons | Layering essential for Manchester weather."
      },
      aisha: { 
        score: 12, 
        styleMatch: 10, 
        fitConfidence: 40, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: No children in Aisha's profile | Zero kidswear engagement."
      }
    }
  },
  {
    id: 8,
    name: "Men's Casual Weekend Shirt",
    price: 35,
    priceDisplay: "£35",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop",
    category: "Menswear",
    popularity: 82,
    personalizationScores: {
      emma: { 
        score: 10, 
        styleMatch: 8, 
        fitConfidence: 25, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Gender mismatch: Men's casualwear outside Emma's purchase context."
      },
      david: { 
        score: 91, 
        styleMatch: 86, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Weekend", 
        reasoning: "🎯 STRONG MATCH: Casual shirts = David's weekend uniform | Size L button-downs: 94% satisfaction | £35 in value range | Blue check pattern matches his preference | Weekend browsing peaked on this category | Complements denim collection."
      },
      aisha: { 
        score: 8, 
        styleMatch: 5, 
        fitConfidence: 30, 
        lowReturnRisk: true, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Men's casualwear irrelevant to Aisha's profile."
      }
    }
  },
  // === AISHA'S TOP PICKS: Trend-Forward Evening ===
  {
    id: 9,
    name: "Black Sequin Party Dress",
    price: 89,
    priceDisplay: "£89",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
    category: "Eveningwear",
    popularity: 78,
    personalizationScores: {
      emma: { 
        score: 35, 
        styleMatch: 30, 
        fitConfidence: 50, 
        lowReturnRisk: false, 
        occasionRelevance: "Special", 
        reasoning: "📉 Style clash: Sequins score 1.8/10 on Emma's understated style index | Party wear = 3% of her purchases | Too bold for her professional wardrobe focus."
      },
      david: { 
        score: 20, 
        styleMatch: 15, 
        fitConfidence: 25, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Evening womenswear outside David's family shopping context."
      },
      aisha: { 
        score: 98, 
        styleMatch: 96, 
        fitConfidence: 92, 
        lowReturnRisk: true, 
        occasionRelevance: "Party", 
        reasoning: "🏆 PERFECT MATCH: Black sequins = Aisha's #1 party fabric (worn at 5 recent events) | Fitted silhouette trending +60% in her style cohort | New-in collection matches 'first to trend' behaviour | Statement look scores 9.6/10 | Size 10 party dresses: 0% returns | 3 upcoming events in social calendar."
      }
    }
  },
  {
    id: 10,
    name: "Fuchsia Satin Blazer",
    price: 75,
    priceDisplay: "£75",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=600&fit=crop",
    category: "Statement Pieces",
    popularity: 72,
    personalizationScores: {
      emma: { 
        score: 28, 
        styleMatch: 25, 
        fitConfidence: 45, 
        lowReturnRisk: false, 
        occasionRelevance: "Casual", 
        reasoning: "📉 Colour mismatch: Fuchsia appears in 0% of Emma's wardrobe | Bold colours score 2.1/10 on her preference index | Too statement for office setting."
      },
      david: { 
        score: 18, 
        styleMatch: 12, 
        fitConfidence: 30, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Low relevance: Statement womenswear outside David's shopping focus."
      },
      aisha: { 
        score: 95, 
        styleMatch: 94, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Evening", 
        reasoning: "🎯 TREND ALERT: Fuchsia pink = colour of the season in Aisha's style cohort | Satin fabric in her luxury preference tier | Blazer-as-statement matches her styling behaviour | Pairs with 4 items in cart | Instagram engagement: saved 8 similar looks."
      }
    }
  },
  {
    id: 11,
    name: "Floral Maxi Dress",
    price: 65,
    priceDisplay: "£65",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    category: "Statement Pieces",
    popularity: 75,
    personalizationScores: {
      emma: { 
        score: 32, 
        styleMatch: 28, 
        fitConfidence: 55, 
        lowReturnRisk: false, 
        occasionRelevance: "Casual", 
        reasoning: "📉 Pattern conflict: Bold florals in 0% of Emma's purchases | Statement patterns score 1.9/10 on her style index | Return risk elevated for unfamiliar styles."
      },
      david: { 
        score: 22, 
        styleMatch: 18, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "N/A", 
        reasoning: "❌ Category excluded: Statement womenswear outside David's family shopping scope."
      },
      aisha: { 
        score: 93, 
        styleMatch: 91, 
        fitConfidence: 86, 
        lowReturnRisk: true, 
        occasionRelevance: "Brunch", 
        reasoning: "🎯 STRONG MATCH: Bold florals = Aisha's #2 pattern choice (purchased 4x in 12 months) | Flowy maxi in her preferred silhouettes | Versatile for brunch to evening | Trend index: 8.9/10 | Perfect for summer events."
      }
    }
  },
  {
    id: 12,
    name: "Red Evening Gown",
    price: 95,
    priceDisplay: "£95",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop",
    category: "Eveningwear",
    popularity: 70,
    personalizationScores: {
      emma: { 
        score: 48, 
        styleMatch: 45, 
        fitConfidence: 60, 
        lowReturnRisk: true, 
        occasionRelevance: "Special", 
        reasoning: "📊 Moderate match: Red evening gown is elegant but outside Emma's neutral zone | Could work for galas but not primary shopping intent."
      },
      david: { 
        score: 25, 
        styleMatch: 20, 
        fitConfidence: 35, 
        lowReturnRisk: false, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Low match: Formal womenswear outside scope | Potential gift but no active gift-intent signals detected."
      },
      aisha: { 
        score: 91, 
        styleMatch: 89, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Evening", 
        reasoning: "🎯 HIGH MATCH: Red = Aisha's preferred evening colour | Elegant gown silhouette in her top 3 fits | Event season = peak shopping intent | Size 10: 97% satisfaction | Statement piece for special occasions."
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
        reasoning: "🎯 STRONG MATCH: Black leather bags = Emma's accessory staple (owns 3 similar) | Professional aesthetic matches office use | Timeless style aligns with her 'investment pieces' behaviour | £65 in her accessory budget range."
      },
      david: { 
        score: 55, 
        styleMatch: 50, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Gift potential: Partner's birthday in 3 weeks detected | Classic accessory = safe gift choice | Price within his gift budget | Moderate confidence on style match."
      },
      aisha: { 
        score: 72, 
        styleMatch: 68, 
        fitConfidence: 100, 
        lowReturnRisk: true, 
        occasionRelevance: "Everyday", 
        reasoning: "📊 Moderate match: Classic black bag is versatile but lacks statement appeal | Aisha prefers bold colours/textures in accessories | Practical add-on but not primary driver."
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
        reasoning: "✅ GOOD FIT: Emma's shoe size (6) has 96% satisfaction in ankle boots | Tan suede complements her neutral wardrobe | Comfortable for commute | Previously browsed similar 4x — price was consideration."
      },
      david: { 
        score: 45, 
        styleMatch: 40, 
        fitConfidence: 65, 
        lowReturnRisk: true, 
        occasionRelevance: "Gift", 
        reasoning: "📊 Moderate gift potential: Women's footwear could be partner gift | Size uncertainty reduces confidence | £85 at upper gift budget."
      },
      aisha: { 
        score: 78, 
        styleMatch: 75, 
        fitConfidence: 88, 
        lowReturnRisk: true, 
        occasionRelevance: "Day-to-Night", 
        reasoning: "📊 Good versatility: Ankle boots work across Aisha's wardrobe | Tan adds warmth to her colour palette | Suede texture in her preference tier | Ranked below statement footwear."
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
        {/* Customer 360 Profile Section */}
        <PersonaProfile360 persona={persona} />

        {/* Curated Collection Header */}
        <div className="mb-8">
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

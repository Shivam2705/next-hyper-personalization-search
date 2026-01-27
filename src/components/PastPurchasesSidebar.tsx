import { ShoppingBag, Calendar, Star, TrendingUp, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Persona } from "@/pages/Login";

interface PastPurchase {
  id: string;
  name: string;
  image: string;
  price: string;
  date: string;
  category: string;
  rating?: number;
}

// Past purchases - DIFFERENT from current recommendations but establish patterns
const pastPurchasesByPersona: Record<string, PastPurchase[]> = {
  emma: [
    // Emma's past: Female professional workwear - structured, clean, elegant
    {
      id: "ep1",
      name: "Black Tailored Blazer",
      image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=200&h=250&fit=crop",
      price: "£89",
      date: "Oct 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep2",
      name: "Cream Silk Camisole",
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=250&fit=crop",
      price: "£52",
      date: "Sep 2024",
      category: "Tops",
      rating: 5
    },
    {
      id: "ep3",
      name: "Black Pencil Skirt",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0edd3?w=200&h=250&fit=crop",
      price: "£48",
      date: "Aug 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep4",
      name: "Beige Cashmere Wrap",
      image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=200&h=250&fit=crop",
      price: "£75",
      date: "Jul 2024",
      category: "Knitwear",
      rating: 4
    },
    {
      id: "ep5",
      name: "Nude Pointed Heels",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop",
      price: "£68",
      date: "Jun 2024",
      category: "Footwear",
      rating: 5
    }
  ],
  david: [
    // David's past: Establishes family value, kidswear + menswear basics pattern
    // These are DIFFERENT from recommendations but inspire them
    {
      id: "dp1",
      name: "Boys' Grey School Jumper",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&h=250&fit=crop",
      price: "£14",
      date: "Sep 2024",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp2",
      name: "Men's Black Joggers",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop",
      price: "£28",
      date: "Aug 2024",
      category: "Menswear",
      rating: 4
    },
    {
      id: "dp3",
      name: "Boys' Waterproof Raincoat",
      image: "https://images.unsplash.com/photo-1502451885777-5d53fd7e1e7e?w=200&h=250&fit=crop",
      price: "£32",
      date: "Jul 2024",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp4",
      name: "Men's White T-Shirt (2pk)",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop",
      price: "£16",
      date: "Jun 2024",
      category: "Menswear Basics",
      rating: 5
    },
    {
      id: "dp5",
      name: "Men's Navy Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=250&fit=crop",
      price: "£35",
      date: "May 2024",
      category: "Menswear",
      rating: 4
    }
  ],
  aisha: [
    // Aisha's past: Establishes bold, trend-forward, eveningwear pattern
    // These are DIFFERENT from recommendations but inspire them
    {
      id: "ap1",
      name: "Cobalt Blue Wrap Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop",
      price: "£72",
      date: "Oct 2024",
      category: "Eveningwear",
      rating: 5
    },
    {
      id: "ap2",
      name: "Silver Chain Necklace",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=250&fit=crop",
      price: "£32",
      date: "Sep 2024",
      category: "Accessories",
      rating: 5
    },
    {
      id: "ap3",
      name: "Orange Cropped Blazer",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=200&h=250&fit=crop",
      price: "£68",
      date: "Aug 2024",
      category: "Statement Pieces",
      rating: 5
    },
    {
      id: "ap4",
      name: "Black Platform Boots",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop",
      price: "£85",
      date: "Jul 2024",
      category: "Footwear",
      rating: 5
    },
    {
      id: "ap5",
      name: "Tropical Print Midi Skirt",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0edd3?w=200&h=250&fit=crop",
      price: "£48",
      date: "Jun 2024",
      category: "Statement Pieces",
      rating: 4
    }
  ]
};

// Why NEW recommendations match past purchase PATTERNS (not same products)
const purchaseInsights: Record<string, string[]> = {
  emma: [
    "New: Navy Shirtdress → Extends workwear rotation (you own Black Blazer)",
    "New: White Silk Blouse → Complements Ivory Satin Blouse you loved",
    "New: Charcoal Trousers → Different cut from your Wide-Leg pair",
    "New: Camel Coat → Neutral outerwear to match your Oatmeal Cardigan"
  ],
  david: [
    "New: Navy Polo → School essentials (you bought Grey Jumper)",
    "New: Multi-Pack Tees → Value basics like your 2pk T-shirts",
    "New: Denim Jacket → Outerwear rotation after Raincoat purchase",
    "New: Casual Shirt → Weekend upgrade from your Hoodie"
  ],
  aisha: [
    "New: Black Sequin Dress → Statement evening (you own Cobalt Wrap)",
    "New: Fuchsia Blazer → Bold colour like your Orange Blazer success",
    "New: Floral Maxi → Print pattern extends your Tropical Skirt style",
    "New: Red Gown → Event-ready addition to your occasion wardrobe"
  ]
};

interface PastPurchasesSidebarProps {
  persona: Persona;
}

const PastPurchasesSidebar = ({ persona }: PastPurchasesSidebarProps) => {
  const purchases = pastPurchasesByPersona[persona.id] || [];
  const insights = purchaseInsights[persona.id] || [];
  
  // Calculate stats
  const totalSpent = purchases.reduce((sum, p) => sum + parseInt(p.price.replace('£', '')), 0);
  const avgRating = purchases.reduce((sum, p) => sum + (p.rating || 0), 0) / purchases.length;
  const topCategory = purchases.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const favoriteCategory = Object.entries(topCategory).sort((a, b) => b[1] - a[1])[0]?.[0];

  return (
    <div className="glass-card p-4 h-fit sticky top-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/50">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary/50 flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{persona.name}'s History</h3>
          <p className="text-xs text-muted-foreground">Already purchased</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-secondary/30 rounded-lg p-2 text-center">
          <p className="text-xs text-muted-foreground">6-Month Spend</p>
          <p className="font-bold text-primary">£{totalSpent}</p>
        </div>
        <div className="bg-secondary/30 rounded-lg p-2 text-center">
          <p className="text-xs text-muted-foreground">Avg Rating</p>
          <div className="flex items-center justify-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{avgRating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Favorite Category */}
      <div className="flex items-center gap-2 mb-4 p-2 bg-primary/5 rounded-lg border border-primary/20">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-xs">Preference: <span className="font-medium text-primary">{favoriteCategory}</span></span>
      </div>

      {/* Purchase List */}
      <div className="space-y-3 mb-4">
        {purchases.map((purchase) => (
          <div 
            key={purchase.id} 
            className="flex gap-3 p-2 rounded-lg bg-card/50 hover:bg-secondary/30 transition-colors group"
          >
            <div className="w-12 h-14 rounded-md overflow-hidden flex-shrink-0 border border-border/50 bg-secondary/20">
              <img 
                src={purchase.image} 
                alt={purchase.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=250&fit=crop';
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-medium truncate">{purchase.name}</h4>
              <div className="flex items-center gap-1 mt-0.5">
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-border/50">
                  {purchase.category}
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-semibold text-primary">{purchase.price}</span>
                <div className="flex items-center gap-0.5">
                  <Calendar className="w-2.5 h-2.5 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">{purchase.date}</span>
                </div>
              </div>
              {purchase.rating && (
                <div className="flex items-center gap-0.5 mt-1">
                  {Array.from({ length: purchase.rating }).map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Why NEW Recommendations */}
      <div className="pt-3 border-t border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium">New Items Inspired By</span>
        </div>
        <div className="space-y-1.5">
          {insights.map((insight, idx) => (
            <p key={idx} className="text-[10px] text-muted-foreground leading-tight pl-2 border-l-2 border-primary/30">
              {insight}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastPurchasesSidebar;

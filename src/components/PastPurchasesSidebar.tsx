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

// Past purchases aligned with each persona's profile, gender, and recommendations
const pastPurchasesByPersona: Record<string, PastPurchase[]> = {
  emma: [
    // Emma: Professional woman, workwear focus, neutral tones, structured fits
    // Aligns with: Navy Midi Shirtdress, White Silk Blouse, Charcoal Wool Trousers, Camel Wool Coat recommendations
    {
      id: "ep1",
      name: "Navy Tailored Blazer",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=200&h=250&fit=crop",
      price: "£95",
      date: "Oct 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep2",
      name: "White Cotton Shirt",
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=200&h=250&fit=crop",
      price: "£48",
      date: "Sep 2024",
      category: "Tops",
      rating: 5
    },
    {
      id: "ep3",
      name: "Black Wool Trousers",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=200&h=250&fit=crop",
      price: "£58",
      date: "Aug 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep4",
      name: "Camel Knit Jumper",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=250&fit=crop",
      price: "£55",
      date: "Jul 2024",
      category: "Knitwear",
      rating: 4
    },
    {
      id: "ep5",
      name: "Black Leather Tote Bag",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=200&h=250&fit=crop",
      price: "£75",
      date: "Jun 2024",
      category: "Accessories",
      rating: 5
    }
  ],
  david: [
    // David: Family man, value-conscious, kidswear + casual menswear, practical choices
    // Aligns with: Boys' Navy Polo, Multi-Pack Tees, Kids' Denim Jacket, Men's Casual Shirt recommendations
    {
      id: "dp1",
      name: "Boys' School Polo (2pk)",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=200&h=250&fit=crop",
      price: "£18",
      date: "Sep 2024",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp2",
      name: "Men's Blue Denim Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop",
      price: "£35",
      date: "Aug 2024",
      category: "Menswear",
      rating: 4
    },
    {
      id: "dp3",
      name: "Boys' Navy Puffer Jacket",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&h=250&fit=crop",
      price: "£38",
      date: "Jul 2024",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp4",
      name: "Men's Grey Cotton T-Shirts (3pk)",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=200&h=250&fit=crop",
      price: "£22",
      date: "Jun 2024",
      category: "Menswear Basics",
      rating: 5
    },
    {
      id: "dp5",
      name: "Men's Checked Casual Shirt",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=250&fit=crop",
      price: "£32",
      date: "May 2024",
      category: "Menswear",
      rating: 4
    }
  ],
  aisha: [
    // Aisha: Trend-forward woman, bold colours, eveningwear, statement pieces
    // Aligns with: Black Sequin Party Dress, Fuchsia Satin Blazer, Floral Maxi Dress, Red Evening Gown recommendations
    {
      id: "ap1",
      name: "Emerald Satin Midi Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop",
      price: "£78",
      date: "Oct 2024",
      category: "Eveningwear",
      rating: 5
    },
    {
      id: "ap2",
      name: "Gold Statement Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=250&fit=crop",
      price: "£28",
      date: "Sep 2024",
      category: "Accessories",
      rating: 5
    },
    {
      id: "ap3",
      name: "Pink Satin Wrap Top",
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=250&fit=crop",
      price: "£42",
      date: "Aug 2024",
      category: "Statement Pieces",
      rating: 5
    },
    {
      id: "ap4",
      name: "Black Strappy Heels",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop",
      price: "£65",
      date: "Jul 2024",
      category: "Footwear",
      rating: 5
    },
    {
      id: "ap5",
      name: "Bold Floral Maxi Skirt",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop",
      price: "£52",
      date: "Jun 2024",
      category: "Statement Pieces",
      rating: 4
    }
  ]
};

// Why recommendations match past purchases
const purchaseInsights: Record<string, string[]> = {
  emma: [
    "Navy Midi Shirtdress → matches blazer & trouser workwear pattern",
    "White Silk Blouse → extends her white shirt collection",
    "Camel Wool Coat → complements neutral knitwear preference"
  ],
  david: [
    "Boys' Navy Polo → continues school uniform multi-buy pattern",
    "Multi-Pack Tees → matches his value-focused basics buying",
    "Kids' Denim Jacket → aligns with boys' outerwear purchases"
  ],
  aisha: [
    "Black Sequin Dress → extends her eveningwear collection",
    "Fuchsia Satin Blazer → matches bold colour preference (pink top)",
    "Floral Maxi Dress → continues her bold print pattern"
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
          <h3 className="font-semibold text-sm">{persona.name}'s Purchases</h3>
          <p className="text-xs text-muted-foreground">Last 6 months</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-secondary/30 rounded-lg p-2 text-center">
          <p className="text-xs text-muted-foreground">Total Spent</p>
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
        <span className="text-xs">Top category: <span className="font-medium text-primary">{favoriteCategory}</span></span>
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

      {/* Why Recommendations Match */}
      <div className="pt-3 border-t border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium">Why These Recommendations</span>
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

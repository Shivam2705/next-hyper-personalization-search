import { ShoppingBag, Calendar, Star, TrendingUp } from "lucide-react";
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

// Past purchases aligned with each persona's profile and recommendations
const pastPurchasesByPersona: Record<string, PastPurchase[]> = {
  emma: [
    {
      id: "ep1",
      name: "Black Tailored Blazer",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=250&fit=crop",
      price: "£95",
      date: "Oct 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep2",
      name: "Navy Pencil Skirt",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0edd3?w=200&h=250&fit=crop",
      price: "£45",
      date: "Sep 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep3",
      name: "Cream Silk Blouse",
      image: "https://images.unsplash.com/photo-1604575860824-f4a769e2bc80?w=200&h=250&fit=crop",
      price: "£68",
      date: "Aug 2024",
      category: "Tops",
      rating: 4
    },
    {
      id: "ep4",
      name: "Grey Wool Trousers",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=250&fit=crop",
      price: "£58",
      date: "Jul 2024",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep5",
      name: "Beige Trench Coat",
      image: "https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?w=200&h=250&fit=crop",
      price: "£110",
      date: "Jun 2024",
      category: "Outerwear",
      rating: 5
    }
  ],
  david: [
    {
      id: "dp1",
      name: "Boys' School Shirts (3pk)",
      image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=200&h=250&fit=crop",
      price: "£22",
      date: "Sep 2024",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp2",
      name: "Men's Blue Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop",
      price: "£35",
      date: "Aug 2024",
      category: "Menswear",
      rating: 4
    },
    {
      id: "dp3",
      name: "Kids' Football Boots",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=200&h=250&fit=crop",
      price: "£32",
      date: "Jul 2024",
      category: "Footwear",
      rating: 5
    },
    {
      id: "dp4",
      name: "Men's Casual Polo",
      image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=200&h=250&fit=crop",
      price: "£18",
      date: "Jun 2024",
      category: "Menswear",
      rating: 4
    },
    {
      id: "dp5",
      name: "Boys' Winter Coat",
      image: "https://images.unsplash.com/photo-1502451885777-5d53fd7e1e7e?w=200&h=250&fit=crop",
      price: "£45",
      date: "Nov 2023",
      category: "Kidswear",
      rating: 5
    }
  ],
  aisha: [
    {
      id: "ap1",
      name: "Gold Statement Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=250&fit=crop",
      price: "£28",
      date: "Oct 2024",
      category: "Accessories",
      rating: 5
    },
    {
      id: "ap2",
      name: "Emerald Green Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop",
      price: "£75",
      date: "Sep 2024",
      category: "Eveningwear",
      rating: 5
    },
    {
      id: "ap3",
      name: "Pink Satin Top",
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=250&fit=crop",
      price: "£42",
      date: "Aug 2024",
      category: "Statement Pieces",
      rating: 4
    },
    {
      id: "ap4",
      name: "Strappy Heeled Sandals",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop",
      price: "£65",
      date: "Jul 2024",
      category: "Footwear",
      rating: 5
    },
    {
      id: "ap5",
      name: "Leopard Print Skirt",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0edd3?w=200&h=250&fit=crop",
      price: "£48",
      date: "Jun 2024",
      category: "Statement Pieces",
      rating: 5
    }
  ]
};

interface PastPurchasesSidebarProps {
  persona: Persona;
}

const PastPurchasesSidebar = ({ persona }: PastPurchasesSidebarProps) => {
  const purchases = pastPurchasesByPersona[persona.id] || [];
  
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
          <h3 className="font-semibold text-sm">Past Purchases</h3>
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
      <div className="space-y-3">
        {purchases.map((purchase) => (
          <div 
            key={purchase.id} 
            className="flex gap-3 p-2 rounded-lg bg-card/50 hover:bg-secondary/30 transition-colors group"
          >
            <div className="w-12 h-14 rounded-md overflow-hidden flex-shrink-0 border border-border/50">
              <img 
                src={purchase.image} 
                alt={purchase.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
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

      {/* Pattern Insight */}
      <div className="mt-4 pt-3 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center italic">
          {persona.id === 'emma' && "Pattern: Professional workwear, neutral tones, quality fabrics"}
          {persona.id === 'david' && "Pattern: Family-focused, value multi-packs, durable kidswear"}
          {persona.id === 'aisha' && "Pattern: Statement pieces, bold colours, evening & event wear"}
        </p>
      </div>
    </div>
  );
};

export default PastPurchasesSidebar;

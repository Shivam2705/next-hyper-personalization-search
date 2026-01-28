import { ShoppingBag, Calendar, Star, TrendingUp, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Persona } from "@/pages/Login";

// Past purchase imagery (generated, description-accurate) to prevent mismatches
import pastEmmaBlackTailoredBlazer from "@/assets/products/past_emma_black_tailored_blazer.jpg";
import pastEmmaIvorySilkBlouse from "@/assets/products/past_emma_ivory_silk_blouse.jpg";
import pastEmmaBlackPencilSkirt from "@/assets/products/past_emma_black_pencil_skirt.jpg";
import pastEmmaCamelCashmereCardigan from "@/assets/products/past_emma_camel_cashmere_cardigan.jpg";
import pastEmmaNudeCourtHeels from "@/assets/products/past_emma_nude_court_heels.jpg";

import pastDavidBoysGreySchoolJumper from "@/assets/products/past_david_boys_grey_school_jumper.jpg";
import pastDavidMensBlackJoggers from "@/assets/products/past_david_mens_black_joggers.jpg";
import pastDavidBoysNavyRaincoat from "@/assets/products/past_david_boys_navy_raincoat.jpg";
import pastDavidMensWhiteTshirt3pk from "@/assets/products/past_david_mens_white_tshirt_3pk.jpg";
import pastDavidMensNavyZipHoodie from "@/assets/products/past_david_mens_navy_zip_hoodie.jpg";

import pastAishaCobaltWrapDress from "@/assets/products/past_aisha_cobalt_wrap_dress.jpg";
import pastAishaGoldStatementEarrings from "@/assets/products/past_aisha_gold_statement_earrings.jpg";
import pastAishaOrangeCroppedBlazer from "@/assets/products/past_aisha_orange_cropped_blazer.jpg";
import pastAishaBlackStrappyHeels from "@/assets/products/past_aisha_black_strappy_heels.jpg";
import pastAishaTropicalPrintMidiSkirt from "@/assets/products/past_aisha_tropical_print_midi_skirt.jpg";

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
    // Emma: Female corporate professional - structured, elegant, polished
    {
      id: "ep1",
      name: "Black Tailored Blazer",
      image: pastEmmaBlackTailoredBlazer,
      price: "£89",
      date: "Jan 2026",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep2",
      name: "Ivory Silk Blouse",
      image: pastEmmaIvorySilkBlouse,
      price: "£52",
      date: "Dec 2025",
      category: "Tops",
      rating: 5
    },
    {
      id: "ep3",
      name: "Black Pencil Skirt",
      image: pastEmmaBlackPencilSkirt,
      price: "£48",
      date: "Nov 2025",
      category: "Workwear",
      rating: 5
    },
    {
      id: "ep4",
      name: "Camel Cashmere Cardigan",
      image: pastEmmaCamelCashmereCardigan,
      price: "£75",
      date: "Sep 2025",
      category: "Knitwear",
      rating: 4
    },
    {
      id: "ep5",
      name: "Nude Court Heels",
      image: pastEmmaNudeCourtHeels,
      price: "£68",
      date: "Aug 2025",
      category: "Footwear",
      rating: 5
    }
  ],
  david: [
    // David: Family value shopper - kidswear + menswear basics
    {
      id: "dp1",
      name: "Boys' Grey School Jumper",
      image: pastDavidBoysGreySchoolJumper,
      price: "£14",
      date: "Jan 2026",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp2",
      name: "Men's Black Joggers",
      image: pastDavidMensBlackJoggers,
      price: "£28",
      date: "Dec 2025",
      category: "Menswear",
      rating: 4
    },
    {
      id: "dp3",
      name: "Boys' Navy Raincoat",
      image: pastDavidBoysNavyRaincoat,
      price: "£32",
      date: "Oct 2025",
      category: "Kidswear",
      rating: 5
    },
    {
      id: "dp4",
      name: "Men's White T-Shirt (3pk)",
      image: pastDavidMensWhiteTshirt3pk,
      price: "£16",
      date: "Sep 2025",
      category: "Menswear Basics",
      rating: 5
    },
    {
      id: "dp5",
      name: "Men's Navy Zip Hoodie",
      image: pastDavidMensNavyZipHoodie,
      price: "£35",
      date: "Aug 2025",
      category: "Menswear",
      rating: 4
    }
  ],
  aisha: [
    // Aisha: Female trend-forward, bold eveningwear & statement pieces
    {
      id: "ap1",
      name: "Cobalt Blue Wrap Dress",
      image: pastAishaCobaltWrapDress,
      price: "£72",
      date: "Jan 2026",
      category: "Eveningwear",
      rating: 5
    },
    {
      id: "ap2",
      name: "Gold Statement Earrings",
      image: pastAishaGoldStatementEarrings,
      price: "£32",
      date: "Dec 2025",
      category: "Accessories",
      rating: 5
    },
    {
      id: "ap3",
      name: "Orange Cropped Blazer",
      image: pastAishaOrangeCroppedBlazer,
      price: "£68",
      date: "Nov 2025",
      category: "Statement Pieces",
      rating: 5
    },
    {
      id: "ap4",
      name: "Black Strappy Heels",
      image: pastAishaBlackStrappyHeels,
      price: "£85",
      date: "Sep 2025",
      category: "Footwear",
      rating: 5
    },
    {
      id: "ap5",
      name: "Tropical Print Midi Skirt",
      image: pastAishaTropicalPrintMidiSkirt,
      price: "£48",
      date: "Aug 2025",
      category: "Statement Pieces",
      rating: 4
    }
  ]
};

// Why NEW recommendations match past purchase PATTERNS (not same products)
const purchaseInsights: Record<string, string[]> = {
  emma: [
    "→ Navy Shirtdress: Extends your professional wardrobe beyond the Black Blazer you love",
    "→ White Silk Blouse: Premium upgrade from your Cream Camisole — same elegance, new fabric",
    "→ Charcoal Trousers: Structured fit like your Pencil Skirt, different silhouette",
    "→ Camel Coat: Neutral layering piece to complement your Beige Cardigan"
  ],
  david: [
    "→ Boys' Navy Polo: School essentials rotation — builds on Grey Jumper purchase",
    "→ Men's Multi-Pack Tees: Value basics matching your 2pk T-shirt buying pattern",
    "→ Boys' Puffer Jacket: Outerwear upgrade from the Navy Raincoat",
    "→ Men's Casual Shirt: Weekend style step-up from your Hoodie preference"
  ],
  aisha: [
    "→ Black Sequin Dress: Evening statement — different colour from your Cobalt Wrap",
    "→ Fuchsia Blazer: Bold colour story continuing your Hot Pink Blazer success",
    "→ Emerald Maxi Dress: Rich jewel tone like your Cobalt, fresh silhouette",
    "→ Gold Clutch Bag: Completes your Gold Earrings accessory story"
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
                  e.currentTarget.src = '/placeholder.svg';
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

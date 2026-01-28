import { useState } from "react";
import { 
  User, 
  MapPin, 
  Smartphone, 
  Search, 
  Eye, 
  ShoppingBag,
  Heart,
  TrendingUp,
  Star,
  Gift,
  Clock,
  Calendar,
  CreditCard,
  Package,
  Repeat,
  Target,
  Sparkles,
  ChevronDown,
  Zap
} from "lucide-react";
import { Persona } from "@/pages/Login";

interface PersonaProfile360Props {
  persona: Persona;
}

const persona360Data: Record<string, {
  identity: { icon: typeof User; label: string; value: string }[];
  behavior: { icon: typeof Search; label: string; value: string }[];
  purchase: { icon: typeof ShoppingBag; label: string; value: string }[];
  engagement: { icon: typeof Gift; label: string; value: string }[];
  metrics: { label: string; value: string; percentage: number }[];
}> = {
  emma: {
    identity: [
      { icon: MapPin, label: "Location", value: "Reading, UK" },
      { icon: User, label: "Life Stage", value: "Professional, 32" },
      { icon: Calendar, label: "Season", value: "Autumn/Winter" },
      { icon: Smartphone, label: "Channel", value: "Mobile (78%)" },
    ],
    behavior: [
      { icon: Search, label: "Searches", value: "Work dresses, Blazers" },
      { icon: Eye, label: "Categories", value: "Workwear (65%)" },
      { icon: Clock, label: "Peak Time", value: "Mon-Fri 8-9am" },
      { icon: Target, label: "Filters", value: "Size 10-12, £50-100" },
    ],
    purchase: [
      { icon: ShoppingBag, label: "History", value: "42 items / 18mo" },
      { icon: Package, label: "Top Cat.", value: "Dresses (35%)" },
      { icon: Repeat, label: "Returns", value: "8% (Low)" },
      { icon: CreditCard, label: "AOV", value: "£127" },
    ],
    engagement: [
      { icon: Gift, label: "Loyalty", value: "Gold (3yr)" },
      { icon: Star, label: "Email", value: "72% open rate" },
      { icon: TrendingUp, label: "Offers", value: "Low sensitivity" },
      { icon: Heart, label: "Wishlist", value: "18 items" },
    ],
    metrics: [
      { label: "Style Match", value: "Structured", percentage: 94 },
      { label: "Size Fit", value: "10-12", percentage: 98 },
      { label: "Price Fit", value: "£70-120", percentage: 85 },
      { label: "Brand Affinity", value: "High", percentage: 89 },
    ]
  },
  david: {
    identity: [
      { icon: MapPin, label: "Location", value: "Manchester, UK" },
      { icon: User, label: "Life Stage", value: "Family Dad, 2 kids" },
      { icon: Calendar, label: "Season", value: "Back-to-School" },
      { icon: Smartphone, label: "Channel", value: "Desktop (55%)" },
    ],
    behavior: [
      { icon: Search, label: "Searches", value: "School uniforms" },
      { icon: Eye, label: "Categories", value: "Kidswear (55%)" },
      { icon: Clock, label: "Peak Time", value: "Weekends 10am" },
      { icon: Target, label: "Filters", value: "Age 7-9, Under £30" },
    ],
    purchase: [
      { icon: ShoppingBag, label: "History", value: "86 items / 24mo" },
      { icon: Package, label: "Top Cat.", value: "Kidswear (60%)" },
      { icon: Repeat, label: "Returns", value: "5% (Excellent)" },
      { icon: CreditCard, label: "AOV", value: "£68" },
    ],
    engagement: [
      { icon: Gift, label: "Loyalty", value: "Silver Member" },
      { icon: Star, label: "Deals", value: "89% open rate" },
      { icon: TrendingUp, label: "Offers", value: "High sensitivity" },
      { icon: Heart, label: "Bundles", value: "78% usage" },
    ],
    metrics: [
      { label: "Value Focus", value: "Multi-pack", percentage: 92 },
      { label: "Size Fit", value: "Kids 7-9", percentage: 96 },
      { label: "Price Fit", value: "Under £30", percentage: 88 },
      { label: "Bundle Rate", value: "3+ items", percentage: 78 },
    ]
  },
  aisha: {
    identity: [
      { icon: MapPin, label: "Location", value: "London, Zone 2" },
      { icon: User, label: "Life Stage", value: "Young Pro, 27" },
      { icon: Calendar, label: "Season", value: "Party Season" },
      { icon: Smartphone, label: "Channel", value: "Mobile (92%)" },
    ],
    behavior: [
      { icon: Search, label: "Searches", value: "Sequin, Statement" },
      { icon: Eye, label: "Categories", value: "Evening (50%)" },
      { icon: Clock, label: "Peak Time", value: "Thurs-Sat 7pm" },
      { icon: Target, label: "Filters", value: "Size 10, New In" },
    ],
    purchase: [
      { icon: ShoppingBag, label: "History", value: "38 items / 12mo" },
      { icon: Package, label: "Top Cat.", value: "Party (45%)" },
      { icon: Repeat, label: "Returns", value: "12% (Avg)" },
      { icon: CreditCard, label: "AOV", value: "£95" },
    ],
    engagement: [
      { icon: Gift, label: "Loyalty", value: "Platinum" },
      { icon: Star, label: "New In", value: "Top 5% first" },
      { icon: TrendingUp, label: "Trends", value: "Early adopter" },
      { icon: Heart, label: "Social", value: "45 saves" },
    ],
    metrics: [
      { label: "Trend Index", value: "Early", percentage: 96 },
      { label: "Size Fit", value: "Size 10", percentage: 92 },
      { label: "Statement", value: "Bold", percentage: 94 },
      { label: "Premium", value: "Quality-first", percentage: 88 },
    ]
  }
};

const signalGroups = [
  { key: "identity", title: "Identity", icon: User, color: "from-orange-500 to-amber-500" },
  { key: "behavior", title: "Behavior", icon: Eye, color: "from-blue-500 to-cyan-500" },
  { key: "purchase", title: "Purchase", icon: ShoppingBag, color: "from-emerald-500 to-green-500" },
  { key: "engagement", title: "Engagement", icon: Gift, color: "from-purple-500 to-pink-500" },
];

const PersonaProfile360 = ({ persona }: PersonaProfile360Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const data = persona360Data[persona.id] || persona360Data.emma;

  return (
    <div className="mb-8">
      {/* Compact Header Bar - Always Visible */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="glass-card p-4 cursor-pointer group transition-all duration-300 hover:border-primary/40"
      >
        <div className="flex items-center justify-between">
          {/* Left: Avatar + Name + Key Stats */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={persona.avatar} 
                alt={persona.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-foreground">{persona.name}</h3>
                <span className="text-xs text-primary font-medium">360° Profile</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-muted-foreground">{persona.location}</span>
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{persona.style}</span>
              </div>
            </div>
          </div>

          {/* Center: Mini Metric Pills */}
          <div className="hidden md:flex items-center gap-2">
            {data.metrics.slice(0, 4).map((metric, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-xs text-muted-foreground">{metric.label}</span>
                <span className="text-xs font-semibold text-foreground">{metric.percentage}%</span>
              </div>
            ))}
          </div>

          {/* Right: Live indicator + Expand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground hidden sm:inline">Live</span>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </div>
        </div>

        {/* Mobile Metrics - Below header on small screens */}
        <div className="flex md:hidden items-center gap-2 mt-3 overflow-x-auto pb-1">
          {data.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/50 rounded-full flex-shrink-0">
              <span className="text-xs text-muted-foreground">{metric.label}</span>
              <span className="text-xs font-semibold text-primary">{metric.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Details Panel */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {signalGroups.map((group) => {
            const signals = data[group.key as keyof typeof data] as { icon: typeof User; label: string; value: string }[];
            
            return (
              <div 
                key={group.key} 
                className="glass-card p-4 relative overflow-hidden group/card"
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${group.color}`} />
                
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                    <group.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{group.title}</span>
                </div>

                {/* Compact Signals */}
                <div className="space-y-2">
                  {signals.map((signal, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <signal.icon className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground truncate">{signal.label}</span>
                      </div>
                      <span className="text-xs font-medium text-foreground text-right truncate max-w-[50%]">
                        {signal.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-center mt-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>These signals power the product rankings below</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaProfile360;

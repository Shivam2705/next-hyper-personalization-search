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
  BarChart3,
  Palette,
  Ruler
} from "lucide-react";
import { Persona } from "@/pages/Login";

interface PersonaProfile360Props {
  persona: Persona;
}

// Detailed 360 data for each persona
const persona360Data: Record<string, {
  identity: { icon: typeof User; label: string; value: string }[];
  behavior: { icon: typeof Search; label: string; value: string }[];
  purchase: { icon: typeof ShoppingBag; label: string; value: string }[];
  engagement: { icon: typeof Gift; label: string; value: string }[];
  metrics: { label: string; value: string; percentage: number; color: string }[];
}> = {
  emma: {
    identity: [
      { icon: MapPin, label: "Location", value: "Reading, UK" },
      { icon: User, label: "Life Stage", value: "Working Professional, 32" },
      { icon: Calendar, label: "Season Context", value: "Autumn/Winter Peak" },
      { icon: Smartphone, label: "Primary Channel", value: "Mobile App (78%)" },
    ],
    behavior: [
      { icon: Search, label: "Recent Searches", value: "Work dresses, Blazers, Silk blouses" },
      { icon: Eye, label: "Browse Categories", value: "Workwear (65%), Outerwear (20%)" },
      { icon: Clock, label: "Peak Activity", value: "Mon-Fri 8-9am, 6-8pm" },
      { icon: Target, label: "Filters Applied", value: "Size 10-12, Navy/Charcoal, £50-100" },
    ],
    purchase: [
      { icon: ShoppingBag, label: "Purchase History", value: "42 items in 18 months" },
      { icon: Package, label: "Top Categories", value: "Dresses (35%), Trousers (28%)" },
      { icon: Repeat, label: "Return Rate", value: "8% (Well below avg 15%)" },
      { icon: CreditCard, label: "Avg Order Value", value: "£127 (Premium tier)" },
    ],
    engagement: [
      { icon: Gift, label: "Loyalty Status", value: "Gold Member (3 years)" },
      { icon: Star, label: "Email Engagement", value: "Opens 72% | Clicks 34%" },
      { icon: TrendingUp, label: "Offer Sensitivity", value: "Low (quality > price)" },
      { icon: Heart, label: "Saved Items", value: "18 items in wishlist" },
    ],
    metrics: [
      { label: "Style Affinity", value: "Structured Fits", percentage: 94, color: "from-teal-500 to-cyan-500" },
      { label: "Colour Preference", value: "Navy, Charcoal, White", percentage: 89, color: "from-blue-500 to-indigo-500" },
      { label: "Size Confidence", value: "Size 10-12 (98% fit)", percentage: 98, color: "from-emerald-500 to-green-500" },
      { label: "Price Alignment", value: "£70-120 sweet spot", percentage: 85, color: "from-purple-500 to-pink-500" },
    ]
  },
  david: {
    identity: [
      { icon: MapPin, label: "Location", value: "Manchester, UK" },
      { icon: User, label: "Life Stage", value: "Family Dad, 2 kids (7, 9)" },
      { icon: Calendar, label: "Season Context", value: "Back-to-School + Autumn" },
      { icon: Smartphone, label: "Primary Channel", value: "Desktop (55%) + Mobile" },
    ],
    behavior: [
      { icon: Search, label: "Recent Searches", value: "School uniforms, Boys jeans, Multi-packs" },
      { icon: Eye, label: "Browse Categories", value: "Kidswear (55%), Menswear (35%)" },
      { icon: Clock, label: "Peak Activity", value: "Weekends 10am-2pm" },
      { icon: Target, label: "Filters Applied", value: "Age 7-9, Size L (mens), Under £30" },
    ],
    purchase: [
      { icon: ShoppingBag, label: "Purchase History", value: "86 items in 24 months" },
      { icon: Package, label: "Top Categories", value: "Kidswear (60%), Menswear (30%)" },
      { icon: Repeat, label: "Return Rate", value: "5% (Excellent)" },
      { icon: CreditCard, label: "Avg Order Value", value: "£68 (Multi-item)" },
    ],
    engagement: [
      { icon: Gift, label: "Loyalty Status", value: "Silver Member" },
      { icon: Star, label: "Offer Response", value: "89% opens on deals emails" },
      { icon: TrendingUp, label: "Offer Sensitivity", value: "High (value-driven)" },
      { icon: Heart, label: "Multi-Buy Usage", value: "78% of orders use bundles" },
    ],
    metrics: [
      { label: "Value Priority", value: "Multi-pack buyer", percentage: 92, color: "from-teal-500 to-cyan-500" },
      { label: "Durability Focus", value: "Denim & Cotton basics", percentage: 88, color: "from-blue-500 to-indigo-500" },
      { label: "Size Confidence", value: "Kids 7-9, Mens L", percentage: 96, color: "from-emerald-500 to-green-500" },
      { label: "Bundle Preference", value: "3+ items typical", percentage: 78, color: "from-purple-500 to-pink-500" },
    ]
  },
  aisha: {
    identity: [
      { icon: MapPin, label: "Location", value: "London, UK (Zone 2)" },
      { icon: User, label: "Life Stage", value: "Young Professional, 27" },
      { icon: Calendar, label: "Season Context", value: "Party Season Active" },
      { icon: Smartphone, label: "Primary Channel", value: "Mobile App (92%)" },
    ],
    behavior: [
      { icon: Search, label: "Recent Searches", value: "Sequin dress, Statement blazer, Party outfit" },
      { icon: Eye, label: "Browse Categories", value: "Eveningwear (50%), Statement (35%)" },
      { icon: Clock, label: "Peak Activity", value: "Thurs-Sat 7-11pm" },
      { icon: Target, label: "Filters Applied", value: "Size 10, New Arrivals, Bold colours" },
    ],
    purchase: [
      { icon: ShoppingBag, label: "Purchase History", value: "38 items in 12 months" },
      { icon: Package, label: "Top Categories", value: "Party wear (45%), Statement (35%)" },
      { icon: Repeat, label: "Return Rate", value: "12% (At average)" },
      { icon: CreditCard, label: "Avg Order Value", value: "£95 (Premium tier)" },
    ],
    engagement: [
      { icon: Gift, label: "Loyalty Status", value: "Platinum Member" },
      { icon: Star, label: "New Arrivals", value: "First to browse (top 5%)" },
      { icon: TrendingUp, label: "Trend Adoption", value: "Early adopter profile" },
      { icon: Heart, label: "Social Saves", value: "45 Instagram saves" },
    ],
    metrics: [
      { label: "Trend Index", value: "Early adopter", percentage: 96, color: "from-teal-500 to-cyan-500" },
      { label: "Statement Style", value: "Bold & eye-catching", percentage: 94, color: "from-pink-500 to-rose-500" },
      { label: "Size Confidence", value: "Size 10 (92% fit)", percentage: 92, color: "from-emerald-500 to-green-500" },
      { label: "Premium Affinity", value: "Quality-first buyer", percentage: 88, color: "from-purple-500 to-violet-500" },
    ]
  }
};

const signalGroupConfig = [
  { key: "identity", title: "Identity & Context", icon: User, gradient: "from-teal-500 to-cyan-500" },
  { key: "behavior", title: "Behavioral Signals", icon: Eye, gradient: "from-blue-500 to-indigo-500" },
  { key: "purchase", title: "Purchase Intelligence", icon: ShoppingBag, gradient: "from-emerald-500 to-green-500" },
  { key: "engagement", title: "Engagement & Loyalty", icon: Gift, gradient: "from-purple-500 to-pink-500" },
];

const PersonaProfile360 = ({ persona }: PersonaProfile360Props) => {
  const data = persona360Data[persona.id] || persona360Data.emma;

  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {persona.name}'s Consumer <span className="gradient-text">360°</span> Profile
          </h2>
          <p className="text-sm text-muted-foreground">
            Real-time signals powering personalized product ranking
          </p>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div className="glass-card p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Persona Identity */}
          <div className="flex items-center gap-4 lg:w-1/3">
            <div className="relative">
              <img 
                src={persona.avatar} 
                alt={persona.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary/30"
              />
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">{persona.name}</h3>
              <p className="text-sm text-primary font-medium">{persona.title}</p>
              <p className="text-xs text-muted-foreground">{persona.location}</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{persona.style}</span>
                <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">{persona.priceRange}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.metrics.map((metric, idx) => (
              <div key={idx} className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{metric.label}</span>
                  <span className="text-xs font-bold text-primary">{metric.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-2">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-foreground">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signal Groups Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {signalGroupConfig.map((group) => {
          const signals = data[group.key as keyof typeof data] as { icon: typeof User; label: string; value: string }[];
          
          return (
            <div key={group.key} className="glass-card p-5 hover-lift">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${group.gradient} flex items-center justify-center`}>
                  <group.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{group.title}</h4>
              </div>

              {/* Signals */}
              <div className="space-y-3">
                {signals.map((signal, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <signal.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-muted-foreground">{signal.label}</div>
                      <div className="text-xs font-medium text-foreground leading-tight">
                        {signal.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Signal Indicator */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">
            Signals update in real-time — these drive the rankings below
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonaProfile360;

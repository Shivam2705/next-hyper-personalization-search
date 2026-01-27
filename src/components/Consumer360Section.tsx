import { 
  User, 
  MapPin, 
  Smartphone, 
  Search, 
  Eye, 
  Filter,
  ShoppingBag,
  Heart,
  TrendingUp,
  Star,
  Gift,
  Clock
} from "lucide-react";

const signalGroups = [
  {
    title: "Identity & Context",
    icon: User,
    color: "from-orange-500 to-amber-500",
    signals: [
      { icon: MapPin, label: "Location", value: "Reading, UK" },
      { icon: User, label: "Life Stage", value: "Working Professional" },
      { icon: Clock, label: "Season Context", value: "Autumn/Winter" },
      { icon: Smartphone, label: "Channel", value: "Mobile App" },
    ],
  },
  {
    title: "Behavioural Signals",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
    signals: [
      { icon: Search, label: "Recent Searches", value: "Work dresses, Smart tops" },
      { icon: Eye, label: "Browsing Depth", value: "High engagement" },
      { icon: Filter, label: "Filters Used", value: "Size 10, Navy, £50-100" },
      { icon: Clock, label: "Time on Category", value: "8min on Workwear" },
    ],
  },
  {
    title: "Purchase Intelligence",
    icon: ShoppingBag,
    color: "from-emerald-500 to-green-500",
    signals: [
      { icon: ShoppingBag, label: "Past Purchases", value: "Midi dresses, Blazers" },
      { icon: Heart, label: "Style Affinity", value: "Clean, Structured fits" },
      { icon: TrendingUp, label: "Price Sensitivity", value: "Mid-to-Premium" },
      { icon: Star, label: "Return Rate", value: "Low (High fit confidence)" },
    ],
  },
  {
    title: "Engagement & Loyalty",
    icon: Gift,
    color: "from-purple-500 to-pink-500",
    signals: [
      { icon: Gift, label: "Campaign Response", value: "Opens 65% of emails" },
      { icon: Star, label: "Loyalty Tier", value: "Gold Member" },
      { icon: TrendingUp, label: "Offer Sensitivity", value: "Moderate" },
      { icon: Heart, label: "Brand Affinity", value: "NEXT Own Brand" },
    ],
  },
];

const Consumer360Section = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Consumer <span className="gradient-text">360°</span> Profile
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live signals that power hyper-personalization. Not static profiles — 
            real-time intelligence that evolves with every interaction.
          </p>
        </div>

        {/* Central 360 Visualization */}
        <div className="relative flex justify-center mb-16">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-64 h-64 md:w-80 md:h-80 consumer-360-ring">
              {/* Middle Ring */}
              <div className="w-48 h-48 md:w-60 md:h-60 consumer-360-ring">
                {/* Inner Ring */}
                <div className="w-32 h-32 md:w-40 md:h-40 consumer-360-ring">
                  {/* Core */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center glow-effect">
                    <span className="text-xs md:text-sm font-bold text-primary-foreground text-center">
                      Consumer<br />360°
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Signals */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                style={{
                  top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                  left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Signal Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signalGroups.map((group, idx) => (
            <div
              key={group.title}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                  <group.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>

              {/* Signals */}
              <div className="space-y-4">
                {group.signals.map((signal) => (
                  <div key={signal.label} className="flex items-start gap-3">
                    <signal.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{signal.label}</div>
                      <div className="text-sm font-medium text-foreground truncate">
                        {signal.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Signals update in real time — not static profiles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consumer360Section;

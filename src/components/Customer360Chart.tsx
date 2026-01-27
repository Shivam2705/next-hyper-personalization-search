import { useState } from "react";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  TrendingUp,
  MapPin,
  Smartphone,
  Search,
  Star,
  Gift,
  Clock
} from "lucide-react";

const segments = [
  {
    id: "identity",
    label: "Identity & Context",
    color: "hsl(18, 91%, 54%)", // Primary orange
    icon: User,
    percentage: 25,
    signals: [
      { icon: MapPin, label: "Location", value: "Reading, UK" },
      { icon: User, label: "Life Stage", value: "Working Professional" },
      { icon: Clock, label: "Season", value: "Autumn/Winter" },
      { icon: Smartphone, label: "Channel", value: "Mobile App" },
    ]
  },
  {
    id: "behavior",
    label: "Behavioral Signals",
    color: "hsl(200, 80%, 50%)", // Blue
    icon: Search,
    percentage: 25,
    signals: [
      { icon: Search, label: "Recent Searches", value: "Work dresses, Smart tops" },
      { icon: TrendingUp, label: "Browse Depth", value: "High engagement" },
      { icon: Clock, label: "Time on Category", value: "8min on Workwear" },
      { icon: Star, label: "Filter Usage", value: "Size 10, Navy, £50-100" },
    ]
  },
  {
    id: "purchase",
    label: "Purchase Intelligence",
    color: "hsl(150, 70%, 45%)", // Green
    icon: ShoppingBag,
    percentage: 25,
    signals: [
      { icon: ShoppingBag, label: "Past Purchases", value: "Midi dresses, Blazers" },
      { icon: Heart, label: "Style Affinity", value: "Clean, Structured fits" },
      { icon: TrendingUp, label: "Price Sensitivity", value: "Mid-to-Premium" },
      { icon: Star, label: "Return Rate", value: "Low (High fit confidence)" },
    ]
  },
  {
    id: "engagement",
    label: "Engagement & Loyalty",
    color: "hsl(280, 70%, 55%)", // Purple
    icon: Gift,
    percentage: 25,
    signals: [
      { icon: Gift, label: "Campaign Response", value: "Opens 65% of emails" },
      { icon: Star, label: "Loyalty Tier", value: "Gold Member" },
      { icon: TrendingUp, label: "Offer Sensitivity", value: "Moderate" },
      { icon: Heart, label: "Brand Affinity", value: "NEXT Own Brand" },
    ]
  }
];

const Customer360Chart = () => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const radius = 140;
  const strokeWidth = 50;
  const circumference = 2 * Math.PI * radius;
  const gap = 4; // Gap between segments in degrees
  const totalGap = gap * segments.length;
  const availableDegrees = 360 - totalGap;

  let currentOffset = 0;

  const getSegmentPath = (percentage: number, startOffset: number) => {
    const segmentDegrees = (percentage / 100) * availableDegrees;
    const startAngle = (startOffset / 360) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((startOffset + segmentDegrees) / 360) * 2 * Math.PI - Math.PI / 2;
    
    const x1 = 200 + radius * Math.cos(startAngle);
    const y1 = 200 + radius * Math.sin(startAngle);
    const x2 = 200 + radius * Math.cos(endAngle);
    const y2 = 200 + radius * Math.sin(endAngle);
    
    const largeArc = segmentDegrees > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
  };

  const activeData = activeSegment 
    ? segments.find(s => s.id === activeSegment) 
    : hoveredSegment 
      ? segments.find(s => s.id === hoveredSegment)
      : null;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Donut Chart */}
      <div className="relative">
        <svg width="400" height="400" className="transform -rotate-90">
          {segments.map((segment) => {
            const startOffset = currentOffset;
            const segmentDegrees = (segment.percentage / 100) * availableDegrees;
            currentOffset += segmentDegrees + gap;

            const isActive = activeSegment === segment.id || hoveredSegment === segment.id;

            return (
              <path
                key={segment.id}
                d={getSegmentPath(segment.percentage, startOffset)}
                fill="none"
                stroke={segment.color}
                strokeWidth={isActive ? strokeWidth + 10 : strokeWidth}
                strokeLinecap="round"
                className="cursor-pointer transition-all duration-300"
                style={{
                  opacity: (activeSegment || hoveredSegment) && !isActive ? 0.3 : 1,
                  filter: isActive ? "drop-shadow(0 0 20px " + segment.color + ")" : "none"
                }}
                onMouseEnter={() => setHoveredSegment(segment.id)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => setActiveSegment(activeSegment === segment.id ? null : segment.id)}
              />
            );
          })}
        </svg>

        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="w-40 h-40 rounded-full bg-card border border-border flex flex-col items-center justify-center">
            {activeData ? (
              <>
                <activeData.icon className="w-8 h-8 mb-2" style={{ color: activeData.color }} />
                <span className="text-sm font-semibold text-foreground">{activeData.label}</span>
              </>
            ) : (
              <>
                <span className="text-2xl font-bold text-foreground">360°</span>
                <span className="text-sm text-muted-foreground">Consumer View</span>
                <span className="text-xs text-muted-foreground mt-1">Click a segment</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Legend & Details */}
      <div className="flex-1 max-w-md space-y-4">
        {segments.map((segment) => {
          const isActive = activeSegment === segment.id || hoveredSegment === segment.id;
          
          return (
            <div
              key={segment.id}
              className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                isActive ? "ring-2 ring-opacity-50" : ""
              }`}
              style={{ 
                borderColor: isActive ? segment.color : undefined,
                boxShadow: isActive ? `0 0 20px ${segment.color}40` : undefined
              }}
              onMouseEnter={() => setHoveredSegment(segment.id)}
              onMouseLeave={() => setHoveredSegment(null)}
              onClick={() => setActiveSegment(activeSegment === segment.id ? null : segment.id)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: segment.color + "30" }}
                >
                  <segment.icon className="w-5 h-5" style={{ color: segment.color }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{segment.label}</h4>
                  <div className="w-full h-1.5 bg-secondary rounded-full mt-1">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${segment.percentage}%`,
                        backgroundColor: segment.color
                      }}
                    />
                  </div>
                </div>
              </div>

              {isActive && (
                <div className="grid grid-cols-2 gap-2 mt-3 animate-fade-in">
                  {segment.signals.map((signal) => (
                    <div key={signal.label} className="flex items-start gap-2 p-2 bg-secondary/30 rounded-lg">
                      <signal.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{signal.label}</div>
                        <div className="text-xs font-medium text-foreground truncate">{signal.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Signals update in real-time</span>
        </div>
      </div>
    </div>
  );
};

export default Customer360Chart;

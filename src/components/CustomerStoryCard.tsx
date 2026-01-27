import { MapPin, Target, Brain, ChevronRight } from "lucide-react";

interface CustomerStoryCardProps {
  profile: {
    name: string;
    avatar: string;
    location: string;
    intent: string;
    description: string;
    whatTheySee: string[];
    reasoning: string;
    color: string;
  };
  isActive: boolean;
  onClick: () => void;
}

const CustomerStoryCard = ({ profile, isActive, onClick }: CustomerStoryCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
        isActive
          ? "ring-2 ring-primary scale-[1.02]"
          : "hover:ring-1 hover:ring-border"
      }`}
    >
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center text-xl font-bold text-white`}>
          {profile.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{profile.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {profile.location}
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${isActive ? "rotate-90" : ""}`} />
      </div>

      {/* Intent */}
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-4 h-4 text-primary" />
        <span className="text-sm text-muted-foreground">Shopping Intent:</span>
        <span className="text-sm font-medium text-foreground">{profile.intent}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {profile.description}
      </p>

      {/* What They See */}
      {isActive && (
        <div className="animate-fade-up">
          <div className="border-t border-border pt-5 mb-4">
            <h4 className="text-sm font-medium text-foreground mb-3">What {profile.name} Sees:</h4>
            <ul className="space-y-2">
              {profile.whatTheySee.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Agentic Reasoning */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Agentic Reasoning</span>
            </div>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{profile.reasoning}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerStoryCard;

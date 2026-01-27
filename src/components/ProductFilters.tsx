import { useState, useEffect } from "react";
import { 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  X,
  Sparkles,
  SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export interface FilterState {
  for: string[];
  brands: string[];
  department: string[];
  size: string[];
  color: string[];
  sizeType: string[];
  use: string[];
  length: string[];
  style: string[];
  pattern: string[];
  sleeve: string[];
  material: string[];
  fit: string[];
  priceRange: [number, number];
}

interface FilterCategory {
  id: keyof Omit<FilterState, 'priceRange'>;
  label: string;
  options: string[];
}

const filterCategories: FilterCategory[] = [
  {
    id: "for",
    label: "For",
    options: ["Women", "Men", "Girls", "Boys", "Baby", "Home"]
  },
  {
    id: "brands",
    label: "Brands",
    options: ["NEXT", "Lipsy", "Love & Roses", "Threadbare", "River Island", "Only", "Jack & Jones"]
  },
  {
    id: "department",
    label: "Department",
    options: ["Dresses", "Tops", "Trousers", "Knitwear", "Coats & Jackets", "Suits", "Loungewear", "Swimwear", "Accessories", "Shoes"]
  },
  {
    id: "size",
    label: "Size",
    options: ["XS", "S", "M", "L", "XL", "XXL", "6", "8", "10", "12", "14", "16", "18", "20"]
  },
  {
    id: "color",
    label: "Colour",
    options: ["Black", "White", "Navy", "Grey", "Blue", "Red", "Pink", "Green", "Beige", "Brown", "Multi"]
  },
  {
    id: "sizeType",
    label: "Size Type",
    options: ["Regular", "Petite", "Tall", "Plus Size", "Maternity"]
  },
  {
    id: "use",
    label: "Use",
    options: ["Everyday", "Workwear", "Occasion", "Holiday", "Sportswear", "Nightwear", "School"]
  },
  {
    id: "length",
    label: "Length",
    options: ["Mini", "Knee Length", "Midi", "Maxi", "Cropped", "Full Length"]
  },
  {
    id: "style",
    label: "Style",
    options: ["Casual", "Smart", "Formal", "Bohemian", "Vintage", "Minimalist", "Glamorous", "Preppy"]
  },
  {
    id: "pattern",
    label: "Pattern",
    options: ["Plain", "Floral", "Striped", "Check", "Animal Print", "Abstract", "Polka Dot", "Geometric"]
  },
  {
    id: "sleeve",
    label: "Sleeve",
    options: ["Sleeveless", "Short Sleeve", "3/4 Sleeve", "Long Sleeve", "Cap Sleeve"]
  },
  {
    id: "material",
    label: "Material",
    options: ["Cotton", "Linen", "Silk", "Wool", "Polyester", "Denim", "Leather", "Satin", "Velvet", "Jersey"]
  },
  {
    id: "fit",
    label: "Fit",
    options: ["Slim", "Regular", "Relaxed", "Oversized", "Tailored", "Stretch"]
  }
];

// Default filters for each persona based on their profile
const defaultFiltersByPersona: Record<string, Partial<FilterState>> = {
  emma: {
    for: ["Women"],
    department: ["Dresses", "Tops", "Trousers", "Coats & Jackets"],
    use: ["Workwear"],
    style: ["Smart", "Formal", "Minimalist"],
    color: ["Navy", "Black", "White", "Grey", "Beige"],
    fit: ["Tailored", "Slim"],
    size: ["12"],
    sizeType: ["Regular"],
    priceRange: [40, 150]
  },
  david: {
    for: ["Men", "Boys"],
    department: ["Tops", "Trousers", "Coats & Jackets"],
    use: ["Everyday", "School"],
    style: ["Casual"],
    color: ["Navy", "Blue", "Grey"],
    fit: ["Regular", "Relaxed"],
    size: ["L", "8", "10"],
    priceRange: [10, 60]
  },
  aisha: {
    for: ["Women"],
    department: ["Dresses", "Tops", "Accessories"],
    use: ["Occasion"],
    style: ["Glamorous", "Bohemian"],
    color: ["Black", "Pink", "Red", "Multi"],
    pattern: ["Floral", "Abstract"],
    material: ["Satin", "Silk", "Velvet"],
    fit: ["Slim"],
    size: ["10"],
    priceRange: [50, 200]
  }
};

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearAll: () => void;
  personaId?: string;
}

const ProductFilters = ({ filters, onFilterChange, onClearAll, personaId }: ProductFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Apply persona-specific default filters on mount or persona change
  useEffect(() => {
    if (personaId && defaultFiltersByPersona[personaId]) {
      const defaults = defaultFiltersByPersona[personaId];
      onFilterChange({
        for: defaults.for || [],
        brands: defaults.brands || [],
        department: defaults.department || [],
        size: defaults.size || [],
        color: defaults.color || [],
        sizeType: defaults.sizeType || [],
        use: defaults.use || [],
        length: defaults.length || [],
        style: defaults.style || [],
        pattern: defaults.pattern || [],
        sleeve: defaults.sleeve || [],
        material: defaults.material || [],
        fit: defaults.fit || [],
        priceRange: defaults.priceRange || [0, 200]
      });
    }
  }, [personaId]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleOption = (categoryId: keyof Omit<FilterState, 'priceRange'>, option: string) => {
    const currentValues = filters[categoryId];
    const newValues = currentValues.includes(option)
      ? currentValues.filter(v => v !== option)
      : [...currentValues, option];
    
    onFilterChange({
      ...filters,
      [categoryId]: newValues
    });
  };

  const handlePriceChange = (values: number[]) => {
    onFilterChange({
      ...filters,
      priceRange: [values[0], values[1]]
    });
  };

  const getActiveFilterCount = () => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'priceRange') {
        if (value[0] !== 0 || value[1] !== 200) count++;
      } else if (Array.isArray(value) && value.length > 0) {
        count += value.length;
      }
    });
    return count;
  };

  const resetToPersonaDefaults = () => {
    if (personaId && defaultFiltersByPersona[personaId]) {
      const defaults = defaultFiltersByPersona[personaId];
      onFilterChange({
        for: defaults.for || [],
        brands: defaults.brands || [],
        department: defaults.department || [],
        size: defaults.size || [],
        color: defaults.color || [],
        sizeType: defaults.sizeType || [],
        use: defaults.use || [],
        length: defaults.length || [],
        style: defaults.style || [],
        pattern: defaults.pattern || [],
        sleeve: defaults.sleeve || [],
        material: defaults.material || [],
        fit: defaults.fit || [],
        priceRange: defaults.priceRange || [0, 200]
      });
    }
  };

  const activeCount = getActiveFilterCount();

  return (
    <div className="glass-card mb-6 overflow-hidden">
      {/* Collapsed Header - Always Visible */}
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-secondary/20 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Refine Results</h3>
            <p className="text-xs text-muted-foreground">
              {activeCount > 0 ? `${activeCount} filters active` : 'Personalized defaults applied'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {activeCount > 0 && (
            <Badge variant="secondary" className="gap-1.5 bg-primary/10">
              <Sparkles className="w-3 h-3 text-primary" />
              {activeCount}
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="p-1">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Expandable Filter Content */}
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <CollapsibleContent>
          <div className="px-4 pb-4 border-t border-border/30 pt-4">
            {/* Quick Actions */}
            <div className="flex items-center gap-2 mb-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetToPersonaDefaults}
                className="text-xs border-primary/30 text-primary hover:bg-primary/10"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Reset to Persona Defaults
              </Button>
              {activeCount > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onClearAll}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3 h-3 mr-1" />
                  Clear All
                </Button>
              )}
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
              {filterCategories.map((category) => (
                <Collapsible 
                  key={category.id}
                  open={expandedCategories.includes(category.id)}
                  onOpenChange={() => toggleCategory(category.id)}
                  className="border border-border/50 rounded-lg bg-card/30"
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between px-3 py-2 h-auto hover:bg-secondary/30 text-left"
                    >
                      <span className="text-xs font-medium truncate">
                        {category.label}
                        {filters[category.id].length > 0 && (
                          <span className="ml-1 text-primary">({filters[category.id].length})</span>
                        )}
                      </span>
                      {expandedCategories.includes(category.id) ? (
                        <ChevronUp className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-2 pb-2">
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {category.options.map((option) => (
                        <label 
                          key={option} 
                          className={cn(
                            "flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-secondary/30 transition-colors",
                            filters[category.id].includes(option) && "bg-primary/10"
                          )}
                        >
                          <Checkbox 
                            checked={filters[category.id].includes(option)}
                            onCheckedChange={() => toggleOption(category.id, option)}
                            className="w-3.5 h-3.5"
                          />
                          <span className={cn(
                            "text-xs",
                            filters[category.id].includes(option) ? "text-primary font-medium" : "text-muted-foreground"
                          )}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}

              {/* Price Range */}
              <div className="border border-border/50 rounded-lg bg-card/30 p-3">
                <p className="text-xs font-medium mb-2">Price Range</p>
                <Slider
                  value={[filters.priceRange[0], filters.priceRange[1]]}
                  onValueChange={handlePriceChange}
                  max={200}
                  min={0}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>£{filters.priceRange[0]}</span>
                  <span>£{filters.priceRange[1]}+</span>
                </div>
              </div>
            </div>

            {/* Active Filters Tags */}
            {activeCount > 0 && (
              <div className="mt-4 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-2">Active filters:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, value]) => {
                    if (key === 'priceRange') return null;
                    if (!Array.isArray(value) || value.length === 0) return null;
                    return value.map((v: string) => (
                      <Badge 
                        key={`${key}-${v}`} 
                        variant="secondary" 
                        className="gap-1 pl-2 pr-1 py-0.5 bg-primary/10 hover:bg-primary/20 cursor-pointer"
                        onClick={() => toggleOption(key as keyof Omit<FilterState, 'priceRange'>, v)}
                      >
                        <span className="text-xs">{v}</span>
                        <X className="w-3 h-3" />
                      </Badge>
                    ));
                  })}
                  {(filters.priceRange[0] !== 0 || filters.priceRange[1] !== 200) && (
                    <Badge 
                      variant="secondary" 
                      className="gap-1 pl-2 pr-1 py-0.5 bg-primary/10 hover:bg-primary/20 cursor-pointer"
                      onClick={() => handlePriceChange([0, 200])}
                    >
                      <span className="text-xs">£{filters.priceRange[0]}-£{filters.priceRange[1]}</span>
                      <X className="w-3 h-3" />
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ProductFilters;

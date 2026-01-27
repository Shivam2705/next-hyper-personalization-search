import { useState } from "react";
import { 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  X,
  Sparkles
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

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearAll: () => void;
  personaName?: string;
}

const ProductFilters = ({ filters, onFilterChange, onClearAll, personaName }: ProductFiltersProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["for", "department"]);
  const [showAllFilters, setShowAllFilters] = useState(false);

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

  const activeCount = getActiveFilterCount();
  const visibleCategories = showAllFilters ? filterCategories : filterCategories.slice(0, 6);

  return (
    <div className="glass-card p-4 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Filter className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Refine Results</h3>
            <p className="text-xs text-muted-foreground">
              Personalization adapts to your filters
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <Badge variant="secondary" className="gap-1.5">
              <Sparkles className="w-3 h-3 text-primary" />
              {activeCount} active
            </Badge>
          )}
          {activeCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearAll}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3 mr-1" />
              Clear all
            </Button>
          )}
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {visibleCategories.map((category) => (
          <Collapsible 
            key={category.id}
            open={expandedCategories.includes(category.id)}
            onOpenChange={() => toggleCategory(category.id)}
            className="border border-border/50 rounded-lg bg-card/30"
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full justify-between px-3 py-2 h-auto hover:bg-secondary/30"
              >
                <span className="text-xs font-medium">
                  {category.label}
                  {filters[category.id].length > 0 && (
                    <span className="ml-1 text-primary">({filters[category.id].length})</span>
                  )}
                </span>
                {expandedCategories.includes(category.id) ? (
                  <ChevronUp className="w-3 h-3 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
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

      {/* Show More/Less */}
      {filterCategories.length > 6 && (
        <div className="mt-3 text-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="text-xs text-primary hover:text-primary"
          >
            {showAllFilters ? "Show fewer filters" : `Show all ${filterCategories.length} filters`}
            {showAllFilters ? (
              <ChevronUp className="w-3 h-3 ml-1" />
            ) : (
              <ChevronDown className="w-3 h-3 ml-1" />
            )}
          </Button>
        </div>
      )}

      {/* Active Filters Tags */}
      {activeCount > 0 && (
        <div className="mt-4 pt-3 border-t border-border/50">
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
  );
};

export default ProductFilters;

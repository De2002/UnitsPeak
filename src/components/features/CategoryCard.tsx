import { useNavigate } from "react-router-dom";
import {
  Ruler, Scale, Droplets, Thermometer, Square, Gauge, Zap, Package,
  DollarSign, Type, Battery, ArrowUpDown, Clock, Wind, Triangle, Hash,
  HardDrive, RotateCcw, TrendingUp, RefreshCw, Layers, Box, Circle,
  Wrench, Settings, Flame, Maximize, Shield, Activity, Filter, Monitor,
  Sun, Lightbulb, Image, Wifi, AlertCircle, Eye, Tag, ArrowRightLeft,
  Volume2, TreePine, Waves, MoveRight, BarChart, Sliders, SlidersHorizontal,
  Minus, BarChart2, Compass, Signal, Cpu, ArrowLeftRight, Grid, AlignCenter,
  AlignJustify, CheckCircle, Radio, Weight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Ruler, Scale, Droplets, Thermometer, Square, Gauge, Zap, Package,
  DollarSign, Type, Battery, ArrowUpDown, Clock, Wind, Triangle, Hash,
  HardDrive, RotateCcw, TrendingUp, RefreshCw, Layers, Box, Circle,
  Wrench, Settings, Flame, Maximize, Shield, Activity, Filter, Monitor,
  Sun, Lightbulb, Image, Wifi, AlertCircle, Eye, Tag, ArrowRightLeft,
  Volume2, TreePine, Waves, MoveRight, BarChart, Sliders, SlidersHorizontal,
  Minus, BarChart2, Compass, Signal, Cpu, ArrowLeftRight, Grid, AlignCenter,
  AlignJustify, CheckCircle, Radio, Weight, Beaker: Box, Bolt: Zap,
  Magnet: Compass, Orbit: Circle, Cube: Box, Codesandbox: Box,
  TestTube: Box, Droplet: Droplets, FlaskConical: Box, SquareDashed: Square,
};

/** Map converter id -> route path (add more as converters are built) */
const CONVERTER_ROUTES: Record<string, string> = {
  length: "/converter/length",
  "weight-mass": "/converter/weight",
};

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const CategoryCard = ({ id, name, description, icon }: CategoryCardProps) => {
  const IconComponent = iconMap[icon] || Ruler;
  const navigate = useNavigate();
  const route = CONVERTER_ROUTES[id];

  const handleClick = () => {
    if (route) navigate(route);
  };

  return (
    <button
      onClick={handleClick}
      className={`glass-card group rounded-xl p-5 text-left w-full transition-all duration-250 hover:glow-teal hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
        route ? "cursor-pointer" : "cursor-default"
      }`}
      aria-label={`Open ${name}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-200">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-tight group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;

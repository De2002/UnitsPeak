import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  resultCount?: number | null;
}

const SearchBar = ({ query, onChange, resultCount }: SearchBarProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
      <div className="relative max-w-2xl mx-auto">
        {/* Glow ring effect */}
        <div
          className={`absolute -inset-px rounded-2xl transition-opacity duration-300 pointer-events-none ${
            query ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, hsl(174 72% 45% / 0.35), hsl(195 80% 50% / 0.2), hsl(220 80% 70% / 0.15))",
            filter: "blur(4px)",
          }}
        />

        {/* Input container */}
        <div className="relative glass-card rounded-2xl flex items-center gap-3 px-4 py-3.5 border border-border/80 focus-within:border-primary/50 transition-colors duration-200">
          {/* Search icon */}
          <Search
            className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
              query ? "text-primary" : "text-muted-foreground"
            }`}
          />

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search converters… e.g. temperature, torque, voltage"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none min-w-0"
            aria-label="Search converters"
          />

          {/* Result badge */}
          {query && resultCount !== null && resultCount !== undefined && (
            <span className="flex-shrink-0 text-xs font-medium bg-primary/15 text-primary border border-primary/25 px-2.5 py-1 rounded-full">
              {resultCount} found
            </span>
          )}

          {/* Clear button */}
          {query && (
            <button
              onClick={() => onChange("")}
              aria-label="Clear search"
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-150"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Hint text */}
      <p className="text-center text-xs text-muted-foreground/50 mt-2.5">
        Search across 90+ converters by name or description
      </p>
    </div>
  );
};

export default SearchBar;

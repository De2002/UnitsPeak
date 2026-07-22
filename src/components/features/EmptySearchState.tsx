import { SearchX } from "lucide-react";

interface EmptySearchStateProps {
  query: string;
}

const EmptySearchState = ({ query }: EmptySearchStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      {/* Icon container */}
      <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-5">
        <SearchX className="w-8 h-8 text-muted-foreground/50" />
      </div>

      <h3 className="text-lg font-semibold text-foreground font-['Space_Grotesk'] mb-2">
        No converters found
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-1">
        No results for{" "}
        <span className="text-primary font-medium">"{query}"</span>.
      </p>
      <p className="text-xs text-muted-foreground/60 max-w-xs leading-relaxed">
        Try a different keyword — such as a unit name, physical quantity, or scientific domain.
      </p>

      {/* Suggestion chips */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {["length", "voltage", "torque", "pressure", "flux"].map((hint) => (
          <span
            key={hint}
            className="text-xs bg-muted/40 border border-border text-muted-foreground px-3 py-1.5 rounded-full"
          >
            Try "{hint}"
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmptySearchState;

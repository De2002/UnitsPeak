import CategoryCard from "@/components/features/CategoryCard";
import type { SearchResult } from "@/hooks/useSearch";

const sectionBadgeColors: Record<string, string> = {
  common: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  engineering: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  heat: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  fluids: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  light: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  electricity: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  magnetism: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  radiology: "bg-green-500/15 text-green-300 border-green-500/30",
  other: "bg-slate-500/15 text-slate-300 border-slate-500/30",
};

interface SearchResultsGridProps {
  results: SearchResult[];
  query: string;
}

const SearchResultsGrid = ({ results, query }: SearchResultsGridProps) => {
  return (
    <div className="mb-14">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-8 px-3 rounded-md border border-primary/30 bg-primary/10 text-primary text-xs font-semibold flex items-center">
          {results.length} {results.length === 1 ? "result" : "results"}
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-foreground font-['Space_Grotesk']">
          Results for{" "}
          <span className="text-gradient">"{query}"</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {results.map((result) => {
          const badgeClass =
            sectionBadgeColors[result.groupId] || sectionBadgeColors.other;
          return (
            <div key={`${result.groupId}-${result.id}`} className="relative">
              {/* Group label */}
              <span
                className={`absolute -top-2.5 right-3 z-10 text-[10px] font-medium border px-2 py-0.5 rounded-full ${badgeClass}`}
              >
                {result.groupName.replace(" Converters", "")}
              </span>
              <CategoryCard
                id={result.id}
                name={result.name}
                description={result.description}
                icon={result.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsGrid;

import CategoryCard from "@/components/features/CategoryCard";
import type { ConverterGroup } from "@/constants/categories";

interface CategorySectionProps {
  group: ConverterGroup;
}

const sectionAccents: Record<string, string> = {
  common: "from-teal-500/20 to-cyan-500/10",
  engineering: "from-blue-500/20 to-indigo-500/10",
  heat: "from-orange-500/20 to-red-500/10",
  fluids: "from-cyan-500/20 to-blue-500/10",
  light: "from-yellow-500/20 to-amber-500/10",
  electricity: "from-violet-500/20 to-purple-500/10",
  magnetism: "from-pink-500/20 to-rose-500/10",
  radiology: "from-green-500/20 to-emerald-500/10",
  other: "from-slate-500/20 to-zinc-500/10",
};

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

const CategorySection = ({ group }: CategorySectionProps) => {
  const accentClass = sectionAccents[group.id] || sectionAccents.other;
  const badgeClass = sectionBadgeColors[group.id] || sectionBadgeColors.other;

  return (
    <section className="mb-14">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`h-8 px-3 rounded-md border text-xs font-semibold flex items-center ${badgeClass}`}>
          {group.categories.length} converters
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-foreground font-['Space_Grotesk']">
          {group.groupName}
        </h2>
        <div className={`flex-1 h-px bg-gradient-to-r ${accentClass}`} />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {group.categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

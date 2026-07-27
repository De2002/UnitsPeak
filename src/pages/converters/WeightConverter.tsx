import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scale, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WeightConverterWidget from "@/components/features/WeightConverterWidget";
import ShareButton from "@/components/features/ShareButton";
import useSeoMeta from "@/hooks/useSeoMeta";
import {
  WEIGHT_UNIT_MAP,
  POPULAR_WEIGHT_PAIRS,
  buildWeightPairSlug,
  WEIGHT_UNITS,
} from "@/constants/weightUnits";

const WeightConverter = () => {
  const navigate = useNavigate();
  const [fromId, setFromId] = useState("kg");
  const [toId, setToId] = useState("lb");

  useSeoMeta({
    title: "Weight & Mass Converter – Convert kg, lb, oz, Tonnes & More | UnitsPeak",
    description:
      "Free online weight and mass converter. Convert between 70+ units including kilograms, pounds, ounces, tonnes, grams, stones, carats, and more. Instant, accurate results.",
    canonical: "https://www.unitspeak.com/converter/weight",
    keywords:
      "weight converter, mass converter, kg to lbs, pounds to kg, grams to ounces, unit conversion, online weight tool",
  });

  const handlePairChange = (from: string, to: string) => {
    setFromId(from);
    setToId(to);
  };

  const goToPair = (from: string, to: string) => {
    navigate(`/converter/weight/${buildWeightPairSlug(from, to)}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page hero */}
        <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2" aria-label="Breadcrumb">
              <a href="/" className="hover:text-primary transition-colors">UnitsPeak</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Weight & Mass Converter</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground leading-tight">
                  Weight & Mass Converter
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {WEIGHT_UNITS.length}+ units — kg, pounds, ounces, tonnes, carats &amp; more
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Converter + share */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Converter
            </h2>
            <ShareButton
              title="Weight & Mass Converter – UnitsPeak"
              text="Convert between 70+ weight and mass units instantly."
            />
          </div>

          <WeightConverterWidget
            initialFrom={fromId}
            initialTo={toId}
            onPairChange={handlePairChange}
          />

          {/* CTA to pair page */}
          {fromId && toId && (
            <div className="mt-3 flex justify-center sm:justify-end">
              <button
                onClick={() => goToPair(fromId, toId)}
                className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors"
              >
                Open dedicated page for {WEIGHT_UNIT_MAP[fromId]?.name} → {WEIGHT_UNIT_MAP[toId]?.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Popular pairs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              Popular Conversions
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {POPULAR_WEIGHT_PAIRS.map(({ from, to }) => {
              const fromUnit = WEIGHT_UNIT_MAP[from];
              const toUnit = WEIGHT_UNIT_MAP[to];
              if (!fromUnit || !toUnit) return null;
              return (
                <button
                  key={`${from}-${to}`}
                  onClick={() => goToPair(from, to)}
                  className="glass-card group rounded-xl px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-words">
                      {fromUnit.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors break-words">
                      {toUnit.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 mt-0.5">
                    {fromUnit.symbol} → {toUnit.symbol}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* All units table */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              All Weight & Mass Units
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/70 bg-muted/30">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/3">Unit</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/4">Symbol</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Group</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Kilograms equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {WEIGHT_UNITS.map((u) => (
                    <tr key={u.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-2.5 font-medium text-foreground">{u.name}</td>
                      <td className="px-5 py-2.5 text-primary/80 font-mono text-xs">{u.symbol}</td>
                      <td className="px-5 py-2.5 text-muted-foreground text-xs">{u.group}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-xs text-muted-foreground">
                        {u.toKg >= 1e15 || u.toKg < 1e-10
                          ? u.toKg.toExponential(4)
                          : u.toKg.toLocaleString("en-US", { maximumSignificantDigits: 8 })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WeightConverter;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Square, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaConverterWidget from "@/components/features/AreaConverterWidget";
import ShareButton from "@/components/features/ShareButton";
import useSeoMeta from "@/hooks/useSeoMeta";
import {
  AREA_UNIT_MAP,
  POPULAR_AREA_PAIRS,
  buildAreaPairSlug,
  convertArea,
  formatAreaResult,
} from "@/constants/areaUnits";

const REFERENCE_PAIRS: { from: string; to: string; values: number[] } = {
  from: "ac",
  to: "m2",
  values: [0.25, 0.5, 1, 2, 5, 10, 100, 640],
};

const AreaConverter = () => {
  const navigate = useNavigate();
  const [fromId, setFromId] = useState("ac");
  const [toId, setToId] = useState("m2");

  useSeoMeta({
    title: "Area Converter – Acres, Hectares, Square Feet & More | UnitsPeak",
    description:
      "Free online area converter. Instantly convert between acres, hectares, square feet, square meters, square miles, square yards, and many more. Accurate results with reference tables.",
    canonical: "https://www.unitspeak.com/converter/area",
    keywords:
      "area converter, acres to square feet, hectares to acres, square feet to square meters, square miles, area unit conversion",
  });

  const handlePairChange = (from: string, to: string) => {
    setFromId(from);
    setToId(to);
  };

  const goToPair = (from: string, to: string) => {
    navigate(`/converter/area/${buildAreaPairSlug(from, to)}`);
  };

  const fromUnit = AREA_UNIT_MAP[fromId];
  const toUnit = AREA_UNIT_MAP[toId];
  const tableValues = [0.01, 0.1, 0.25, 0.5, 1, 2, 5, 10, 100, 1000];

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
              <span className="text-foreground font-medium">Area Converter</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Square className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground leading-tight">
                  Area Converter
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Acres, Hectares, Square Feet, Square Meters &amp; more
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
              title="Area Converter – UnitsPeak"
              text="Convert between acres, hectares, square feet, square meters, and more instantly."
            />
          </div>

          <AreaConverterWidget
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
                Open dedicated page for {fromUnit?.name} → {toUnit?.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Reference table for current pair */}
        {fromUnit && toUnit && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
                {fromUnit.name} to {toUnit.name} Reference Table
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/70 bg-muted/30">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {fromUnit.name} ({fromUnit.symbol})
                      </th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {toUnit.name} ({toUnit.symbol})
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {tableValues.map((v) => (
                      <tr key={v} className="hover:bg-muted/20 transition-colors">
                        <td className="px-5 py-2.5 font-medium text-foreground">
                          {v} {fromUnit.symbol}
                        </td>
                        <td className="px-5 py-2.5 text-right text-primary font-semibold font-mono">
                          {formatAreaResult(convertArea(v, fromId, toId))} {toUnit.symbol}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Popular pairs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              Popular Conversions
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {POPULAR_AREA_PAIRS.map(({ from, to }) => {
              const f = AREA_UNIT_MAP[from];
              const t = AREA_UNIT_MAP[to];
              if (!f || !t) return null;
              return (
                <button
                  key={`${from}-${to}`}
                  onClick={() => goToPair(from, to)}
                  className="glass-card group rounded-xl px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-words">
                      {f.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors break-words">
                      {t.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 mt-0.5">
                    {f.symbol} → {t.symbol}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AreaConverter;

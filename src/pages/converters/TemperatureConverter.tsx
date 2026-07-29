import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Thermometer, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TemperatureConverterWidget from "@/components/features/TemperatureConverterWidget";
import ShareButton from "@/components/features/ShareButton";
import useSeoMeta from "@/hooks/useSeoMeta";
import {
  TEMPERATURE_UNIT_MAP,
  POPULAR_TEMPERATURE_PAIRS,
  buildTemperaturePairSlug,
  convertTemperature,
  formatTemperatureResult,
} from "@/constants/temperatureUnits";

const REFERENCE_VALUES: Record<string, number[]> = {
  C:  [-40, -20, 0, 20, 37, 100, 200, 500, 1000],
  F:  [-40, 0, 32, 68, 98.6, 212, 392, 932, 1832],
  K:  [0, 100, 200, 273.15, 300, 373.15, 500, 1000, 5778],
  R:  [0, 180, 360, 491.67, 540, 671.67, 900, 1800, 10400],
  Re: [-32, -16, 0, 16, 29.6, 80, 160, 400, 800],
};

const TemperatureConverter = () => {
  const navigate = useNavigate();
  const [fromId, setFromId] = useState("C");
  const [toId, setToId] = useState("F");

  useSeoMeta({
    title: "Temperature Converter – Celsius, Fahrenheit, Kelvin & More | UnitsPeak",
    description:
      "Free online temperature converter. Instantly convert between Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur. Accurate formulas, reference tables, and real-time results.",
    canonical: "https://www.unitspeak.com/converter/temperature",
    keywords:
      "temperature converter, celsius to fahrenheit, fahrenheit to celsius, kelvin converter, rankine converter, reaumur, unit conversion",
  });

  const handlePairChange = (from: string, to: string) => {
    setFromId(from);
    setToId(to);
  };

  const goToPair = (from: string, to: string) => {
    navigate(`/converter/temperature/${buildTemperaturePairSlug(from, to)}`);
  };

  const tableValues = REFERENCE_VALUES[fromId] ?? [-40, 0, 20, 37, 100, 200, 500, 1000];

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
              <span className="text-foreground font-medium">Temperature Converter</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Thermometer className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground leading-tight">
                  Temperature Converter
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Celsius, Fahrenheit, Kelvin, Rankine &amp; Réaumur
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
              title="Temperature Converter – UnitsPeak"
              text="Convert between Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur instantly."
            />
          </div>

          <TemperatureConverterWidget
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
                Open dedicated page for {TEMPERATURE_UNIT_MAP[fromId]?.name} → {TEMPERATURE_UNIT_MAP[toId]?.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Reference table for current pair */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              {TEMPERATURE_UNIT_MAP[fromId]?.name} to {TEMPERATURE_UNIT_MAP[toId]?.name} Reference Table
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/70 bg-muted/30">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {TEMPERATURE_UNIT_MAP[fromId]?.name} ({TEMPERATURE_UNIT_MAP[fromId]?.symbol})
                    </th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {TEMPERATURE_UNIT_MAP[toId]?.name} ({TEMPERATURE_UNIT_MAP[toId]?.symbol})
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {tableValues.map((v) => (
                    <tr key={v} className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-2.5 font-medium text-foreground">
                        {v} {TEMPERATURE_UNIT_MAP[fromId]?.symbol}
                      </td>
                      <td className="px-5 py-2.5 text-right text-primary font-semibold font-mono">
                        {formatTemperatureResult(convertTemperature(v, fromId, toId))} {TEMPERATURE_UNIT_MAP[toId]?.symbol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Popular pairs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              Popular Conversions
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {POPULAR_TEMPERATURE_PAIRS.map(({ from, to }) => {
              const fromUnit = TEMPERATURE_UNIT_MAP[from];
              const toUnit = TEMPERATURE_UNIT_MAP[to];
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
      </main>

      <Footer />
    </div>
  );
};

export default TemperatureConverter;

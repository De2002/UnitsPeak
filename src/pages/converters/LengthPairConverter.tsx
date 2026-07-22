import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Ruler, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LengthConverterWidget from "@/components/features/LengthConverterWidget";
import ConverterArticle from "@/components/features/ConverterArticle";
import ShareButton from "@/components/features/ShareButton";
import useSeoMeta from "@/hooks/useSeoMeta";
import {
  LENGTH_UNIT_MAP,
  POPULAR_LENGTH_PAIRS,
  buildPairSlug,
  parsePairSlug,
  convertLength,
  formatLengthResult,
  LENGTH_UNITS,
  LENGTH_UNITS_BY_GROUP,
} from "@/constants/lengthUnits";

/** Quick reference table: convert 1 unit to many common units */
const QUICK_REF_TARGETS = ["m", "km", "cm", "mm", "in", "ft", "yd", "mi", "nmi", "ly"];

const LengthPairConverter = () => {
  const { pair } = useParams<{ pair: string }>();
  const navigate = useNavigate();

  const parsed = pair ? parsePairSlug(pair) : null;
  const fromId = parsed?.fromId ?? "m";
  const toId = parsed?.toId ?? "ft";

  const fromUnit = LENGTH_UNIT_MAP[fromId];
  const toUnit = LENGTH_UNIT_MAP[toId];

  // If slug is invalid, redirect to base length page
  useEffect(() => {
    if (!fromUnit || !toUnit) {
      navigate("/converter/length", { replace: true });
    }
  }, [fromUnit, toUnit, navigate]);

  const [currentFrom, setCurrentFrom] = useState(fromId);
  const [currentTo, setCurrentTo] = useState(toId);

  // Sync state when URL changes
  useEffect(() => {
    setCurrentFrom(fromId);
    setCurrentTo(toId);
  }, [fromId, toId]);

  const handlePairChange = (from: string, to: string) => {
    setCurrentFrom(from);
    setCurrentTo(to);
    navigate(`/converter/length/${buildPairSlug(from, to)}`, { replace: true });
  };

  const fromName = fromUnit?.name ?? fromId;
  const toName = toUnit?.name ?? toId;

  useSeoMeta({
    title: `${fromName} to ${toName} Converter – Length Conversion | UnitsPeak`,
    description: `Instantly convert ${fromName} (${fromUnit?.symbol}) to ${toName} (${toUnit?.symbol}) online. Free, accurate, and real-time length conversion tool. 1 ${fromUnit?.symbol} = ${formatLengthResult(convertLength(1, fromId, toId))} ${toUnit?.symbol}.`,
    canonical: `https://www.unitspeak.com/converter/length/${pair}`,
    keywords: `${fromName.toLowerCase()} to ${toName.toLowerCase()}, ${fromUnit?.symbol} to ${toUnit?.symbol}, length converter, unit conversion, ${fromName.toLowerCase()} converter`,
  });

  if (!fromUnit || !toUnit) return null;

  // Conversion reference table rows
  const conversionTableValues = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2 flex-wrap" aria-label="Breadcrumb">
              <a href="/" className="hover:text-primary transition-colors">UnitsPeak</a>
              <ChevronRight className="w-3 h-3" />
              <Link to="/converter/length" className="hover:text-primary transition-colors">Length</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium truncate max-w-[160px] sm:max-w-none">{fromName} → {toName}</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Ruler className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground leading-tight">
                  {fromName} <span className="text-muted-foreground font-normal text-base">to</span> {toName}
                </h1>

              </div>
            </div>
          </div>
        </div>

        {/* Converter widget + share */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Converter
            </h2>
            <ShareButton
              title={`${fromName} to ${toName} Converter – UnitsPeak`}
              text={`Convert ${fromName} to ${toName} instantly. 1 ${fromUnit.symbol} = ${formatLengthResult(convertLength(1, fromId, toId))} ${toUnit.symbol}`}
            />
          </div>

          <LengthConverterWidget
            initialFrom={currentFrom}
            initialTo={currentTo}
            onPairChange={handlePairChange}
          />
        </div>

        {/* Conversion reference table */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              {fromName} to {toName} Conversion Table
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/70 bg-muted/30">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {fromName} ({fromUnit.symbol})
                    </th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {toName} ({toUnit.symbol})
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {conversionTableValues.map((v) => (
                    <tr key={v} className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-2.5 font-medium text-foreground">
                        {v.toLocaleString()} {fromUnit.symbol}
                      </td>
                      <td className="px-5 py-2.5 text-right text-primary font-semibold font-mono">
                        {formatLengthResult(convertLength(v, fromId, toId))} {toUnit.symbol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick reference — 1 unit in many others */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              1 {fromName} in Other Units
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {QUICK_REF_TARGETS.filter((id) => id !== fromId).map((targetId) => {
              const targetUnit = LENGTH_UNIT_MAP[targetId];
              if (!targetUnit) return null;
              const result = convertLength(1, fromId, targetId);
              return (
                <Link
                  key={targetId}
                  to={`/converter/length/${buildPairSlug(fromId, targetId)}`}
                  className="glass-card group rounded-xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 block"
                >
                  <p className="text-xs text-muted-foreground mb-1 group-hover:text-primary/70 transition-colors">
                    1 {fromUnit.symbol} →
                  </p>
                  <p className="text-sm font-semibold text-primary font-mono truncate">
                    {formatLengthResult(result)} {targetUnit.symbol}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">{targetUnit.name}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Convert from this unit to all other units — grouped */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              Convert {fromName} to Other Length Units
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="space-y-6">
            {Object.entries(LENGTH_UNITS_BY_GROUP).map(([group, units]) => {
              const targets = units.filter((u) => u.id !== fromId);
              if (targets.length === 0) return null;
              return (
                <div key={group}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
                    {group}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {targets.map((target) => (
                      <Link
                        key={target.id}
                        to={`/converter/length/${buildPairSlug(fromId, target.id)}`}
                        className={`glass-card group rounded-xl px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 block ${
                          target.id === toId
                            ? "border-primary/50 bg-primary/5"
                            : "hover:border-primary/40"
                        }`}
                      >
                        <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-snug break-words">
                          {fromUnit.symbol} → {target.symbol}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-0.5 truncate">{target.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Article area — CMS-managed */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <ConverterArticle fromName={fromName} toName={toName} />
        </div>

        {/* Related conversions */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">
              Related Conversions
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {POPULAR_LENGTH_PAIRS.filter(
              (p) => !(p.from === fromId && p.to === toId) && !(p.from === toId && p.to === fromId)
            )
              .slice(0, 8)
              .map(({ from, to }) => {
                const f = LENGTH_UNIT_MAP[from];
                const t = LENGTH_UNIT_MAP[to];
                if (!f || !t) return null;
                return (
                  <Link
                    key={`${from}-${to}`}
                    to={`/converter/length/${buildPairSlug(from, to)}`}
                    className="glass-card group rounded-xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 block"
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
                  </Link>
                );
              })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LengthPairConverter;

import { useState, useCallback, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";
import {
  AREA_UNITS,
  AREA_UNITS_BY_GROUP,
  AREA_UNIT_MAP,
  convertArea,
  formatAreaResult,
} from "@/constants/areaUnits";
import UnitCombobox from "@/components/features/UnitCombobox";

interface AreaConverterWidgetProps {
  initialFrom?: string;
  initialTo?: string;
  onPairChange?: (fromId: string, toId: string) => void;
}

const AreaConverterWidget = ({
  initialFrom = "ac",
  initialTo = "m2",
  onPairChange,
}: AreaConverterWidgetProps) => {
  const [fromId, setFromId] = useState(initialFrom);
  const [toId, setToId] = useState(initialTo);
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("");

  useEffect(() => {
    setFromId(initialFrom);
    setToId(initialTo);
  }, [initialFrom, initialTo]);

  useEffect(() => {
    const parsed = parseFloat(fromValue);
    if (!isNaN(parsed) && fromValue.trim() !== "") {
      setToValue(formatAreaResult(convertArea(parsed, fromId, toId)));
    } else {
      setToValue("");
    }
  }, [fromId, toId, fromValue]);

  const handleFromInput = useCallback((v: string) => {
    setFromValue(v);
  }, []);

  const handleSwap = () => {
    const newFrom = toId;
    const newTo = fromId;
    setFromId(newFrom);
    setToId(newTo);
    onPairChange?.(newFrom, newTo);
  };

  const handleFromUnitChange = (id: string) => {
    setFromId(id);
    onPairChange?.(id, toId);
  };

  const handleToUnitChange = (id: string) => {
    setToId(id);
    onPairChange?.(fromId, id);
  };

  const fromUnit = AREA_UNIT_MAP[fromId];
  const toUnit = AREA_UNIT_MAP[toId];

  return (
    <div className="py-2">
      {/* ── From ── */}
      <div className="space-y-2">
        <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          From
        </span>
        <div className="relative min-w-0">
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleFromInput(e.target.value)}
            placeholder="Enter value"
            className="w-full min-w-0 bg-background/60 border border-border focus:border-primary/60 rounded-xl px-4 py-3 text-base font-semibold text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors duration-200 pr-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          {fromUnit && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-primary/70 pointer-events-none">
              {fromUnit.symbol}
            </span>
          )}
        </div>
        <UnitCombobox
          value={fromId}
          units={AREA_UNITS}
          unitsByGroup={AREA_UNITS_BY_GROUP}
          onChange={handleFromUnitChange}
          exclude={toId}
          placeholder="Search area units…"
        />
      </div>

      {/* ── Swap button ── */}
      <div className="flex justify-center my-4">
        <button
          onClick={handleSwap}
          aria-label="Swap units"
          className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 hover:bg-primary/25 hover:border-primary/50 flex items-center justify-center text-primary transition-all duration-200"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── To ── */}
      <div className="space-y-2">
        <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          To
        </span>
        <UnitCombobox
          value={toId}
          units={AREA_UNITS}
          unitsByGroup={AREA_UNITS_BY_GROUP}
          onChange={handleToUnitChange}
          exclude={fromId}
          placeholder="Search area units…"
        />
      </div>

      {/* ── Result strip ── */}
      {fromUnit && toUnit && fromValue && toValue && (
        <div className="mt-5 rounded-2xl bg-primary/8 border border-primary/20 px-5 py-5 sm:px-7 sm:py-6 overflow-hidden">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Result
          </p>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0">
            <span className="text-xl sm:text-2xl font-bold text-foreground break-all min-w-0">
              {fromValue}
            </span>
            <span className="text-sm sm:text-base font-medium text-muted-foreground shrink-0">
              {fromUnit.name}
            </span>
          </div>
          <div className="text-lg text-muted-foreground/40 font-light my-1">=</div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight break-all min-w-0">
              {toValue}
            </span>
            <span className="text-sm sm:text-base font-medium text-muted-foreground shrink-0">
              {toUnit.name}
            </span>
          </div>
          <p className="text-xs text-muted-foreground/50 mt-3 font-mono break-all">
            1 {fromUnit.symbol} = {formatAreaResult(convertArea(1, fromId, toId))}{" "}
            {toUnit.symbol}&nbsp;·&nbsp;1 {toUnit.symbol} ={" "}
            {formatAreaResult(convertArea(1, toId, fromId))} {fromUnit.symbol}
          </p>
        </div>
      )}
    </div>
  );
};

export default AreaConverterWidget;

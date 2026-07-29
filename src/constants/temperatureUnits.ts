export interface TemperatureUnit {
  id: string;
  name: string;
  symbol: string;
  group: string;
}

export const TEMPERATURE_UNITS: TemperatureUnit[] = [
  { id: "K",  name: "Kelvin",     symbol: "K",  group: "Thermodynamic" },
  { id: "C",  name: "Celsius",    symbol: "°C", group: "Common" },
  { id: "F",  name: "Fahrenheit", symbol: "°F", group: "Common" },
  { id: "R",  name: "Rankine",    symbol: "°R", group: "Engineering" },
  { id: "Re", name: "Réaumur",    symbol: "°Re",group: "Historical" },
];

export const TEMPERATURE_UNIT_MAP: Record<string, TemperatureUnit> = Object.fromEntries(
  TEMPERATURE_UNITS.map((u) => [u.id, u])
);

export const TEMPERATURE_UNITS_BY_GROUP: Record<string, TemperatureUnit[]> = TEMPERATURE_UNITS.reduce(
  (acc, unit) => {
    if (!acc[unit.group]) acc[unit.group] = [];
    acc[unit.group].push(unit);
    return acc;
  },
  {} as Record<string, TemperatureUnit[]>
);

/** Convert a temperature value to Kelvin (base unit) */
function toKelvin(value: number, fromId: string): number {
  switch (fromId) {
    case "K":  return value;
    case "C":  return value + 273.15;
    case "F":  return (value - 32) * (5 / 9) + 273.15;
    case "R":  return value * (5 / 9);
    case "Re": return value * (5 / 4) + 273.15;
    default:   return NaN;
  }
}

/** Convert a Kelvin value to the target unit */
function fromKelvin(kelvin: number, toId: string): number {
  switch (toId) {
    case "K":  return kelvin;
    case "C":  return kelvin - 273.15;
    case "F":  return (kelvin - 273.15) * (9 / 5) + 32;
    case "R":  return kelvin * (9 / 5);
    case "Re": return (kelvin - 273.15) * (4 / 5);
    default:   return NaN;
  }
}

/** Convert temperature from one unit to another */
export function convertTemperature(value: number, fromId: string, toId: string): number {
  if (fromId === toId) return value;
  return fromKelvin(toKelvin(value, fromId), toId);
}

/** Smart number formatting for temperature */
export function formatTemperatureResult(value: number): string {
  if (!isFinite(value)) return "—";
  const abs = Math.abs(value);
  if (abs === 0) return "0";
  if (abs >= 1e10 || (abs < 1e-6 && abs > 0)) return value.toExponential(4);
  if (abs >= 1000) return parseFloat(value.toPrecision(10)).toLocaleString("en-US", { maximumFractionDigits: 6 });
  return parseFloat(value.toPrecision(10)).toString();
}

/** Parse URL slug e.g. "C-to-F" */
export function parseTemperaturePairSlug(slug: string): { fromId: string; toId: string } | null {
  const idx = slug.indexOf("-to-");
  if (idx < 0) return null;
  return { fromId: slug.slice(0, idx), toId: slug.slice(idx + 4) };
}

/** Build URL slug from two unit IDs */
export function buildTemperaturePairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

/** Popular conversion pairs */
export const POPULAR_TEMPERATURE_PAIRS: { from: string; to: string }[] = [
  { from: "C",  to: "F"  },
  { from: "F",  to: "C"  },
  { from: "C",  to: "K"  },
  { from: "K",  to: "C"  },
  { from: "F",  to: "K"  },
  { from: "K",  to: "F"  },
  { from: "C",  to: "R"  },
  { from: "R",  to: "C"  },
  { from: "C",  to: "Re" },
  { from: "Re", to: "C"  },
  { from: "K",  to: "R"  },
  { from: "R",  to: "K"  },
];

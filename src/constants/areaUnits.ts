export interface AreaUnit {
  id: string;
  name: string;
  symbol: string;
  toM2: number;      // 1 unit = X square meters (base unit)
  group: string;
}

export const AREA_UNITS: AreaUnit[] = [
  // SI / Metric
  { id: "m2",       name: "Square Meter",         symbol: "m²",    toM2: 1,                      group: "SI / Metric" },
  { id: "km2",      name: "Square Kilometer",      symbol: "km²",   toM2: 1e6,                    group: "SI / Metric" },
  { id: "hm2",      name: "Square Hectometer",     symbol: "hm²",   toM2: 10000,                  group: "SI / Metric" },
  { id: "dam2",     name: "Square Dekameter",      symbol: "dam²",  toM2: 100,                    group: "SI / Metric" },
  { id: "dm2",      name: "Square Decimeter",      symbol: "dm²",   toM2: 0.01,                   group: "SI / Metric" },
  { id: "cm2",      name: "Square Centimeter",     symbol: "cm²",   toM2: 0.0001,                 group: "SI / Metric" },
  { id: "mm2",      name: "Square Millimeter",     symbol: "mm²",   toM2: 1e-6,                   group: "SI / Metric" },
  { id: "um2",      name: "Square Micrometer",     symbol: "µm²",   toM2: 1e-12,                  group: "SI / Metric" },
  { id: "nm2",      name: "Square Nanometer",      symbol: "nm²",   toM2: 1e-18,                  group: "SI / Metric" },
  { id: "are",      name: "Are",                   symbol: "a",     toM2: 100,                    group: "SI / Metric" },
  { id: "barn",     name: "Barn",                  symbol: "b",     toM2: 1e-28,                  group: "SI / Metric" },
  // Land / Agriculture
  { id: "ha",       name: "Hectare",               symbol: "ha",    toM2: 10000,                  group: "Land / Agriculture" },
  { id: "ac",       name: "Acre",                  symbol: "ac",    toM2: 4046.8564224,            group: "Land / Agriculture" },
  { id: "ac-us",    name: "Acre (US Survey)",      symbol: "ac",    toM2: 4046.8726098743,         group: "Land / Agriculture" },
  { id: "rood",     name: "Rood",                  symbol: "rood",  toM2: 1011.7141056,            group: "Land / Agriculture" },
  { id: "sq-chain", name: "Square Chain",          symbol: "ch²",   toM2: 404.68564224,            group: "Land / Agriculture" },
  { id: "sq-rod",   name: "Square Rod",            symbol: "rd²",   toM2: 25.29285264,             group: "Land / Agriculture" },
  { id: "sq-rod-us",name: "Square Rod (US Survey)",symbol: "rd²",   toM2: 25.2929538117,           group: "Land / Agriculture" },
  { id: "sq-perch", name: "Square Perch",          symbol: "perch²",toM2: 25.29285264,             group: "Land / Agriculture" },
  { id: "sq-pole",  name: "Square Pole",           symbol: "pole²", toM2: 25.29285264,             group: "Land / Agriculture" },
  { id: "homestead",name: "Homestead",             symbol: "hs",    toM2: 647497.027584,           group: "Land / Agriculture" },
  { id: "section",  name: "Section",               symbol: "sec",   toM2: 2589988.110336,          group: "Land / Agriculture" },
  { id: "township", name: "Township",              symbol: "twp",   toM2: 93239571.972096,         group: "Land / Agriculture" },
  { id: "arpent",   name: "Arpent",                symbol: "arpent",toM2: 3418.8929236669,         group: "Land / Agriculture" },
  { id: "cuerda",   name: "Cuerda",                symbol: "cuerda",toM2: 3930.395625,             group: "Land / Agriculture" },
  { id: "plaza",    name: "Plaza",                 symbol: "plaza", toM2: 6400,                   group: "Land / Agriculture" },
  // Imperial / US Customary
  { id: "mi2",      name: "Square Mile",           symbol: "mi²",   toM2: 2589988.110336,          group: "Imperial / US" },
  { id: "mi2-us",   name: "Square Mile (US Survey)",symbol:"mi²",   toM2: 2589998.4703195,         group: "Imperial / US" },
  { id: "yd2",      name: "Square Yard",           symbol: "yd²",   toM2: 0.83612736,              group: "Imperial / US" },
  { id: "ft2",      name: "Square Foot",           symbol: "ft²",   toM2: 0.09290304,              group: "Imperial / US" },
  { id: "ft2-us",   name: "Square Foot (US Survey)",symbol:"ft²",   toM2: 0.0929034116,            group: "Imperial / US" },
  { id: "in2",      name: "Square Inch",           symbol: "in²",   toM2: 0.00064516,              group: "Imperial / US" },
  { id: "circ-in",  name: "Circular Inch",         symbol: "circ in",toM2: 0.0005067075,           group: "Imperial / US" },
  { id: "sq-mil",   name: "Square Mil",            symbol: "mil²",  toM2: 6.4516e-10,              group: "Imperial / US" },
  { id: "circ-mil", name: "Circular Mil",          symbol: "circ mil",toM2: 5.067074790975e-10,    group: "Imperial / US" },
  { id: "sabin",    name: "Sabin",                 symbol: "sabin", toM2: 0.09290304,              group: "Imperial / US" },
  // Traditional / Other
  { id: "varas-cas",name: "Varas Castellanas Cuad",symbol: "v²",    toM2: 0.698737,                group: "Traditional / Other" },
  { id: "varas-con",name: "Varas Conuqueras Cuad", symbol: "v²",    toM2: 6.288633,                group: "Traditional / Other" },
  { id: "elec-cs",  name: "Electron Cross Section",symbol: "σ",     toM2: 6.6524615999999e-29,     group: "Traditional / Other" },
];

/** O(1) lookup by id */
export const AREA_UNIT_MAP: Record<string, AreaUnit> = Object.fromEntries(
  AREA_UNITS.map((u) => [u.id, u])
);

/** Units grouped for combobox */
export const AREA_UNITS_BY_GROUP: Record<string, AreaUnit[]> = AREA_UNITS.reduce(
  (acc, unit) => {
    if (!acc[unit.group]) acc[unit.group] = [];
    acc[unit.group].push(unit);
    return acc;
  },
  {} as Record<string, AreaUnit[]>
);

/** Convert value from one unit to another via square-meter base */
export function convertArea(value: number, fromId: string, toId: string): number {
  const from = AREA_UNIT_MAP[fromId];
  const to = AREA_UNIT_MAP[toId];
  if (!from || !to) return NaN;
  return (value * from.toM2) / to.toM2;
}

/** Smart number formatting */
export function formatAreaResult(value: number): string {
  if (!isFinite(value)) return "—";
  if (value === 0) return "0";
  const abs = Math.abs(value);
  if (abs >= 1e15 || (abs < 1e-10 && abs > 0)) return value.toExponential(6);
  if (abs >= 1000) return value.toLocaleString("en-US", { maximumFractionDigits: 6 });
  if (abs >= 1) return parseFloat(value.toPrecision(10)).toString();
  return parseFloat(value.toPrecision(8)).toString();
}

/** Parse URL slug e.g. "ac-to-ft2" */
export function parseAreaPairSlug(slug: string): { fromId: string; toId: string } | null {
  const idx = slug.indexOf("-to-");
  if (idx < 0) return null;
  return { fromId: slug.slice(0, idx), toId: slug.slice(idx + 4) };
}

/** Build URL slug from two unit IDs */
export function buildAreaPairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

/** Popular conversion pairs */
export const POPULAR_AREA_PAIRS: { from: string; to: string }[] = [
  { from: "ac",    to: "ft2"  },
  { from: "ft2",   to: "ac"   },
  { from: "ha",    to: "ac"   },
  { from: "ac",    to: "ha"   },
  { from: "ft2",   to: "m2"   },
  { from: "m2",    to: "ft2"  },
  { from: "ac",    to: "mi2"  },
  { from: "mi2",   to: "ac"   },
  { from: "ft2",   to: "yd2"  },
  { from: "yd2",   to: "ft2"  },
  { from: "km2",   to: "m2"   },
  { from: "m2",    to: "km2"  },
  { from: "m2",    to: "cm2"  },
  { from: "cm2",   to: "m2"   },
  { from: "ha",    to: "m2"   },
  { from: "m2",    to: "ha"   },
  { from: "mi2",   to: "km2"  },
  { from: "km2",   to: "mi2"  },
  { from: "in2",   to: "cm2"  },
  { from: "cm2",   to: "in2"  },
  { from: "yd2",   to: "m2"   },
  { from: "m2",    to: "yd2"  },
  { from: "ac",    to: "m2"   },
  { from: "m2",    to: "ac"   },
];

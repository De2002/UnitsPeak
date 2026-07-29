export interface VolumeUnit {
  id: string;
  name: string;
  symbol: string;
  toM3: number;      // 1 unit = X cubic meters (base unit)
  group: string;
}

export const VOLUME_UNITS: VolumeUnit[] = [
  // SI / Metric
  { id: "m3",       name: "Cubic Meter",      symbol: "m³",    toM3: 1,                    group: "SI / Metric" },
  { id: "km3",      name: "Cubic Kilometer",  symbol: "km³",   toM3: 1e9,                  group: "SI / Metric" },
  { id: "cm3",      name: "Cubic Centimeter", symbol: "cm³",   toM3: 1e-6,                 group: "SI / Metric" },
  { id: "mm3",      name: "Cubic Millimeter", symbol: "mm³",   toM3: 1e-9,                 group: "SI / Metric" },
  { id: "dm3",      name: "Cubic Decimeter",  symbol: "dm³",   toM3: 0.001,                group: "SI / Metric" },
  { id: "L",        name: "Liter",            symbol: "L",     toM3: 0.001,                group: "SI / Metric" },
  { id: "mL",       name: "Milliliter",       symbol: "mL",    toM3: 1e-6,                 group: "SI / Metric" },
  { id: "EL",       name: "Exaliter",         symbol: "EL",    toM3: 1e15,                 group: "SI / Metric" },
  { id: "PL",       name: "Petaliter",        symbol: "PL",    toM3: 1e12,                 group: "SI / Metric" },
  { id: "TL",       name: "Teraliter",        symbol: "TL",    toM3: 1e9,                  group: "SI / Metric" },
  { id: "GL",       name: "Gigaliter",        symbol: "GL",    toM3: 1e6,                  group: "SI / Metric" },
  { id: "ML",       name: "Megaliter",        symbol: "ML",    toM3: 1000,                 group: "SI / Metric" },
  { id: "kL",       name: "Kiloliter",        symbol: "kL",    toM3: 1,                    group: "SI / Metric" },
  { id: "hL",       name: "Hectoliter",       symbol: "hL",    toM3: 0.1,                  group: "SI / Metric" },
  { id: "daL",      name: "Dekaliter",        symbol: "daL",   toM3: 0.01,                 group: "SI / Metric" },
  { id: "dL",       name: "Deciliter",        symbol: "dL",    toM3: 0.0001,               group: "SI / Metric" },
  { id: "cL",       name: "Centiliter",       symbol: "cL",    toM3: 1e-5,                 group: "SI / Metric" },
  { id: "uL",       name: "Microliter",       symbol: "µL",    toM3: 1e-9,                 group: "SI / Metric" },
  { id: "nL",       name: "Nanoliter",        symbol: "nL",    toM3: 1e-12,                group: "SI / Metric" },
  { id: "pL",       name: "Picoliter",        symbol: "pL",    toM3: 1e-15,               group: "SI / Metric" },
  { id: "fL",       name: "Femtoliter",       symbol: "fL",    toM3: 1e-18,               group: "SI / Metric" },
  { id: "aL",       name: "Attoliter",        symbol: "aL",    toM3: 1e-21,               group: "SI / Metric" },
  { id: "cc",       name: "Cubic Centimeter (cc)", symbol: "cc", toM3: 1e-6,              group: "SI / Metric" },
  // US Liquid
  { id: "gal-us",   name: "Gallon (US)",        symbol: "gal",   toM3: 0.0037854118,        group: "US Liquid" },
  { id: "qt-us",    name: "Quart (US)",          symbol: "qt",    toM3: 0.0009463529,        group: "US Liquid" },
  { id: "pt-us",    name: "Pint (US)",           symbol: "pt",    toM3: 0.0004731765,        group: "US Liquid" },
  { id: "cup-us",   name: "Cup (US)",            symbol: "cup",   toM3: 0.0002365882,        group: "US Liquid" },
  { id: "tbsp-us",  name: "Tablespoon (US)",     symbol: "tbsp",  toM3: 1.47868e-5,          group: "US Liquid" },
  { id: "tsp-us",   name: "Teaspoon (US)",       symbol: "tsp",   toM3: 4.92892159375e-6,    group: "US Liquid" },
  { id: "floz-us",  name: "Fluid Ounce (US)",    symbol: "fl oz", toM3: 2.95735e-5,          group: "US Liquid" },
  { id: "gill-us",  name: "Gill (US)",           symbol: "gi",    toM3: 0.0001182941,        group: "US Liquid" },
  { id: "bbl-us",   name: "Barrel (US)",         symbol: "bbl",   toM3: 0.1192404712,        group: "US Liquid" },
  { id: "bbl-oil",  name: "Barrel (Oil)",        symbol: "bbl",   toM3: 0.1589872949,        group: "US Liquid" },
  { id: "dssp-us",  name: "Dessertspoon (US)",   symbol: "dssp",  toM3: 9.8578431875e-6,     group: "US Liquid" },
  { id: "minim-us", name: "Minim (US)",          symbol: "min",   toM3: 6.1611519921875e-8,  group: "US Liquid" },
  { id: "dram-us",  name: "Dram (US)",           symbol: "dr",    toM3: 3.6966911953125e-6,  group: "US Liquid" },
  // UK Imperial
  { id: "gal-uk",   name: "Gallon (UK)",         symbol: "gal",   toM3: 0.00454609,          group: "UK Imperial" },
  { id: "qt-uk",    name: "Quart (UK)",          symbol: "qt",    toM3: 0.0011365225,        group: "UK Imperial" },
  { id: "pt-uk",    name: "Pint (UK)",           symbol: "pt",    toM3: 0.0005682613,        group: "UK Imperial" },
  { id: "cup-uk",   name: "Cup (UK)",            symbol: "cup",   toM3: 0.0002841306,        group: "UK Imperial" },
  { id: "floz-uk",  name: "Fluid Ounce (UK)",    symbol: "fl oz", toM3: 2.84131e-5,          group: "UK Imperial" },
  { id: "tbsp-uk",  name: "Tablespoon (UK)",     symbol: "tbsp",  toM3: 1.77582e-5,          group: "UK Imperial" },
  { id: "tsp-uk",   name: "Teaspoon (UK)",       symbol: "tsp",   toM3: 5.9193880208333e-6,  group: "UK Imperial" },
  { id: "gill-uk",  name: "Gill (UK)",           symbol: "gi",    toM3: 0.0001420653,        group: "UK Imperial" },
  { id: "bbl-uk",   name: "Barrel (UK)",         symbol: "bbl",   toM3: 0.16365924,          group: "UK Imperial" },
  { id: "dssp-uk",  name: "Dessertspoon (UK)",   symbol: "dssp",  toM3: 1.18388e-5,          group: "UK Imperial" },
  { id: "minim-uk", name: "Minim (UK)",          symbol: "min",   toM3: 5.9193880208333e-8,  group: "UK Imperial" },
  // Metric Cooking
  { id: "cup-met",  name: "Cup (Metric)",        symbol: "cup",   toM3: 0.00025,             group: "Metric Cooking" },
  { id: "tbsp-met", name: "Tablespoon (Metric)", symbol: "tbsp",  toM3: 1.5e-5,              group: "Metric Cooking" },
  { id: "tsp-met",  name: "Teaspoon (Metric)",   symbol: "tsp",   toM3: 5e-6,                group: "Metric Cooking" },
  // Imperial / US Customary Bulk
  { id: "mi3",      name: "Cubic Mile",          symbol: "mi³",   toM3: 4168181825.4406,     group: "Imperial / Bulk" },
  { id: "yd3",      name: "Cubic Yard",          symbol: "yd³",   toM3: 0.764554858,         group: "Imperial / Bulk" },
  { id: "ft3",      name: "Cubic Foot",          symbol: "ft³",   toM3: 0.0283168466,        group: "Imperial / Bulk" },
  { id: "in3",      name: "Cubic Inch",          symbol: "in³",   toM3: 1.63871e-5,          group: "Imperial / Bulk" },
  { id: "ton-reg",  name: "Ton Register",        symbol: "ton reg", toM3: 2.8316846592,      group: "Imperial / Bulk" },
  { id: "ccf",      name: "CCF",                 symbol: "CCF",   toM3: 2.8316846592,        group: "Imperial / Bulk" },
  { id: "hcf",      name: "Hundred-Cubic Foot",  symbol: "HCF",   toM3: 2.8316846592,        group: "Imperial / Bulk" },
  { id: "acre-ft",  name: "Acre-Foot",           symbol: "ac·ft", toM3: 1233.4818375475,     group: "Imperial / Bulk" },
  { id: "acre-ft-us",name:"Acre-Foot (US Survey)",symbol:"ac·ft", toM3: 1233.4892384682,     group: "Imperial / Bulk" },
  { id: "acre-in",  name: "Acre-Inch",           symbol: "ac·in", toM3: 102.790153129,       group: "Imperial / Bulk" },
  { id: "board-ft", name: "Board Foot",          symbol: "bf",    toM3: 0.0023597372,        group: "Imperial / Bulk" },
  // Timber / Wood
  { id: "cord",     name: "Cord",                symbol: "cd",    toM3: 3.6245563638,        group: "Timber / Wood" },
  { id: "dekastere",name: "Dekastere",           symbol: "dkst",  toM3: 10,                  group: "Timber / Wood" },
  { id: "stere",    name: "Stere",               symbol: "st",    toM3: 1,                   group: "Timber / Wood" },
  { id: "decistere",name: "Decistere",           symbol: "dst",   toM3: 0.1,                 group: "Timber / Wood" },
  // Wine / Cask
  { id: "tun",      name: "Tun",                 symbol: "tun",   toM3: 0.9539237696,        group: "Wine / Cask" },
  { id: "hogshead", name: "Hogshead",            symbol: "hhd",   toM3: 0.2384809424,        group: "Wine / Cask" },
  // Miscellaneous
  { id: "drop",     name: "Drop",                symbol: "drop",  toM3: 5e-8,                group: "Miscellaneous" },
  // Biblical
  { id: "cor",      name: "Cor (Biblical)",      symbol: "cor",   toM3: 0.22,                group: "Biblical" },
  { id: "homer",    name: "Homer (Biblical)",    symbol: "homer", toM3: 0.22,                group: "Biblical" },
  { id: "bath",     name: "Bath (Biblical)",     symbol: "bath",  toM3: 0.022,               group: "Biblical" },
  { id: "hin",      name: "Hin (Biblical)",      symbol: "hin",   toM3: 0.0036666667,        group: "Biblical" },
  { id: "cab",      name: "Cab (Biblical)",      symbol: "cab",   toM3: 0.0012222222,        group: "Biblical" },
  { id: "log-bib",  name: "Log (Biblical)",      symbol: "log",   toM3: 0.0003055556,        group: "Biblical" },
  // Earth
  { id: "earth-vol",name: "Earth's Volume",      symbol: "V⊕",    toM3: 1.083e21,            group: "Astronomical" },
];

/** O(1) lookup by id */
export const VOLUME_UNIT_MAP: Record<string, VolumeUnit> = Object.fromEntries(
  VOLUME_UNITS.map((u) => [u.id, u])
);

/** Units grouped for combobox */
export const VOLUME_UNITS_BY_GROUP: Record<string, VolumeUnit[]> = VOLUME_UNITS.reduce(
  (acc, unit) => {
    if (!acc[unit.group]) acc[unit.group] = [];
    acc[unit.group].push(unit);
    return acc;
  },
  {} as Record<string, VolumeUnit[]>
);

/** Convert value from one unit to another via cubic-meter base */
export function convertVolume(value: number, fromId: string, toId: string): number {
  const from = VOLUME_UNIT_MAP[fromId];
  const to = VOLUME_UNIT_MAP[toId];
  if (!from || !to) return NaN;
  return (value * from.toM3) / to.toM3;
}

/** Smart number formatting */
export function formatVolumeResult(value: number): string {
  if (!isFinite(value)) return "—";
  if (value === 0) return "0";
  const abs = Math.abs(value);
  if (abs >= 1e15 || (abs < 1e-10 && abs > 0)) return value.toExponential(6);
  if (abs >= 1000) return value.toLocaleString("en-US", { maximumFractionDigits: 6 });
  if (abs >= 1) return parseFloat(value.toPrecision(10)).toString();
  return parseFloat(value.toPrecision(8)).toString();
}

/** Parse URL slug e.g. "L-to-gal-us" */
export function parseVolumePairSlug(slug: string): { fromId: string; toId: string } | null {
  const idx = slug.indexOf("-to-");
  if (idx < 0) return null;
  return { fromId: slug.slice(0, idx), toId: slug.slice(idx + 4) };
}

/** Build URL slug from two unit IDs */
export function buildVolumePairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

/** Popular conversion pairs */
export const POPULAR_VOLUME_PAIRS: { from: string; to: string }[] = [
  { from: "L",       to: "gal-us" },
  { from: "gal-us",  to: "L" },
  { from: "mL",      to: "cup-us" },
  { from: "cup-us",  to: "mL" },
  { from: "tbsp-us", to: "cup-us" },
  { from: "cup-us",  to: "tbsp-us" },
  { from: "mL",      to: "L" },
  { from: "L",       to: "mL" },
  { from: "tsp-us",  to: "mL" },
  { from: "mL",      to: "tsp-us" },
  { from: "L",       to: "qt-us" },
  { from: "qt-us",   to: "L" },
  { from: "cup-us",  to: "L" },
  { from: "L",       to: "cup-us" },
  { from: "pt-us",   to: "mL" },
  { from: "mL",      to: "pt-us" },
  { from: "cc",      to: "mL" },
  { from: "mL",      to: "cc" },
  { from: "cc",      to: "floz-us" },
  { from: "floz-us", to: "cc" },
  { from: "ft3",     to: "gal-us" },
  { from: "gal-us",  to: "ft3" },
  { from: "ft3",     to: "yd3" },
  { from: "yd3",     to: "ft3" },
  { from: "in3",     to: "gal-us" },
  { from: "gal-us",  to: "in3" },
  { from: "in3",     to: "L" },
  { from: "L",       to: "in3" },
  { from: "cup-us",  to: "qt-us" },
  { from: "qt-us",   to: "cup-us" },
  { from: "cup-us",  to: "gal-us" },
  { from: "gal-us",  to: "cup-us" },
  { from: "pt-us",   to: "cup-us" },
  { from: "cup-us",  to: "pt-us" },
  { from: "qt-us",   to: "gal-us" },
  { from: "gal-us",  to: "qt-us" },
  { from: "gal-us",  to: "mL" },
  { from: "mL",      to: "gal-us" },
  { from: "L",       to: "floz-us" },
  { from: "floz-us", to: "L" },
  { from: "pt-us",   to: "L" },
  { from: "L",       to: "pt-us" },
  { from: "pt-us",   to: "gal-us" },
  { from: "gal-us",  to: "pt-us" },
];

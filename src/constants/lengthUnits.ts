export interface LengthUnit {
  id: string;           // unique slug used in URL
  name: string;         // display name
  symbol: string;       // symbol shown next to values
  toMeters: number;     // 1 unit = X meters
  group: string;        // grouping label for optgroup
}

export const LENGTH_UNITS: LengthUnit[] = [
  // SI / Metric
  { id: "m",        name: "Meter",       symbol: "m",   toMeters: 1,                     group: "SI / Metric" },
  { id: "km",       name: "Kilometer",   symbol: "km",  toMeters: 1000,                  group: "SI / Metric" },
  { id: "hm",       name: "Hectometer",  symbol: "hm",  toMeters: 100,                   group: "SI / Metric" },
  { id: "dam",      name: "Dekameter",   symbol: "dam", toMeters: 10,                    group: "SI / Metric" },
  { id: "dm",       name: "Decimeter",   symbol: "dm",  toMeters: 0.1,                   group: "SI / Metric" },
  { id: "cm",       name: "Centimeter",  symbol: "cm",  toMeters: 0.01,                  group: "SI / Metric" },
  { id: "mm",       name: "Millimeter",  symbol: "mm",  toMeters: 0.001,                 group: "SI / Metric" },
  { id: "um",       name: "Micrometer",  symbol: "µm",  toMeters: 1e-6,                  group: "SI / Metric" },
  { id: "nm",       name: "Nanometer",   symbol: "nm",  toMeters: 1e-9,                  group: "SI / Metric" },
  { id: "pm",       name: "Picometer",   symbol: "pm",  toMeters: 1e-12,                 group: "SI / Metric" },
  { id: "fm",       name: "Femtometer",  symbol: "fm",  toMeters: 1e-15,                 group: "SI / Metric" },
  { id: "am",       name: "Attometer",   symbol: "am",  toMeters: 1e-18,                 group: "SI / Metric" },
  { id: "Em",       name: "Exameter",    symbol: "Em",  toMeters: 1e18,                  group: "SI / Metric" },
  { id: "Pm",       name: "Petameter",   symbol: "Pm",  toMeters: 1e15,                  group: "SI / Metric" },
  { id: "Tm",       name: "Terameter",   symbol: "Tm",  toMeters: 1e12,                  group: "SI / Metric" },
  { id: "Gm",       name: "Gigameter",   symbol: "Gm",  toMeters: 1e9,                   group: "SI / Metric" },
  { id: "Mm",       name: "Megameter",   symbol: "Mm",  toMeters: 1e6,                   group: "SI / Metric" },
  { id: "micron",   name: "Micron",      symbol: "µ",   toMeters: 1e-6,                  group: "SI / Metric" },
  // Imperial / US
  { id: "mi",       name: "Mile",                   symbol: "mi",        toMeters: 1609.344,            group: "Imperial / US" },
  { id: "mi-statute", name: "Mile (Statute)",       symbol: "mi",        toMeters: 1609.3472186944,     group: "Imperial / US" },
  { id: "mi-us",    name: "Mile (US Survey)",       symbol: "mi",        toMeters: 1609.3472186944,     group: "Imperial / US" },
  { id: "yd",       name: "Yard",                   symbol: "yd",        toMeters: 0.9144,              group: "Imperial / US" },
  { id: "ft",       name: "Foot",                   symbol: "ft",        toMeters: 0.3048,              group: "Imperial / US" },
  { id: "ft-us",    name: "Foot (US Survey)",       symbol: "ft",        toMeters: 0.3048006096,        group: "Imperial / US" },
  { id: "in",       name: "Inch",                   symbol: "in",        toMeters: 0.0254,              group: "Imperial / US" },
  { id: "in-us",    name: "Inch (US Survey)",       symbol: "in",        toMeters: 0.0254000508,        group: "Imperial / US" },
  { id: "kyd",      name: "Kiloyard",               symbol: "kyd",       toMeters: 914.4,               group: "Imperial / US" },
  { id: "fur",      name: "Furlong",                symbol: "fur",       toMeters: 201.168,             group: "Imperial / US" },
  { id: "fur-us",   name: "Furlong (US Survey)",    symbol: "fur",       toMeters: 201.1684023368,      group: "Imperial / US" },
  { id: "ch",       name: "Chain",                  symbol: "ch",        toMeters: 20.1168,             group: "Imperial / US" },
  { id: "ch-us",    name: "Chain (US Survey)",      symbol: "ch",        toMeters: 20.1168402337,       group: "Imperial / US" },
  { id: "rd",       name: "Rod",                    symbol: "rd",        toMeters: 5.0292,              group: "Imperial / US" },
  { id: "rd-us",    name: "Rod (US Survey)",        symbol: "rd",        toMeters: 5.0292100584,        group: "Imperial / US" },
  { id: "fath",     name: "Fathom",                 symbol: "fath",      toMeters: 1.8288,              group: "Imperial / US" },
  { id: "fath-us",  name: "Fathom (US Survey)",     symbol: "fath",      toMeters: 1.8288036576,        group: "Imperial / US" },
  { id: "li",       name: "Link",                   symbol: "li",        toMeters: 0.201168,            group: "Imperial / US" },
  { id: "li-us",    name: "Link (US Survey)",       symbol: "li",        toMeters: 0.2011684023,        group: "Imperial / US" },
  { id: "hand",     name: "Hand",                   symbol: "hand",      toMeters: 0.1016,              group: "Imperial / US" },
  { id: "mil",      name: "Mil / Thou",             symbol: "mil",       toMeters: 2.54e-5,             group: "Imperial / US" },
  { id: "microinch",name: "Microinch",              symbol: "µin",       toMeters: 2.54e-8,             group: "Imperial / US" },
  { id: "caliber",  name: "Caliber",                symbol: "cl",        toMeters: 0.000254,            group: "Imperial / US" },
  { id: "barleycorn",name: "Barleycorn",            symbol: "bc",        toMeters: 0.0084666667,        group: "Imperial / US" },
  // Nautical
  { id: "nmi",          name: "Nautical Mile (International)", symbol: "NM",   toMeters: 1852,              group: "Nautical" },
  { id: "nmi-uk",       name: "Nautical Mile (UK)",            symbol: "NM",   toMeters: 1853.184,          group: "Nautical" },
  { id: "lea",          name: "League",                        symbol: "lea",  toMeters: 4828.032,          group: "Nautical" },
  { id: "lea-naut-uk",  name: "Nautical League (UK)",          symbol: "lea",  toMeters: 5559.552,          group: "Nautical" },
  { id: "lea-naut-int", name: "Nautical League (Int.)",        symbol: "lea",  toMeters: 5556,              group: "Nautical" },
  { id: "lea-stat",     name: "League (Statute)",              symbol: "lea",  toMeters: 4828.0416560833,   group: "Nautical" },
  // Astronomical
  { id: "ly",    name: "Light Year",          symbol: "ly",   toMeters: 9.46073047258e15,      group: "Astronomical" },
  { id: "pc",    name: "Parsec",              symbol: "pc",   toMeters: 3.08567758128e16,      group: "Astronomical" },
  { id: "kpc",   name: "Kiloparsec",          symbol: "kpc",  toMeters: 3.08567758128e19,      group: "Astronomical" },
  { id: "Mpc",   name: "Megaparsec",          symbol: "Mpc",  toMeters: 3.08567758128e22,      group: "Astronomical" },
  { id: "AU",    name: "Astronomical Unit",   symbol: "AU",   toMeters: 149597870691,          group: "Astronomical" },
  { id: "sun-r", name: "Sun's Radius",        symbol: "R☉",   toMeters: 696000000,             group: "Astronomical" },
  { id: "earth-eq", name: "Earth's Equatorial Radius", symbol: "R⊕", toMeters: 6378160,        group: "Astronomical" },
  { id: "earth-pol", name: "Earth's Polar Radius",     symbol: "R⊕", toMeters: 6356776.9999999, group: "Astronomical" },
  { id: "earth-sun", name: "Earth's Distance from Sun",symbol: "d",  toMeters: 149600000000,    group: "Astronomical" },
  // Cloth / Textile
  { id: "ell",     name: "Ell",          symbol: "ell",  toMeters: 1.143,    group: "Cloth / Textile" },
  { id: "cubit-uk",name: "Cubit (UK)",   symbol: "cubit",toMeters: 0.4572,   group: "Cloth / Textile" },
  { id: "span",    name: "Span (Cloth)", symbol: "span", toMeters: 0.2286,   group: "Cloth / Textile" },
  { id: "finger",  name: "Finger (Cloth)",symbol: "finger",toMeters: 0.1143, group: "Cloth / Textile" },
  { id: "nail",    name: "Nail (Cloth)", symbol: "nail", toMeters: 0.05715,  group: "Cloth / Textile" },
  // Typography / Print
  { id: "pica",    name: "Pica",   symbol: "pica",  toMeters: 0.0042333333, group: "Typography" },
  { id: "point",   name: "Point",  symbol: "pt",    toMeters: 0.0003527778, group: "Typography" },
  { id: "twip",    name: "Twip",   symbol: "twip",  toMeters: 1.76389e-5,   group: "Typography" },
  { id: "cin",     name: "Centiinch", symbol: "cin", toMeters: 0.000254,    group: "Typography" },
  // Atomic / Physics
  { id: "angstrom",   name: "Angstrom",                    symbol: "Å",     toMeters: 1e-10,              group: "Atomic / Physics" },
  { id: "au-length",  name: "A.U. of Length (Bohr)",       symbol: "a.u.",  toMeters: 5.29177249e-11,     group: "Atomic / Physics" },
  { id: "bohr",       name: "Bohr Radius",                 symbol: "b",     toMeters: 5.29177249e-11,     group: "Atomic / Physics" },
  { id: "xunit",      name: "X-Unit",                      symbol: "X",     toMeters: 1.00208e-13,        group: "Atomic / Physics" },
  { id: "fermi",      name: "Fermi",                       symbol: "F",     toMeters: 1e-15,              group: "Atomic / Physics" },
  { id: "e-radius",   name: "Electron Radius (Classical)", symbol: "re",    toMeters: 2.81794092e-15,     group: "Atomic / Physics" },
  { id: "planck",     name: "Planck Length",               symbol: "lP",    toMeters: 1.61605e-35,        group: "Atomic / Physics" },
  // Historical / Traditional
  { id: "perch",      name: "Perch",             symbol: "perch",    toMeters: 5.0292,         group: "Historical" },
  { id: "pole",       name: "Pole",              symbol: "pole",     toMeters: 5.0292,         group: "Historical" },
  { id: "rope",       name: "Rope",              symbol: "rope",     toMeters: 6.096,          group: "Historical" },
  { id: "arpent",     name: "Arpent",            symbol: "arpent",   toMeters: 58.5216,        group: "Historical" },
  { id: "aln",        name: "Aln",               symbol: "aln",      toMeters: 0.5937777778,   group: "Historical" },
  { id: "famn",       name: "Famn",              symbol: "famn",     toMeters: 1.7813333333,   group: "Historical" },
  { id: "ken",        name: "Ken",               symbol: "ken",      toMeters: 2.11836,        group: "Historical" },
  { id: "archin",     name: "Russian Archin",    symbol: "archin",   toMeters: 0.7112,         group: "Historical" },
  { id: "roman-actus",name: "Roman Actus",       symbol: "actus",    toMeters: 35.47872,       group: "Historical" },
  { id: "roman-mile", name: "Mile (Roman)",      symbol: "mi",       toMeters: 1479.804,       group: "Historical" },
  { id: "vara-tarea", name: "Vara de Tarea",     symbol: "vara",     toMeters: 2.505456,       group: "Historical" },
  { id: "vara-conuq", name: "Vara Conuquera",    symbol: "vara",     toMeters: 2.505456,       group: "Historical" },
  { id: "vara-cast",  name: "Vara Castellana",   symbol: "vara",     toMeters: 0.835152,       group: "Historical" },
  { id: "cubit-greek",name: "Cubit (Greek)",     symbol: "cubit",    toMeters: 0.462788,       group: "Historical" },
  { id: "long-reed",  name: "Long Reed",         symbol: "reed",     toMeters: 3.2004,         group: "Historical" },
  { id: "reed",       name: "Reed",              symbol: "reed",     toMeters: 2.7432,         group: "Historical" },
  { id: "long-cubit", name: "Long Cubit",        symbol: "cubit",    toMeters: 0.5334,         group: "Historical" },
  { id: "handbreadth",name: "Handbreadth",        symbol: "hb",       toMeters: 0.0762,         group: "Historical" },
  { id: "fingerbreadth",name:"Fingerbreadth",     symbol: "fb",       toMeters: 0.01905,        group: "Historical" },
];

/** Map from unit id -> LengthUnit for O(1) lookup */
export const LENGTH_UNIT_MAP: Record<string, LengthUnit> = Object.fromEntries(
  LENGTH_UNITS.map((u) => [u.id, u])
);

/** Units grouped for <optgroup> rendering */
export const LENGTH_UNITS_BY_GROUP: Record<string, LengthUnit[]> = LENGTH_UNITS.reduce(
  (acc, unit) => {
    if (!acc[unit.group]) acc[unit.group] = [];
    acc[unit.group].push(unit);
    return acc;
  },
  {} as Record<string, LengthUnit[]>
);

/** Convert a value from one unit to another */
export function convertLength(value: number, fromId: string, toId: string): number {
  const from = LENGTH_UNIT_MAP[fromId];
  const to = LENGTH_UNIT_MAP[toId];
  if (!from || !to) return NaN;
  const inMeters = value * from.toMeters;
  return inMeters / to.toMeters;
}

/** Format a number for display — smart precision */
export function formatLengthResult(value: number): string {
  if (!isFinite(value)) return "—";
  if (value === 0) return "0";
  const abs = Math.abs(value);
  if (abs >= 1e15 || (abs < 1e-10 && abs > 0)) {
    return value.toExponential(6);
  }
  if (abs >= 1000) return value.toLocaleString("en-US", { maximumFractionDigits: 6 });
  if (abs >= 1) return parseFloat(value.toPrecision(10)).toString();
  return parseFloat(value.toPrecision(8)).toString();
}

/** Derive from/to unit IDs from a URL slug like "cm-to-inches" */
export function parsePairSlug(slug: string): { fromId: string; toId: string } | null {
  const idx = slug.indexOf("-to-");
  if (idx < 0) return null;
  return { fromId: slug.slice(0, idx), toId: slug.slice(idx + 4) };
}

/** Build a URL slug from two unit IDs */
export function buildPairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

/** Commonly-paired "quick links" shown on the main length page */
export const POPULAR_LENGTH_PAIRS: { from: string; to: string }[] = [
  { from: "cm", to: "in" },
  { from: "m", to: "ft" },
  { from: "km", to: "mi" },
  { from: "in", to: "cm" },
  { from: "ft", to: "m" },
  { from: "mi", to: "km" },
  { from: "mm", to: "in" },
  { from: "m", to: "yd" },
  { from: "ly", to: "km" },
  { from: "AU", to: "km" },
  { from: "nm", to: "um" },
  { from: "ft", to: "in" },
];

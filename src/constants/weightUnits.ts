export interface WeightUnit {
  id: string;
  name: string;
  symbol: string;
  toKg: number;      // 1 unit = X kilograms
  group: string;
}

export const WEIGHT_UNITS: WeightUnit[] = [
  // SI / Metric
  { id: "kg",    name: "Kilogram",         symbol: "kg",   toKg: 1,              group: "SI / Metric" },
  { id: "g",     name: "Gram",             symbol: "g",    toKg: 0.001,          group: "SI / Metric" },
  { id: "mg",    name: "Milligram",        symbol: "mg",   toKg: 1e-6,           group: "SI / Metric" },
  { id: "ug",    name: "Microgram",        symbol: "µg",   toKg: 1e-9,           group: "SI / Metric" },
  { id: "ng",    name: "Nanogram",         symbol: "ng",   toKg: 1e-12,          group: "SI / Metric" },
  { id: "pg",    name: "Picogram",         symbol: "pg",   toKg: 1e-15,          group: "SI / Metric" },
  { id: "fg",    name: "Femtogram",        symbol: "fg",   toKg: 1e-18,          group: "SI / Metric" },
  { id: "ag",    name: "Attogram",         symbol: "ag",   toKg: 1e-21,          group: "SI / Metric" },
  { id: "dg",    name: "Decigram",         symbol: "dg",   toKg: 0.0001,         group: "SI / Metric" },
  { id: "cg",    name: "Centigram",        symbol: "cg",   toKg: 1e-5,           group: "SI / Metric" },
  { id: "dag",   name: "Dekagram",         symbol: "dag",  toKg: 0.01,           group: "SI / Metric" },
  { id: "hg",    name: "Hectogram",        symbol: "hg",   toKg: 0.1,            group: "SI / Metric" },
  { id: "Mg",    name: "Megagram",         symbol: "Mg",   toKg: 1000,           group: "SI / Metric" },
  { id: "Gg",    name: "Gigagram",         symbol: "Gg",   toKg: 1e6,            group: "SI / Metric" },
  { id: "Tg",    name: "Teragram",         symbol: "Tg",   toKg: 1e9,            group: "SI / Metric" },
  { id: "Pg",    name: "Petagram",         symbol: "Pg",   toKg: 1e12,           group: "SI / Metric" },
  { id: "Eg",    name: "Exagram",          symbol: "Eg",   toKg: 1e15,           group: "SI / Metric" },
  { id: "t",     name: "Tonne",            symbol: "t",    toKg: 1000,           group: "SI / Metric" },
  { id: "t-metric", name: "Ton (Metric)",  symbol: "t",    toKg: 1000,           group: "SI / Metric" },
  { id: "kt",    name: "Kiloton (Metric)", symbol: "kt",   toKg: 1e6,            group: "SI / Metric" },
  { id: "cwt-metric", name: "Quintal (Metric)", symbol: "cwt", toKg: 100,        group: "SI / Metric" },
  { id: "gamma", name: "Gamma",            symbol: "γ",    toKg: 1e-9,           group: "SI / Metric" },
  // Imperial / US
  { id: "lb",    name: "Pound",            symbol: "lbs",  toKg: 0.45359237,     group: "Imperial / US" },
  { id: "oz",    name: "Ounce",            symbol: "oz",   toKg: 0.0283495231,   group: "Imperial / US" },
  { id: "ton-us",name: "Ton (Short)",      symbol: "ton",  toKg: 907.18474,      group: "Imperial / US" },
  { id: "kip",   name: "Kilopound",        symbol: "kip",  toKg: 453.59237,      group: "Imperial / US" },
  { id: "slug",  name: "Slug",             symbol: "slug", toKg: 14.5939029372,  group: "Imperial / US" },
  { id: "pdl",   name: "Poundal",          symbol: "pdl",  toKg: 0.0140867196,   group: "Imperial / US" },
  { id: "pfsf",  name: "Pound-force sq. sec./ft", symbol: "lbf·s²/ft", toKg: 14.5939029372, group: "Imperial / US" },
  { id: "kfsm",  name: "Kg-force sq. sec./m", symbol: "kgf·s²/m", toKg: 9.80665, group: "Imperial / US" },
  { id: "cwt-us",name: "Hundredweight (US)",symbol: "cwt", toKg: 45.359237,      group: "Imperial / US" },
  { id: "qr-us", name: "Quarter (US)",     symbol: "qr",   toKg: 11.33980925,    group: "Imperial / US" },
  { id: "stone-us", name: "Stone (US)",    symbol: "st",   toKg: 5.669904625,    group: "Imperial / US" },
  { id: "at-us", name: "Ton (Assay, US)",  symbol: "AT",   toKg: 0.02916667,     group: "Imperial / US" },
  // UK / British
  { id: "ton-uk",    name: "Ton (Long)",       symbol: "ton",  toKg: 1016.0469088,   group: "UK / British" },
  { id: "cwt-uk",    name: "Hundredweight (UK)",symbol: "cwt",  toKg: 50.80234544,    group: "UK / British" },
  { id: "qr-uk",     name: "Quarter (UK)",      symbol: "qr",   toKg: 12.70058636,    group: "UK / British" },
  { id: "stone-uk",  name: "Stone (UK)",         symbol: "st",   toKg: 6.35029318,     group: "UK / British" },
  { id: "at-uk",     name: "Ton (Assay, UK)",    symbol: "AT",   toKg: 0.0326666667,   group: "UK / British" },
  // Troy / Apothecary
  { id: "lb-troy",  name: "Pound (Troy)",        symbol: "lb t",  toKg: 0.3732417216,  group: "Troy / Apothecary" },
  { id: "oz-troy",  name: "Ounce (Troy)",         symbol: "oz t",  toKg: 0.0311034768,  group: "Troy / Apothecary" },
  { id: "pwt",      name: "Pennyweight",           symbol: "dwt",   toKg: 0.0015551738,  group: "Troy / Apothecary" },
  { id: "s-ap",     name: "Scruple (Apothecary)", symbol: "s.ap",  toKg: 0.0012959782,  group: "Troy / Apothecary" },
  { id: "gr",       name: "Grain",                 symbol: "gr",    toKg: 6.47989e-5,    group: "Troy / Apothecary" },
  { id: "car",      name: "Carat",                 symbol: "ct",    toKg: 0.0002,         group: "Troy / Apothecary" },
  // Atomic / Physics
  { id: "u",         name: "Atomic Mass Unit",    symbol: "u",   toKg: 1.6605402e-27,   group: "Atomic / Physics" },
  { id: "dalton",    name: "Dalton",              symbol: "Da",  toKg: 1.66053e-27,     group: "Atomic / Physics" },
  { id: "planck-m",  name: "Planck Mass",         symbol: "mₚ",  toKg: 2.17671e-8,      group: "Atomic / Physics" },
  { id: "e-mass",    name: "Electron Mass (Rest)",symbol: "mₑ",  toKg: 9.1093897e-31,   group: "Atomic / Physics" },
  { id: "muon-m",    name: "Muon Mass",            symbol: "mμ",  toKg: 1.8835327e-28,   group: "Atomic / Physics" },
  { id: "proton-m",  name: "Proton Mass",          symbol: "mₚ",  toKg: 1.6726231e-27,   group: "Atomic / Physics" },
  { id: "neutron-m", name: "Neutron Mass",         symbol: "mₙ",  toKg: 1.6749286e-27,   group: "Atomic / Physics" },
  { id: "deuteron-m",name: "Deuteron Mass",        symbol: "mᴅ",  toKg: 3.343586e-27,    group: "Atomic / Physics" },
  // Astronomical
  { id: "earth-m",   name: "Earth's Mass",         symbol: "M⊕",  toKg: 5.976e24,        group: "Astronomical" },
  { id: "sun-m",     name: "Sun's Mass",            symbol: "M☉",  toKg: 2e30,            group: "Astronomical" },
  // Biblical
  { id: "talent-heb",  name: "Talent (Biblical Hebrew)",  symbol: "talent",  toKg: 34.2,       group: "Biblical" },
  { id: "mina-heb",    name: "Mina (Biblical Hebrew)",    symbol: "mina",    toKg: 0.57,        group: "Biblical" },
  { id: "shekel-heb",  name: "Shekel (Biblical Hebrew)",  symbol: "shekel",  toKg: 0.0114,      group: "Biblical" },
  { id: "bekan-heb",   name: "Bekan (Biblical Hebrew)",   symbol: "bekan",   toKg: 0.0057,      group: "Biblical" },
  { id: "gerah-heb",   name: "Gerah (Biblical Hebrew)",   symbol: "gerah",   toKg: 0.00057,     group: "Biblical" },
  { id: "talent-gk",   name: "Talent (Biblical Greek)",   symbol: "talent",  toKg: 20.4,        group: "Biblical" },
  { id: "mina-gk",     name: "Mina (Biblical Greek)",     symbol: "mina",    toKg: 0.34,        group: "Biblical" },
  { id: "tetrad-gk",   name: "Tetradrachma (Biblical Greek)", symbol: "τ",  toKg: 0.0136,      group: "Biblical" },
  { id: "didrachma-gk",name: "Didrachma (Biblical Greek)", symbol: "δ",     toKg: 0.0068,      group: "Biblical" },
  { id: "drachma-gk",  name: "Drachma (Biblical Greek)",  symbol: "dr",     toKg: 0.0034,      group: "Biblical" },
  { id: "denarius-rom",name: "Denarius (Biblical Roman)",  symbol: "X",      toKg: 0.00385,     group: "Biblical" },
  { id: "assarion-rom",name: "Assarion (Biblical Roman)",  symbol: "As",     toKg: 0.000240625, group: "Biblical" },
  { id: "quadrans-rom",name: "Quadrans (Biblical Roman)",  symbol: "Q",      toKg: 6.01563e-5,  group: "Biblical" },
  { id: "lepton-rom",  name: "Lepton (Biblical Roman)",    symbol: "Λ",      toKg: 3.00781e-5,  group: "Biblical" },
];

/** Map from unit id -> WeightUnit for O(1) lookup */
export const WEIGHT_UNIT_MAP: Record<string, WeightUnit> = Object.fromEntries(
  WEIGHT_UNITS.map((u) => [u.id, u])
);

/** Units grouped */
export const WEIGHT_UNITS_BY_GROUP: Record<string, WeightUnit[]> = WEIGHT_UNITS.reduce(
  (acc, unit) => {
    if (!acc[unit.group]) acc[unit.group] = [];
    acc[unit.group].push(unit);
    return acc;
  },
  {} as Record<string, WeightUnit[]>
);

/** Convert a value from one weight unit to another */
export function convertWeight(value: number, fromId: string, toId: string): number {
  const from = WEIGHT_UNIT_MAP[fromId];
  const to = WEIGHT_UNIT_MAP[toId];
  if (!from || !to) return NaN;
  const inKg = value * from.toKg;
  return inKg / to.toKg;
}

/** Format a number for display — smart precision */
export function formatWeightResult(value: number): string {
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

/** Derive from/to unit IDs from a URL slug like "kg-to-lb" */
export function parseWeightPairSlug(slug: string): { fromId: string; toId: string } | null {
  const idx = slug.indexOf("-to-");
  if (idx < 0) return null;
  return { fromId: slug.slice(0, idx), toId: slug.slice(idx + 4) };
}

/** Build a URL slug from two unit IDs */
export function buildWeightPairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

/** Commonly-paired "quick links" */
export const POPULAR_WEIGHT_PAIRS: { from: string; to: string }[] = [
  { from: "kg",  to: "lb" },
  { from: "lb",  to: "kg" },
  { from: "g",   to: "oz" },
  { from: "oz",  to: "g" },
  { from: "kg",  to: "g" },
  { from: "t",   to: "kg" },
  { from: "kg",  to: "t" },
  { from: "lb",  to: "oz" },
  { from: "oz",  to: "lb" },
  { from: "mg",  to: "g" },
  { from: "kg",  to: "stone-uk" },
  { from: "ton-us", to: "kg" },
];

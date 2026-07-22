export interface ConverterCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ConverterGroup {
  id: string;
  groupName: string;
  categories: ConverterCategory[];
}

export const converterGroups: ConverterGroup[] = [
  {
    id: "common",
    groupName: "Common Converters",
    categories: [
      {
        id: "length",
        name: "Length Converter",
        description: "Convert between meters, feet, inches, miles, kilometers, yards, and many more units of linear distance used worldwide.",
        icon: "Ruler",
      },
      {
        id: "weight-mass",
        name: "Weight & Mass Converter",
        description: "Switch between kilograms, pounds, ounces, tons, grams, and other mass units for everyday and scientific use.",
        icon: "Scale",
      },
      {
        id: "volume",
        name: "Volume Converter",
        description: "Effortlessly convert liters, gallons, milliliters, fluid ounces, cubic meters, and more liquid volume units.",
        icon: "Droplets",
      },
      {
        id: "temperature",
        name: "Temperature Converter",
        description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine scales for weather, cooking, and scientific applications.",
        icon: "Thermometer",
      },
      {
        id: "area",
        name: "Area Converter",
        description: "Translate between square meters, acres, hectares, square feet, square miles, and more area measurement units.",
        icon: "Square",
      },
      {
        id: "pressure",
        name: "Pressure Converter",
        description: "Convert pascals, bar, psi, atm, torr, and other pressure units used in science, engineering, and industry.",
        icon: "Gauge",
      },
      {
        id: "energy",
        name: "Energy Converter",
        description: "Switch between joules, calories, kilowatt-hours, BTUs, electron volts, and other energy and work units.",
        icon: "Zap",
      },
      {
        id: "volume-dry",
        name: "Volume – Dry Converter",
        description: "Convert dry volume measures like bushels, pecks, quarts, and pints used in agriculture and food industry.",
        icon: "Package",
      },
      {
        id: "currency",
        name: "Currency Converter",
        description: "Convert between world currencies including USD, EUR, GBP, JPY, and hundreds of other monetary units.",
        icon: "DollarSign",
      },
      {
        id: "case",
        name: "Case Converter",
        description: "Transform text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and other text formatting styles.",
        icon: "Type",
      },
      {
        id: "power",
        name: "Power Converter",
        description: "Convert watts, kilowatts, horsepower, BTU/hr, and other power units used in electrical and mechanical engineering.",
        icon: "Battery",
      },
      {
        id: "force",
        name: "Force Converter",
        description: "Switch between newtons, pound-force, kilogram-force, dynes, and other units of force in physics and engineering.",
        icon: "ArrowUpDown",
      },
      {
        id: "time",
        name: "Time Converter",
        description: "Convert seconds, minutes, hours, days, weeks, months, years, and more time units across any scale.",
        icon: "Clock",
      },
      {
        id: "speed",
        name: "Speed Converter",
        description: "Translate m/s, km/h, mph, knots, Mach number, and other velocity units for transport, physics, and aviation.",
        icon: "Wind",
      },
      {
        id: "angle",
        name: "Angle Converter",
        description: "Convert degrees, radians, gradians, arcminutes, arcseconds, and other angular measurement units.",
        icon: "Triangle",
      },
      {
        id: "fuel-consumption",
        name: "Fuel Consumption Converter",
        description: "Switch between miles per gallon, liters per 100km, km per liter, and other fuel efficiency units.",
        icon: "Fuel",
      },
      {
        id: "numbers",
        name: "Numbers Converter",
        description: "Convert between decimal, binary, octal, hexadecimal, Roman numerals, and other number base systems.",
        icon: "Hash",
      },
      {
        id: "data-storage",
        name: "Data Storage Converter",
        description: "Translate bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and other digital storage units.",
        icon: "HardDrive",
      },
    ],
  },
  {
    id: "engineering",
    groupName: "Engineering Converters",
    categories: [
      {
        id: "velocity-angular",
        name: "Velocity – Angular Converter",
        description: "Convert rad/s, deg/s, RPM, and other angular velocity units used in rotational mechanics and motor engineering.",
        icon: "RotateCcw",
      },
      {
        id: "acceleration",
        name: "Acceleration Converter",
        description: "Switch between m/s², g-force, gal, ft/s², and other linear acceleration units for physics and aerospace applications.",
        icon: "TrendingUp",
      },
      {
        id: "acceleration-angular",
        name: "Acceleration – Angular Converter",
        description: "Convert rad/s², deg/s², rev/s², and other angular acceleration units used in mechanical and robotics engineering.",
        icon: "RefreshCw",
      },
      {
        id: "density",
        name: "Density Converter",
        description: "Translate kg/m³, g/cm³, lb/ft³, and other density units for materials science, chemistry, and fluid dynamics.",
        icon: "Layers",
      },
      {
        id: "specific-volume",
        name: "Specific Volume Converter",
        description: "Convert m³/kg, ft³/lb, L/kg, and other specific volume units relevant to thermodynamics and fluid engineering.",
        icon: "Box",
      },
      {
        id: "moment-inertia",
        name: "Moment of Inertia Converter",
        description: "Switch between kg·m², lb·ft², g·cm², and other rotational inertia units for mechanical and structural analysis.",
        icon: "Circle",
      },
      {
        id: "moment-force",
        name: "Moment of Force Converter",
        description: "Convert N·m, lb·ft, kg·cm, and other bending moment units used in structural and mechanical engineering.",
        icon: "Wrench",
      },
      {
        id: "torque",
        name: "Torque Converter",
        description: "Translate newton-meters, foot-pounds, kilogram-force meters, and more torque units for engines and machinery.",
        icon: "Settings",
      },
    ],
  },
  {
    id: "heat",
    groupName: "Heat Converters",
    categories: [
      {
        id: "heat",
        name: "Heat Converters",
        description: "Convert joules, calories, BTU, and other heat energy units widely used in thermodynamics and HVAC systems.",
        icon: "Flame",
      },
      {
        id: "fuel-efficiency-mass",
        name: "Fuel Efficiency – Mass Converter",
        description: "Switch between km/kg, miles/lb, and other fuel efficiency by mass units for comparing propulsion systems.",
        icon: "Weight",
      },
      {
        id: "fuel-efficiency-volume",
        name: "Fuel Efficiency – Volume Converter",
        description: "Convert mpg, L/100km, km/L, and similar fuel-to-volume efficiency metrics used in automotive and aviation.",
        icon: "Gauge",
      },
      {
        id: "temperature-interval",
        name: "Temperature Interval Converter",
        description: "Convert temperature differences (ΔT) between Celsius, Fahrenheit, and Kelvin intervals for thermodynamic calculations.",
        icon: "Thermometer",
      },
      {
        id: "thermal-expansion",
        name: "Thermal Expansion Converter",
        description: "Translate coefficients of thermal expansion between different unit systems for materials and structural engineering.",
        icon: "Maximize",
      },
      {
        id: "thermal-resistance",
        name: "Thermal Resistance Converter",
        description: "Convert K/W, °C/W, °F·hr/BTU, and other thermal resistance units for insulation and heat transfer design.",
        icon: "Shield",
      },
      {
        id: "thermal-conductivity",
        name: "Thermal Conductivity Converter",
        description: "Switch between W/(m·K), BTU/(hr·ft·°F), cal/(s·cm·°C), and other thermal conductivity units for materials.",
        icon: "Activity",
      },
      {
        id: "specific-heat-capacity",
        name: "Specific Heat Capacity Converter",
        description: "Convert J/(kg·K), cal/(g·°C), BTU/(lb·°F), and more for material science and thermal engineering calculations.",
        icon: "Beaker",
      },
      {
        id: "heat-density",
        name: "Heat Density Converter",
        description: "Translate volumetric heat density units like J/m³ and BTU/ft³ for combustion, HVAC, and energy storage systems.",
        icon: "Server",
      },
      {
        id: "heat-flux-density",
        name: "Heat Flux Density Converter",
        description: "Convert W/m², BTU/(hr·ft²), cal/(s·cm²), and other heat flux density units for surface heating and cooling applications.",
        icon: "Radio",
      },
      {
        id: "heat-transfer-coefficient",
        name: "Heat Transfer Coefficient Converter",
        description: "Switch between W/(m²·K), BTU/(hr·ft²·°F), and more for convection and conduction analysis in thermal systems.",
        icon: "ArrowLeftRight",
      },
    ],
  },
  {
    id: "fluids",
    groupName: "Fluids Converters",
    categories: [
      {
        id: "flow",
        name: "Flow Converter",
        description: "Convert volumetric flow rates like m³/s, L/min, GPM, CFM for plumbing, HVAC, and fluid system design.",
        icon: "Waves",
      },
      {
        id: "flow-mass",
        name: "Flow – Mass Converter",
        description: "Translate mass flow rates including kg/s, lb/hr, g/min, used in chemical processing and industrial systems.",
        icon: "MoveRight",
      },
      {
        id: "flow-molar",
        name: "Flow – Molar Converter",
        description: "Convert molar flow rates such as mol/s and kmol/hr for chemical reactions and process engineering calculations.",
        icon: "FlaskConical",
      },
      {
        id: "mass-flux-density",
        name: "Mass Flux Density Converter",
        description: "Switch between kg/(m²·s), lb/(ft²·s), and other mass flux density units for diffusion and filtration engineering.",
        icon: "BarChart",
      },
      {
        id: "concentration-molar",
        name: "Concentration – Molar Converter",
        description: "Convert mol/L, mmol/L, mol/m³, and similar molar concentration units for chemistry and laboratory science.",
        icon: "TestTube",
      },
      {
        id: "concentration-solution",
        name: "Concentration – Solution Converter",
        description: "Translate ppm, ppb, mg/L, g/L, and other solution concentration units for environmental and analytical chemistry.",
        icon: "Droplet",
      },
      {
        id: "viscosity-dynamic",
        name: "Viscosity – Dynamic Converter",
        description: "Convert Pa·s, cP, poise, and other dynamic viscosity units for fluid mechanics, lubrication, and polymer science.",
        icon: "Sliders",
      },
      {
        id: "viscosity-kinematic",
        name: "Viscosity – Kinematic Converter",
        description: "Switch between m²/s, cSt, stokes, ft²/s, and other kinematic viscosity units for fluid flow analysis.",
        icon: "SlidersHorizontal",
      },
      {
        id: "surface-tension",
        name: "Surface Tension Converter",
        description: "Convert N/m, dyn/cm, mN/m, and other surface tension units relevant to chemistry, biology, and materials science.",
        icon: "Minus",
      },
      {
        id: "permeability",
        name: "Permeability Converter",
        description: "Translate darcy, millidarcy, m², and other permeability units for petroleum engineering and groundwater studies.",
        icon: "Filter",
      },
    ],
  },
  {
    id: "light",
    groupName: "Light Converters",
    categories: [
      {
        id: "luminance",
        name: "Luminance Converter",
        description: "Convert cd/m², nit, stilb, foot-lambert, and other luminance units for display calibration and lighting design.",
        icon: "Monitor",
      },
      {
        id: "luminous-intensity",
        name: "Luminous Intensity Converter",
        description: "Switch between candela, millicandela, candlepower, and other luminous intensity units for photometry.",
        icon: "Sun",
      },
      {
        id: "illumination",
        name: "Illumination Converter",
        description: "Convert lux, foot-candle, phot, nox, and other illuminance units for architectural and industrial lighting.",
        icon: "Lightbulb",
      },
      {
        id: "digital-image-resolution",
        name: "Digital Image Resolution Converter",
        description: "Translate DPI, PPI, pixels/cm, and other image resolution units for print design, photography, and digital media.",
        icon: "Image",
      },
      {
        id: "frequency-wavelength",
        name: "Frequency Wavelength Converter",
        description: "Convert Hz, kHz, MHz, GHz, nm, and μm for electromagnetic spectrum, optics, and communications engineering.",
        icon: "Wifi",
      },
    ],
  },
  {
    id: "electricity",
    groupName: "Electricity Converters",
    categories: [
      {
        id: "charge",
        name: "Charge Converter",
        description: "Convert coulombs, milliampere-hours, electron charge, faradays, and other electric charge units for electronics.",
        icon: "Bolt",
      },
      {
        id: "linear-charge-density",
        name: "Linear Charge Density Converter",
        description: "Translate C/m, μC/m, and other linear charge density units used in electrostatics and cable design.",
        icon: "Minus",
      },
      {
        id: "surface-charge-density",
        name: "Surface Charge Density Converter",
        description: "Convert C/m², μC/cm², and other surface charge density units for capacitor design and electrostatic analysis.",
        icon: "SquareDashed",
      },
      {
        id: "volume-charge-density",
        name: "Volume Charge Density Converter",
        description: "Switch between C/m³, μC/cm³, and other volumetric charge density units for semiconductor and plasma physics.",
        icon: "Cube",
      },
      {
        id: "current",
        name: "Current Converter",
        description: "Convert amperes, milliamperes, microamperes, kiloamperes, and other electric current units for circuit analysis.",
        icon: "Zap",
      },
      {
        id: "linear-current-density",
        name: "Linear Current Density Converter",
        description: "Translate A/m, mA/mm, and similar linear current density units for electromagnetic field and conductor analysis.",
        icon: "AlignCenter",
      },
      {
        id: "surface-current-density",
        name: "Surface Current Density Converter",
        description: "Convert A/m², mA/cm², and other surface current density units for power electronics and magnetics design.",
        icon: "Grid",
      },
      {
        id: "electric-field-strength",
        name: "Electric Field Strength Converter",
        description: "Switch between V/m, kV/m, N/C, and other electric field strength units for electrostatics and high-voltage design.",
        icon: "Waves",
      },
      {
        id: "electric-potential",
        name: "Electric Potential Converter",
        description: "Convert volts, millivolts, kilovolts, microvolts, and more electric potential units for power and signal systems.",
        icon: "Radio",
      },
      {
        id: "electric-resistance",
        name: "Electric Resistance Converter",
        description: "Translate ohms, kilohms, megohms, milliohms, and other resistance units for electronics and circuit design.",
        icon: "Minus",
      },
      {
        id: "electric-resistivity",
        name: "Electric Resistivity Converter",
        description: "Convert Ω·m, μΩ·cm, and other resistivity units for material selection in electrical and electronics engineering.",
        icon: "AlignJustify",
      },
      {
        id: "electric-conductance",
        name: "Electric Conductance Converter",
        description: "Switch between siemens, millisiemens, microsiemens, and other conductance units for circuit and sensor applications.",
        icon: "CheckCircle",
      },
      {
        id: "electric-conductivity",
        name: "Electric Conductivity Converter",
        description: "Convert S/m, mS/cm, μS/cm, and other electrical conductivity units for water quality and materials testing.",
        icon: "Signal",
      },
      {
        id: "capacitance",
        name: "Electrostatic Capacitance",
        description: "Translate farads, microfarads, picofarads, nanofarads, and other capacitance units for electronic component selection.",
        icon: "Cpu",
      },
      {
        id: "inductance",
        name: "Inductance Converter",
        description: "Convert henries, millihenries, microhenries, and nanohenries for inductor and transformer design in electronics.",
        icon: "Codesandbox",
      },
    ],
  },
  {
    id: "magnetism",
    groupName: "Magnetism Converters",
    categories: [
      {
        id: "magnetomotive-force",
        name: "Magnetomotive Force Converter",
        description: "Convert ampere-turns, gilberts, and other magnetomotive force units used in magnetic circuit and transformer design.",
        icon: "Magnet",
      },
      {
        id: "magnetic-field-strength",
        name: "Magnetic Field Strength Converter",
        description: "Switch between A/m, Oe, and other magnetic field intensity units for electromagnetics and MRI applications.",
        icon: "Compass",
      },
      {
        id: "magnetic-flux",
        name: "Magnetic Flux Converter",
        description: "Translate webers, maxwells, milliwebers, and other magnetic flux units for motor, generator, and transformer analysis.",
        icon: "Orbit",
      },
      {
        id: "magnetic-flux-density",
        name: "Magnetic Flux Density Converter",
        description: "Convert tesla, gauss, millitesla, and other flux density units for magnet design, sensors, and medical imaging.",
        icon: "BarChart2",
      },
    ],
  },
  {
    id: "radiology",
    groupName: "Radiology Converters",
    categories: [
      {
        id: "radiation",
        name: "Radiation Converter",
        description: "Convert radiation units including gray, rad, and related measures for medical physics and radiation protection.",
        icon: "AlertCircle",
      },
      {
        id: "radiation-activity",
        name: "Radiation – Activity Converter",
        description: "Switch between becquerel, curie, rutherford, and other radioactive activity units for nuclear medicine and safety.",
        icon: "Activity",
      },
      {
        id: "radiation-exposure",
        name: "Radiation – Exposure Converter",
        description: "Translate roentgen, coulomb/kg, and other radiation exposure units for radiology and occupational health monitoring.",
        icon: "Eye",
      },
      {
        id: "radiation-absorbed-dose",
        name: "Radiation – Absorbed Dose Converter",
        description: "Convert gray, rad, sievert, rem, and other absorbed dose units for radiotherapy and radiation safety calculations.",
        icon: "Shield",
      },
    ],
  },
  {
    id: "other",
    groupName: "Other Converters",
    categories: [
      {
        id: "prefixes",
        name: "Prefixes Converter",
        description: "Convert between SI prefixes — kilo, mega, giga, tera, milli, micro, nano — for any unit system quickly.",
        icon: "Tag",
      },
      {
        id: "data-transfer",
        name: "Data Transfer Converter",
        description: "Switch between bps, kbps, Mbps, Gbps, and other data transfer rate units for networking and internet speed.",
        icon: "ArrowRightLeft",
      },
      {
        id: "sound",
        name: "Sound Converter",
        description: "Convert decibels, bels, nepers, and other sound pressure and intensity units for acoustics and audio engineering.",
        icon: "Volume2",
      },
      {
        id: "typography",
        name: "Typography Converter",
        description: "Translate points, picas, ems, pixels, and other typographic units for print design and web layout.",
        icon: "Type",
      },
      {
        id: "volume-lumber",
        name: "Volume – Lumber Converter",
        description: "Convert board feet, cubic feet, cubic meters, and other lumber volume units used in carpentry and wood trading.",
        icon: "TreePine",
      },
    ],
  },
];

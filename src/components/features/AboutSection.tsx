const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="section-divider mb-12" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-foreground mb-8">
          About <span className="text-gradient">Unit Converters</span>
        </h2>

        <div className="space-y-5 text-left">
          <p className="text-base text-muted-foreground leading-relaxed">
            Unit converters are essential tools that enable seamless translation between different measurement systems,
            bridging the gap between the metric system, the imperial system, and countless specialized scientific units.
            Whether you're converting kilometers to miles for travel planning, grams to ounces for a recipe, or
            megapascals to PSI for an engineering project, unit converters eliminate the need for manual calculations
            and reduce the risk of costly errors. In a globally interconnected world where countries and industries use
            different standards, having instant and accurate unit conversion at your fingertips is not just convenient —
            it's a necessity.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            From fundamental physical quantities like length, mass, and temperature to highly specialized domains such
            as magnetic flux density, molar concentration, radiation absorbed dose, and thermal conductivity, modern
            unit converters serve students, engineers, scientists, chefs, pilots, and professionals across every
            imaginable field. UnitsPeak is designed to be your single, authoritative destination for all of these
            conversions — organized by category, clearly explained, and always accurate. Our mission is to make complex
            unit transformations intuitive and accessible, so you can focus on your work, not on the math behind it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

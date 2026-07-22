import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="UnitsPeak hero background"
          className="w-full h-full object-cover opacity-[0.18] dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background dark:from-background/60 dark:via-background/75 dark:to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            The Complete Unit Conversion Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Space_Grotesk'] leading-tight mb-6">
            Convert{" "}
            <span className="text-gradient">anything</span>
            <br />
            to{" "}
            <span className="text-gradient">everything</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
            UnitsPeak brings together over 90 unit converters spanning every domain of science, engineering,
            and everyday life — from everyday length and weight to specialized electricity, magnetism, and radiology units.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
            Whether you're a student, engineer, scientist, or just curious — find the converter you need instantly,
            organized into clear categories for fast access.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { value: "90+", label: "Converter Types" },
              { value: "9", label: "Major Categories" },
              { value: "500+", label: "Unit Variants" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gradient font-['Space_Grotesk']">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

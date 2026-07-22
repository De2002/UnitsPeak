import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import useSeoMeta from "@/hooks/useSeoMeta";
import { Link } from "react-router-dom";
import { ChevronRight, Info, Mail, Zap, Globe, BookOpen } from "lucide-react";

const About = () => {
  useSeoMeta({
    title: "About UnitsPeak – The Complete Unit Conversion Platform",
    description: "Learn about UnitsPeak — our mission to make unit conversion fast, accurate, and accessible for students, engineers, and scientists worldwide.",
    canonical: "https://www.unitspeak.com/about",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">UnitsPeak</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">About</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Info className="w-4 h-4 text-primary" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground">
                About UnitsPeak
              </h1>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              UnitsPeak was built with a single goal: make unit conversion fast, accurate, and effortless
              for everyone — students doing homework, engineers on job sites, scientists in the lab, or
              anyone simply curious about the world's measurement systems.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We believe that a great conversion tool should get out of your way. No sign-ups, no ads
              cluttering the interface, no confusing workflows — just clean, instant results.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: Zap,
                title: "90+ Converters",
                body: "Spanning every scientific and everyday domain from Length and Weight to Radiology and Magnetism.",
              },
              {
                icon: Globe,
                title: "500+ Unit Variants",
                body: "Imperial, Metric, SI, Nautical, Astronomical, Historical — we cover standards used worldwide.",
              },
              {
                icon: BookOpen,
                title: "Contextual Content",
                body: "Each converter page includes reference tables, quick-look cards, and educational articles.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass-card rounded-xl p-5 border border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="space-y-6 mb-12">
            <div>
              <h2 className="text-base font-semibold font-['Space_Grotesk'] text-foreground mb-3">
                The Story
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                UnitsPeak started from a frustration shared by many: existing unit converters either felt
                cluttered and ad-heavy, lacked obscure units needed for specialist work, or returned results
                with no context. We set out to build the converter we always wished existed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The name "UnitsPeak" reflects that ambition — reaching the peak of what a unit conversion
                platform can be. Every unit, every standard, every domain — all in one clean, fast, reliable tool.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold font-['Space_Grotesk'] text-foreground mb-3">
                Accuracy & Standards
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All conversion factors are sourced from internationally recognised standards including the
                International System of Units (SI), the National Institute of Standards and Technology (NIST),
                and established engineering references. Where multiple definitions of a unit exist (e.g., US Survey
                vs. International foot), we provide both clearly labelled variants.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div id="contact" className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-lg font-bold font-['Space_Grotesk'] text-foreground">Contact Us</h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Have a question, found an inaccuracy, want to suggest a new converter, or just want to say hello?
              We'd love to hear from you.
            </p>

            <a
              href="mailto:me@unitspeak.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              me@unitspeak.com
            </a>

            <div className="mt-5 pt-5 border-t border-primary/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {[
                { label: "General enquiries", value: "me@unitspeak.com" },
                { label: "Report an error", value: "me@unitspeak.com" },
                { label: "Suggest a converter", value: "me@unitspeak.com" },
                { label: "Partnership & business", value: "me@unitspeak.com" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-foreground/70">{label}</span>
                  <a href={`mailto:${value}`} className="text-primary hover:underline text-xs">{value}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

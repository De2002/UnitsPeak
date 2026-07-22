import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import useSeoMeta from "@/hooks/useSeoMeta";
import { Link } from "react-router-dom";
import { ChevronRight, ScrollText } from "lucide-react";

const Terms = () => {
  useSeoMeta({
    title: "Terms of Service – UnitsPeak",
    description: "Read the UnitsPeak Terms of Service governing the use of our free unit conversion platform.",
    canonical: "https://www.unitspeak.com/terms",
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
              <span className="text-foreground font-medium">Terms of Service</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <ScrollText className="w-4 h-4 text-primary" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground">
                Terms of Service
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-muted-foreground mb-8">Last updated: July 2026</p>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using UnitsPeak at unitspeak.com, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use the service.
              </p>
            </Section>

            <Section title="2. Use of the Service">
              <p>
                UnitsPeak provides free unit conversion tools for personal, educational, and professional use.
                You may use the service for any lawful purpose. You agree not to:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground">
                <li>Use the service in any way that violates applicable laws or regulations.</li>
                <li>Attempt to gain unauthorised access to any part of the service.</li>
                <li>Scrape, crawl, or systematically collect data from the service in a manner that burdens our infrastructure.</li>
                <li>Reproduce or distribute the service's content for commercial purposes without prior written permission.</li>
              </ul>
            </Section>

            <Section title="3. Accuracy of Conversions">
              <p>
                We strive to provide accurate unit conversion values based on internationally recognised
                standards. However, conversion results are provided "as is" and without warranty of any kind.
                For critical applications (engineering, medicine, scientific research), always verify results
                with authoritative sources.
              </p>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                The UnitsPeak name, logo, and all site content (excluding open standards data) are the
                intellectual property of UnitsPeak. You may not reproduce, distribute, or create derivative
                works without explicit written permission.
              </p>
            </Section>

            <Section title="5. Disclaimer of Warranties">
              <p>
                The service is provided on an "as is" and "as available" basis without warranties of any
                kind, either express or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, UnitsPeak shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of or
                inability to use the service.
              </p>
            </Section>

            <Section title="7. Changes to Terms">
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately
                upon posting. Your continued use of the service after any changes constitutes your acceptance
                of the new Terms.
              </p>
            </Section>

            <Section title="8. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with applicable law, without
                regard to its conflict of law provisions.
              </p>
            </Section>

            <Section title="9. Contact">
              <p>
                Questions about these Terms should be directed to{" "}
                <a href="mailto:me@unitspeak.com" className="text-primary hover:underline">
                  me@unitspeak.com
                </a>.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-base font-semibold font-['Space_Grotesk'] text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

export default Terms;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import useSeoMeta from "@/hooks/useSeoMeta";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";

const Privacy = () => {
  useSeoMeta({
    title: "Privacy Policy – UnitsPeak",
    description: "Read UnitsPeak's privacy policy to understand how we handle your data when you use our unit conversion tools.",
    canonical: "https://www.unitspeak.com/privacy",
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
              <span className="text-foreground font-medium">Privacy Policy</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-foreground">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-muted-foreground mb-8">Last updated: July 2026</p>

          <div className="prose-custom space-y-8">
            <Section title="1. Overview">
              <p>
                UnitsPeak ("we", "us", or "our") operates the website unitspeak.com. This page informs you
                of our policies regarding the collection, use, and disclosure of personal data when you use
                our service and the choices you have associated with that data.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>
                UnitsPeak is a client-side unit conversion tool. We do <strong>not</strong> require you to
                create an account, log in, or provide any personal information to use any converter on this site.
              </p>
              <p className="mt-3">
                We may collect limited, anonymised usage data (e.g., page views, converter usage counts)
                through analytics tools to help us understand which converters are most useful and to improve
                the platform. This data cannot be used to identify you personally.
              </p>
            </Section>

            <Section title="3. Cookies and Local Storage">
              <p>
                UnitsPeak stores your theme preference (light or dark mode) in your browser's local storage.
                This data remains on your device and is never transmitted to our servers.
              </p>
            </Section>

            <Section title="4. Third-Party Services">
              <p>
                We may use third-party analytics services (such as Google Analytics) that collect anonymised
                data about site usage. These services have their own privacy policies, and we encourage you
                to review them. We do not sell your data to any third parties.
              </p>
            </Section>

            <Section title="5. Links to Other Sites">
              <p>
                Our service may contain links to other websites not operated by us. We have no control over
                the content and practices of those sites and accept no responsibility for their privacy policies.
              </p>
            </Section>

            <Section title="6. Children's Privacy">
              <p>
                Our service does not address anyone under the age of 13. We do not knowingly collect personally
                identifiable information from children under 13.
              </p>
            </Section>

            <Section title="7. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                updating the "Last updated" date at the top of this page. We encourage you to review this
                policy periodically for any changes.
              </p>
            </Section>

            <Section title="8. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;

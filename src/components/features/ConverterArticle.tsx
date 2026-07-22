import { FileText } from "lucide-react";

interface ConverterArticleProps {
  fromName?: string;
  toName?: string;
  /** Article HTML content — to be injected by admin via OnSpace Cloud CMS */
  content?: string;
}

const ConverterArticle = ({ fromName, toName, content }: ConverterArticleProps) => {
  const headline =
    fromName && toName
      ? `${fromName} to ${toName} – Conversion Guide`
      : "Length Conversion Guide";

  return (
    <section className="mt-10 max-w-3xl mx-auto" aria-label="Converter article">
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/60">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-base font-semibold text-foreground font-['Space_Grotesk']">
            {headline}
          </h2>
        </div>

        {/* Content */}
        {content ? (
          <div
            className="prose prose-invert prose-sm max-w-none text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          /* Placeholder shown until admin adds content via CMS */
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-muted/30 border border-border/50 p-4">
              <div className="w-1 h-full min-h-[40px] rounded-full bg-primary/40 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                In-depth article content for this converter will appear here. Administrators
                can add explanations, formulas, historical context, and usage examples via{" "}
                <span className="text-primary font-medium">OnSpace Cloud CMS</span>.
              </p>
            </div>
            {/* Skeleton lines to indicate content shape */}
            <div className="space-y-2 pt-1 opacity-30">
              {[95, 88, 72, 90, 60].map((w, i) => (
                <div
                  key={i}
                  className="h-3 rounded-full bg-muted-foreground/30"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConverterArticle;

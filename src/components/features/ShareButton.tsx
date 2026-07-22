import { Share2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
}

const ShareButton = ({ title, text, url }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = text || title;

  const handleShare = async () => {
    // Native share sheet (mobile / modern browsers)
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url: shareUrl });
      } catch {
        // User cancelled — no-op
      }
      return;
    }
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent fail
    }
  };

  return (
    <button
      onClick={handleShare}
      aria-label="Share this converter"
      title={copied ? "Link copied!" : "Share this converter"}
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border hover:border-primary/40 bg-muted/30 hover:bg-primary/10 rounded-lg px-3 py-2 transition-all duration-200"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-xs">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </>
      )}
    </button>
  );
};

export default ShareButton;

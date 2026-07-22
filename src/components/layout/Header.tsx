import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import blackLogo from "@/assets/unitspeak-black-logo.png";
import whiteLogo from "@/assets/unitspeak-white-logo.png";

const Header = () => {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img
              src={theme === "dark" ? whiteLogo : blackLogo}
              alt="UnitsPeak"
              className="h-7 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#converters" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Converters
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
              90+ Unit Types
            </span>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              className="w-9 h-9 rounded-lg border border-border bg-muted/40 hover:bg-muted hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

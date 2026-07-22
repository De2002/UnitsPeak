import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import blackLogo from "@/assets/unitspeak-black-logo.png";
import whiteLogo from "@/assets/unitspeak-white-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border/50 bg-card/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={theme === "dark" ? whiteLogo : blackLogo}
                alt="UnitsPeak"
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your trusted destination for accurate, fast, and comprehensive unit conversions across every scientific and everyday domain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Common Converters", "Engineering Converters", "Heat Converters", "Fluids Converters", "Electricity Converters"].map((link) => (
                <li key={link}>
                  <a href="#converters" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">About</Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} UnitsPeak. All rights reserved. ·{" "}
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            {" · "}
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-primary fill-primary" /> for engineers, scientists & curious minds
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

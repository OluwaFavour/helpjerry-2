import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";

interface NavigationProps {
  onDonateClick: () => void;
}

export default function Navigation({ onDonateClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { label: "Jerry's Story", action: () => scrollToSection("story") },
    { label: "Gallery", action: () => scrollToSection("gallery") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className={`inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 transition-colors ${
                isScrolled ? "bg-green-600" : "bg-green-600"
              }`}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-gray-900"
              }`}
            >
              Help Jerry
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onDonateClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onDonateClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mx-4 mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Donate Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

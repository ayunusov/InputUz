import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/f7387fb63b22ab38b265deeca92441182d07aa80.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Licenses", href: "#licenses", isLicenses: true },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="INPUT" className="h-6 sm:h-10 md:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }
                }}
                className="text-gray-700 hover:text-black transition-colors text-center"
              >
                {item.isLicenses ? (
                  <div className="flex flex-col items-center leading-tight">
                    <span>Licenses</span>
                    <span className="text-[11px]">Permits & Certifications</span>
                  </div>
                ) : (
                  item.label
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }
                }}
                className="block w-full text-left text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
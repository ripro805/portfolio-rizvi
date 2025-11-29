import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Achievements", path: "/achievements" },
    { name: "Participation", path: "/participation" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative group">
            <div className="w-12 h-12 rounded-xl bg-[#00ccff] border-2 border-portfolio-cyan/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-portfolio-cyan group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
              <span className="text-2xl font-black text-white">
                ℛ
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary ${
                  isActive(item.path)
                    ? "bg-portfolio-cyan text-background font-medium"
                    : "text-foreground hover:text-portfolio-cyan"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-portfolio-cyan text-background font-medium"
                      : "text-foreground hover:bg-secondary hover:text-portfolio-cyan"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
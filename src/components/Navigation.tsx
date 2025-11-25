import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", section: "home" },
    { name: "About", href: "#about", section: "about" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Achievements", href: "#achievements", section: "achievements" },
    { name: "Participation", href: "#participation", section: "participation" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = navItems.map(item => item.section);
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const handleInitialScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      
      for (const item of navItems) {
        const element = document.getElementById(item.section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(item.section);
            break;
          }
        }
      }
    };

    // Check initial position after a short delay to ensure DOM is ready
    setTimeout(handleInitialScroll, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-portfolio-cyan">R</span>
            <span className="text-foreground">ifat</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary ${
                  isActive(item.section)
                    ? "bg-portfolio-cyan text-background font-medium"
                    : "text-foreground hover:text-portfolio-cyan"
                }`}
              >
                {item.name}
              </button>
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
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    isActive(item.section)
                      ? "bg-portfolio-cyan text-background font-medium"
                      : "text-foreground hover:bg-secondary hover:text-portfolio-cyan"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
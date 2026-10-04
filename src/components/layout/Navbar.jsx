import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";

import { EMAIL } from "../../constants/site";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // storage blocked: theme still works for this visit
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "#home";
      NAV_LINKS.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && window.scrollY >= section.offsetTop - window.innerHeight / 3) {
          current = href;
        }
      });
      setActiveSection(current);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const themeButton = (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="icon-btn size-10"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
          aria-label="Anurag Dangi, home"
        >
          A<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {themeButton}

          <a href={`mailto:${EMAIL}`} className="btn-primary hidden px-5 py-2.5 lg:inline-flex">
            Get in Touch
            <ArrowRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="icon-btn size-10 lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100svh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-custom flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3 text-2xl font-semibold tracking-tight ${
                    activeSection === link.href ? "text-accent" : "text-fg"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

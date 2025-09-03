import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Navbar background
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer
    const sections = ["home", "stats", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId = activeSection;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        });

        // Update only when the active section changes
        if (mostVisibleId !== activeSection) {
          setActiveSection(mostVisibleId);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0, 0.1, ..., 1
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const NavLink = ({
    sectionId,
    children,
  }: {
    sectionId: string;
    children: React.ReactNode;
  }) => {
    const isActive = activeSection === sectionId;

    return (
      <motion.button
        onClick={() => scrollToSection(sectionId)}
        className="relative font-mono font-bold text-sm tracking-wide text-gray-300 hover:text-[#00ff99] transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-[#00ff99]"
          animate={{
            width: isActive ? "100%" : "0%",
            boxShadow: isActive ? "0 0 8px #00ff99" : "0 0 0px #00ff99",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    );
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <h1 className="text-2xl font-bold font-mono text-white">
              Rijul<span className="text-[#00ff99]">.</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              <NavLink sectionId="home">Home</NavLink>
              <NavLink sectionId="stats">Services</NavLink>
              <NavLink sectionId="projects">Work</NavLink>
              <NavLink sectionId="contact">Contact</NavLink>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-[#00ff99] hover:bg-[#00ff99]/90 text-black px-8 py-3 rounded-full font-mono font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#00ff99]/25"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 255, 153, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

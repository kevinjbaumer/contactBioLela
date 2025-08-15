import React, { useState } from "react";
import { Menu, X, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stethoscope className="h-8 w-8 text-trust-blue" />
            <h1 className="text-2xl font-bold text-trust-navy">Lena J Boost</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "services", "testimonials", "contact"].map(
              (section, i) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={section}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className={`cursor-pointer font-medium ${
                      section === "contact"
                        ? "bg-trust-blue text-white px-4 py-2 rounded-lg hover:bg-trust-navy transition"
                        : "text-gray-700 hover:text-trust-blue transition"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {["home", "about", "services", "testimonials", "contact"].map(
                  (section) => (
                    <Link
                      key={section}
                      to={section}
                      smooth={true}
                      duration={600}
                      offset={-70}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-medium text-left w-fit ${
                        section === "contact"
                          ? "bg-trust-blue text-white px-4 py-2 rounded-lg hover:bg-trust-navy transition"
                          : "text-gray-700 hover:text-trust-blue transition"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  )
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

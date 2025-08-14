import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef();

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      setMobileOpen(false); // close mobile menu on click
    }
  };

  useEffect(() => {
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", onDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);


  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full  backdrop-blur-md shadow-md" style={{ backgroundColor: "rgba(0,0,0, 0.3)" }}>
      <div className="mx-auto w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Authoi
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 relative">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="relative text-white cursor-pointer"
              onMouseEnter={() => setHovered(link.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => scrollTo(link.id)}
            >
              <span className="hover:text-cyan-500 transition-colors">{link.name}</span>

              {/* Hover underline */}
              {hovered === link.id && (
                <motion.div
                  className="absolute left-0 bottom-0 h-0.5 bg-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden cursor-pointer flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
        </div>
      </div>

      {/* Mobile Glass Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={menuRef} // attach ref here
              className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl w-3/4 max-w-sm p-6 flex flex-col gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-gray-800 font-semibold text-lg hover:text-cyan-500 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;

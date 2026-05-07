import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../assets/NavbarLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F28C28] shadow-md fixed top-0 left-0 z-50">
      {/* MAIN BAR */}
      <div className="w-full h-20 md:h-28 flex items-center px-6 md:px-12">

        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link to="/" aria-label="Go to Home">
            <img
              src={NavbarLogo}
              alt="Habit Æffect"
              className="h-16 md:h-24 w-auto"
              loading="eager"
            />
          </Link>
        </div>

        {/* RIGHT: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-16 font-semibold text-xl text-blue-900 ml-auto">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <Link to="/d6-method" className="hover:text-white transition-colors">The D-6 Method</Link>
          <Link to="/meet-dr-jen" className="hover:text-white transition-colors">Meet Dr. Jen</Link>
          <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900 text-3xl font-bold ml-auto hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F28C28] font-semibold text-lg text-blue-900 flex flex-col items-end pr-8 py-6 gap-5 shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-white">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-white">Services</Link>
          <Link to="/d6-method" onClick={() => setMenuOpen(false)} className="hover:text-white">The D-6 Method</Link>
          <Link to="/meet-dr-jen" onClick={() => setMenuOpen(false)} className="hover:text-white">Meet Dr. Jen</Link>
          <Link to="/resources" onClick={() => setMenuOpen(false)} className="hover:text-white">Resources</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
}

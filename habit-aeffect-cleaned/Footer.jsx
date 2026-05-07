import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import { trackContactClick } from "../utils/analytics";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F28C28] text-blue-900 py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left links */}
        <div className="flex flex-col gap-2 font-semibold text-lg text-center md:text-left">
          <Link className="hover:text-white transition-colors" to="/services">Services</Link>
          <Link className="hover:text-white transition-colors" to="/d6-method">The D-6 Method</Link>
          <Link className="hover:text-white transition-colors" to="/meet-dr-jen">Meet Dr. Jen</Link>
          <Link className="hover:text-white transition-colors" to="/resources">Resources</Link>

          {/* Contact (CTA tracked) */}
          <Link
            className="hover:text-white transition-colors"
            to="/contact"
            onClick={() => trackContactClick("footer")}
          >
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-8">
          <a href="https://www.facebook.com/profile.php?id=61586005975347" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="h-32 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/company/110440136/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="h-32 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/thehabitaeffect/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-32 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.youtube.com/@TheHabitAEffect" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="h-32 hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2 font-semibold text-lg text-center md:text-right">
          <Link className="hover:text-white transition-colors" to="/terms">Terms &amp; Conditions</Link>
          <Link className="hover:text-white transition-colors" to="/privacy">Privacy Policy</Link>
          <Link className="hover:text-white transition-colors" to="/accessibility">Accessibility Statement</Link>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-white opacity-90">
        © {new Date().getFullYear()} Habit Æffect. All rights reserved.
      </div>
    </footer>
  );
}

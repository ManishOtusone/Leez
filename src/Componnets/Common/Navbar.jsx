import React, { useEffect, useState } from "react";
import Logo from "../../assets/Leez.png";
import {
  FaMapMarkerAlt,
  FaUserCircle,
  FaSearch,
  FaMicrophone,
  FaCrosshairs,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0057a3] shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-10 md:h-12" />
          {scrolled && <button className="hidden md:flex items-center bg-[#0057a3] text-white text-sm px-3 py-1 rounded">New Delhi ▼</button>}
        </div>

        {/* Desktop Menu */}
        {!scrolled && (
          <ul className="hidden md:flex items-center gap-8 text-gray-200">
            {["For Tenants", "For Owners", "For Dealers/ Builders"].map((item, i) => (
              <li key={i} className="relative group cursor-pointer hover:text-white text-sm md:text-base">
                {item}
                <div className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
              </li>
            ))}
            <li className="relative group cursor-pointer hover:text-white text-sm md:text-base">
              Blogs
              <div className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
              <span className="absolute -top-3 -right-6 bg-red-600 text-white text-[10px] font-bold px-1 py-[1px]">NEW</span>
            </li>
          </ul>
        )}

        {/* Search + Buttons Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {scrolled && (
            <div className="flex items-center bg-white rounded-md px-3 py-2 w-[400px] md:w-[500px]">
              <select className="text-sm font-semibold text-black outline-none border-r pr-2">
                <option>Buy</option>
                <option>Rent</option>
                <option>Commercial</option>
              </select>
              <input type="text" placeholder="Enter Locality / Project / Society / Landmark" className="flex-1 px-2 text-black outline-none" />
              <button className="text-blue-500 p-2"><FaCrosshairs /></button>
              <button className="text-blue-500 p-2"><FaMicrophone /></button>
              <button className="text-gray-600 p-2"><FaSearch /></button>
            </div>
          )}
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">Post property</button>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUserCircle className="text-white text-2xl" /> <span>▼</span>
          </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0057a3] text-white flex flex-col items-center py-4 space-y-4">
          <select className="bg-[#0057a3] px-3 py-2 rounded w-[80%] text-white">
            <option>New Delhi</option>
          </select>
          {["For Tenants", "For Owners", "For Dealers/ Builders", "Blogs"].map((item, i) => (
            <button key={i} className="w-[80%] text-left px-3 py-2 hover:bg-blue-700 rounded">{item}</button>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium w-[80%]">Post property</button>
        </div>
      )}
    </nav>

  );
};

export default Navbar;

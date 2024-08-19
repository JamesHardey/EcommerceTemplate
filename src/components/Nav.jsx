import React, { useState, useEffect } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const { cartItems, toggleCart } = useCart();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`padding-x py-8 w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'absolute'}`}>
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="z-20">
          <img src={headerLogo} alt="Brand Logo" width={130} height={30} />
        </a>
        <div className="flex items-center md:gap-10">
          <ul className={`flex flex-1 justify-center items-center gap-16 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-screen max-lg:w-full max-lg:flex-col max-lg:bg-white max-lg:p-8 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center z-20">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-coral-red transition-colors"
            >
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-coral-red text-white rounded-full px-2 py-1 text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden ml-4 text-gray-600 hover:text-coral-red transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <img src={hamburger} alt="Menu" width={24} height={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
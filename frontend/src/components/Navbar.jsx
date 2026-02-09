import React, { useState, useEffect, useRef } from 'react';
import { navLinks } from '../data/mockData';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top announcement banner */}
      <div className="w-full bg-[#4A6CF7] text-white text-sm py-2.5 text-center font-medium relative z-50">
        <span>НОВИНКА: AI Telegram-бот для мониторинга трендов — попробуйте бесплатно!</span>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#4A6CF7] rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Дроп<span className="text-[#4A6CF7]">Мастер</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1.5 text-[15px] text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${activeDropdown === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-[15px] text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                )}

                {/* Dropdown */}
                {link.hasDropdown && activeDropdown === idx && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 z-50">
                    {link.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-[#4A6CF7] rounded-full hover:bg-[#3B5DE7] transition-all hover:shadow-lg hover:shadow-blue-200">
              Попробовать бесплатно
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 animate-in slide-in-from-top-2">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                      onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === idx && (
                      <div className="pl-4 space-y-2 mt-1">
                        {link.items.map((item, i) => (
                          <a key={i} href={item.href} className="block text-sm text-gray-500 py-1.5">
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={link.href} className="block text-gray-700 font-medium py-2">
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button className="w-full py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-full">
                Войти
              </button>
              <button className="w-full py-2.5 text-sm font-semibold text-white bg-[#4A6CF7] rounded-full">
                Попробовать бесплатно
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

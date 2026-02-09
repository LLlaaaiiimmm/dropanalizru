import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Package, Zap } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#4361EE] text-white text-center py-2.5 px-4 text-sm font-medium relative z-50">
        <span>НОВИНКА: AI-анализатор ниш — находите прибыльные товары за секунды!</span>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'border-b border-gray-100'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#4361EE] rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-[22px] font-bold text-[#1A1A2E] tracking-tight">
              ДропЗона
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#4B5563] hover:text-[#1A1A2E] transition-colors">
                Инструменты
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[320px] animate-in fade-in slide-in-from-top-2 duration-200">
                    {[
                      { name: 'База товаров', desc: 'Миллионы товаров с аналитикой', to: '/tools/product-db' },
                      { name: 'AI-Анализатор ниш', desc: 'AI-поиск прибыльных ниш', to: '/tools/niche-analyzer', badge: 'AI' },
                      { name: 'Трекер продаж', desc: 'Отслеживание в реальном времени', to: '/tools/sales-tracker' },
                      { name: 'Анализ конкурентов', desc: 'Исследуйте стратегии', to: '/tools/competitor-research' },
                      { name: 'Калькулятор', desc: 'Юнит-экономика маркетплейсов', to: '/tools/unit-economics', badge: 'НОВОЕ' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F3F4F6] transition-colors group/item"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[#1A1A2E] group-hover/item:text-[#4361EE] transition-colors">{item.name}</span>
                            {item.badge && (
                              <span className="text-[10px] font-bold bg-[#4361EE]/10 text-[#4361EE] px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#9CA3AF] mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-[15px] font-medium text-[#4B5563] hover:text-[#1A1A2E] transition-colors">
              Тарифы
            </Link>
            <Link to="/blog" className="text-[15px] font-medium text-[#4B5563] hover:text-[#1A1A2E] transition-colors">
              Блог
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-medium text-[#4B5563] border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#4361EE] rounded-full hover:bg-[#3651DE] transition-all duration-200 flex items-center gap-1.5 shadow-sm shadow-[#4361EE]/25">
              <Zap className="w-3.5 h-3.5" />
              Попробовать бесплатно
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-lg">
            <Link to="/" className="block text-[15px] font-medium text-[#4B5563] hover:text-[#1A1A2E]">Главная</Link>
            <Link to="/pricing" className="block text-[15px] font-medium text-[#4B5563] hover:text-[#1A1A2E]">Тарифы</Link>
            <Link to="/blog" className="block text-[15px] font-medium text-[#4B5563] hover:text-[#1A1A2E]">Блог</Link>
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <button className="w-full px-5 py-2.5 text-sm font-medium text-[#4B5563] border border-gray-200 rounded-full">Войти</button>
              <button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#4361EE] rounded-full">Попробовать бесплатно</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

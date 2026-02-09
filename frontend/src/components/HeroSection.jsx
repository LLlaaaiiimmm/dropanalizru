import React from 'react';
import { ArrowRight, Chrome } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#4A6CF7]">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
          </svg>
          <span className="font-medium">ДропМастер 2.0 уже доступен!</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6">
          Находите прибыльные товары{' '}
          <span className="text-[#4A6CF7]">для продажи</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Анализируйте магазины на Wildberries, Ozon и Яндекс Маркет. Узнавайте выручку, продажи, товары и стратегии конкурентов.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#4A6CF7] rounded-full hover:bg-[#3B5DE7] transition-all hover:shadow-lg hover:shadow-blue-200">
            Попробовать бесплатно
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all">
            <Chrome size={18} className="text-[#4285F4]" />
            Установить расширение
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                style={{
                  background: `hsl(${i * 120}, 60%, 70%)`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-500 font-medium">500K+ пользователей присоединились</span>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden">
            {/* Dashboard mockup */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="px-4 py-1 bg-white rounded-lg border border-gray-200 text-xs text-gray-400 w-80 text-center">
                  app.dropmaster.ru
                </div>
              </div>
            </div>
            <div className="p-6">
              {/* Sidebar + Content mockup */}
              <div className="flex gap-6">
                <div className="hidden md:block w-48 space-y-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                    <div className="w-4 h-4 bg-[#4A6CF7] rounded" />
                    <span className="text-xs font-medium text-[#4A6CF7]">Дашборд</span>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold px-3 mt-3">Исследование</div>
                  {['Библиотека товаров', 'Анализ конкурентов', 'Трекер продаж', 'Реклама'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-500 hover:text-gray-700 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-3 h-3 bg-gray-200 rounded" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex-1 space-y-4">
                  {/* Search bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-4 h-4 bg-gray-300 rounded" />
                      <span className="text-xs text-gray-400">Поиск товаров...</span>
                    </div>
                    <div className="px-3 py-2.5 bg-[#4A6CF7] rounded-xl text-xs text-white font-medium">Поиск</div>
                    <div className="px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-xs text-gray-500">Фильтры</div>
                  </div>
                  {/* Product cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { name: 'Массажёр', price: '₽2,490', sales: '15.2K', trend: '+45%' },
                      { name: 'LED проектор', price: '₽1,890', sales: '22.1K', trend: '+67%' },
                      { name: 'Наушники TWS', price: '₽3,290', sales: '31.5K', trend: '+23%' },
                      { name: 'Фитнес-браслет', price: '₽1,290', sales: '56.8K', trend: '+78%' },
                    ].map((product, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
                        <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg mb-2" />
                        <p className="text-xs font-medium text-gray-800 truncate">{product.name}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500">{product.price}</span>
                          <span className="text-[10px] text-green-600 font-semibold">{product.trend}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{product.sales} продаж</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 rounded-3xl -z-10 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

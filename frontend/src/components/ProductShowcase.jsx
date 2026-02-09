import React, { useEffect, useRef } from 'react';
import { productShowcaseItems } from '../data/mockData';
import { TrendingUp } from 'lucide-react';

const ProductShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(scroll); };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const duplicatedItems = [...productShowcaseItems, ...productShowcaseItems];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Миллионы товаров у вас под рукой
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto text-lg">
          Найдите следующий прибыльный товар, исследуя нашу огромную базу данных с миллионами позиций. Используйте умные фильтры для точного поиска.
        </p>
      </div>

      {/* Scrolling product cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden px-6 pb-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[240px] p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#4A6CF7]/30 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-3 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">{item.name}</h3>
            <p className="text-lg font-bold text-gray-900">{item.price}</p>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
              <span className="text-xs text-gray-400">{item.sales} продаж</span>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp size={12} />
                <span className="text-xs font-semibold">{item.trend}</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">Выручка: {item.revenue}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#4A6CF7] bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
          Попробовать бесплатно
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;

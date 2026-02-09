import React from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import ToolsSection from '../components/landing/ToolsSection';
import BottomSections from '../components/landing/BottomSections';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* Products section between hero and tools */}
      <ProductsScrollSection />
      <ToolsSection />
      <BottomSections />
    </div>
  );
};

// Scrolling products marquee section (like dropship.io)
const ProductsScrollSection = () => {
  const products = [
    { name: 'Массажёр для лица', price: '1,290 ₽', emoji: '✨' },
    { name: 'LED зеркало', price: '2,490 ₽', emoji: '✨' },
    { name: 'Силиконовая щётка', price: '590 ₽', emoji: '✨' },
    { name: 'Термокружка', price: '1,890 ₽', emoji: '✨' },
    { name: 'Чехол MagSafe', price: '990 ₽', emoji: '✨' },
    { name: 'Корректор осанки', price: '1,490 ₽', emoji: '✨' },
    { name: 'Набор кистей', price: '790 ₽', emoji: '✨' },
    { name: 'Автодержатель', price: '1,190 ₽', emoji: '✨' },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="lg:w-[40%] shrink-0">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1A2E] leading-tight">
              Миллионы товаров<br />у вас под рукой
            </h2>
            <p className="text-[17px] text-[#6B7280] mt-3 leading-relaxed">
              Найдите свой следующий прибыльный товар в нашей базе. Используйте умные фильтры для поиска выигрышных позиций.
            </p>
            <button className="mt-6 px-6 py-3 text-[14px] font-semibold text-white bg-[#4361EE] rounded-full hover:bg-[#3651DE] transition-all duration-200 shadow-sm shadow-[#4361EE]/20">
              Попробовать бесплатно
            </button>
          </div>
          <div className="lg:w-[60%] relative">
            {/* Product grid */}
            <div className="grid grid-cols-4 gap-3">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="bg-[#FAFBFC] rounded-lg border border-gray-100 p-3 hover:shadow-md hover:border-[#4361EE]/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-md mb-2 flex items-center justify-center">
                    <span className="text-2xl opacity-30 group-hover:opacity-60 transition-opacity">{p.emoji}</span>
                  </div>
                  <p className="text-[11px] font-medium text-[#1A1A2E] leading-tight line-clamp-1">{p.name}</p>
                  <p className="text-[11px] font-bold text-[#4361EE] mt-0.5">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

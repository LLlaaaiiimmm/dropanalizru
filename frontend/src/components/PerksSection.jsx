import React, { useEffect, useRef } from 'react';
import { perks } from '../data/mockData';
import { Clock, BarChart3, Smartphone, Zap, DollarSign, MapPin } from 'lucide-react';

const iconMap = {
  Clock,
  BarChart3,
  Smartphone,
  Zap,
  DollarSign,
  MapPin,
};

const PerksSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let pos = 0;
    const speed = 0.4;

    const animate = () => {
      pos += speed;
      if (pos >= container.scrollWidth / 2) pos = 0;
      container.scrollLeft = pos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

  const duplicated = [...perks, ...perks];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Преимущества ДропМастер
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto text-lg">
          Создано селлерами для селлеров с миссией помочь предпринимателям запустить и развить успешный бизнес
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-hidden px-6"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicated.map((perk, idx) => {
          const Icon = iconMap[perk.icon];
          return (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#4A6CF7]/20 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#4A6CF7] transition-colors duration-300">
                <Icon size={22} className="text-[#4A6CF7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{perk.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PerksSection;

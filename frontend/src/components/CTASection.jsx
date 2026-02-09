import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative bg-[#4A6CF7] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Попробуйте ДропМастер<br />
              <span className="text-white/80">7 дней бесплатно</span>
            </h2>

            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
              Идеально для начинающих селлеров! Изучите все инструменты без обязательств — отмените в любое время.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-white/80">
              {['Попробуйте сегодня', '100% без риска', 'Отмена в любое время'].map((text, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle size={14} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#4A6CF7] bg-white rounded-full hover:bg-gray-50 transition-all hover:shadow-xl">
              Начать бесплатно
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

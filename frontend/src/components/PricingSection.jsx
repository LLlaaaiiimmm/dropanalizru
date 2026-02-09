import React, { useState } from 'react';
import { pricingPlans } from '../data/mockData';
import { Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Простые и понятные тарифы
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            Начните с 7-дневного бесплатного периода. Отмените в любое время.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual ? 'bg-[#4A6CF7] text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-[#4A6CF7] text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Ежегодно
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${annual ? 'bg-white/20' : 'bg-green-100 text-green-600'}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-7 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-white border-2 border-[#4A6CF7] shadow-xl shadow-blue-100/50 scale-[1.02]'
                  : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#4A6CF7] text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Sparkles size={12} />
                  Популярный
                </div>
              )}

              <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-5">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ₽{annual ? Math.round(parseInt(plan.price.replace(/\s/g, '')) * 0.8).toLocaleString('ru-RU') : plan.price}
                </span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[#4A6CF7] text-white hover:bg-[#3B5DE7] hover:shadow-lg hover:shadow-blue-200'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Начать бесплатно
              </button>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={10} className="text-[#4A6CF7]" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

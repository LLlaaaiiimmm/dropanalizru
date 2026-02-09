import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Package } from 'lucide-react';
import Header from '../components/landing/Header';
import { pricingPlans } from '../data/mockData';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F3FF] rounded-full border border-[#4361EE]/10 mb-6">
              <span className="text-[13px] font-semibold text-[#4361EE]">Простые и понятные тарифы</span>
            </div>
            <h1 className="text-[40px] md:text-[52px] font-extrabold text-[#1A1A2E] leading-tight">
              Выберите свой тариф
            </h1>
            <p className="text-[17px] text-[#6B7280] mt-4 max-w-[500px] mx-auto">
              Начните с бесплатного 7-дневного пробного периода. Отмена в любое время.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-7 border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? 'border-[#4361EE] shadow-lg shadow-[#4361EE]/10'
                    : 'border-gray-100 hover:border-[#4361EE]/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4361EE] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-[18px] font-bold text-[#1A1A2E]">{plan.name}</h3>
                <p className="text-sm text-[#6B7280] mt-1">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-[40px] font-extrabold text-[#1A1A2E]">{plan.price.toLocaleString()}</span>
                  <span className="text-[16px] text-[#6B7280]"> ₽/{plan.period}</span>
                </div>
                <button
                  className={`w-full mt-6 py-3 text-[14px] font-semibold rounded-full transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#4361EE] text-white hover:bg-[#3651DE] shadow-sm shadow-[#4361EE]/25'
                      : 'bg-white text-[#1A1A2E] border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  Начать бесплатно
                </button>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#4361EE] mt-0.5 shrink-0" />
                      <span className="text-[13px] text-[#4B5563]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-[700px] mx-auto">
            <h2 className="text-[28px] font-extrabold text-[#1A1A2E] text-center mb-10">Частые вопросы</h2>
            {[
              { q: 'Есть ли бесплатный пробный период?', a: 'Да! 7 дней полного доступа ко всем инструментам без ограничений. Карта не нужна.' },
              { q: 'Можно ли отменить подписку?', a: 'Конечно. Отменить можно в любой момент в один клик в личном кабинете.' },
              { q: 'Какие маркетплейсы поддерживаются?', a: 'Wildberries, Ozon, Яндекс Маркет, AliExpress Россия и МегаМаркет.' },
              { q: 'Что такое AI-Анализатор ниш?', a: 'Это уникальный инструмент на базе AI, который анализирует ниши и подсказывает товары с высокой маржинальностью и низкой конкуренцией.' },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white py-12">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#4361EE] rounded-lg flex items-center justify-center">
              <Package className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-lg font-bold">ДропЗона</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 ДропЗона. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-[#1A1A2E]">{question}</span>
        <span className={`text-[#4361EE] transition-transform duration-200 text-xl ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="text-[14px] text-[#6B7280] pb-5 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default PricingPage;

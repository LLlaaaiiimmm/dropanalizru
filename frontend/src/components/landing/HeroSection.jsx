import React from 'react';
import { ArrowRight, Chrome, TrendingUp, Users, Database, Shield } from 'lucide-react';
import { marketplaces, stats, trendingProducts } from '../../data/mockData';

const HeroSection = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4361EE 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-12 relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F3FF] rounded-full border border-[#4361EE]/10">
              <span className="text-[13px] font-semibold text-[#4361EE]">⚡ ДропЗона 2.0 уже доступна!</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-center text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1A1A2E] leading-[1.08] tracking-tight max-w-[800px] mx-auto">
            Находите прибыльные{' '}
            <span className="text-[#4361EE]">товары</span> для продажи
          </h1>

          {/* Subtitle */}
          <p className="text-center text-[17px] md:text-[19px] text-[#6B7280] max-w-[600px] mx-auto mt-5 leading-relaxed">
            Анализируйте маркетплейсы, отслеживайте конкурентов и находите выигрышные товары с помощью AI.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <button className="group px-7 py-3.5 text-[15px] font-semibold text-white bg-[#4361EE] rounded-full hover:bg-[#3651DE] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#4361EE]/20">
              Попробовать бесплатно
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="px-7 py-3.5 text-[15px] font-semibold text-[#4B5563] bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-2">
              <Chrome className="w-4.5 h-4.5 text-[#4361EE]" />
              Расширение для Chrome
            </button>
          </div>

          {/* Members */}
          <div className="flex items-center justify-center gap-2.5 mt-7">
            <div className="flex -space-x-2">
              {['#4361EE', '#10B981', '#F59E0B'].map((color, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: color }}>
                  {['АК', 'ЕВ', 'МД'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm text-[#6B7280] font-medium">500K+ пользователей</span>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-12 relative">
            <div className="bg-white rounded-xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden max-w-[1000px] mx-auto">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-[#FAFBFC]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-100 max-w-[300px] mx-auto">
                    app.dropzona.ru/dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#4361EE] rounded-md flex items-center justify-center">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-[#1A1A2E]">База товаров</span>
                    <span className="text-xs text-[#6B7280] bg-gray-50 px-2 py-0.5 rounded-full">Wildberries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6B7280]">Кредиты:</span>
                    <span className="text-xs font-semibold text-[#10B981]">12,892 / 25,000</span>
                  </div>
                </div>
                {/* Product table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-[#9CA3AF] border-b border-gray-50">
                        <th className="text-left py-2.5 font-medium">Товар</th>
                        <th className="text-right py-2.5 font-medium">Продажи</th>
                        <th className="text-right py-2.5 font-medium">Выручка</th>
                        <th className="text-right py-2.5 font-medium">Рост</th>
                        <th className="text-right py-2.5 font-medium">Маркетплейс</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trendingProducts.slice(0, 5).map((product, i) => (
                        <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3 text-sm font-medium text-[#1A1A2E]">{product.name}</td>
                          <td className="py-3 text-sm text-right text-[#4B5563]">{product.sales.toLocaleString()}</td>
                          <td className="py-3 text-sm text-right font-medium text-[#1A1A2E]">{product.revenue}</td>
                          <td className="py-3 text-sm text-right">
                            <span className="text-[#10B981] font-semibold">{product.growth}</span>
                          </td>
                          <td className="py-3 text-sm text-right">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              product.marketplace === 'WB' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                            }`}>
                              {product.marketplace}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace logos */}
      <section className="border-y border-gray-100 py-8 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-center text-xs font-semibold text-[#9CA3AF] tracking-widest uppercase mb-6">Работает со всеми маркетплейсами</p>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            {marketplaces.map((mp) => (
              <div key={mp.name} className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
                <span className="text-[15px] font-bold text-[#4B5563] tracking-tight">{mp.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#FAFBFC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-[36px] md:text-[42px] font-extrabold text-[#1A1A2E]">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-[36px] md:text-[42px] font-extrabold text-[#4361EE]">{stat.suffix}</span>
                </div>
                <p className="text-sm text-[#6B7280] mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

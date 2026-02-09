import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Brain, BarChart3, Users, Megaphone, Calculator, TrendingUp, Briefcase, Truck } from 'lucide-react';
import { tools } from '../../data/mockData';

const iconMap = {
  'product-db': Database,
  'ai-analyzer': Brain,
  'sales-tracker': BarChart3,
  'competitor': Users,
  'ad-library': Megaphone,
  'calculator': Calculator,
  'trends': TrendingUp,
  'portfolio': Briefcase,
  'suppliers': Truck,
};

const toolImages = {
  'product-db': (
    <div className="bg-gradient-to-br from-[#F0F3FF] to-white p-5 rounded-lg">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Database className="w-3.5 h-3.5 text-[#4361EE]" />
          <span className="font-semibold text-[#4361EE]">15,284,392 товара</span>
        </div>
        {[1,2,3].map(i => (
          <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-md border border-gray-50">
            <div className="w-8 h-8 bg-gray-100 rounded-md" />
            <div className="flex-1">
              <div className="h-2 bg-gray-100 rounded w-24" />
              <div className="h-1.5 bg-gray-50 rounded w-16 mt-1.5" />
            </div>
            <span className="text-[10px] font-bold text-[#10B981]">+{20+i*12}%</span>
          </div>
        ))}
      </div>
    </div>
  ),
  'ai-analyzer': (
    <div className="bg-gradient-to-br from-[#F5F0FF] to-white p-5 rounded-lg">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-[#7C3AED]" />
          <span className="text-xs font-bold text-[#7C3AED]">AI анализирует нишу...</span>
        </div>
        <div className="bg-white rounded-md p-3 border border-purple-50">
          <div className="text-[10px] text-[#6B7280] mb-1">Рекомендация:</div>
          <div className="text-xs font-semibold text-[#1A1A2E]">Аксессуары для дома</div>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-[10px]"><span className="text-[#10B981] font-bold">Маржа: 45%</span></div>
            <div className="text-[10px]"><span className="text-[#4361EE] font-bold">Конкуренция: Низкая</span></div>
          </div>
        </div>
        <div className="h-1.5 bg-purple-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#7C3AED] rounded-full w-[78%]" />
        </div>
        <div className="text-[10px] text-[#9CA3AF]">Точность прогноза: 94%</div>
      </div>
    </div>
  ),
  'sales-tracker': (
    <div className="bg-gradient-to-br from-[#ECFDF5] to-white p-5 rounded-lg">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#1A1A2E]">Трекер продаж</span>
          <span className="text-[10px] text-[#10B981] font-bold">Live</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {[40,55,35,70,60,85,75,90,65,80].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm transition-all" style={{ height: `${h}%`, backgroundColor: i >= 7 ? '#4361EE' : '#E5E7EB' }} />
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] text-[#9CA3AF]">
          <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span>
        </div>
      </div>
    </div>
  ),
  'competitor': (
    <div className="bg-gradient-to-br from-[#FFF7ED] to-white p-5 rounded-lg">
      <div className="space-y-2">
        {[{name: 'store_wb_01', sales: '2.4М ₽'}, {name: 'ozon_seller', sales: '1.8М ₽'}, {name: 'top_market', sales: '3.1М ₽'}].map((s, i) => (
          <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-md border border-gray-50">
            <div className="w-7 h-7 bg-orange-50 rounded-full flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-orange-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-[#1A1A2E]">{s.name}</div>
              <div className="text-[10px] text-[#9CA3AF]">{s.sales} / мес</div>
            </div>
            <ArrowRight className="w-3 h-3 text-[#9CA3AF]" />
          </div>
        ))}
      </div>
    </div>
  ),
  'ad-library': (
    <div className="bg-gradient-to-br from-[#EFF6FF] to-white p-5 rounded-lg">
      <div className="grid grid-cols-2 gap-2">
        {[1,2,3,4].map(i => (
          <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-md flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-gray-300" />
          </div>
        ))}
      </div>
      <div className="mt-2 text-[10px] text-center text-[#4361EE] font-semibold">1.2M+ рекламных объявлений</div>
    </div>
  ),
  'calculator': (
    <div className="bg-gradient-to-br from-[#ECFDF5] to-white p-5 rounded-lg">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#1A1A2E]">Юнит-экономика</div>
        {[{label: 'Себестоимость', value: '450 ₽', color: '#EF4444'}, {label: 'Комиссия WB', value: '270 ₽', color: '#F59E0B'}, {label: 'Логистика', value: '120 ₽', color: '#6B7280'}, {label: 'Чистая прибыль', value: '560 ₽', color: '#10B981'}].map((item, i) => (
          <div key={i} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}} />
              <span className="text-[#6B7280]">{item.label}</span>
            </div>
            <span className="font-semibold" style={{color: item.color}}>{item.value}</span>
          </div>
        ))}
        <div className="pt-1.5 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] text-[#9CA3AF]">Маржинальность</span>
          <span className="text-xs font-bold text-[#10B981]">40%</span>
        </div>
      </div>
    </div>
  ),
  'trends': (
    <div className="bg-gradient-to-br from-[#FFF1F2] to-white p-5 rounded-lg">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#1A1A2E]">Тренды</div>
        {['Массажёр для лица', 'LED лампы', 'Корректор осанки'].map((t, i) => (
          <div key={i} className="flex items-center gap-2 p-1.5 bg-white rounded-md border border-gray-50">
            <span className="text-[10px] font-bold text-[#EF4444]">#{i+1}</span>
            <span className="text-xs text-[#4B5563]">{t}</span>
            <TrendingUp className="w-3 h-3 text-[#10B981] ml-auto" />
          </div>
        ))}
      </div>
    </div>
  ),
  'portfolio': (
    <div className="bg-gradient-to-br from-[#F0F3FF] to-white p-5 rounded-lg">
      <div className="text-xs font-semibold text-[#1A1A2E] mb-2">Подборка недели</div>
      <div className="grid grid-cols-3 gap-1.5">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-md" />
        ))}
      </div>
      <div className="mt-2 text-[10px] text-center text-[#4361EE] font-semibold">40 товаров каждую неделю</div>
    </div>
  ),
  'suppliers': (
    <div className="bg-gradient-to-br from-[#FFF7ED] to-white p-5 rounded-lg">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#1A1A2E]">Поставщики</div>
        {[{name: 'YiwuTrade', loc: 'Иу, Китай', rating: 4.8}, {name: 'RuSupply', loc: 'Москва, РФ', rating: 4.9}].map((s, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-md border border-gray-50">
            <div className="w-7 h-7 bg-orange-50 rounded-full flex items-center justify-center">
              <Truck className="w-3.5 h-3.5 text-orange-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-[#1A1A2E]">{s.name}</div>
              <div className="text-[10px] text-[#9CA3AF]">{s.loc}</div>
            </div>
            <span className="text-[10px] font-bold text-[#F59E0B]">★ {s.rating}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

const ToolsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1A2E] leading-tight">Инструменты ДропЗоны</h2>
        <p className="text-[17px] text-[#6B7280] mt-3 max-w-[500px]">Прокачайте свой бизнес на маркетплейсах с нашей коллекцией инструментов</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {tools.map((tool) => {
            const Icon = iconMap[tool.image] || Database;
            return (
              <Link
                key={tool.id}
                to={tool.link}
                className="group bg-white rounded-xl border border-gray-100 hover:border-[#4361EE]/20 hover:shadow-lg hover:shadow-[#4361EE]/5 transition-all duration-300 overflow-hidden"
              >
                {/* Tool preview image */}
                <div className="overflow-hidden">
                  {toolImages[tool.image]}
                </div>
                {/* Tool info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[16px] font-bold text-[#1A1A2E] group-hover:text-[#4361EE] transition-colors">{tool.title}</h3>
                    {tool.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        tool.badgeColor === 'red' ? 'bg-red-50 text-red-500' :
                        tool.badgeColor === 'blue' ? 'bg-blue-50 text-blue-500' :
                        tool.badgeColor === 'green' ? 'bg-emerald-50 text-emerald-600' :
                        'bg-purple-50 text-purple-600'
                      }`}>
                        {tool.badge}
                      </span>
                    )}
                    {tool.secondBadge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        tool.secondBadgeColor === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {tool.secondBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#6B7280] mt-2 leading-relaxed line-clamp-2">{tool.description}</p>
                  <div className="flex items-center gap-1.5 mt-3 text-[13px] font-semibold text-[#4361EE] opacity-0 group-hover:opacity-100 transition-opacity">
                    Подробнее <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

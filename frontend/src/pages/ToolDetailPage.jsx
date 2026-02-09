import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Package, Check, Star, TrendingUp, BarChart3, Brain, Calculator, Megaphone, Users, Truck, Briefcase } from 'lucide-react';
import Header from '../components/landing/Header';
import { tools } from '../data/mockData';

const iconMap = {
  'product-db': BarChart3,
  'niche-analyzer': Brain,
  'sales-tracker': TrendingUp,
  'competitor-research': Users,
  'ad-library': Megaphone,
  'unit-economics': Calculator,
  'trend-monitor': TrendingUp,
  'portfolio': Briefcase,
  'supplier-db': Truck,
};

const ToolDetailPage = () => {
  const { toolId } = useParams();
  const tool = tools.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Инструмент не найден</h1>
          <Link to="/" className="text-[#4361EE] mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[tool.id] || Package;

  const features = [
    'Реальные данные продаж с маркетплейсов',
    'Фильтры по категории, цене, выручке и росту',
    'Ежедневное обновление данных',
    'Экспорт в Excel / CSV',
    'Интеграция с другими инструментами',
    'API доступ для автоматизации',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4361EE] mb-8 hover:gap-2.5 transition-all">
            <ArrowLeft className="w-4 h-4" /> Назад
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {tool.badge && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    tool.badgeColor === 'red' ? 'bg-red-50 text-red-500' :
                    tool.badgeColor === 'blue' ? 'bg-blue-50 text-blue-500' :
                    tool.badgeColor === 'green' ? 'bg-emerald-50 text-emerald-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {tool.badge}
                  </span>
                )}
                {tool.secondBadge && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-600">{tool.secondBadge}</span>
                )}
              </div>
              <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1A1A2E] leading-tight">
                {tool.title}
              </h1>
              <p className="text-[17px] text-[#6B7280] mt-4 leading-relaxed">
                {tool.description}
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4361EE] shrink-0" />
                    <span className="text-[15px] text-[#4B5563]">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-7 py-3.5 text-[15px] font-semibold text-white bg-[#4361EE] rounded-full hover:bg-[#3651DE] transition-all duration-200 shadow-lg shadow-[#4361EE]/20 flex items-center gap-2">
                Попробовать бесплатно <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tool preview */}
            <div className="bg-[#FAFBFC] rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#4361EE] rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A2E]">{tool.title}</h3>
                  <p className="text-sm text-[#6B7280]">Доступно на всех тарифах</p>
                </div>
              </div>
              <div className="space-y-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-50 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-md" />
                    <div className="flex-1">
                      <div className="h-2.5 bg-gray-100 rounded w-32" />
                      <div className="h-2 bg-gray-50 rounded w-20 mt-2" />
                    </div>
                    <div className="text-right">
                      <div className="h-2.5 bg-gray-100 rounded w-16" />
                      <div className="h-2 bg-emerald-50 rounded w-10 mt-2 ml-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolDetailPage;

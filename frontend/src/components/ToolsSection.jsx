import React, { useState } from 'react';
import { tools } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const ToolsSection = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Инструменты ДропМастер
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Усильте свой ресёрч с помощью нашей коллекции профессиональных инструментов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {tool.badge && (
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold text-white rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: tool.badgeColor }}
                  >
                    {tool.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4A6CF7] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {tool.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#4A6CF7] group-hover:gap-3 transition-all">
                  Подробнее
                  <ArrowRight size={14} className={`transition-all duration-300 ${hoveredTool === tool.id ? 'translate-x-1 opacity-100' : 'opacity-60'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

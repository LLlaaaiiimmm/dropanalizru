import React from 'react';
import { stats, mapSales } from '../data/mockData';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Начните продавать в быстрорастущей отрасли
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 text-lg">
          Российский e-commerce растёт на 30% ежегодно. Присоединяйтесь сейчас!
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 group">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#4A6CF7] transition-colors">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Map visualization */}
        <div className="relative w-full max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 overflow-hidden">
          {/* Simple map shape */}
          <div className="relative aspect-[2/1] w-full">
            <svg viewBox="0 0 100 50" className="w-full h-full" fill="none">
              {/* Simplified Russia outline */}
              <path
                d="M25 15 C30 10, 40 8, 50 12 C60 8, 75 10, 90 15 C95 20, 95 30, 90 35 C80 40, 65 42, 50 38 C40 42, 30 40, 25 35 C20 30, 20 20, 25 15Z"
                fill="#EEF2FF"
                stroke="#C7D2FE"
                strokeWidth="0.3"
              />
            </svg>

            {/* Sales pins */}
            {mapSales.map((sale, idx) => (
              <div
                key={idx}
                className="absolute group cursor-pointer"
                style={{ left: `${sale.x}%`, top: `${sale.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-[#4A6CF7] rounded-full shadow-lg shadow-blue-200 group-hover:scale-150 transition-transform" />
                  <div className="absolute w-3 h-3 bg-[#4A6CF7] rounded-full animate-ping opacity-30" />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-white rounded-lg shadow-lg border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <p className="text-[10px] font-semibold text-gray-800">{sale.city}</p>
                  <p className="text-[10px] text-green-600 font-bold">{sale.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

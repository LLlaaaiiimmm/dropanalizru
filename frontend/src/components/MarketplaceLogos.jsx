import React from 'react';
import { marketplaces } from '../data/mockData';

const MarketplaceLogos = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-8">
          Подходит для всех маркетплейсов
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {marketplaces.map((mp, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-bold"
                style={{ backgroundColor: mp.color }}
              >
                {mp.name[0]}
              </div>
              <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-800 transition-colors">
                {mp.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceLogos;

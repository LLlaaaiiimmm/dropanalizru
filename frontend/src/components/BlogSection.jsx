import React from 'react';
import { blogArticles } from '../data/mockData';
import { ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Последние статьи
            </h2>
            <p className="text-gray-500 text-lg">Полезные материалы для селлеров</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#4A6CF7] hover:gap-3 transition-all">
            Все статьи
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogArticles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#4A6CF7] transition-colors leading-snug mb-3">
                {article.title}
              </h3>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={article.authorAvatar}
                    alt={article.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium">{article.author}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A6CF7]">
            Все статьи
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

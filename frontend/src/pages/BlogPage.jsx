import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import Header from '../components/landing/Header';
import { tools } from '../data/mockData';

const BlogPage = () => {
  const posts = [
    {
      title: 'Как начать дропшиппинг на Wildberries в 2025 году',
      date: '15 июля 2025',
      readTime: '12 мин',
      author: 'Алексей М.',
      excerpt: 'Подробный гайд по запуску дропшиппинг бизнеса на Wildberries. От регистрации до первых продаж.',
    },
    {
      title: 'Топ-20 самых прибыльных ниш на Ozon',
      date: '12 июля 2025',
      readTime: '18 мин',
      author: 'Мария К.',
      excerpt: 'Анализ ниш на Ozon с реальными цифрами продаж и маржинальностью.',
    },
    {
      title: 'Как найти поставщика в Китае: полный гайд',
      date: '8 июля 2025',
      readTime: '22 мин',
      author: 'Дмитрий С.',
      excerpt: 'Пошаговая инструкция по поиску надёжных поставщиков на 1688, Alibaba и напрямую.',
    },
    {
      title: 'Юнит-экономика маркетплейсов: считаем прибыль правильно',
      date: '5 июля 2025',
      readTime: '15 мин',
      author: 'Алексей М.',
      excerpt: 'Разбираем все расходы: комиссии, логистика, налоги, возвраты.',
    },
    {
      title: 'Как анализировать конкурентов на маркетплейсах',
      date: '1 июля 2025',
      readTime: '14 мин',
      author: 'Мария К.',
      excerpt: 'Узнайте стратегии анализа конкурентов с помощью ДропЗоны.',
    },
    {
      title: 'AI в e-commerce: как использовать нейросети для поиска товаров',
      date: '28 июня 2025',
      readTime: '10 мин',
      author: 'Дмитрий С.',
      excerpt: 'Как AI-анализатор ДропЗоны помогает находить прибыльные ниши.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-[40px] md:text-[52px] font-extrabold text-[#1A1A2E] leading-tight">Блог</h1>
          <p className="text-[17px] text-[#6B7280] mt-3 max-w-[500px]">
            Статьи, гайды и инсайты для селлеров на маркетплейсах
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {posts.map((post, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="aspect-[16/10] bg-gradient-to-br from-[#F0F3FF] to-[#E8ECFF] flex items-center justify-center">
                  <Package className="w-10 h-10 text-[#4361EE]/20" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[12px] text-[#9CA3AF] mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1A1A2E] leading-snug group-hover:text-[#4361EE] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] mt-2 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-7 h-7 bg-[#4361EE] rounded-full flex items-center justify-center text-[9px] font-bold text-white">
                      {post.author.split(' ').map(w => w[0]).join('')}
                    </div>
                    <span className="text-xs text-[#6B7280] font-medium">{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

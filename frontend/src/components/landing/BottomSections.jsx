import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BarChart3, Brain, Mail, Smartphone, Wallet, Star, Package, ExternalLink } from 'lucide-react';
import { perks, blogPosts, salesMapData, testimonials } from '../../data/mockData';

const perkIcons = {
  clock: Clock,
  chart: BarChart3,
  brain: Brain,
  mail: Mail,
  mobile: Smartphone,
  wallet: Wallet,
};

// ================== PERKS SECTION ==================
const PerksSection = () => (
  <section className="py-20 bg-[#FAFBFC]">
    <div className="max-w-[1280px] mx-auto px-6">
      <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1A2E] text-center leading-tight">
        Преимущества ДропЗоны
      </h2>
      <p className="text-[17px] text-[#6B7280] mt-3 text-center max-w-[500px] mx-auto">
        Создано селлерами для селлеров с миссией помочь начать и масштабировать бизнес
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {perks.map((perk, i) => {
          const Icon = perkIcons[perk.icon] || Clock;
          return (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#4361EE]/15 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-[#F0F3FF] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4361EE] transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#4361EE] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[16px] font-bold text-[#1A1A2E] mb-2">{perk.title}</h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">{perk.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ================== TESTIMONIALS SECTION ==================
const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-[1280px] mx-auto px-6">
      <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1A2E] text-center">Отзывы пользователей</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#FAFBFC] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <p className="text-[14px] text-[#4B5563] leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#4361EE] rounded-full flex items-center justify-center text-[11px] font-bold text-white">
                {t.name.split(' ').map(w => w[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A2E]">{t.name}</p>
                <p className="text-xs text-[#9CA3AF]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ================== MAP SECTION ==================
const MapSection = () => (
  <section className="py-20 bg-[#FAFBFC] overflow-hidden">
    <div className="max-w-[1280px] mx-auto px-6">
      <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1A2E] text-center">
        Продажи по всей России
      </h2>
      <p className="text-[17px] text-[#6B7280] mt-3 text-center max-w-[500px] mx-auto">
        Дропшиппинг растёт стремительно — начните продавать в быстрорастущей отрасли
      </p>
      <div className="relative mt-12 h-[300px] bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Animated sale popups */}
        <div className="absolute inset-0">
          {salesMapData.map((sale, i) => {
            const positions = [
              { top: '15%', left: '35%' }, { top: '12%', left: '28%' },
              { top: '30%', left: '50%' }, { top: '35%', left: '70%' },
              { top: '20%', left: '68%' }, { top: '55%', left: '30%' },
              { top: '60%', left: '42%' }, { top: '45%', left: '55%' },
              { top: '40%', left: '38%' }, { top: '50%', left: '25%' },
              { top: '25%', left: '78%' }, { top: '65%', left: '60%' },
              { top: '70%', left: '75%' }, { top: '35%', left: '85%' },
              { top: '55%', left: '80%' },
            ];
            const pos = positions[i % positions.length];
            return (
              <div
                key={i}
                className="absolute flex items-center gap-1.5 bg-white rounded-full px-2.5 py-1 shadow-md border border-gray-50 animate-pulse"
                style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.3}s`, animationDuration: `${2 + i * 0.2}s` }}
              >
                <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                <span className="text-[10px] font-semibold text-[#1A1A2E]">{sale.amount}</span>
                <span className="text-[9px] text-[#9CA3AF]">{sale.city}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

// ================== CTA SECTION ==================
const CTASection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-[800px] mx-auto px-6 text-center">
      <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#1A1A2E] leading-tight">
        Попробуйте бесплатно <br />7 дней
      </h2>
      <p className="text-[17px] text-[#6B7280] mt-4 max-w-[500px] mx-auto">
        Идеально для начинающих селлеров! Получите доступ ко всем инструментам без обязательств — отмена в любое время.
      </p>
      <div className="flex items-center justify-center gap-4 mt-3 text-sm text-[#6B7280]">
        <span>Бесплатно</span>
        <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
        <span>Без риска</span>
        <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
        <span>Отмена в любое время</span>
      </div>
      <button className="mt-8 px-8 py-4 text-[16px] font-semibold text-white bg-[#4361EE] rounded-full hover:bg-[#3651DE] transition-all duration-200 shadow-lg shadow-[#4361EE]/20">
        Начать бесплатно
      </button>
    </div>
  </section>
);

// ================== BLOG SECTION ==================
const BlogSection = () => (
  <section className="py-20 bg-[#FAFBFC]">
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1A2E]">Последние статьи</h2>
        <Link to="/blog" className="text-[14px] font-semibold text-[#4361EE] flex items-center gap-1.5 hover:gap-2.5 transition-all">
          Все статьи <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogPosts.map((post, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="aspect-[16/10] bg-gradient-to-br from-[#F0F3FF] to-[#E8ECFF] flex items-center justify-center">
              <Package className="w-8 h-8 text-[#4361EE]/30" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-[11px] text-[#9CA3AF] mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-[14px] font-bold text-[#1A1A2E] leading-snug group-hover:text-[#4361EE] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 bg-[#4361EE] rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                  {post.author.split(' ').map(w => w[0]).join('')}
                </div>
                <span className="text-xs text-[#6B7280]">{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ================== FOOTER ==================
const Footer = () => (
  <footer className="bg-[#1A1A2E] text-white py-16">
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-[#4361EE] rounded-lg flex items-center justify-center">
              <Package className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">ДропЗона</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Платформа для поиска прибыльных товаров на российских маркетплейсах.
          </p>
        </div>

        {/* Links */}
        {[
          {
            title: 'Инструменты',
            links: ['База товаров', 'AI-Анализатор', 'Трекер продаж', 'Анализ конкурентов', 'Калькулятор'],
          },
          {
            title: 'Компания',
            links: ['О нас', 'Блог', 'Тарифы', 'Партнёрская программа', 'Контакты'],
          },
          {
            title: 'Поддержка',
            links: ['Справочный центр', 'Обучение', 'API', 'Статус сервиса', 'Обратная связь'],
          },
        ].map((section, i) => (
          <div key={i}>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link, j) => (
                <li key={j}>
                  <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2025 ДропЗона. Все права защищены.</p>
        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</span>
          <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">Условия использования</span>
        </div>
      </div>
    </div>
  </footer>
);

const BottomSections = () => (
  <>
    <PerksSection />
    <TestimonialsSection />
    <MapSection />
    <CTASection />
    <BlogSection />
    <Footer />
  </>
);

export default BottomSections;

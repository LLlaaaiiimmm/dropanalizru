import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Инструменты': [
      'Библиотека товаров',
      'Анализ конкурентов',
      'Библиотека рекламы',
      'Трекер продаж',
      'AI Telegram бот',
      'Калькулятор маржи',
    ],
    'Ресурсы': ['Блог', 'Обучение', 'FAQ', 'Поддержка', 'Партнёрская программа'],
    'Компания': ['О нас', 'Карьера', 'Контакты', 'Политика конфиденциальности', 'Условия использования'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & description */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#4A6CF7] rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Дроп<span className="text-[#4A6CF7]">Мастер</span>
              </span>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Платформа № 1 для анализа товаров на российских маркетплейсах. Находите прибыльные товары, анализируйте конкурентов и растите вместе с нами.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4A6CF7] transition-colors"
              />
              <button className="px-4 py-2.5 bg-[#4A6CF7] rounded-xl hover:bg-[#3B5DE7] transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2025 ДропМастер. Все права защищены.
          </p>
          <div className="flex items-center gap-5">
            {['VK', 'TG', 'YT'].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

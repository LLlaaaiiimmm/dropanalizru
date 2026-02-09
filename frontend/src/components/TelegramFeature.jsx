import React, { useState } from 'react';
import { Send, Bell, TrendingUp, MessageCircle, Bot, Sparkles } from 'lucide-react';

const TelegramFeature = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setPhoneNumber('');
    }
  };

  const chatMessages = [
    {
      type: 'bot',
      text: '📊 Новый трендовый товар!',
      time: '09:15',
    },
    {
      type: 'bot',
      text: 'Массажёр для шеи Pro\nЦена: ₽2,490\nПродажи: +45% за неделю\nВыручка: ₽37.8M\nWB категория: Здоровье',
      time: '09:15',
    },
    {
      type: 'user',
      text: 'Какая маржа на WB?',
      time: '09:16',
    },
    {
      type: 'bot',
      text: 'Комиссия WB: 15%\nЛогистика: ~₽120\nЧистая маржа: ~42%\n✅ Рекомендуем к запуску!',
      time: '09:16',
    },
  ];

  return (
    <section id="telegram" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-full text-xs font-semibold text-purple-600 mb-6">
              <Sparkles size={14} />
              УНИКАЛЬНАЯ ФИШКА
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              AI Telegram-бот для{' '}
              <span className="text-[#4A6CF7]">умных продавцов</span>
            </h2>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Наш ИИ-бот анализирует рынок 24/7 и отправляет вам трендовые товары прямо в Telegram.
              Рассчитывает маржу с учётом комиссий маркетплейсов и отвечает на вопросы о любом товаре.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Bell, text: 'Мгновенные уведомления о трендовых товарах' },
                { icon: TrendingUp, text: 'Расчёт маржи с учётом комиссий WB, Ozon, ЯМ' },
                { icon: MessageCircle, text: 'Ответы на вопросы о товарах и нишах' },
                { icon: Bot, text: 'Работает 24/7 без вашего участия' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-[#4A6CF7]" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Subscribe form */}
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ваш Telegram @username"
                className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#4A6CF7] focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#4A6CF7] text-white text-sm font-semibold rounded-xl hover:bg-[#3B5DE7] transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2"
              >
                <Send size={16} />
                {submitted ? 'Отправлено!' : 'Подключить'}
              </button>
            </form>
          </div>

          {/* Right - Chat mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden max-w-sm mx-auto">
              {/* Chat header */}
              <div className="bg-[#4A6CF7] text-white px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">ДропМастер Bot</p>
                  <p className="text-xs text-white/70">онлайн</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-3 bg-gray-50 min-h-[320px]">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                        msg.type === 'user'
                          ? 'bg-[#4A6CF7] text-white rounded-tr-sm'
                          : 'bg-white text-gray-700 border border-gray-100 rounded-tl-sm shadow-sm'
                      }`}
                    >
                      {msg.text}
                      <p
                        className={`text-[10px] mt-1 ${msg.type === 'user' ? 'text-white/60' : 'text-gray-400'}`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat input */}
              <div className="p-3 border-t border-gray-100 flex items-center gap-2">
                <div className="flex-1 px-4 py-2 bg-gray-50 rounded-full text-xs text-gray-400">
                  Напишите сообщение...
                </div>
                <div className="w-8 h-8 bg-[#4A6CF7] rounded-full flex items-center justify-center">
                  <Send size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-semibold text-gray-700">Новый тренд!</span>
            </div>
            <div className="absolute -bottom-2 -left-4 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100 text-xs font-semibold text-green-600">
              +45% за неделю
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramFeature;

// ============== MOCK DATA FOR DROPZONA ==============

export const marketplaces = [
  { name: 'Wildberries', logo: 'WB' },
  { name: 'Ozon', logo: 'OZON' },
  { name: 'Яндекс Маркет', logo: 'Я.Маркет' },
  { name: 'AliExpress', logo: 'AliExpress' },
  { name: 'МегаМаркет', logo: 'МегаМаркет' },
  { name: 'KazanExpress', logo: 'KE' },
];

export const tools = [
  {
    id: 'product-db',
    title: 'База товаров',
    description: 'Доступ к базе из миллионов товаров на Wildberries и Ozon. Смотрите продажи, выручку и динамику в реальном времени.',
    badge: 'HOT',
    badgeColor: 'red',
    image: 'product-db',
    link: '/tools/product-db',
  },
  {
    id: 'niche-analyzer',
    title: 'AI-Анализатор ниш',
    description: 'Нейросеть анализирует ниши на маркетплейсах и подсказывает прибыльные товары с низкой конкуренцией.',
    badge: 'NEW',
    badgeColor: 'blue',
    secondBadge: 'AI',
    secondBadgeColor: 'purple',
    image: 'ai-analyzer',
    link: '/tools/niche-analyzer',
  },
  {
    id: 'sales-tracker',
    title: 'Трекер продаж',
    description: 'Добавляйте магазины и товары для отслеживания продаж, выручки и трендов на маркетплейсах.',
    badge: 'HOT',
    badgeColor: 'red',
    image: 'sales-tracker',
    link: '/tools/sales-tracker',
  },
  {
    id: 'competitor-research',
    title: 'Анализ конкурентов',
    description: 'Исследуйте магазины конкурентов: их товары, цены, стратегии и объёмы продаж.',
    image: 'competitor',
    link: '/tools/competitor-research',
  },
  {
    id: 'ad-library',
    title: 'Библиотека рекламы',
    description: 'Находите успешные рекламные кампании в VK, Telegram и на маркетплейсах. Анализируйте креативы конкурентов.',
    badge: 'NEW',
    badgeColor: 'blue',
    image: 'ad-library',
    link: '/tools/ad-library',
  },
  {
    id: 'unit-economics',
    title: 'Калькулятор юнит-экономики',
    description: 'Рассчитайте прибыль с учётом комиссий маркетплейсов, логистики, налогов и возвратов. Уникальный инструмент.',
    badge: 'ЭКСКЛЮЗИВ',
    badgeColor: 'green',
    image: 'calculator',
    link: '/tools/unit-economics',
  },
  {
    id: 'trend-monitor',
    title: 'Мониторинг трендов',
    description: 'Отслеживайте трендовые товары в VK, Telegram и социальных сетях. Будьте первыми кто найдёт тренд.',
    image: 'trends',
    link: '/tools/trend-monitor',
  },
  {
    id: 'portfolio',
    title: 'Портфолио',
    description: 'Получайте до 40 отобранных вручную товаров каждую неделю от наших специалистов.',
    image: 'portfolio',
    link: '/tools/portfolio',
  },
  {
    id: 'supplier-db',
    title: 'База поставщиков',
    description: 'Найдите проверенных поставщиков в России и Китае. Рейтинги, отзывы и условия сотрудничества.',
    badge: 'NEW',
    badgeColor: 'blue',
    image: 'suppliers',
    link: '/tools/supplier-db',
  },
];

export const perks = [
  {
    title: 'Экономьте время и деньги',
    description: 'Автоматизированный анализ рынка вместо ручного исследования. Получайте данные за секунды.',
    icon: 'clock',
  },
  {
    title: 'Глубокая аналитика',
    description: 'Детальные отчёты по каждому товару: продажи, выручка, конкуренция, тренды и сезонность.',
    icon: 'chart',
  },
  {
    title: 'AI-помощник',
    description: 'Искусственный интеллект анализирует миллионы данных и находит скрытые возможности для заработка.',
    icon: 'brain',
  },
  {
    title: 'Автоматические отчёты',
    description: 'Еженедельные подборки товаров и рыночных возможностей прямо на вашу почту.',
    icon: 'mail',
  },
  {
    title: 'Мобильный доступ',
    description: 'Работайте с платформой с любого устройства. Полный функционал на мобильных.',
    icon: 'mobile',
  },
  {
    title: 'Одна продажа — подписка окупилась',
    description: 'Достаточно одной успешной продажи, чтобы окупить месячную подписку.',
    icon: 'wallet',
  },
];

export const blogPosts = [
  {
    title: 'Как начать дропшиппинг на Wildberries в 2025 году',
    date: '15 июля 2025',
    readTime: '12 мин',
    author: 'Алексей М.',
    image: 'blog-1',
  },
  {
    title: 'Топ-20 самых прибыльных ниш на Ozon',
    date: '12 июля 2025',
    readTime: '18 мин',
    author: 'Мария К.',
    image: 'blog-2',
  },
  {
    title: 'Как найти поставщика в Китае: полный гайд',
    date: '8 июля 2025',
    readTime: '22 мин',
    author: 'Дмитрий С.',
    image: 'blog-3',
  },
  {
    title: 'Юнит-экономика маркетплейсов: считаем прибыль правильно',
    date: '5 июля 2025',
    readTime: '15 мин',
    author: 'Алексей М.',
    image: 'blog-4',
  },
];

export const pricingPlans = [
  {
    name: 'Стартовый',
    price: 1490,
    period: 'мес',
    description: 'Для начинающих селлеров',
    features: [
      'База товаров — 100 запросов/день',
      'Анализ конкурентов — 10 магазинов',
      'Калькулятор юнит-экономики',
      'Еженедельная подборка товаров',
      'Email поддержка',
    ],
    popular: false,
  },
  {
    name: 'Профессиональный',
    price: 2990,
    period: 'мес',
    description: 'Для активных продавцов',
    features: [
      'База товаров — безлимитно',
      'AI-Анализатор ниш',
      'Трекер продаж — 50 товаров',
      'Анализ конкурентов — безлимитно',
      'Библиотека рекламы',
      'Мониторинг трендов',
      'Приоритетная поддержка',
    ],
    popular: true,
  },
  {
    name: 'Бизнес',
    price: 5990,
    period: 'мес',
    description: 'Для опытных предпринимателей',
    features: [
      'Все инструменты — безлимитно',
      'AI-Анализатор ниш PRO',
      'Трекер продаж — безлимитно',
      'База поставщиков',
      'API доступ',
      'Персональный менеджер',
      'Обучающие вебинары',
      'Ранний доступ к новым функциям',
    ],
    popular: false,
  },
];

export const stats = [
  { value: 500000, suffix: '+', label: 'Пользователей' },
  { value: 15, suffix: 'М+', label: 'Товаров в базе' },
  { value: 50000, suffix: '+', label: 'Магазинов отслеживается' },
  { value: 99, suffix: '%', label: 'Точность данных' },
];

export const trendingProducts = [
  { name: 'Массажёр для лица', sales: 12450, revenue: '2.4М ₽', growth: '+45%', marketplace: 'WB' },
  { name: 'LED зеркало', sales: 8930, revenue: '1.8М ₽', growth: '+32%', marketplace: 'Ozon' },
  { name: 'Силиконовая щётка', sales: 15200, revenue: '890К ₽', growth: '+67%', marketplace: 'WB' },
  { name: 'Термокружка', sales: 6780, revenue: '3.1М ₽', growth: '+28%', marketplace: 'WB' },
  { name: 'Чехол MagSafe', sales: 22100, revenue: '5.5М ₽', growth: '+52%', marketplace: 'Ozon' },
  { name: 'Корректор осанки', sales: 9340, revenue: '1.2М ₽', growth: '+41%', marketplace: 'WB' },
  { name: 'Автодержатель', sales: 11200, revenue: '2.8М ₽', growth: '+38%', marketplace: 'Ozon' },
  { name: 'Набор кистей', sales: 7650, revenue: '960К ₽', growth: '+55%', marketplace: 'WB' },
];

export const salesMapData = [
  { city: 'Москва', amount: '₽2,450' },
  { city: 'СПб', amount: '₽1,890' },
  { city: 'Казань', amount: '₽980' },
  { city: 'Новосибирск', amount: '₽1,240' },
  { city: 'Екатеринбург', amount: '₽1,560' },
  { city: 'Краснодар', amount: '₽870' },
  { city: 'Ростов', amount: '₽1,100' },
  { city: 'Самара', amount: '₽760' },
  { city: 'Нижний Новгород', amount: '₽920' },
  { city: 'Воронеж', amount: '₽650' },
  { city: 'Челябинск', amount: '₽540' },
  { city: 'Пермь', amount: '₽430' },
  { city: 'Тюмень', amount: '₽680' },
  { city: 'Уфа', amount: '₽590' },
  { city: 'Омск', amount: '₽370' },
];

export const testimonials = [
  {
    name: 'Андрей К.',
    role: 'Селлер на Wildberries',
    text: 'Благодаря ДропЗоне нашёл нишу, которая принесла мне 500К ₽ за первый месяц. AI-анализатор — это бомба!',
    rating: 5,
  },
  {
    name: 'Елена В.',
    role: 'Предприниматель',
    text: 'Калькулятор юнит-экономики сэкономил мне кучу денег. Теперь я точно знаю свою маржу до копейки.',
    rating: 5,
  },
  {
    name: 'Максим Д.',
    role: 'Селлер на Ozon',
    text: 'Лучший инструмент для анализа конкурентов. Вижу все продажи и стратегии конкурентов в реальном времени.',
    rating: 5,
  },
];

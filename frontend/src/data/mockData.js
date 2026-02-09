// Mock data for ДропМастер platform

export const navLinks = [
  {
    label: 'Инструменты',
    hasDropdown: true,
    items: [
      { label: 'Библиотека товаров', href: '#tools' },
      { label: 'Анализ конкурентов', href: '#tools' },
      { label: 'Библиотека рекламы', href: '#tools' },
      { label: 'Трекер продаж', href: '#tools' },
      { label: 'AI Telegram бот', href: '#telegram' },
      { label: 'Калькулятор маржи', href: '#tools' },
    ],
  },
  {
    label: 'Ресурсы',
    hasDropdown: true,
    items: [
      { label: 'Блог', href: '#blog' },
      { label: 'Обучение', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Поддержка', href: '#' },
    ],
  },
  { label: 'Тарифы', href: '#pricing', hasDropdown: false },
];

export const marketplaces = [
  { name: 'Wildberries', color: '#CB11AB' },
  { name: 'Ozon', color: '#005BFF' },
  { name: 'Яндекс Маркет', color: '#FFCC00' },
  { name: 'Мегамаркет', color: '#00B956' },
  { name: 'KazanExpress', color: '#E31E24' },
  { name: 'AliExpress', color: '#FF4747' },
];

export const tools = [
  {
    id: 1,
    title: 'Библиотека товаров',
    description: 'Изучайте миллионы товаров на маркетплейсах. Фильтруйте по категории, выручке, продажам и трендам для поиска прибыльных ниш.',
    badge: 'HOT',
    badgeColor: '#EF4444',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBtYXJrZXRwbGFjZXxlbnwwfHx8fDE3NzA2NDM0Mjh8MA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 2,
    title: 'Анализ конкурентов',
    description: 'Следите за магазинами конкурентов на Wildberries и Ozon. Узнавайте их товары, цены, выручку и стратегии продвижения.',
    badge: 'HOT',
    badgeColor: '#EF4444',
    image: 'https://images.unsplash.com/photo-1700190827565-7b6247de4838?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxlLWNvbW1lcmNlJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzcwNjQzNDIzfDA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 3,
    title: 'Библиотека рекламы',
    description: 'Анализируйте рекламные кампании ВКонтакте и Telegram. Находите успешные креативы и стратегии для вашего бизнеса.',
    badge: 'NEW',
    badgeColor: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzcwNjQzNDE5fDA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 4,
    title: 'AI Telegram Бот',
    description: 'Получайте мгновенные уведомления о трендовых товарах прямо в Telegram. ИИ анализирует рынок 24/7 и отправляет лучшие находки.',
    badge: 'УНИКАЛЬНО',
    badgeColor: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzcwNjQzNDE5fDA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 5,
    title: 'Трекер продаж',
    description: 'Добавляйте магазины и товары в трекер для отслеживания продаж в реальном времени. Замечайте тренды раньше конкурентов.',
    badge: 'HOT',
    badgeColor: '#EF4444',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHw0fHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzcwNjQzNDE5fDA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 6,
    title: 'Калькулятор маржи',
    description: 'Рассчитайте прибыльность с учётом комиссий Wildberries, Ozon и Яндекс Маркет. Точные данные для принятия решений.',
    badge: 'УНИКАЛЬНО',
    badgeColor: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzcwNjQzNDE5fDA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 7,
    title: 'Портфолио товаров',
    description: 'Получайте до 40 отобранных вручную товаров от наших специалистов каждую неделю. Идеально, если у вас мало времени.',
    badge: null,
    badgeColor: null,
    image: 'https://images.unsplash.com/photo-1677693972403-db681288b5da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBtYXJrZXRwbGFjZXxlbnwwfHx8fDE3NzA2NDM0Mjh8MA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 8,
    title: 'Хром расширение',
    description: 'Мгновенно анализируйте товары прямо на маркетплейсах. Видите продажи, выручку и тренды без перехода на другой сайт.',
    badge: null,
    badgeColor: null,
    image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBtYXJrZXRwbGFjZXxlbnwwfHx8fDE3NzA2NDM0Mjh8MA&ixlib=rb-4.1.0&q=85&w=600',
  },
  {
    id: 9,
    title: 'Анализ трендов VK',
    description: 'Мониторинг трендов в ВКонтакте и социальных сетях. ИИ находит вирусные товары до того, как они станут массовыми.',
    badge: 'BETA',
    badgeColor: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1705234384435-e06172b6d2f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxlLWNvbW1lcmNlJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzcwNjQzNDIzfDA&ixlib=rb-4.1.0&q=85&w=600',
  },
];

export const perks = [
  {
    title: 'Экономия времени',
    description: 'Зачем тратить часы на ручной анализ? Наши инструменты делают это за секунды. Ваше время — на развитие бизнеса.',
    icon: 'Clock',
  },
  {
    title: 'Глубокая аналитика',
    description: 'Получайте подробные данные о продажах, ценах и трендах. Каждый товар сопровождается полным анализом рынка.',
    icon: 'BarChart3',
  },
  {
    title: 'Мобильный доступ',
    description: 'Работайте с платформой из любой точки. Адаптивный интерфейс и Telegram-бот всегда под рукой.',
    icon: 'Smartphone',
  },
  {
    title: 'Автоматизация',
    description: 'Получайте алгоритмически отобранные товары каждую неделю. Настройте уведомления по вашим критериям.',
    icon: 'Zap',
  },
  {
    title: 'Одна продажа — подписка оплачена',
    description: 'Примерно одна продажа — и стоимость подписки покрыта. А один хит-товар может изменить всё.',
    icon: 'DollarSign',
  },
  {
    title: 'Российский рынок',
    description: 'Платформа создана специально для работы с российскими маркетплейсами. Все данные актуальны для РФ.',
    icon: 'MapPin',
  },
];

export const blogArticles = [
  {
    id: 1,
    title: 'Дропшиппинг для начинающих: полное руководство 2025',
    author: 'Алексей М.',
    date: '15 января 2025',
    readTime: '22 мин',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBtYXJrZXRwbGFjZXxlbnwwfHx8fDE3NzA2NDM0Mjh8MA&ixlib=rb-4.1.0&q=85&w=400',
    authorAvatar: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzcwNjQzNDMzfDA&ixlib=rb-4.1.0&q=85&w=40',
  },
  {
    id: 2,
    title: 'Топ-20 поставщиков для дропшиппинга в России',
    author: 'Мария К.',
    date: '10 января 2025',
    readTime: '35 мин',
    image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBtYXJrZXRwbGFjZXxlbnwwfHx8fDE3NzA2NDM0Mjh8MA&ixlib=rb-4.1.0&q=85&w=400',
    authorAvatar: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40',
  },
  {
    id: 3,
    title: 'Как зарабатывать на Wildberries: стратегии продвижения',
    author: 'Дмитрий В.',
    date: '5 января 2025',
    readTime: '18 мин',
    image: 'https://images.unsplash.com/photo-1677693972403-db681288b5da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBtYXJrZXRwbGFjZXxlbnwwfHx8fDE3NzA2NDM0Mjh8MA&ixlib=rb-4.1.0&q=85&w=400',
    authorAvatar: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzcwNjQzNDMzfDA&ixlib=rb-4.1.0&q=85&w=40',
  },
  {
    id: 4,
    title: '10 трендовых ниш для дропшиппинга в 2025 году',
    author: 'Екатерина С.',
    date: '1 января 2025',
    readTime: '15 мин',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHw0fHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzcwNjQzNDE5fDA&ixlib=rb-4.1.0&q=85&w=400',
    authorAvatar: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40',
  },
];

export const stats = [
  { value: '500K+', label: 'Активных пользователей' },
  { value: '12M+', label: 'Товаров в базе' },
  { value: '50K+', label: 'Магазинов отслеживается' },
  { value: '98%', label: 'Довольных клиентов' },
];

export const pricingPlans = [
  {
    name: 'Стартер',
    price: '990',
    period: '/мес',
    description: 'Идеально для начинающих селлеров',
    features: [
      '500 поисковых запросов/мес',
      'Библиотека товаров',
      'Базовый анализ конкурентов',
      '5 товаров в трекере',
      'Email поддержка',
    ],
    popular: false,
  },
  {
    name: 'Профи',
    price: '2 490',
    period: '/мес',
    description: 'Для серьёзных продавцов',
    features: [
      'Безлимитные поисковые запросы',
      'Все инструменты анализа',
      'AI Telegram бот',
      '50 товаров в трекере',
      'Калькулятор маржи',
      'Приоритетная поддержка',
    ],
    popular: true,
  },
  {
    name: 'Бизнес',
    price: '4 990',
    period: '/мес',
    description: 'Для команд и агентств',
    features: [
      'Всё из тарифа Профи',
      'Безлимитный трекер',
      'API доступ',
      'Мультиаккаунт (до 5)',
      'Персональный менеджер',
      'Анализ трендов VK/Telegram',
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    text: 'ДропМастер помог мне найти товар, который принёс 2 млн рублей за первый месяц на Wildberries. Инструменты анализа — просто огонь!',
    author: 'Андрей К.',
    role: 'Селлер на Wildberries',
    avatar: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzcwNjQzNDMzfDA&ixlib=rb-4.1.0&q=85&w=60',
  },
  {
    text: 'Telegram-бот — это что-то невероятное. Я получаю уведомления о трендовых товарах раньше всех конкурентов.',
    author: 'Марина Л.',
    role: 'Предприниматель',
    avatar: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=60',
  },
  {
    text: 'Калькулятор маржи с учётом комиссий маркетплейсов — это именно то, чего мне не хватало. Теперь я точно знаю свою прибыль.',
    author: 'Дмитрий П.',
    role: 'Селлер на Ozon',
    avatar: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzcwNjQzNDMzfDA&ixlib=rb-4.1.0&q=85&w=60',
  },
];

export const productShowcaseItems = [
  { name: 'Массажёр для шеи', price: '₽2,490', sales: '15.2K', revenue: '₽37.8M', trend: '+45%' },
  { name: 'LED проектор звёзд', price: '₽1,890', sales: '22.1K', revenue: '₽41.7M', trend: '+67%' },
  { name: 'Беспроводные наушники', price: '₽3,290', sales: '31.5K', revenue: '₽103.6M', trend: '+23%' },
  { name: 'Органайзер для авто', price: '₽990', sales: '45.3K', revenue: '₽44.8M', trend: '+89%' },
  { name: 'Умная лампа RGB', price: '₽1,590', sales: '18.7K', revenue: '₽29.7M', trend: '+34%' },
  { name: 'Портативный блендер', price: '₽2,190', sales: '28.9K', revenue: '₽63.3M', trend: '+56%' },
  { name: 'Электрическая щётка', price: '₽4,490', sales: '12.4K', revenue: '₽55.7M', trend: '+12%' },
  { name: 'Фитнес-браслет', price: '₽1,290', sales: '56.8K', revenue: '₽73.2M', trend: '+78%' },
];

export const mapSales = [
  { city: 'Москва', amount: '₽24,500', x: 55, y: 30 },
  { city: 'Санкт-Петербург', amount: '₽18,200', x: 48, y: 22 },
  { city: 'Новосибирск', amount: '₽12,800', x: 72, y: 32 },
  { city: 'Екатеринбург', amount: '₽15,300', x: 65, y: 28 },
  { city: 'Казань', amount: '₽9,700', x: 58, y: 28 },
  { city: 'Краснодар', amount: '₽11,400', x: 52, y: 38 },
  { city: 'Владивосток', amount: '₽7,900', x: 92, y: 35 },
  { city: 'Самара', amount: '₽8,600', x: 58, y: 32 },
];

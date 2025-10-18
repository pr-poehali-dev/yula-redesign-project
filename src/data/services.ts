export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    title: 'Стандарт',
    description: 'Надежность и качество по доступной цене. Идеально для дач и гаражей.',
    image: 'https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/8652919c-28a1-49a1-8815-4181c0a79902.jpg',
    features: [
      'Панели 20мм с пенозаполнением',
      'Автоматика базового уровня',
      'Более 20 цветов на выбор'
    ]
  },
  {
    id: '2',
    title: 'Премиум класс',
    description: 'Максимальная тепло- и шумоизоляция. Эксклюзивный дизайн.',
    image: 'https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/4aed3680-b163-4f6a-a846-3e962c8961d8.jpg',
    features: [
      'Панели 45мм с пенополиуретаном',
      'Бесшумный привод премиум-класса',
      'Встроенная калитка'
    ]
  },
  {
    id: '3',
    title: 'Умные ворота',
    description: 'Инновационная автоматика с управлением через приложение.',
    features: [
      'Wi-Fi модуль и приложение',
      'Датчики препятствий',
      'Уведомления на смартфон'
    ]
  }
];

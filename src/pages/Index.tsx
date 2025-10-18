import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для согласования замера.",
    });
    setFormData({ name: '', phone: '', address: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-secondary">Ulaa.ru</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="text-foreground hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
              <Button onClick={() => scrollToSection('order')} size="lg">Заказать замер</Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Секционные ворота
                <span className="block text-primary">нового поколения</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Инновационные решения для вашего гаража. Профессиональная установка с гарантией качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('order')} size="lg" className="text-lg px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Бесплатный замер
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Images" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/8652919c-28a1-49a1-8815-4181c0a79902.jpg"
                alt="Современные секционные ворота"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Гарантия 5 лет</CardTitle>
                <CardDescription className="text-base">
                  Официальная гарантия на все виды работ и материалы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Установка за 1 день</CardTitle>
                <CardDescription className="text-base">
                  Быстрый монтаж без лишних хлопот и простоя
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Умное управление</CardTitle>
                <CardDescription className="text-base">
                  Автоматика с управлением через смартфон
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Прозрачные цены</CardTitle>
                <CardDescription className="text-base">
                  Фиксированная стоимость без скрытых платежей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Thermometer" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Теплоизоляция</CardTitle>
                <CardDescription className="text-base">
                  Энергоэффективные ворота с утеплением до 45мм
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Опыт 10+ лет</CardTitle>
                <CardDescription className="text-base">
                  Более 2000 успешно реализованных проектов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/fb2512f2-ea32-4136-8284-d2307b0c14a6.jpg"
                alt="Стандартные ворота"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">Стандартные ворота</CardTitle>
                <CardDescription>
                  Классическое решение для гаража. Высокое качество по доступной цене.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Панели 40мм с утеплением</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Ручное/автоматическое управление</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Более 20 цветов на выбор</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/4aed3680-b163-4f6a-a846-3e962c8961d8.jpg"
                alt="Премиум ворота"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">Премиум класс</CardTitle>
                <CardDescription>
                  Максимальная тепло- и шумоизоляция. Эксклюзивный дизайн.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Панели 45мм с пенополиуретаном</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Бесшумный привод премиум-класса</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Встроенная калитка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Smartphone" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Умные ворота</CardTitle>
                <CardDescription>
                  Инновационная автоматика с управлением через приложение.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Wi-Fi модуль и приложение</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Датчики препятствий</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Уведомления на смартфон</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/8652919c-28a1-49a1-8815-4181c0a79902.jpg"
                alt="Проект 1"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Коттеджный посёлок</h3>
                  <p className="text-sm">Серые секционные ворота с остеклением</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/fb2512f2-ea32-4136-8284-d2307b0c14a6.jpg"
                alt="Проект 2"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Частный дом</h3>
                  <p className="text-sm">Белые ворота премиум с панорамным остеклением</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/4aed3680-b163-4f6a-a846-3e962c8961d8.jpg"
                alt="Проект 3"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Таунхаус</h3>
                  <p className="text-sm">Чёрные ворота с автоматикой премиум-класса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать бесплатный замер</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">Адрес объекта</label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="г. Москва, ул. Примерная, д. 1"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Укажите желаемое время замера или другие пожелания"
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg h-14">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a href="tel:+79991234567" className="text-xl text-primary hover:underline">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:info@ulaa.ru" className="text-xl text-primary hover:underline">
                    info@ulaa.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-sm text-muted-foreground mt-1">Офис и выставочный зал</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" className="mx-auto text-primary mb-4" size={64} />
                <p className="text-lg text-muted-foreground">
                  Здесь будет интерактивная карта с нашим расположением
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} />
                <span className="text-xl font-bold">Ulaa.ru</span>
              </div>
              <p className="text-white/70">
                Инновационные решения для установки секционных гаражных ворот
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-white/70 hover:text-white transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('advantages')} className="block text-white/70 hover:text-white transition-colors">Преимущества</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-white/70 hover:text-white transition-colors">Портфолио</button>
                <button onClick={() => scrollToSection('contacts')} className="block text-white/70 hover:text-white transition-colors">Контакты</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Режим работы</h3>
              <div className="space-y-2 text-white/70">
                <p>Понедельник - Пятница: 9:00 - 21:00</p>
                <p>Суббота - Воскресенье: 10:00 - 19:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Ulaa.ru. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

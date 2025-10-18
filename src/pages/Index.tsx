import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';
import { servicesData } from '@/data/services';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');

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

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы перезвоним вам в течение 5 минут.",
    });
    setCallbackPhone('');
    setCallbackOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/e57609fe-e0da-480f-be6e-de6475f0199b.png" 
                alt="Ulaa" 
                className="h-20 w-auto"
              />
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
                src="https://cdn.poehali.dev/files/a2633d0f-1b63-4337-9f10-ff163bb7c675.jpg"
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
                <CardTitle className="text-2xl">Гарантийный ремонт</CardTitle>
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
                  <Icon name="Headphones" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Бесплатная консультация</CardTitle>
                <CardDescription className="text-base">
                  Поможем выбрать оптимальное решение для вашего гаража
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
                  Более 1000 успешно выполненных проектов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Наши услуги</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Полный спектр услуг по установке, ремонту и обслуживанию секционных ворот
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Наши работы</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Более 1000 успешно завершенных проектов по всей России
          </p>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioData.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-sm text-white/90">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Закажите бесплатный замер</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и наш специалист приедет в удобное для вас время
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-3xl shadow-xl border-2">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ваше имя *</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов" 
                  required 
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Телефон *</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  required 
                  className="h-12"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Адрес объекта *</label>
              <Input 
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="г. Москва, ул. Примерная, д. 1" 
                required 
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Комментарий</label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о ваших пожеланиях..." 
                className="min-h-32"
              />
            </div>
            <Button type="submit" size="lg" className="w-full text-lg h-14">
              <Icon name="Send" className="mr-2" size={20} />
              Отправить заявку
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 hover:border-primary transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Телефон</h3>
              <a href="tel:+79999999999" className="text-lg text-primary hover:underline">
                +7 (999) 999-99-99
              </a>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 hover:border-primary transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Email</h3>
              <a href="mailto:info@ulaa.ru" className="text-lg text-primary hover:underline">
                info@ulaa.ru
              </a>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 hover:border-primary transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Адрес</h3>
              <p className="text-lg text-muted-foreground">
                г. Москва, ул. Примерная, 1
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/e57609fe-e0da-480f-be6e-de6475f0199b.png" 
                  alt="Ulaa" 
                  className="h-12 w-auto"
                />
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
                <p>Понедельник - Суббота: 9:00 - 19:00</p>
                <p>Воскресенье: выходной</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Ulaa.ru. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a
          href="https://t.me/ulaa_ru"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        >
          <Icon name="Send" size={24} />
          <span className="font-semibold">Telegram</span>
        </a>
        
        <button
          onClick={() => setCallbackOpen(!callbackOpen)}
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        >
          <Icon name="Phone" size={24} />
          <span className="font-semibold">Перезвоните мне</span>
        </button>
      </div>

      {/* Callback Modal */}
      {callbackOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setCallbackOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={24} />
            </button>
            
            <h3 className="text-2xl font-bold mb-2">Обратный звонок</h3>
            <p className="text-muted-foreground mb-6">Оставьте номер телефона, мы перезвоним в течение 5 минут</p>
            
            <form onSubmit={handleCallbackSubmit} className="space-y-4">
              <Input
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={callbackPhone}
                onChange={(e) => setCallbackPhone(e.target.value)}
                required
                className="h-12"
              />
              <Button type="submit" size="lg" className="w-full">
                <Icon name="Phone" className="mr-2" size={20} />
                Жду звонка
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

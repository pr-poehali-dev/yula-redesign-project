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
  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('cookieConsent') === 'true';
  });
  const [privacyOpen, setPrivacyOpen] = useState(false);

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

  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
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
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {servicesData.map((service) => (
                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                    {service.image ? (
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover my-0"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon name="Smartphone" size={64} className="text-primary" />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши работы</h2>
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {portfolioData.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
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

      <section className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Отзывы наших клиентов</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Более 1000 довольных клиентов по всей России
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Алексей Иванов</h3>
                    <p className="text-sm text-muted-foreground">Частный клиент</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Отличная работа! Ребята установили секционные ворота за один день, как и обещали. Всё аккуратно, качественно. Автоматика работает отлично, управляю со смартфона. Очень доволен!
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/85cc689c-69af-41ad-be2a-09427a1c73c0.jpg"
                  alt="Установленные ворота"
                  className="w-full h-64 object-cover rounded-xl mx-0"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Building2" className="text-primary" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">ООО "ТехСклад"</h3>
                    <p className="text-sm text-muted-foreground">Логистическая компания</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Заказывали промышленные ворота для нового склада. Установили 4 секции, всё сделали быстро и профессионально. Цена оказалась лучше, чем у конкурентов. Рекомендуем!
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/2d28e057-da38-411b-be1b-d4dbe2819fac.jpg"
                  alt="Промышленные ворота"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Мария Петрова</h3>
                    <p className="text-sm text-muted-foreground">Частный клиент</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Заказывала ворота для загородного дома. Помогли выбрать цвет и дизайн, подобрали под фасад. Монтаж прошёл без проблем, мастера очень аккуратные. Спасибо за качество!
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/30eefe96-af41-4e35-a1eb-e9dea5431962.jpeg"
                  alt="Ворота загородного дома"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Building2" className="text-primary" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">АО "МоторЦентр"</h3>
                    <p className="text-sm text-muted-foreground">Автосервис</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Установили секционные ворота в нашем автосервисе. Работают уже год без нареканий. Отличное соотношение цены и качества. При необходимости обратимся снова.
                </p>
                <img 
                  src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/d6611330-e4fd-4609-af92-b9f79e2d96c2.jpg"
                  alt="Ворота автосервиса"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать бесплатный замер</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
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

          <div className="hidden md:block">
            <img 
              src="https://cdn.poehali.dev/projects/4db00bbb-6882-4830-aef3-0e461606456f/files/82454260-e714-4788-931f-40e10db3eba5.jpg"
              alt="Наш специалист"
              className="rounded-3xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
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
                  <a href="tel:+79309531975" className="text-xl text-primary hover:underline">+7 (916) 135-88-18</a>
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
                  <p className="text-lg">г. Москва, ул. Фермерская, д. 41</p>
                  <p className="text-sm text-muted-foreground mt-1">Почтовый адрес</p>
                </div>
              </div>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Реквизиты компании</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-base mb-1">Индивидуальный предприниматель</p>
                  <p className="text-lg">Кощеева Лариса Владимировна</p>
                </div>
                
                <div>
                  <p className="font-semibold text-base mb-1">Юридический адрес</p>
                  <p className="text-base">Российская Федерация, 108810, г. Москва,</p>
                  <p className="text-base">Поселение Внуковское, Деревня Крёкшино,</p>
                  <p className="text-base">ул. Фермерская д. 41</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">ИНН</p>
                    <p className="text-base">772306460299</p>
                  </div>
                  <div>
                    <p className="font-semibold text-base mb-1">ОГРНИП</p>
                    <p className="text-base">322774600627929</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t-2 border-primary p-6 shadow-2xl animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Icon name="Cookie" className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-sm text-foreground">
                  Мы используем cookies. Используя сайт, вы соглашаетесь с{' '}
                  <button onClick={() => setPrivacyOpen(true)} className="text-primary underline hover:no-underline">
                    обработкой данных
                  </button>{' '}
                  с целью сбора аналитики. Cookies можно отключить в любой момент в настройках вашего браузера.
                </p>
              </div>
              <Button onClick={handleCookieConsent} size="lg" className="flex-shrink-0">
                ОК
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Политика обработки персональных данных</CardTitle>
                <button
                  onClick={() => setPrivacyOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-[calc(80vh-100px)] p-6">
              <div className="prose prose-sm max-w-none space-y-4 text-sm">
                <p>
                  Уважаемый Пользователь, просим внимательно прочитать настоящее Соглашение, прежде чем начать пользоваться Сайтом. Вы обязаны соблюдать условия настоящего Соглашения, заходя на Сайт, используя сервисы, услуги и приложения, предлагаемые на Сайте. В случае если Вы не согласны с условиями Соглашения, Вы не можете пользоваться Сайтом или использовать любые сервисы, услуги и приложения, предлагаемые на Сайте, а также посещать страницы, размещенные в доменной зоне Сайта. Начало использования Сайта означает надлежащее заключение настоящего Соглашения и Ваше полное согласие со всеми его условиями.
                </p>

                <h3 className="font-bold text-base mt-6 mb-3">ПОНЯТИЯ И ТЕРМИНЫ, ИСПОЛЬЗУЕМЫЕ В ДОГОВОРЕ</h3>
                <p>
                  Индивидуальный предприниматель Кощеева Лариса Владимировна, ИНН 772306460299. Почтовый адрес/адрес офиса: 108810, г.Москва д.Крекшино ул.Фермерская д.41
                </p>
                <p>
                  <strong>«Пользователь»</strong> – лицо, получающее доступ к приложениям, сервисам, услугам и информации, размещенной на Сайте.
                </p>
                <p>
                  <strong>«Сайт»</strong> – веб-сайт Компании, размещенный в сети Интернет по адресу www.ulaa.ru, в том числе поддомены, а так же любые другие веб-сайты Компании, содержащие ссылку на данное Соглашение.
                </p>
                <p>
                  <strong>«Электронная почта»</strong> – электронный почтовый ящик, указанный при регистрации (E-mail для уведомлений и извещения Исполнителя: info@ulaa.ru).
                </p>

                <h3 className="font-bold text-base mt-6 mb-3">1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
                <p>
                  1.1 Индивидуальный предприниматель Кощеева Лариса Владимировна, ИНН 772306460299 (далее по тексту – Оператор) ставит соблюдение прав и свобод граждан одним из важнейших условий осуществления своей деятельности. Политика Оператора в отношении обработки персональных данных применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта ulaa.ru. Персональные данные обрабатывается в соответствии с ФЗ «О персональных данных» № 152-ФЗ.
                </p>

                <h3 className="font-bold text-base mt-6 mb-3">3. УСЛОВИЯ ОБРАБОТКИ И ИСПОЛЬЗОВАНИЯ ПЕРСОНАЛЬНЫХ ДАННЫХ</h3>
                <p>
                  3.1 Принимая условия настоящего Соглашения Пользователь выражает свое согласие на предоставление своих персональных данных для их обработки Компанией.
                </p>
                <p>
                  3.2 Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
                </p>

                <h3 className="font-bold text-base mt-6 mb-3">4. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h3>
                <p>
                  4.1 Цель обработки персональных данных Пользователя — авторизация Пользователя на сайте и информирование Пользователя посредством отправки электронных писем.
                </p>
                <p>
                  4.2 Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты info@ulaa.ru с пометкой «Отказ от уведомлений».
                </p>

                <h3 className="font-bold text-base mt-6 mb-3">6. ПОРЯДОК СБОРА, ХРАНЕНИЯ И ПЕРЕДАЧИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h3>
                <p>
                  6.1 Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                </p>
                <p>
                  6.2 Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.
                </p>
                <p>
                  6.3 Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление на электронный адрес info@ulaa.ru с пометкой «Отзыв согласия на обработку персональных данных».
                </p>

                <p className="mt-6 text-muted-foreground">
                  Сайт не является публичной офертой. Для получения подробной информации о стоимости материалов, пожалуйста, обращайтесь в офисы продаж.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/79309531975"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        >
          <Icon name="MessageCircle" size={24} />
          <span className="font-semibold">WhatsApp</span>
        </a>

        <a
          href="https://t.me/ulaa_ru"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        >
          <Icon name="Send" size={24} />
          <span className="font-semibold">Telegram</span>
        </a>
        
        <a
          href="tel:+79309531975"
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        >
          <Icon name="Phone" size={24} />
          <span className="font-semibold">Позвонить</span>
        </a>
      </div>

      {/* Callback Form Modal */}
      {callbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <Card className="w-full max-w-md shadow-2xl animate-scale-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Обратный звонок</CardTitle>
                <button
                  onClick={() => setCallbackOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              <CardDescription>
                Оставьте ваш номер телефона, и мы перезвоним вам в течение 5 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    required
                    className="text-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Перезвоните мне
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
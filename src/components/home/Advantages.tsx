import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="BadgeCheck" className="text-primary" size={28} />
              </div>
              <CardTitle className="text-2xl">Качество</CardTitle>
              <CardDescription className="text-base">
                Мы осуществляем 100% контроль качества нашей продукции на всех этапах
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
              <CardTitle className="text-2xl">Гарантия лучшей цены от производителя</CardTitle>
              <CardDescription className="text-base">
                Благодаря многолетнему сотрудничеству с поставщиками, предлагаем лучшую цену на ворота и автоматику
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Wrench" className="text-primary" size={28} />
              </div>
              <CardTitle className="text-2xl">Ремонт и обслуживание</CardTitle>
              <CardDescription className="text-base">
                Профессиональный ремонт секционных ворот любых производителей
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
  );
}

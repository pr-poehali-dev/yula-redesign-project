import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onOrderClick: () => void;
  onPortfolioClick: () => void;
}

export default function Hero({ onOrderClick, onPortfolioClick }: HeroProps) {
  return (
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
              <Button onClick={onOrderClick} size="lg" className="text-lg px-8">
                <Icon name="Calculator" className="mr-2" size={20} />
                Бесплатный замер
              </Button>
              <Button onClick={onPortfolioClick} variant="outline" size="lg" className="text-lg px-8">
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
  );
}

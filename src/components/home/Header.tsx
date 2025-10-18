import { Button } from '@/components/ui/button';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
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
            <button onClick={() => onNavigate('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => onNavigate('advantages')} className="text-foreground hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => onNavigate('portfolio')} className="text-foreground hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => onNavigate('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            <Button onClick={() => onNavigate('order')} size="lg">Заказать замер</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

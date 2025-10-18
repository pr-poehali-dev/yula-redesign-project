interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
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
              <button onClick={() => onNavigate('services')} className="block text-white/70 hover:text-white transition-colors">Услуги</button>
              <button onClick={() => onNavigate('advantages')} className="block text-white/70 hover:text-white transition-colors">Преимущества</button>
              <button onClick={() => onNavigate('portfolio')} className="block text-white/70 hover:text-white transition-colors">Портфолио</button>
              <button onClick={() => onNavigate('contacts')} className="block text-white/70 hover:text-white transition-colors">Контакты</button>
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
  );
}

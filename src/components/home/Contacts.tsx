import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
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
  );
}

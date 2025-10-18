import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function OrderForm() {
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

  return (
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
  );
}

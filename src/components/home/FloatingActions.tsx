import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function FloatingActions() {
  const { toast } = useToast();
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');

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
    <>
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
    </>
  );
}

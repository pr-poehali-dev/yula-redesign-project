import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { portfolioData, PortfolioItem } from '@/data/portfolio';
import { servicesData, ServiceItem } from '@/data/services';

export default function Admin() {
  const { toast } = useToast();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(portfolioData);
  const [services, setServices] = useState<ServiceItem[]>(servicesData);
  const [editingPortfolio, setEditingPortfolio] = useState<PortfolioItem | null>(null);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  const handleSavePortfolio = () => {
    toast({
      title: "Сохранено!",
      description: "Изменения в портфолио сохранены.",
    });
  };

  const handleSaveService = () => {
    toast({
      title: "Сохранено!",
      description: "Изменения в услугах сохранены.",
    });
  };

  const handleDeletePortfolio = (id: string) => {
    setPortfolio(portfolio.filter(item => item.id !== id));
    toast({
      title: "Удалено!",
      description: "Проект удален из портфолио.",
    });
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter(item => item.id !== id));
    toast({
      title: "Удалено!",
      description: "Услуга удалена.",
    });
  };

  const handleAddPortfolio = () => {
    const newItem: PortfolioItem = {
      id: String(Date.now()),
      title: 'Новый проект',
      description: 'Описание проекта',
      image: 'https://via.placeholder.com/400x300'
    };
    setPortfolio([...portfolio, newItem]);
    setEditingPortfolio(newItem);
  };

  const handleAddService = () => {
    const newItem: ServiceItem = {
      id: String(Date.now()),
      title: 'Новая услуга',
      description: 'Описание услуги',
      features: ['Функция 1', 'Функция 2', 'Функция 3']
    };
    setServices([...services, newItem]);
    setEditingService(newItem);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Админ-панель</h1>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            На сайт
          </Button>
        </div>

        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Управление портфолио</h2>
              <Button onClick={handleAddPortfolio}>
                <Icon name="Plus" className="mr-2" size={20} />
                Добавить проект
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{item.title}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingPortfolio(item)}
                        >
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeletePortfolio(item.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {editingPortfolio && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Редактирование проекта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Название</label>
                    <Input
                      value={editingPortfolio.title}
                      onChange={(e) =>
                        setEditingPortfolio({ ...editingPortfolio, title: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание</label>
                    <Textarea
                      value={editingPortfolio.description}
                      onChange={(e) =>
                        setEditingPortfolio({ ...editingPortfolio, description: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">URL изображения</label>
                    <Input
                      value={editingPortfolio.image}
                      onChange={(e) =>
                        setEditingPortfolio({ ...editingPortfolio, image: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSavePortfolio}>Сохранить</Button>
                    <Button variant="outline" onClick={() => setEditingPortfolio(null)}>
                      Отмена
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Управление услугами</h2>
              <Button onClick={handleAddService}>
                <Icon name="Plus" className="mr-2" size={20} />
                Добавить услугу
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{item.title}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingService(item)}
                        >
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteService(item.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {editingService && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Редактирование услуги</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Название</label>
                    <Input
                      value={editingService.title}
                      onChange={(e) =>
                        setEditingService({ ...editingService, title: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание</label>
                    <Textarea
                      value={editingService.description}
                      onChange={(e) =>
                        setEditingService({ ...editingService, description: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">URL изображения (опционально)</label>
                    <Input
                      value={editingService.image || ''}
                      onChange={(e) =>
                        setEditingService({ ...editingService, image: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Преимущества (по одному на строку)</label>
                    <Textarea
                      value={editingService.features.join('\n')}
                      onChange={(e) =>
                        setEditingService({
                          ...editingService,
                          features: e.target.value.split('\n').filter(f => f.trim())
                        })
                      }
                      rows={5}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveService}>Сохранить</Button>
                    <Button variant="outline" onClick={() => setEditingService(null)}>
                      Отмена
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

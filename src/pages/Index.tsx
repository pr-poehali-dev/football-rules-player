import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  name: string;
  position: string;
  rating: number;
  goals: number;
  assists: number;
  matches: number;
  image: string;
  team: string;
}

interface Rule {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface News {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const players: Player[] = [
    {
      id: 1,
      name: 'Криштиану Роналду',
      position: 'Нападающий',
      rating: 94,
      goals: 850,
      assists: 245,
      matches: 1150,
      image: 'https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/5fc40af1-4935-4d6e-a9f5-0f7ed82fa022.jpg',
      team: 'Аль-Наср'
    },
    {
      id: 2,
      name: 'Лионель Месси',
      position: 'Нападающий',
      rating: 93,
      goals: 815,
      assists: 357,
      matches: 1050,
      image: 'https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/5fc40af1-4935-4d6e-a9f5-0f7ed82fa022.jpg',
      team: 'Интер Майами'
    },
    {
      id: 3,
      name: 'Килиан Мбаппе',
      position: 'Нападающий',
      rating: 91,
      goals: 320,
      assists: 140,
      matches: 450,
      image: 'https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/5fc40af1-4935-4d6e-a9f5-0f7ed82fa022.jpg',
      team: 'Реал Мадрид'
    },
    {
      id: 4,
      name: 'Эрлинг Холанд',
      position: 'Нападающий',
      rating: 90,
      goals: 245,
      assists: 68,
      matches: 320,
      image: 'https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/5fc40af1-4935-4d6e-a9f5-0f7ed82fa022.jpg',
      team: 'Манчестер Сити'
    },
    {
      id: 5,
      name: 'Кевин Де Брёйне',
      position: 'Полузащитник',
      rating: 91,
      goals: 102,
      assists: 175,
      matches: 580,
      image: 'https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/5fc40af1-4935-4d6e-a9f5-0f7ed82fa022.jpg',
      team: 'Манчестер Сити'
    },
    {
      id: 6,
      name: 'Виргил ван Дейк',
      position: 'Защитник',
      rating: 90,
      goals: 35,
      assists: 15,
      matches: 520,
      image: 'https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/5fc40af1-4935-4d6e-a9f5-0f7ed82fa022.jpg',
      team: 'Ливерпуль'
    }
  ];

  const rules: Rule[] = [
    {
      id: 1,
      title: 'Состав команды',
      description: 'В футбол играют две команды по 11 человек (10 полевых игроков и 1 вратарь). Минимальное количество игроков - 7.',
      icon: 'Users'
    },
    {
      id: 2,
      title: 'Размеры поля',
      description: 'Длина: 90-120 м, ширина: 45-90 м. Стандартные размеры для международных матчей: 105×68 м.',
      icon: 'Square'
    },
    {
      id: 3,
      title: 'Продолжительность матча',
      description: 'Два тайма по 45 минут с 15-минутным перерывом. Рефери может добавить компенсированное время.',
      icon: 'Clock'
    },
    {
      id: 4,
      title: 'Офсайд',
      description: 'Игрок находится в офсайде, если он ближе к воротам соперника, чем мяч и предпоследний защитник в момент передачи.',
      icon: 'Flag'
    },
    {
      id: 5,
      title: 'Желтые и красные карточки',
      description: 'Желтая - предупреждение, красная - удаление. Две желтые карточки = одна красная.',
      icon: 'AlertTriangle'
    },
    {
      id: 6,
      title: 'Пенальти',
      description: 'Назначается за нарушение правил в штрафной площади. Удар с 11-метровой отметки один на один с вратарем.',
      icon: 'Target'
    }
  ];

  const news: News[] = [
    {
      id: 1,
      title: 'Месси признан лучшим игроком года FIFA',
      date: '15 декабря 2024',
      category: 'Награды',
      excerpt: 'Аргентинский форвард в восьмой раз получил престижную награду'
    },
    {
      id: 2,
      title: 'Холанд устанавливает рекорд по голам в сезоне',
      date: '12 декабря 2024',
      category: 'Рекорды',
      excerpt: 'Норвежский нападающий забил 52 гола за сезон в АПЛ'
    },
    {
      id: 3,
      title: 'Изменения в правилах офсайда с 2025 года',
      date: '10 декабря 2024',
      category: 'Правила',
      excerpt: 'FIFA утвердила новые критерии определения офсайда'
    },
    {
      id: 4,
      title: 'Роналду делится секретами долголетия',
      date: '8 декабря 2024',
      category: 'Интервью',
      excerpt: 'Португальская легенда рассказала о режиме тренировок'
    }
  ];

  const leagues = [
    { name: 'Английская Премьер-лига', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Испанская Ла Лига', icon: '🇪🇸' },
    { name: 'Итальянская Серия А', icon: '🇮🇹' },
    { name: 'Немецкая Бундеслига', icon: '🇩🇪' },
    { name: 'Французская Лига 1', icon: '🇫🇷' },
    { name: 'Лига Чемпионов УЕФА', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                ⚽
              </div>
              <h1 className="text-2xl font-bold">FOOTBALL HUB</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#main" className="hover:text-primary transition-colors">Главная</a>
              <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
              <a href="#players" className="hover:text-primary transition-colors">Футболисты</a>
              <a href="#leagues" className="hover:text-primary transition-colors">Лиги</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            </div>
            <Button className="gradient-primary border-0">
              <Icon name="Search" className="mr-2" size={18} />
              Поиск
            </Button>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/452af647-dff4-4f78-8562-ff6ffa7f870d/files/ed060629-e815-4688-8f3e-5242508de1b6.jpg" 
            alt="Stadium" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-primary bg-clip-text text-transparent">ФУТБОЛ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 animate-slide-up max-w-3xl mx-auto">
            Узнай все о правилах игры, легендарных футболистах, ведущих лигах и актуальных новостях мирового футбола
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="gradient-primary border-0 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть трансляции
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Статистика
            </Button>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-accent border-0 text-white">ПРАВИЛА ИГРЫ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Основные правила футбола</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Изучите ключевые правила, чтобы лучше понимать игру
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, index) => (
              <Card 
                key={rule.id} 
                className="glass-effect border-white/10 hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={rule.icon as any} size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{rule.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="players" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary border-0 text-white">РЕЙТИНГИ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Лучшие футболисты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Статистика и достижения топовых игроков современности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player, index) => (
                <Card 
                  key={player.id} 
                  className="glass-effect border-white/10 hover-lift overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={player.image} 
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-primary">
                        <span className="text-2xl font-bold">{player.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                        <p className="text-sm text-muted-foreground">{player.position} • {player.team}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Голы</span>
                          <span className="font-semibold text-accent">{player.goals}</span>
                        </div>
                        <Progress value={(player.goals / 1000) * 100} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Ассисты</span>
                          <span className="font-semibold text-secondary">{player.assists}</span>
                        </div>
                        <Progress value={(player.assists / 400) * 100} className="h-2" />
                      </div>

                      <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                        <div>
                          <p className="text-xs text-muted-foreground">Матчей сыграно</p>
                          <p className="text-lg font-bold">{player.matches}</p>
                        </div>
                        <Button size="sm" className="gradient-primary border-0">
                          <Icon name="TrendingUp" className="mr-2" size={16} />
                          Статистика
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="leagues" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-accent border-0 text-white">ТУРНИРЫ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ведущие лиги мира</h2>
            <p className="text-muted-foreground text-lg">
              Следите за главными футбольными турнирами планеты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leagues.map((league, index) => (
              <Card 
                key={index} 
                className="glass-effect border-white/10 hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {league.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{league.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary border-0 text-white">НОВОСТИ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние новости и биографии</h2>
            <p className="text-muted-foreground text-lg">
              Актуальная информация из мира футбола
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {news.map((item, index) => (
              <Card 
                key={item.id} 
                className="glass-effect border-white/10 hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Newspaper" size={24} />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">{item.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.excerpt}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10 bg-card/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              ⚽
            </div>
            <h3 className="text-2xl font-bold">FOOTBALL HUB</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Ваш источник информации о мировом футболе
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 Football Hub. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
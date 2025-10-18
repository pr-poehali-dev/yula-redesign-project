export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Современный дом',
    description: 'Белые секционные ворота с входной дверью',
    image: 'https://cdn.poehali.dev/files/804183d7-7c15-4cad-9727-1781c02180b9.png'
  },
  {
    id: '2',
    title: 'Городской дом',
    description: 'Графитовые секционные ворота с кирпичной отделкой',
    image: 'https://cdn.poehali.dev/files/31378883-e42b-4dd1-b6e4-ee24c65b98ef.jpg'
  },
  {
    id: '3',
    title: 'Гараж с калиткой',
    description: 'Белые ворота со встроенной калиткой',
    image: 'https://cdn.poehali.dev/files/631ca939-92b8-4efc-832c-ba3508934680.jpg'
  }
];

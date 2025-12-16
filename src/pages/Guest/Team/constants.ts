export type TeamMember = {
  name: string;
  roles: string[];
  img: string;
  fullName: string;
};

export const TEAM_CONTENT = {
  title: 'Наша супер команда',
  subtitle: 'Все на вес золота, большие молодцы, отличные профессионалы!'
} as const;

export const TEAM_DATA: TeamMember[] = [
  {
    name: 'Моисеев Антон Сергеевич',
    roles: ['Гитара', 'Электрогитара'],
    img: '/Team/Moiseev.png',
    fullName: 'Моисеев Антон Сергеевич'
  },
  {
    name: 'Бакирова Майя Раисовна',
    roles: ['Вокал', 'Синтезатор'],
    img: '/Team/Bakirova.png',
    fullName: 'Бакирова Майя Раисовна'
  },
  {
    name: 'Садыкова Ильмира Рашитовна',
    roles: ['Вокал'],
    img: '/Team/Sadikova.png',
    fullName: 'Садыкова Ильмира Рашитовна'
  },
  {
    name: 'Шарипов Азамат Ильдарович',
    roles: ['Гитара', 'Электрогитара'],
    img: '/Team/Sharipov.png',
    fullName: 'Шарипов Азамат Ильдарович'
  }
] as const;

export const CAROUSEL_CONFIG = {
  desktop: {
    slidesToShow: 4,
    breakpoint: 1200
  },
  tablet: {
    slidesToShow: 3,
    breakpoint: 768
  },
  mobile: {
    slidesToShow: 2,
    breakpoint: 480
  },
  small: {
    slidesToShow: 1
  }
} as const;

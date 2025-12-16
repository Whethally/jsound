import { IIconType } from '@/common/UI/icon';

export type PricePackage = {
  pack: string;
  individual: string;
  group: string;
};

export type DirectionData = {
  id: string;
  title: string;
  icon: IIconType;
  gradient: string;
  packages: PricePackage[];
};

export const PRICES_CONTENT = {
  title: 'Цены',
  subtitle: 'Выбери то, что подходит тебе!',
  enrollButton: 'Записаться →',
  priceLabels: {
    individual: 'Индивидуальные',
    group: 'Групповые'
  }
} as const;

export const DIRECTIONS_DATA: DirectionData[] = [
  {
    id: 'vocal',
    title: 'Вокал',
    icon: 'microphone',
    gradient: 'linear-gradient(140deg, #FF72AA, #FF0065)',
    packages: [
      { pack: 'Разовое занятие', individual: 'от 1600₽', group: 'от 1000₽' },
      { pack: '8 занятий', individual: 'от 11200₽', group: 'от 6800₽' },
      { pack: '16 занятий', individual: 'от 20000₽', group: 'от 12800₽' },
      { pack: '32 занятия', individual: 'от 33600₽', group: 'от 20800₽' }
    ]
  },
  {
    id: 'guitar',
    title: 'Гитара',
    icon: 'guitar',
    gradient: 'linear-gradient(140deg, #C0AAFF, #9000FF)',
    packages: [
      { pack: 'Разовое занятие', individual: 'от 1600₽', group: 'от 1000₽' },
      { pack: '8 занятий', individual: 'от 11200₽', group: 'от 6800₽' },
      { pack: '16 занятий', individual: 'от 20000₽', group: 'от 12800₽' },
      { pack: '32 занятия', individual: 'от 33600₽', group: 'от 20800₽' }
    ]
  },
  {
    id: 'drums',
    title: 'Барабаны',
    icon: 'drums',
    gradient: 'linear-gradient(140deg, #729AFF, #0022FF)',
    packages: [
      { pack: 'Разовое занятие', individual: 'от 1600₽', group: 'от 1000₽' },
      { pack: '8 занятий', individual: 'от 11200₽', group: 'от 6800₽' },
      { pack: '16 занятий', individual: 'от 20000₽', group: 'от 12800₽' },
      { pack: '32 занятия', individual: 'от 33600₽', group: 'от 20800₽' }
    ]
  },
  {
    id: 'synth',
    title: 'Синтезатор',
    icon: 'synth',
    gradient: 'linear-gradient(140deg, #A1F4AD, #53EA0E)',
    packages: [
      { pack: 'Разовое занятие', individual: 'от 1600₽', group: 'от 1000₽' },
      { pack: '8 занятий', individual: 'от 11200₽', group: 'от 6800₽' },
      { pack: '16 занятий', individual: 'от 20000₽', group: 'от 12800₽' },
      { pack: '32 занятия', individual: 'от 33600₽', group: 'от 20800₽' }
    ]
  },
  {
    id: 'accompaniment',
    title: 'Аккомпанемент',
    icon: 'accompaniment',
    gradient: 'linear-gradient(140deg, #72FFE3, #00BBFF)',
    packages: [
      { pack: 'Разовое занятие', individual: 'от 1600₽', group: 'от 1000₽' },
      { pack: '8 занятий', individual: 'от 11200₽', group: 'от 6800₽' },
      { pack: '16 занятий', individual: 'от 20000₽', group: 'от 12800₽' },
      { pack: '32 занятия', individual: 'от 33600₽', group: 'от 20800₽' }
    ]
  },
  {
    id: 'eguitar',
    title: 'Электрогитара/Бас-гитара',
    icon: 'eguitar',
    gradient: 'linear-gradient(140deg, #FFE372, #FF8000)',
    packages: [
      { pack: 'Разовое занятие', individual: 'от 1600₽', group: 'от 1000₽' },
      { pack: '8 занятий', individual: 'от 11200₽', group: 'от 6800₽' },
      { pack: '16 занятий', individual: 'от 20000₽', group: 'от 12800₽' },
      { pack: '32 занятия', individual: 'от 33600₽', group: 'от 20800₽' }
    ]
  }
] as const;

export const SLIDER_CONFIG = {
  cardWidth: 420,
  defaultDirection: 'vocal'
} as const;

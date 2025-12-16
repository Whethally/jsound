import { IIconType } from '@/common/UI/icon';

export const DIRECTIONS_CONTENT = {
  title: 'Наши направления',
  subtitle: 'Уроки вокала, гитары, ударных и синтезатора в Уфе — музыкальная школа'
} as const;

export const DIRECTIONS_DATA: Array<{
  id: string;
  icon: IIconType;
  title: string;
  description: string;
  gradient: [string, string];
}> = [
  {
    id: 'vocal',
    icon: 'microphone',
    title: 'Вокал',
    description: 'Индивидуальные и групповые уроки вокала для детей и взрослых. Поможем развить голос, дыхание и уверенность на сцене.',
    gradient: ['#FF72AA', '#FF0065']
  },
  {
    id: 'guitar',
    icon: 'guitar',
    title: 'Гитара',
    description: 'Обучение игре на акустической гитаре с нуля и для продолжающих. Осваивайте аккорды, ритмы и техники исполнения.',
    gradient: ['#C0AAFF', '#9000FF']
  },
  {
    id: 'electric-guitar',
    icon: 'eguitar',
    title: 'Электрогитара/Бас-гитара',
    description: 'Современные методы игры на электрогитаре и бас-гитаре, развитие техники и музыкального слуха для всех уровней.',
    gradient: ['#729AFF', '#0022FF']
  },
  {
    id: 'accompaniment',
    icon: 'accompaniment',
    title: 'Аккомпанемент',
    description: 'Индивидуальные и групповые уроки вокала для детей и взрослых. Поможем развить голос, дыхание и уверенность на сцене.',
    gradient: ['#A1F4AD', '#53EA0E']
  },
  {
    id: 'drums',
    icon: 'drums',
    title: 'Барабаны',
    description: 'Уроки игры на ударных инструментах, развитие чувства ритма, координации и техники исполнения.',
    gradient: ['#72FFE3', '#00BBFF']
  },
  {
    id: 'synth',
    icon: 'synth',
    title: 'Синтезатор',
    description: 'Обучение игре на синтезаторе и клавишных, освоение основ музыкальной теории и импровизации.',
    gradient: ['#FFE372', '#FF8000']
  }
] as const;

export const DIRECTIONS_GRID_GUTTER = {
  horizontal: 24,
  vertical: 24
} as const;

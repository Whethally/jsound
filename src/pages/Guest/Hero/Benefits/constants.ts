export const BENEFITS_DATA = [
  {
    id: '1',
    title: 'ОПЫТНЫЕ ПРЕПОДАВАТЕЛИ',
    text: 'с индивидуальным подходом к каждому ученику'
  },
  {
    id: '2',
    title: 'ГИБКОЕ РАСПИСАНИЕ',
    text: '— выбирайте удобное время занятий'
  },
  {
    id: '3',
    title: 'ДРУЖЕЛЮБНАЯ и КОМФОРТНАЯ АТМОСФЕРА',
    text: 'для обучения музыке'
  },
  {
    id: '4',
    title: 'ОБУЧЕНИЕ С НУЛЯ',
    text: '— подходит для детей и взрослых любого уровня'
  }
] as const;

export const BENEFITS_CARD_CONFIG = {
  padding: 16,
  borderRadius: 16,
  gap: 0
} as const;

export const BENEFITS_GUTTER = {
  horizontal: { xs: 10, lg: 40 },
  vertical: { xs: 10, lg: 40 }
} as const;

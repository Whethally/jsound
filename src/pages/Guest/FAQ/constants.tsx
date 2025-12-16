export type FAQItem = {
  key: string;
  label: string;
  children: React.ReactNode;
};

export const FAQ_CONTENT = {
  title: 'F.A.Q'
} as const;

export const FAQ_ITEMS: FAQItem[] = [
  {
    key: '1',
    label: 'СКОЛЬКО ВРЕМЕНИ ДЛИТСЯ УРОК?',
    children: <p>Стандартное занятие длится 60 минут.</p>
  },
  {
    key: '2',
    label: 'СО СКОЛЬКИ ЛЕТ МОЖНО ПРИВОДИТЬ РЕБЁНКА?',
    children: <p>Мы принимаем учеников с 5 лет.</p>
  },
  {
    key: '3',
    label: 'МОЖНО ЛИ АРЕНДОВАТЬ ИНСТРУМЕНТ НА ПЕРИОД ОБУЧЕНИЯ?',
    children: <p>Да, у нас есть ограниченный фонд инструментов для аренды на период обучения.</p>
  }
];

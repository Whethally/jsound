export const ABOUT_CONTENT = {
  title: 'О нас',
  description1:
    'Мы — современная музыкальная школа в Уфе (район Сипайлово) с 5-летним опытом обучения детей и взрослых. Помогаем раскрыть музыкальный талант и развить навыки игры на инструментах и вокала.',
  description2:
    'Наша миссия — сделать обучение музыке в Уфе доступным, увлекательным и эффективным для каждого ученика, независимо от возраста и уровня подготовки.',
  primaryButton: 'Записаться',
  secondaryButton: 'Подробнее'
} as const;

export const ABOUT_IMAGES = [
  {
    id: 'image-1',
    src: '/About/Image_1.png',
    alt: 'Музыкальная студия J-Sound интерьер',
    className: 'aboutImageOne'
  },
  {
    id: 'image-2',
    src: '/About/Image_2.jpg',
    alt: 'Занятия в музыкальной школе',
    className: 'aboutImageTwo'
  }
] as const;

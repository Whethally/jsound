export const HERO_CONTENT = {
  title1: 'Студия творческого развития',
  title2: 'J–Sound',
  subtitle: 'Начать обучение музыке никогда не поздно',
  lead: '— для детей и взрослых любого уровня в нашей музыкальной школе в Уфе!'
} as const;

export const SOCIAL_BUTTONS = [
  {
    id: 'vk',
    icon: 'vk' as const,
    label: 'VK',
    href: 'vk'
  },
  {
    id: 'telegram',
    icon: 'telegram' as const,
    label: 'Telegram',
    href: 'telegram'
  },
  {
    id: 'whatsapp',
    icon: 'whatsapp' as const,
    label: 'WhatsApp',
    href: 'whatsapp'
  }
] as const;

export const FOOTER_CONTACTS = [
  {
    id: 'email',
    label: 'E-mail',
    value: 'admin@js-music.ru',
    href: 'mailto:admin@js-music.ru'
  },
  {
    id: 'address',
    label: 'Адрес',
    value: 'г. Уфа, ул. Гагарина, д.7',
    href: 'https://yandex.ru/maps/?text=ул. Гагарина, 7, Уфа'
  },
  {
    id: 'phone',
    label: 'Телефон',
    value: '+7 (929) 757-38-38',
    href: 'tel:+79297573838'
  }
] as const;

export const FOOTER_SOCIALS = [
  {
    id: 'vk',
    icon: 'vk' as const,
    label: 'VK',
    href: 'https://vk.com/jsound_ufa'
  },
  {
    id: 'telegram',
    icon: 'telegram' as const,
    label: 'Telegram',
    href: 'https://t.me/jsound_ufa'
  }
] as const;

export const COMPANY_INFO = {
  name: 'ИП Туманов Евгений Алексеевич',
  inn: 'ИНН 024403372499',
  agreement: 'Пользовательское соглашение',
  agreementUrl: '/privacy'
} as const;

export const FOOTER_ASSETS = {
  mapImage: '/Map.png',
  logo: '/Logo_Gray.png'
} as const;

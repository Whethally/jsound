export const MENU_ORDER = ['/about', '/methods', '/directions', '/team', '/reviews', '/faq'] as const;

export const BRANCH_INFO = {
  value: 'sipaylovo',
  address: 'Сипайлово, ул. Гагарина, д. 7',
  mapUrl: 'https://yandex.ru/maps/-/CLwBeI7N'
} as const;

export const OBSERVER_CONFIG = {
  rootMargin: '-80px 0px -60% 0px',
  threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
} as const;

export const HEADER_STYLES = {
  maxWidth: 1400,
  padding: '0 24px'
} as const;

export const DRAWER_STYLES = {
  height: '100vh',
  padding: '2rem 1.5rem',
  marginBottom: '3rem',
  marginTop: '3rem'
} as const;

export const ICON_SIZES = {
  logo: '5.5rem',
  logoMobile: '5rem',
  menu: '2rem',
  close: '2.5rem'
} as const;

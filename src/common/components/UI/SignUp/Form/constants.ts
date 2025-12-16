export const SIGNUP_FORM_CONTENT = {
  fields: {
    name: {
      placeholder: 'Ваше имя',
      errorMessage: 'Введите имя',
      maxLength: 100
    },
    phone: {
      errorMessage: 'Введите телефон',
      formatError: 'Введите корректный номер телефона'
    }
  },
  defaultButtonText: 'Записаться'
} as const;

export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 32,
    pattern: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
    sanitize: (value: string) => {
      return value
        .trim()
        .replace(/[<>{}[\]\\/'"`;()$]/g, '')
        .slice(0, 100);
    }
  },
  phone: {
    sanitize: (value: string) => {
      return value.replace(/[^\d+]/g, '');
    }
  }
} as const;

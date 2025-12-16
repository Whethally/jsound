# React Code Refactoring Guidelines

## 1. SEO Оптимизация

### Семантические теги

- Используйте `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` вместо `<div>`
- Используйте `<h1>` - `<h6>` для заголовков в правильной иерархии
- Используйте `<button>` для интерактивных элементов вместо `<div onClick>`

```tsx
// ❌ Плохо
<div className={styles.hero}>
  <div className={styles.title}>Заголовок</div>
</div>

// ✅ Хорошо
<section className={styles.hero}>
  <h1 className={styles.title}>Заголовок</h1>
</section>
```

### Meta теги и доступность

- Добавляйте `aria-label` для иконок и кнопок без текста
- Используйте `alt` для изображений
- Добавляйте `title` и `meta description`

```tsx
// ✅ Хорошо
<Button icon={<Icon type='vk' />} aria-label='VK' href='https://vk.com/jsound_ufa' target='_blank' />
```

---

## 2. Структура компонентов

### Файловая организация

```
Component/
├── Component.tsx              # Основной компонент
├── Component.module.scss      # Стили
├── Component.test.tsx         # Тесты (опционально)
├── types.ts                   # TypeScript типы
└── SubComponent/              # Подкомпоненты
    ├── SubComponent.tsx
    └── SubComponent.module.scss
```

### Именование

- **PascalCase** для компонентов: `UserProfile`, `ButtonPrimary`
- **camelCase** для функций и переменных: `handleClick`, `userName`
- **UPPER_SNAKE_CASE** для констант: `MAX_RETRIES`, `API_URL`

```tsx
// ✅ Хорошо
export const UserProfile = () => { ... }
const handleSubmit = () => { ... }
const API_BASE_URL = 'https://api.example.com';
```

---

## 3. Деструктуризация пропсов

```tsx
// ❌ Плохо
const Button = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

// ✅ Хорошо
type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
```

---

## 4. Стрелочные функции

```tsx
// ❌ Плохо
function Hero() {
  return <section>...</section>;
}

// ✅ Хорошо
export const Hero = () => {
  return <section>...</section>;
};

// ✅ Хорошо (с типами)
export const Hero: React.FC = () => {
  return <section>...</section>;
};
```

---

## 5. Вынос утилит и хелперов

### Независимые функции

```tsx
// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Component.tsx
import { validateEmail } from '@/utils/validation';

export const SignupForm = () => {
  const handleSubmit = (email: string) => {
    if (!validateEmail(email)) {
      // handle error
    }
  };
};
```

### Константы и конфигурация

```tsx
// constants/socials.ts
export const SOCIAL_LINKS = {
  vk: 'https://vk.com/jsound_ufa',
  telegram: 'https://t.me/jsound_ufa',
  whatsapp: 'https://wa.me/79297573838'
} as const;

// Component.tsx
import { SOCIAL_LINKS } from '@/constants/socials';
```

---

## 6. Правила использования хуков

### 6.1 Хуки только на верхнем уровне

```tsx
// ❌ Плохо
const Component = ({ condition }) => {
  if (condition) {
    const [state, setState] = useState(0); // ❌ Внутри условия
  }

  for (let i = 0; i < 10; i++) {
    useEffect(() => {}); // ❌ Внутри цикла
  }
};

// ✅ Хорошо
const Component = ({ condition }) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    if (condition) {
      // Условие внутри хука
    }
  }, [condition]);
};
```

### 6.2 Хуки только в компонентах или кастомных хуках

```tsx
// ❌ Плохо
const handleClick = () => {
  const [count, setCount] = useState(0); // ❌ В обработчике
};

// ✅ Хорошо - кастомный хук
const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};

// ✅ Хорошо - использование в компоненте
const Counter = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
```

### 6.3 Порядок хуков должен быть неизменным

```tsx
// ❌ Плохо
const Component = ({ condition }) => {
  if (condition) {
    const [state1, setState1] = useState(0); // ❌ Порядок меняется
  }
  const [state2, setState2] = useState('');
};

// ✅ Хорошо
const Component = ({ condition }) => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState('');

  useEffect(() => {
    if (condition) {
      setState1(10);
    }
  }, [condition]);
};
```

---

## 7. Чистые компоненты

### Принципы чистоты

- Не мутируйте пропсы или стейт напрямую
- Избегайте side effects вне `useEffect`
- Возвращайте JSX на основе пропсов и стейта

```tsx
// ❌ Плохо
const UserList = ({ users }) => {
  users.sort((a, b) => a.name.localeCompare(b.name)); // ❌ Мутация
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
};

// ✅ Хорошо
const UserList = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ul>
      {sortedUsers.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
};
```

---

## 8. Безопасность форм

### Защита от инъекций

```tsx
// ✅ Используйте библиотеки для валидации
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email('Неверный email'),
  password: z.string().min(8, 'Минимум 8 символов'),
  name: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Zа-яА-Я\s]+$/, 'Только буквы')
});

const SignupForm = () => {
  const handleSubmit = (data: unknown) => {
    try {
      const validData = signupSchema.parse(data);
      // Отправка на сервер
    } catch (error) {
      // Обработка ошибок валидации
    }
  };
};
```

### Санитизация данных

```tsx
import DOMPurify from 'dompurify';

const CommentDisplay = ({ comment }: { comment: string }) => {
  const sanitized = DOMPurify.sanitize(comment);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
```

### CSRF защита

```tsx
// Используйте токены для форм
const Form = () => {
  const csrfToken = useCSRFToken();

  return (
    <form>
      <input type='hidden' name='_csrf' value={csrfToken} />
      {/* остальные поля */}
    </form>
  );
};
```

---

## 9. Управление стилями

### CSS Modules

```tsx
// ❌ Плохо - inline styles
<Button style={{ color: 'white', border: '2px solid red' }} />

// ✅ Хорошо - CSS Modules
<Button className={styles.primaryButton} />
```

```scss
// Button.module.scss
.primaryButton {
  color: white;
  border: 2px solid #ff0065;

  &:hover {
    background-color: #ff0065;
  }
}
```

### Избегайте !important

```scss
// ❌ Плохо
.button {
  color: white !important;
}

// ✅ Хорошо - увеличьте специфичность
.form .button,
button.button {
  color: white;
}
```

---

## 10. Ant Design Best Practices

### Приоритет Ant Design компонентов

**Всегда используйте компоненты Ant Design вместо нативных HTML тегов и div, когда это возможно.**

#### Замена div на Flex/Space

```tsx
// ❌ Плохо - использование div с inline styles
<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// ✅ Хорошо - Flex компонент
<Flex vertical gap={16}>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>

// ✅ Хорошо - Space для простых случаев
<Space direction='vertical' size={16}>
  <div>Item 1</div>
  <div>Item 2</div>
</Space>
```

#### Замена контейнеров на Row/Col

```tsx
// ❌ Плохо
<div className={styles.container}>
  <div className={styles.sidebar}>Sidebar</div>
  <div className={styles.content}>Content</div>
</div>

// ✅ Хорошо
<Row gutter={[16, 16]}>
  <Col xs={24} md={8}>Sidebar</Col>
  <Col xs={24} md={16}>Content</Col>
</Row>
```

#### Замена текстовых элементов на Typography

```tsx
import { Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

// ❌ Плохо - нативные теги с классами
<h1 className={styles.title}>Заголовок</h1>
<p className={styles.text}>Текст</p>
<span className={styles.label}>Метка</span>

// ✅ Хорошо - Typography компоненты
<Title level={1} className={styles.title}>Заголовок</Title>
<Paragraph className={styles.text}>Текст</Paragraph>
<Text className={styles.label}>Метка</Text>
```

#### Замена section/article на Card

```tsx
// ❌ Плохо
<section className={styles.card}>
  <header className={styles.cardHeader}>
    <h3>Заголовок</h3>
  </header>
  <div className={styles.cardBody}>
    Контент
  </div>
</section>

// ✅ Хорошо
<Card
  title="Заголовок"
  className={styles.card}
>
  Контент
</Card>
```

#### Замена списков на List

```tsx
// ❌ Плохо
<ul className={styles.list}>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>

// ✅ Хорошо
<List
  dataSource={items}
  renderItem={item => (
    <List.Item key={item.id}>
      {item.name}
    </List.Item>
  )}
/>
```

#### Замена форм на Form компоненты

```tsx
// ❌ Плохо
<form onSubmit={handleSubmit}>
  <div className={styles.formGroup}>
    <label>Email:</label>
    <input type="email" value={email} onChange={handleChange} />
  </div>
  <button type="submit">Отправить</button>
</form>

// ✅ Хорошо
<Form onFinish={handleSubmit}>
  <Form.Item
    label="Email"
    name="email"
    rules={[{ required: true, type: 'email' }]}
  >
    <Input />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Отправить
    </Button>
  </Form.Item>
</Form>
```

#### Замена модальных окон на Modal

```tsx
// ❌ Плохо
<div className={styles.modalOverlay}>
  <div className={styles.modal}>
    <button onClick={onClose}>×</button>
    <h2>Заголовок</h2>
    <div>{content}</div>
  </div>
</div>

// ✅ Хорошо
<Modal
  title="Заголовок"
  open={isOpen}
  onCancel={onClose}
  onOk={handleOk}
>
  {content}
</Modal>
```

#### Замена навигации на Menu/Tabs

```tsx
// ❌ Плохо
<nav className={styles.nav}>
  <ul>
    <li><a href="/home">Главная</a></li>
    <li><a href="/about">О нас</a></li>
  </ul>
</nav>

// ✅ Хорошо - Menu
<Menu
  mode="horizontal"
  items={[
    { key: 'home', label: 'Главная' },
    { key: 'about', label: 'О нас' }
  ]}
  selectedKeys={[currentKey]}
/>

// ✅ Хорошо - Tabs для переключения контента
<Tabs
  items={[
    { key: '1', label: 'Вкладка 1', children: <Content1 /> },
    { key: '2', label: 'Вкладка 2', children: <Content2 /> }
  ]}
/>
```

#### Замена alert/notification на Alert/message

```tsx
// ❌ Плохо
<div className={styles.alert}>
  <span>⚠️</span>
  <p>Внимание!</p>
</div>

// ✅ Хорошо
<Alert
  message="Внимание!"
  type="warning"
  showIcon
/>

// ✅ Для уведомлений
import { message } from 'antd';
message.success('Операция выполнена успешно');
```

#### Замена loading состояний на Spin/Skeleton

```tsx
// ❌ Плохо
{
  isLoading && <div className={styles.loader}>Загрузка...</div>;
}

// ✅ Хорошо - Spin для индикатора
{
  isLoading && <Spin size='large' tip='Загрузка...' />;
}

// ✅ Хорошо - Skeleton для контента
{
  isLoading ? <Skeleton active /> : <Content />;
}
```

### Приоритет компонентов

**Порядок приоритета при выборе компонента:**

1. **Ant Design компонент** (Flex, Space, Card, List и т.д.)
2. **Семантический HTML тег** (section, article, nav и т.д.) - только если нет подходящего Ant Design компонента
3. **div** - только в крайнем случае для обертки со специфическими стилями

### Комбинирование Ant Design с семантикой

```tsx
// ✅ Можно комбинировать для SEO
<section className={styles.hero}>
  <Flex vertical align="center" gap={24}>
    <Title level={1}>Заголовок</Title>
    <Paragraph>Описание</Paragraph>
  </Flex>
</section>

// ✅ Card как замена article
<Card
  className={styles.articleCard}
  title={<Title level={3}>Статья</Title>}
>
  <Paragraph>Содержание статьи</Paragraph>
</Card>
```

### Используйте Grid для адаптивности

```tsx
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const Component = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return <div>{isMobile ? <MobileView /> : <DesktopView />}</div>;
};
```

### Используйте Flex вместо div с flexbox

```tsx
// ❌ Плохо
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>Left</div>
  <div>Right</div>
</div>

// ✅ Хорошо
<Flex justify="space-between" align="center">
  <div>Left</div>
  <div>Right</div>
</Flex>
```

### Таблица замены HTML на Ant Design

| HTML                          | Ant Design                | Когда использовать                    |
| ----------------------------- | ------------------------- | ------------------------------------- |
| `<div style="display: flex">` | `<Flex>`                  | Всегда для flexbox layout             |
| `<div>` с gap                 | `<Space>`                 | Для простых отступов между элементами |
| `<section>`                   | `<Card>`                  | Для карточек контента                 |
| `<ul>`, `<ol>`                | `<List>`                  | Для списков данных                    |
| `<h1>`-`<h6>`                 | `<Typography.Title>`      | Для заголовков с единым стилем        |
| `<p>`                         | `<Typography.Paragraph>`  | Для текстовых блоков                  |
| `<span>`                      | `<Typography.Text>`       | Для инлайн текста                     |
| `<form>`                      | `<Form>`                  | Всегда для форм                       |
| `<input>`                     | `<Input>`                 | Всегда для полей ввода                |
| `<button>`                    | `<Button>`                | Всегда для кнопок                     |
| `<select>`                    | `<Select>`                | Всегда для выпадающих списков         |
| `<nav>`                       | `<Menu>`                  | Для навигации                         |
| `<table>`                     | `<Table>`                 | Для табличных данных                  |
| Modal backdrop                | `<Modal>`                 | Для модальных окон                    |
| Alert box                     | `<Alert>`                 | Для уведомлений                       |
| Loading                       | `<Spin>` или `<Skeleton>` | Для индикации загрузки                |

---

## 11. TypeScript Best Practices

### Типизация пропсов

```tsx
// ✅ Используйте type вместо interface (проектное соглашение)
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
};

// ✅ Union types для вариантов
type Status = 'loading' | 'success' | 'error';
```

### Избегайте any

```tsx
// ❌ Плохо
const handleData = (data: any) => { ... };

// ✅ Хорошо
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

const handleData = <T>(response: ApiResponse<T>) => { ... };
```

---

## 12. Оптимизация производительности

### React.memo для предотвращения ре-рендеров

```tsx
import { memo } from 'react';

type CardProps = {
  title: string;
  description: string;
};

export const Card = memo(({ title, description }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});

Card.displayName = 'Card';
```

### useCallback и useMemo

```tsx
const Component = () => {
  const [count, setCount] = useState(0);

  // ✅ useCallback для функций
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // ✅ useMemo для вычислений
  const expensiveValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return <button onClick={handleClick}>{expensiveValue}</button>;
};
```

---

## 13. Обработка ошибок

### Error Boundaries

```tsx
import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Что-то пошло не так</div>;
    }

    return this.props.children;
  }
}
```

### Обработка в компонентах

```tsx
const DataFetcher = () => {
  const { data, isLoading, error } = useQuery();

  if (isLoading) return <Spin />;
  if (error) return <Alert type='error' message={error.message} />;
  if (!data) return <Empty />;

  return <DataDisplay data={data} />;
};
```

---

## 14. Accessibility (A11y)

### ARIA атрибуты

```tsx
<button aria-label='Закрыть модальное окно' aria-pressed={isOpen} onClick={handleClose}>
  <CloseIcon />
</button>
```

### Клавиатурная навигация

```tsx
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return isOpen ? (
    <div role='dialog' aria-modal='true'>
      ...
    </div>
  ) : null;
};
```

---

## 15. Тестирование

### Структура тестов

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## Чеклист рефакторинга

- [ ] Убраны все `!important` из CSS
- [ ] Убраны inline styles, заменены на CSS классы
- [ ] Использованы семантические HTML теги (где нет Ant Design альтернативы)
- [ ] **Приоритетно использованы Ant Design компоненты вместо div и HTML тегов**
- [ ] **Flex/Space вместо div с flexbox**
- [ ] **Typography компоненты вместо h1-h6, p, span**
- [ ] **Card вместо section/article для карточек**
- [ ] **List вместо ul/ol**
- [ ] **Form компоненты вместо нативных форм**
- [ ] **Button вместо button**
- [ ] **Modal вместо самописных модальных окон**
- [ ] **Menu/Tabs вместо nav**
- [ ] Добавлены ARIA атрибуты для доступности
- [ ] Компоненты используют деструктуризацию пропсов
- [ ] Все компоненты - стрелочные функции
- [ ] Хуки вызываются на верхнем уровне в правильном порядке
- [ ] Утилиты вынесены в отдельные файлы
- [ ] Используются TypeScript типы (type, не interface)
- [ ] Формы защищены от инъекций
- [ ] Компоненты чистые (без мутаций)
- [ ] Добавлена обработка ошибок
- [ ] Код следует единому стилю

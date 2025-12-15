# ReactJS Development Instructions

Instructions for building high-quality ReactJS applications with modern patterns, hooks, and best practices specifically tailored for the Alga Bashkortostan resident card project.

## Project Context

- Latest React version (React 19+)
- TypeScript for type safety (when applicable)
- Vite as build tool with custom configuration
- Latest Ant Design (antd) as primary UI framework
- Redux Toolkit Query for state management and API calls
- Latest React Router (7.6.1+) for routing
- SCSS/CSS Modules for styling
- JSON Server for mock API development
- Functional components with hooks as default pattern

## Component Organization

- Feature-based organization for scalability
- Guest/User separation for different user types
- Atomic design principles with UI components
- Container/Presentational component separation

## TypeScript Integration

- Type Definitions
- Use TypeScript types for props, state, and component definitions
- Implement generic components where appropriate
- Use strict mode in tsconfig.json for type safety
- Avoid using any.
- Create union types for component variants and states

```js
type ComponentProps = {
data: DataType[];
isLoading: boolean;
onAction: (id: string) => void;
};

// Define union types for variants
type CategoryType = 'news' | 'press-release' | 'media';

// Use proper generic constraints
interface ApiResponse<T> {
data: T[];
total: number;
page: number;
}
```

## RTK Query Types

```js
// Proper endpoint typing
export const apiSlice = createApi({
  endpoints: (builder) => ({
    getData: builder.query<ResponseType, RequestParams>({
      query: (params) => ({ url: '/endpoint', params }),
      providesTags: ['DataTag']
    })
  })
});
```

## Component Design Patterns

- Follow the single responsibility principle for components
- Use descriptive and consistent naming conventions
- Implement proper prop validation with TypeScript or PropTypes
- Design components to be testable and reusable
- Keep components small and focused on a single concern

# Custom UI Components

```js
// Base UI component with proper typing
type ButtonProps = {
  iconType?: 'none' | 'right' | 'only';
  fullWidth?: boolean;
  height?: 'P' | 'S' | 'M' | 'L';
} & AntButtonProps;

const Button = ({ iconType = 'none', fullWidth = false, ...restProps }: ButtonProps) => {
  // Implementation
};
```

# Compound Components

```tsx
// Card component with header, content, footer
const Card = ({ cardHeaderProps, cardContent, cardFooter, ...props }) => (
  <AntCard {...props}>
    {cardHeaderProps && <Header {...cardHeaderProps} />}
    {cardContent}
    {cardFooter && <Footer>{cardFooter}</Footer>}
  </AntCard>
);
```

## State Management

- Use useState for local component state
- Implement useReducer for complex state logic
- Leverage useContext for sharing state across component trees
- Consider external state management (Redux Toolkit, RTK Query) for complex applications
- Implement proper state normalization and data structures
- Use React Query or SWR for server state management

# RTK Query Implementation

```js
// API slice with proper error handling
export const pressCenterApi = createApi({
  reducerPath: 'pressCenterApi',
  baseQuery,
  tagTypes: ['PressCenter'],
  endpoints: (builder) => ({
    getPressCenter: builder.query<PressCenterResponse, PressCenterParams>({
      query: ({ type, page = 1, limit = 4 }) => ({
        url: '/press-center',
        params: { type, _page: page, _limit: limit }
      }),
      providesTags: ['PressCenter']
    })
  })
});
```

# Custom Hooks for Business Logic

```js
// Centralized hook for component logic
export const usePressCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // State derivation from URL
  const selectedCategory = getCategoryFromPath();
  const currentPage = parseInt(searchParams.get('page') || '1');

  // Event handlers
  const handleCategoryChange = (key: string) => {
    navigate(`/press-center/${key}?page=1`);
  };

  return {
    selectedCategory,
    currentPage,
    handleCategoryChange,
    // ... other handlers
  };
};
```

## Routing Architecture

# Route Configuration

```ts
// guest.routes
import type { IRoute } from '@/types/route';
import { guestLabels as labels, guestPaths as paths, guestElements as element } from './path';

export const guestRoutes: IRoute[] = Object.keys(paths).map((pathKey) => ({
  path: paths[pathKey as keyof typeof paths],
  label: labels[pathKey as keyof typeof labels],
  element: element[pathKey as keyof typeof element]
}));

// path/guest/index.ts
export { guestLabels } from './guest.labels';
export { guestPaths } from './guest.paths';
export { guestElements } from './guest.element';
export type { GuestParams } from './guest.params';

// paths
import { headerPaths } from './header';
import { pressCenterPaths } from './pressCenter';

export const guestPaths = {
  ...headerPaths,
  ...pressCenterPaths
} as const;

// params
export type GuestParams = Record<string, never>;
// labels
import { headerLabels } from './header';
import { pressCenterLabels } from './pressCenter';

export const guestLabels = {
  ...headerLabels,
  ...pressCenterLabels
};
// elements
import { headerElements } from './header';
import { pressCenterElements } from './pressCenter';

export const guestElements = {
  ...headerElements,
  ...pressCenterElements
};

// Centralized route definitions
export const headerPaths = {
  home: '/home',
  benefits: '/benefits',
  pressCenter: '/press-center',
  help: '/help'
} as const;

export const headerElements = {
  home: <Home />,
  benefits: <Benefits />,
  pressCenter: <PressCenter />,
  help: <Help />
};
export const headerLabels = {
  home: 'Главная',
  benefits: 'Что дает карта',
  howToGetCard: 'Как получить карту',
  partners: 'Партнеры',
  pressCenter: 'Пресс-центр',
  help: 'Помощь'
};
export type HeaderParams = Record<string, never>;
```

# Dynamic Route Handling

```tsx
<Routes>
  <Route path='/' element={<Navigate to='/home' />} />
  {routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ))}
  <Route path='*' element={<NotFoundPage />} />
</Routes>
```

## Styling Standards

# SCSS Variables and Theming

```scss
// Global variables in vars.scss
$primary-color: #0b3567;
$light-blue: #e6ebfe;
$border-radius: 10px;

// Component-specific styles
.card {
  background-color: $primary-color;
  border-radius: $border-radius;

  &:hover {
    background-color: darken($primary-color, 5%);
  }
}
```

# Ant Design Theme Configuration

```tsx
// Custom theme in main.tsx
<ConfigProvider
  theme={{
    token: {
      colorPrimary: styles.darkBlue,
      borderRadius: 10,
      fontSize: 18
    },
    components: {
      Button: {
        contentFontSize: 24,
        borderRadius: 10
      },
      Menu: {
        itemSelectedBg: styles.lightBlue,
        itemHoverBg: styles.lightBlue
      }
    }
  }}
>
```

## Data Fetching Patterns

API Response Handling

```tsx
const MyComponent = () => {
  const { data, isLoading, error, refetch } = useGetDataQuery(params);

  return (
    <StateQueryManager isLoading={isLoading} error={error} data={data} onRefetch={refetch}>
      {/* Success state content */}
    </StateQueryManager>
  );
};
```

# Error Boundary Implementation

```tsx
// Centralized error handling component
const StateQueryManager = ({ isLoading, error, data, onRefetch, children }) => {
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState onRetry={onRefetch} />;
  if (!data?.length) return <NotFoundState />;

  return children;
};
```

# Lazy Loading Implementation

```tsx
// Route-based code splitting
const PressCenter = lazy(() => import('@/pages/Guest/PressCenter/PressCenter'));

// Component lazy loading with Suspense
<Suspense fallback={<LoadingState />}>
  <PressCenter />
</Suspense>;
```

## Project-Specific Patterns

# Layout Components

```tsx
// Dual layout system for guest/user
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <UserLayout onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <GuestLayout onLogin={() => setIsAuthenticated(true)} />
  );
};
```

# Navigation Patterns

```tsx
// Dynamic active state based on path matching
const getSelectedKeys = () => {
  if (currentPath.startsWith('/press-center')) {
    return ['pressCenter'];
  }
  return [currentPath];
};
```

# Mock Data Structure

```tsx
// Structured mock data for development
export const mockFAQCategories: IFAQCategory[] = [
  {
    id: '1',
    name: 'Получение карты',
    questions: [
      {
        id: '1-1',
        question: 'Как получить карту?',
        answer: 'Подробный ответ...',
        category: 'getting-card'
      }
    ]
  }
];
```

## Hooks and Effects

- Use useEffect with proper dependency arrays to avoid infinite loops
- Implement cleanup functions in effects to prevent memory leaks
- Use useMemo and useCallback for performance optimization when needed
- Create custom hooks for reusable stateful logic
- Follow the rules of hooks (only call at the top level)
- Use useRef for accessing DOM elements and storing mutable values

## Styling

- Use CSS Modules, Styled Components, or modern CSS-in-JS solutions
- Implement responsive design with mobile-first approach
- Follow BEM methodology or similar naming conventions for CSS classes
- Use CSS custom properties (variables) for theming
- Implement consistent spacing, typography, and color systems
- Ensure accessibility with proper ARIA attributes and semantic HTML

## Performance Optimization

- Use React.memo for component memoization when appropriate
- Implement code splitting with React.lazy and Suspense
- Optimize bundle size with tree shaking and dynamic imports
- Use useMemo and useCallback judiciously to prevent unnecessary re-renders
- Implement virtual scrolling for large lists
- Profile components with React DevTools to identify performance bottlenecks

## Security

- Sanitize user inputs to prevent XSS attacks
- Validate and escape data before rendering
- Use HTTPS for all external API calls
- Implement proper authentication and authorization patterns
- Avoid storing sensitive data in localStorage or sessionStorage
- Use Content Security Policy (CSP) headers

## Accessibility

- Use semantic HTML elements appropriately
- Implement proper ARIA attributes and roles
- Ensure keyboard navigation works for all interactive elements
- Provide alt text for images and descriptive text for icons
- Implement proper color contrast ratios
- Test with screen readers and accessibility tools
- Icon (`<Icon type="phone" aria-label="Контактный телефон" />`)

## Implementation Process

- Plan component architecture and data flow
- Set up project structure with proper folder organization
- Define TypeScript interfaces and types
- Implement core components with proper styling
- Add state management and data fetching logic
- Implement routing and navigation
- Add form handling and validation
- Implement error handling and loading states
- Add testing coverage for components and functionality
- Optimize performance and bundle size
- Ensure accessibility compliance
- Add documentation and code comments

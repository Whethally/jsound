# Copilot Coding Agent Instructions for jsound

## Overview

- **Stack:** React 19+, TypeScript, Vite, Ant Design, Redux Toolkit Query, React Router 7+, SCSS/CSS Modules
- **Structure:** Feature-based, atomic UI, guest/user separation, container/presentational split
- **Build:** Use Vite (`npm run dev` for local dev, `npm run build` for production)
- **Lint:** ESLint with type-aware config; see `eslint.config.js` and README for advanced setup

## Key Patterns

- **Routing:** Centralized in `routes/` and `router/`, with guest/user route separation and dynamic route mapping
- **UI:** Ant Design components, custom UI in `src/common/components/UI/`, icons in `src/common/components/UI/icon/`
- **State:** RTK Query for API, local state via hooks, context for cross-tree state
- **Styling:** SCSS modules, global variables in `src/common/styles/`, BEM-like class naming
- **Mock Data:** Use `src/common/mock/` for development data

## Project Conventions

- **TypeScript:** Strict types, use `type` instead of `interface`, union types for variants, avoid `any`, see `src/types/`
- **Component Design:** Functional, hooks-based, single responsibility, descriptive naming
- **Component Files:** Always create `.module.scss` file alongside each component (e.g., `Button.tsx` + `Button.module.scss`)
- **Component Naming:** Use `ComponentList` for array mapping with Row/Col layout, `ComponentItem` for individual card/item wrappers
- **Code Safety:** Always write secure code - validate inputs, handle edge cases, sanitize data, use null checks
- **Error/Loading:** Use `StateQueryManager` pattern for query states
- **Layout:** Dual layout (`GuestLayout`, `UserLayout`), see `src/common/components/layout/`
- **Icons:** Use `<Icon type="..." aria-label="..." />` for accessibility

## Integration Points

- **Ant Design:** Custom theming in `main.tsx` via `ConfigProvider`
- **Redux Toolkit Query:** API slices in feature folders, see example in instructions
- **React Router:** Route config in `routes/`, elements in `routes/path/`

## Developer Workflow

- **Start dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Add feature:** Create feature folder in `src/pages/` and update route config
- **Add UI:** Place atomic components in `src/common/components/UI/`

## Examples

- **Route config:** `routes/guest.routes.tsx`, `routes/path/guest/`
- **Custom hook:** `src/common/hooks/useCookies.tsx`
- **Layout:** `src/common/components/layout/GuestLayout.tsx`
- **Icon:** `src/common/components/UI/icon/Icon.tsx`

## References

- See `.github/instructions/react.md.instructions.md` for React/TypeScript/AntD patterns
- See `README.md` for ESLint and Vite setup

---

_Iterate and expand this file as new conventions emerge. Ask maintainers for clarification if patterns are unclear._

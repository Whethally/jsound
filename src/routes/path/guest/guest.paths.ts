import { headerPaths } from './header';
import { legalPaths } from './legal';

export const guestPaths = {
  ...headerPaths,
  ...legalPaths
} as const;

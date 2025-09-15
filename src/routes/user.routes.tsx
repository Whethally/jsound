import { IRoute } from '@/types/route';

import { userPaths as paths, userLabels as labels, userElements as elements, userIcons as icons, headerPaths, userClassName } from './path';

export const userRoutes: IRoute[] = Object.keys(paths).map((key) => ({
  path: paths[key as keyof typeof paths],
  label: labels[key as keyof typeof labels],
  element: elements[key as keyof typeof elements],
  icon: icons[key as keyof typeof icons],
  className: userClassName[key as keyof typeof userClassName]
}));

export const headerRoutes = userRoutes.filter((route) => (Object.values(headerPaths) as string[]).includes(route.path));

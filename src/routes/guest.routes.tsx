import { IRoute } from '@/types/route';

import { guestLabels as labels, guestPaths as paths, guestElements as element } from './path';
import { headerPaths } from './path/guest/header';
import { legalPaths } from './path/guest/legal';

export const guestHomeRoutes: IRoute[] = Object.keys(headerPaths).map((pathKey) => ({
  path: headerPaths[pathKey as keyof typeof headerPaths],
  label: labels[pathKey as keyof typeof labels],
  element: element[pathKey as keyof typeof element]
}));

export const guestLegalRoutes: IRoute[] = Object.keys(legalPaths).map((pathKey) => ({
  path: legalPaths[pathKey as keyof typeof legalPaths],
  label: labels[pathKey as keyof typeof labels],
  element: element[pathKey as keyof typeof element]
}));

export const guestRoutes: IRoute[] = Object.keys(paths).map((pathKey) => ({
  path: paths[pathKey as keyof typeof paths],
  label: labels[pathKey as keyof typeof labels],
  element: element[pathKey as keyof typeof element]
}));

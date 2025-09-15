import { IRoute } from '@/types/route';

import { guestLabels as labels, guestPaths as paths, guestElements as element } from './path';

export const guestRoutes: IRoute[] = Object.keys(paths).map((pathKey) => ({
  path: paths[pathKey as keyof typeof paths],
  label: labels[pathKey as keyof typeof labels],
  element: element[pathKey as keyof typeof element]
}));

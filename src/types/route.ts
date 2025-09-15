import { IIconType } from '@/common/UI/icon/types';

export type IRoute = {
  label: string;
  path: string;
  element: React.ReactNode;
  icon?: IIconType;
  className?: string;
};

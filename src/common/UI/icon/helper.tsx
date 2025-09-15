import { AccessIcon } from './assets';

import { IGetInitialProps, IIconProps, IIcons, IIconStyle, IIconType } from './types';

export const icons: IIcons<IIconType> = {
  ['access']: { icon: AccessIcon }
};

const DEFAULT_ICON = AccessIcon;

export const getInitialProps: IGetInitialProps = ({ type, styles }) => {
  const { icon = DEFAULT_ICON, iconStyles = [] } = icons[type] ?? {};

  const initialTypeStyleClassNames: IIconProps['className'][] = [styles.icon];

  if (iconStyles.length > 0) {
    const iconTypeStyles: IIconProps['className'][] = iconStyles.map((iconStyle: IIconStyle) => styles[`icon--${iconStyle}`]);
    initialTypeStyleClassNames.push(...iconTypeStyles);
  }

  return {
    component: icon,
    initialTypeStyleClassNames
  };
};

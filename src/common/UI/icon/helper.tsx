import {
  AccompanimentIcon,
  DrumsIcon,
  EGuitarIcon,
  GuitarIcon,
  LogoIcon,
  MarkIcon,
  MicrophoneIcon,
  SynthIcon,
  TelegramIcon,
  VkIcon,
  WhatsAppIcon
} from './assets';

import { IGetInitialProps, IIconProps, IIcons, IIconStyle, IIconType } from './types';

export const icons: IIcons<IIconType> = {
  ['accompaniment']: { icon: AccompanimentIcon },
  ['drums']: { icon: DrumsIcon },
  ['eguitar']: { icon: EGuitarIcon },
  ['guitar']: { icon: GuitarIcon },
  ['logo']: { icon: LogoIcon },
  ['mark']: { icon: MarkIcon },
  ['microphone']: { icon: MicrophoneIcon },
  ['synth']: { icon: SynthIcon },
  ['telegram']: { icon: TelegramIcon },
  ['vk']: { icon: VkIcon },
  ['whatsapp']: { icon: WhatsAppIcon }
};

const DEFAULT_ICON = LogoIcon;

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

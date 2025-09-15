import { IconComponentProps } from '@ant-design/icons/es/components/Icon';

export type IIconType =
  | 'accompaniment'
  | 'drums'
  | 'eguitar'
  | 'guitar'
  | 'logo'
  | 'mark'
  | 'microphone'
  | 'synth'
  | 'telegram'
  | 'vk'
  | 'whatsapp';
type AntIconProps = Pick<IconComponentProps, 'className' | 'style' | 'rotate' | 'title' | 'key' | 'id' | 'spin'> &
  React.RefAttributes<HTMLSpanElement>; // todo: убрать style и перенести стили во всех экземплярах в классы

export interface IIconProps extends AntIconProps {
  type: IIconType;
  className?: AntIconProps['className'];
}

type IIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export type IIconStyle = string;

export type IIcons<T extends string> = {
  [key in T]: {
    icon: IIcon;
    iconStyles?: IIconStyle[];
  };
};

type ICssStyles = Record<string, string>;

export type IGetInitialProps = (params: { type: IIconProps['type']; styles: ICssStyles }) => {
  component: IIcon;
  initialTypeStyleClassNames: AntIconProps['className'][];
};

import AntIcon from '@ant-design/icons';
import { IconBaseProps } from '@ant-design/icons/es/components/Icon';
import cn from 'classnames';
import { getInitialProps } from './helper';
import { IIconType } from './types';
import styles from './styles.module.scss';

type IIconProps = {
  type: IIconType;
  className?: string;
  style?: React.CSSProperties;
  outerProps?: IconBaseProps;
};

export const Icon: React.FC<IIconProps> = ({ type, className, style, ...outerProps }: IIconProps) => {
  const { component, initialTypeStyleClassNames } = getInitialProps({ type, styles });

  const overridableProps: React.ComponentProps<typeof AntIcon> = {
    component
  };

  const unoverridableProps: React.ComponentProps<typeof AntIcon> = {
    className: cn(...initialTypeStyleClassNames, className),
    style
  };

  return <AntIcon {...overridableProps} {...outerProps} {...unoverridableProps} />;
};

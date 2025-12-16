import { Typography } from 'antd';
import styles from './SectionTitle.module.scss';
import { ReactNode } from 'react';

const { Text } = Typography;

export type SectionTitleProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  size?: 'l' | 'm' | 's';
  align?: 'left' | 'center' | 'right';
  variant?: 'accent' | 'light' | 'dark';
  className?: string;
  id?: string;
};

export const SectionTitle = ({ children, as = 'h2', size = 'l', align = 'left', variant = 'accent', className, id }: SectionTitleProps) => {
  type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  const isHeading = as.startsWith('h');

  const classes = [styles.sectionTitle];
  if (size !== 'l') classes.push(styles[`size-${size}`]);
  if (align !== 'left') classes.push(styles[`align-${align}`]);
  if (variant) classes.push(styles[`variant-${variant}`]);
  if (className) classes.push(className);

  return (
    <Text
      id={id}
      className={classes.join(' ')}
      role={isHeading ? 'heading' : undefined}
      aria-level={isHeading ? Number((as as HeadingLevel).replace('h', '')) : undefined}
    >
      {children}
    </Text>
  );
};

export default SectionTitle;

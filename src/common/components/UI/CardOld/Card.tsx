import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import { ReactNode } from 'react';
import styles from './Card.module.scss';

export type CardVariant = 'solid' | 'muted' | 'inverse' | 'accent';
export type CardPadding = 's' | 'm' | 'l' | 'none';
export type CardElevation = 'base' | 'low' | 'mid' | 'high';
export type CardRadius = 's' | 'm' | 'l' | 'xl';

export type BaseCardProps = {
  variant?: CardVariant;
  padding?: CardPadding;
  elevation?: CardElevation;
  radius?: CardRadius;
  fullHeight?: boolean;
  align?: 'left' | 'center' | 'right';
  clickable?: boolean;
  disabled?: boolean;
  shadow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  headerExtra?: ReactNode;
  bodyClassName?: string;
} & Omit<AntCardProps, 'title'>;

export type CardProps = BaseCardProps;

const elevationMap: Record<CardElevation, string | undefined> = {
  base: undefined,
  low: styles['elev-low'],
  mid: styles['elev-mid'],
  high: styles['elev-high']
};

export const Card = (props: CardProps): React.ReactElement => {
  const {
    variant = 'solid',
    padding = 'm',
    elevation = 'base',
    radius = 'l',
    fullHeight,
    align = 'left',
    clickable,
    disabled,
    shadow,
    title,
    subtitle,
    footer,
    headerExtra,
    className,
    bodyClassName,
    children,
    ...rest
  } = props;
  const classNames = [
    styles.cardBase,
    styles[`variant-${variant}`],
    styles[`padding-${padding}`],
    styles[`radius-${radius}`],
    align !== 'left' ? styles[`align-${align}`] : '',
    fullHeight ? styles.fullHeight : '',
    clickable ? styles.clickable : '',
    disabled ? styles.disabled : '',
    elevation !== 'base' ? elevationMap[elevation] : '',
    className || ''
  ]
    .filter(Boolean)
    .join(' ');

  const bodyCls = [styles.content, bodyClassName || ''].filter(Boolean).join(' ');

  const hasHeader = title || subtitle || headerExtra;

  const { style: styleProp, ...restWithoutStyle } = rest as { style?: React.CSSProperties } & typeof rest;
  const mergedStyle: React.CSSProperties | undefined = shadow ? { ...(styleProp || {}), boxShadow: shadow } : styleProp;

  const finalClassName = shadow
    ? classNames
        .split(' ')
        .filter((c) => !c.startsWith('elev-'))
        .join(' ')
    : classNames;

  return (
    <AntCard className={finalClassName} bordered={false} bodyStyle={{ padding: 0 }} style={mergedStyle} {...restWithoutStyle}>
      {hasHeader && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {headerExtra}
        </div>
      )}
      <div className={bodyCls}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </AntCard>
  );
};

export default Card;

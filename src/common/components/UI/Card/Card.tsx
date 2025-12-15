import { Card as AntCard, type CardProps as AntCardProps, Flex } from 'antd';
import { createStyles } from 'antd-style';
import styles from './Card.module.scss';
import Header, { type HeaderProps } from './header/Header';

type CardStyleParams = {
  padding?: number | string;
  borderRadius?: number | string;
  backgroundColor?: string;
  enableShadow?: boolean;
  customShadow?: string;
  border?: boolean;
};

type CardProps = {
  cardType?: 'default' | 'blured' | 'white';
  cardClassName?: string;
  cardHeaderProps?: HeaderProps;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
  cardGap?: number;
  cardEffects?: {
    isActive?: boolean;
    cardOnClick?: () => void;
  };
  cardPadding?: number | string;
  cardBorderRadius?: number | string;
  cardBackgroundColor?: string;
  cardShadow?: boolean;
  cardBorder?: boolean;
} & AntCardProps;

const useCardStyles = createStyles(({ css, prefixCls }, params?: CardStyleParams) => {
  const shadowValue = params?.customShadow ? params.customShadow : params?.enableShadow ? '0px 4px 11.3px 0px #00000014' : 'none';

  return {
    customCard: css`
      &.${prefixCls}-card {
        ${params?.backgroundColor && `background-color: ${params.backgroundColor};`}
        ${params?.borderRadius &&
        `border-radius: ${typeof params.borderRadius === 'number' ? `${params.borderRadius}px` : params.borderRadius};`}
        box-shadow: ${shadowValue};

        ${params?.border && `border: 1px solid #E1E4ED;`}

        .${prefixCls}-card-body {
          ${params?.padding && `padding: ${typeof params.padding === 'number' ? `${params.padding}px` : params.padding};`}
        }

        &:hover {
          ${params?.backgroundColor && `background-color: color-mix(in srgb, ${params.backgroundColor} 95%, black);`}
          transition: all 0.3s ease;
        }
      }
    `
  };
});

const Card = ({
  cardType = 'default',
  cardHeaderProps,
  cardContent,
  cardFooter,
  cardClassName = '',
  cardGap = 30,
  cardEffects,
  cardPadding,
  cardBorderRadius,
  cardBackgroundColor,
  cardShadow,
  cardBorder = false,
  ...prevProps
}: CardProps) => {
  const hasCover = !!prevProps.cover;
  const { styles: antdStyles } = useCardStyles({
    padding: cardPadding,
    borderRadius: cardBorderRadius,
    backgroundColor: cardBackgroundColor,
    enableShadow: cardShadow,
    border: cardBorder
  });

  const hasCustomStyles = cardPadding || cardBorderRadius || cardBackgroundColor || cardShadow !== undefined;

  const combinedClassName = [
    styles.card,
    cardClassName,
    styles[cardType],
    cardEffects && styles.cardHover,
    cardEffects?.isActive === true && styles.activeGradient,
    cardEffects?.isActive !== true && styles.activeScaleBase,
    hasCustomStyles && antdStyles.customCard,
    hasCover && styles.hasCover
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AntCard
      className={combinedClassName}
      data-active={cardEffects?.isActive ? 'true' : undefined}
      {...prevProps}
      onClick={cardEffects?.cardOnClick}
    >
      <Flex vertical gap={cardGap} className={styles.cardContainer}>
        {cardHeaderProps && <Header {...cardHeaderProps} />}
        {cardContent}
        {cardFooter && <div className={styles.cardFooter}>{cardFooter}</div>}
      </Flex>
    </AntCard>
  );
};

export default Card;

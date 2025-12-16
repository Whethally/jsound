import { useMemo } from 'react';
import { Col, Row, Typography } from 'antd';
import Card from '@/common/components/UI/Card/Card';
import styles from './Benefits.module.scss';
import { BENEFITS_DATA, BENEFITS_CARD_CONFIG, BENEFITS_GUTTER } from './constants';

const { Text } = Typography;

export const Benefits = () => {
  const benefitCards = useMemo(
    () =>
      BENEFITS_DATA.map((benefit) => (
        <Col key={benefit.id} xs={24} sm={12} lg={6}>
          <Card
            cardPadding={BENEFITS_CARD_CONFIG.padding}
            cardBorderRadius={BENEFITS_CARD_CONFIG.borderRadius}
            cardShadow
            cardBorder
            cardHeaderProps={{
              titleProps: {
                title: benefit.title,
                titleType: 'pink',
                titleSize: 'smallSize'
              }
            }}
            cardGap={BENEFITS_CARD_CONFIG.gap}
            cardContent={<Text className={styles.benefitText}>{benefit.text}</Text>}
          />
        </Col>
      )),
    []
  );

  return (
    <Row gutter={[BENEFITS_GUTTER.horizontal, BENEFITS_GUTTER.vertical]} className={styles.benefitsRow}>
      {benefitCards}
    </Row>
  );
};

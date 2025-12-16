import { useMemo } from 'react';
import { Col, Flex, Grid, Row, Typography } from 'antd';
import styles from './Directions.module.scss';
import { SectionTitle } from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/Card/Card';
import { DIRECTIONS_CONTENT, DIRECTIONS_DATA, DIRECTIONS_GRID_GUTTER } from './constants';

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Directions = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const directionCards = useMemo(
    () =>
      DIRECTIONS_DATA.map((direction) => (
        <Col key={direction.id} xl={8} md={12} xs={24}>
          <Card
            cardBorder
            cardShadow
            cardPadding='40px 24px'
            cardHeaderProps={{
              titleProps: {
                title: direction.title,
                titleType: 'default'
              },
              suffixProps: {
                suffixIcon: direction.icon,
                suffixType: 'coloredSuffix',
                background: `linear-gradient(140deg, ${direction.gradient[0]} 6.37%, ${direction.gradient[1]} 100%)`
              }
            }}
            cardGap={10}
            cardContent={<Text className={styles.directionDescription}>{direction.description}</Text>}
          />
        </Col>
      )),
    []
  );

  return (
    <div className={styles.directionContainer}>
      {!isMobile && (
        <>
          <img src='/Direction/Blur_1.svg' alt='' className={styles.blur1} aria-hidden='true' />
        </>
      )}
      <Flex vertical gap={32}>
        <Flex vertical gap={16}>
          <SectionTitle>{DIRECTIONS_CONTENT.title}</SectionTitle>
          <Text className={styles.subtitle}>{DIRECTIONS_CONTENT.subtitle}</Text>
        </Flex>

        <Row gutter={[DIRECTIONS_GRID_GUTTER.horizontal, DIRECTIONS_GRID_GUTTER.vertical]}>{directionCards}</Row>
      </Flex>
    </div>
  );
};

export default Directions;

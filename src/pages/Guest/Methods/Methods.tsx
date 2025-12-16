import { useMemo } from 'react';
import { Flex, Image, Typography, Row, Col, Space } from 'antd';
import styles from './Methods.module.scss';
import { SectionTitle } from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/Card/Card';
import { METHODS_CONTENT, METHODS_DATA, METHODS_GRID_GUTTER, METHOD_IMAGE_HEIGHT } from './constants';

const { Text } = Typography;

const Methods = () => {
  const methodCards = useMemo(
    () =>
      METHODS_DATA.map((method) => (
        <Col key={method.id} xs={24} md={12} style={{ padding: 0 }}>
          <Card
            cover={
              <Image preview={false} src={method.image} alt={method.alt} height={METHOD_IMAGE_HEIGHT} className={styles.methodImage} />
            }
            cardHeaderProps={{
              titleProps: {
                title: method.title,
                titleType: 'purple'
              }
            }}
            cardContent={
              <Space direction='vertical' size={24} className={styles.methodContent}>
                <Text className={styles.methodCardText}>{method.text}</Text>
              </Space>
            }
          />
        </Col>
      )),
    []
  );

  return (
    <Flex vertical gap={20} className={styles.methodsSection}>
      <Flex className={styles.methodsHeader}>
        <SectionTitle variant='light'>{METHODS_CONTENT.title}</SectionTitle>
      </Flex>

      <Space direction='vertical' className={styles.methodsGrid}>
        <Row gutter={[METHODS_GRID_GUTTER.horizontal, METHODS_GRID_GUTTER.vertical]}>{methodCards}</Row>
      </Space>
    </Flex>
  );
};

export default Methods;

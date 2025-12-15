import { Flex, Image, Typography, Row, Col } from 'antd';
import styles from './Methods.module.scss';
import { SectionTitle } from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/Card/Card';

const { Text } = Typography;

const Methods = () => (
  <Flex vertical gap={20} className={styles.methodsSection}>
    <Flex className={styles.methodsHeader}>
      <Flex className={styles.methodsTitleContainer}>
        <SectionTitle variant='light'>Методы обучения</SectionTitle>
      </Flex>
    </Flex>

    <div className={styles.methodsGrid}>
      <Row
        gutter={[
          { xs: 30, sm: 30, md: 40 },
          { xs: 30, sm: 30, md: 40 }
        ]}
      >
        {[
          {
            key: 'individual',
            img: '/Method/Image_1.png',
            alt: 'Индивидуальное обучение',
            title: 'Индивидуальное обучение',
            text: 'Индивидуальный подход к каждому ученику — это одно из основных требований к профессиональному обучению игре на музыкальных инструментах'
          },
          {
            key: 'group',
            img: '/Method/Image_2.png',
            alt: 'Групповое обучение',
            title: 'Групповое обучение',
            text: 'Групповое обучение проходит по принципу «от общего к частному». В процессе обучения каждый из учеников имеет возможность проявить и реализовать свой талант, получить помощь и поддержку от других ребят.\n\nКаждый урок строится так, чтобы ученик мог усвоить максимальное количество информации за короткое время.'
          }
        ].map((m) => (
          <Col key={m.key} xs={24} md={12}>
            <Card
              cover={
                <Image
                  preview={false}
                  src={m.img}
                  alt={m.alt}
                  height={300}
                  style={{
                    objectFit: 'cover'
                  }}
                />
              }
              cardHeaderProps={{
                titleProps: {
                  title: m.title,
                  titleType: 'purple'
                }
              }}
              cardContent={
                <Flex vertical gap={24}>
                  <Flex vertical gap={24} className={styles.methodContent}>
                    <Text className={styles.methodCardText} style={{ whiteSpace: 'pre-line' }}>
                      {m.text}
                    </Text>
                  </Flex>
                </Flex>
              }
            />
          </Col>
        ))}
      </Row>
    </div>
  </Flex>
);

export default Methods;

import { Button, Col, Flex, Row, Typography, Grid } from 'antd';
import styles from './About.module.scss';
import { SectionTitle } from '@/common/components/UI/SectionTitle/SectionTitle';
import { useState } from 'react';
import SignupModal from '@/common/components/UI/SignUp/SignupModal';

const { Text } = Typography;
const { useBreakpoint } = Grid;

const About = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg; // lg и выше — десктоп
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Row gutter={[32, 48]} align='top'>
      {/* Заголовок */}
      <Col span={24}>
        <SectionTitle>О нас</SectionTitle>
      </Col>

      {/* Текстовая часть */}
      <Col xs={24} lg={16} xl={18}>
        <Flex vertical gap={28}>
          <Text className={styles.description}>
            Мы — современная музыкальная школа в Уфе (район Сипайлово) с 5-летним опытом обучения детей и взрослых. Помогаем раскрыть
            музыкальный талант и развить навыки игры на инструментах и вокала.
          </Text>
          <Text className={styles.description}>
            Наша миссия — сделать обучение музыке в Уфе доступным, увлекательным и эффективным для каждого ученика, независимо от возраста и
            уровня подготовки.
          </Text>
        </Flex>
      </Col>

      {/* Кнопки */}
      <Col xs={24} lg={8} xl={6}>
        <Flex vertical gap={16} align={isMobile ? 'stretch' : 'flex-end'} style={{ width: '100%' }}>
          <Button
            type='primary'
            size='large'
            block={isMobile} // ← на мобилке — на всю ширину!
            onClick={() => setIsModalOpen(true)}
            className={styles.ctaButton}
          >
            Записаться
          </Button>

          <Button
            size='large'
            block={isMobile} // ← тоже на всю ширину
            className={styles.secondaryButton}
          >
            Подробнее
          </Button>
        </Flex>
      </Col>

      {/* Изображения */}
      <Col span={24}>
        <div className={styles.aboutImages}>
          <div className={`${styles.aboutImage} ${styles.aboutImageOne}`} />
          <div className={`${styles.aboutImage} ${styles.aboutImageTwo}`} />
        </div>
      </Col>

      {/* Модалка */}
      <SignupModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Row>
  );
};

export default About;

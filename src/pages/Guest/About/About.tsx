import { useMemo } from 'react';
import { Button, Col, Flex, Row, Typography, Grid, Space } from 'antd';
import styles from './About.module.scss';
import { SectionTitle } from '@/common/components/UI/SectionTitle/SectionTitle';
import SignupModal from '@/common/components/UI/SignUp/SignupModal';
import { ABOUT_CONTENT, ABOUT_IMAGES } from './constants';
import { useAbout } from './hooks/useAbout';

const { Text } = Typography;
const { useBreakpoint } = Grid;

const About = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const { isModalOpen, handleOpenModal, handleCloseModal } = useAbout();

  const descriptions = useMemo(
    () => [
      <Text key='desc-1' className={styles.description}>
        {ABOUT_CONTENT.description1}
      </Text>,
      <Text key='desc-2' className={styles.description}>
        {ABOUT_CONTENT.description2}
      </Text>
    ],
    []
  );

  return (
    <div className={styles.aboutContainer}>
      {!isMobile && (
        <>
          <img src='/About/Vector_1.svg' alt='' className={styles.vector1} aria-hidden='true' />
          <img src='/About/Vector_2.svg' alt='' className={styles.vector2} aria-hidden='true' />
          <img src='/About/Vector_3.svg' alt='' className={styles.vector3} aria-hidden='true' />
          <img src='/About/Blur_1.svg' alt='' className={styles.blur1} aria-hidden='true' />
          <img src='/About/Blur_2.svg' alt='' className={styles.blur2} aria-hidden='true' />
        </>
      )}

      <Row gutter={[32, 48]} align='top'>
        <Col span={24}>
          <SectionTitle>{ABOUT_CONTENT.title}</SectionTitle>
        </Col>

        <Col xs={24} lg={16} xl={18}>
          <Flex vertical gap={28}>
            {descriptions}
          </Flex>
        </Col>

        <Col xs={24} lg={8} xl={6}>
          <Flex vertical gap={16} align={isMobile ? 'stretch' : 'flex-end'} className={styles.full}>
            <Button type='primary' size='large' block={isMobile} onClick={handleOpenModal} className={styles.ctaButton}>
              {ABOUT_CONTENT.primaryButton}
            </Button>

            <Button size='large' block={isMobile} className={styles.secondaryButton}>
              {ABOUT_CONTENT.secondaryButton}
            </Button>
          </Flex>
        </Col>

        <Col span={24}>
          <Space className={styles.aboutImages}>
            {ABOUT_IMAGES.map((image) => (
              <div
                key={image.id}
                className={`${styles.aboutImage} ${styles[image.className]}`}
                style={{ backgroundImage: `url(${image.src})` }}
                role='img'
                aria-label={image.alt}
              />
            ))}
          </Space>
        </Col>

        <SignupModal visible={isModalOpen} onClose={handleCloseModal} />
      </Row>
    </div>
  );
};

export default About;

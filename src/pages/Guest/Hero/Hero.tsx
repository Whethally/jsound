import { Button, Col, Row, Typography, Space, Grid, Flex } from 'antd';
import styles from './Hero.module.scss';
import { Icon } from '@/common/UI/icon';
import { SignupForm } from '@/common/components/UI/SignUp/Form/SignupForm';
import { Benefits } from './Benefits/Benefits';
import { SOCIAL_LINKS } from '@/common/constants';
import { HERO_CONTENT, SOCIAL_BUTTONS } from './constants';

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Hero = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const socialButtons = (
    <>
      {SOCIAL_BUTTONS.map((social) => (
        <Button
          key={social.id}
          className={styles.socialButton}
          type='text'
          size={isMobile ? 'large' : 'middle'}
          shape='circle'
          icon={<Icon type={social.icon} />}
          aria-label={social.label}
          href={SOCIAL_LINKS[social.href]}
          target='_blank'
        />
      ))}
      <Button className={styles.phoneButton} type='text' size={isMobile ? 'large' : 'middle'} shape='round' href={SOCIAL_LINKS.phone}>
        {SOCIAL_LINKS.phoneDisplay}
      </Button>
    </>
  );
  return (
    <Flex vertical gap={40} className={styles.heroSpace}>
      <section className={styles.hero}>
        <Flex vertical className={styles.heroInner}>
          <Row gutter={[48, 48]} align='middle'>
            <Col span={24}>
              <Flex vertical align='center' className={styles.titleContainer}>
                <Text className={styles.title}>{HERO_CONTENT.title1}</Text>
                <Text className={styles.title}>{HERO_CONTENT.title2}</Text>
              </Flex>
            </Col>
            <Col xs={24} md={14}>
              <Flex vertical className={styles.contentWrapper}>
                <Text className={styles.subtitle}>{HERO_CONTENT.subtitle}</Text>
                <Text className={styles.lead}>{HERO_CONTENT.lead}</Text>

                {!isMobile && (
                  <Space size={16} wrap className={styles.desktopSocials}>
                    {socialButtons}
                  </Space>
                )}
              </Flex>
            </Col>{' '}
            <Col xs={24} md={10}>
              <SignupForm variant='light' buttonText='Записаться' />
            </Col>
            {isMobile && (
              <Col xs={24} className={styles.mobileSocials}>
                <Space size={16} className={styles.mobileSocialsSpace}>
                  {socialButtons}
                </Space>
              </Col>
            )}
          </Row>
        </Flex>
      </section>

      <Benefits />
    </Flex>
  );
};

export default Hero;

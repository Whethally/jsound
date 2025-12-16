import { Layout, Row, Col, Flex, Typography, Button, Image } from 'antd';
import Link from 'antd/es/typography/Link';
import styles from './Footer.module.scss';
import { Icon } from '@/common/UI/icon';
import { COMPANY_INFO, FOOTER_ASSETS } from './constants';
import { useFooter } from './hooks/useFooter';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const { contactItems, socialButtons } = useFooter();
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.mapBackground}>
        <img src={FOOTER_ASSETS.mapImage} alt='Map Background' className={styles.mapImage} />
      </div>

      <div className={styles.footerContent}>
        <Row gutter={[48, 32]} align='middle'>
          <Col xs={24} lg={12}>
            <Row gutter={[32, 24]}>
              {contactItems.slice(0, 3).map((contact) => (
                <Col key={contact.id} xs={24} sm={12}>
                  <Flex vertical gap={8}>
                    <Text className={styles.contactLabel}>{contact.label}</Text>
                    <Link href={contact.href} target='_blank' rel='noopener noreferrer' className={styles.contactValue}>
                      {contact.value}
                    </Link>
                  </Flex>
                </Col>
              ))}
              <Col xs={24} sm={12}>
                <Flex gap={16} className={styles.socialButtons} align='flex-end'>
                  {socialButtons.map((social) => (
                    <Button
                      key={social.id}
                      type='primary'
                      shape='circle'
                      icon={<Icon type={social.icon} />}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.socialButton}
                      aria-label={social.label}
                    />
                  ))}
                </Flex>
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <Flex justify='flex-end' align='center' className={styles.logoContainer}>
              <Image src={FOOTER_ASSETS.logo} preview={false} className={styles.footerLogo} alt='J-Sound Logo' />
            </Flex>
          </Col>
        </Row>
      </div>

      <div className={styles.footerBottom}>
        <Row justify='space-between' align='middle'>
          <Col xs={24} md={18}>
            <Flex vertical gap={4}>
              <Text className={styles.companyName}>{COMPANY_INFO.name}</Text>
              <Text className={styles.companyInn}>{COMPANY_INFO.inn}</Text>
            </Flex>
          </Col>
          <Col xs={24} md={6}>
            <Link href={COMPANY_INFO.agreementUrl} className={styles.agreement}>
              {COMPANY_INFO.agreement}
            </Link>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;

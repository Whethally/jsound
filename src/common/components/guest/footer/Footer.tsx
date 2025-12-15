import { Layout, Row, Col, Flex, Typography, Button, Image } from 'antd';
import styles from './Footer.module.scss';
import { Icon } from '@/common/UI/icon';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      {/* Карта на фоне */}
      <div className={styles.mapBackground}>
        <img src='/Map.png' alt='Map Background' className={styles.mapImage} />
      </div>

      {/* Контент поверх карты */}
      <div className={styles.footerContent}>
        <Row gutter={[48, 32]} align='middle'>
          <Col xs={24} lg={12}>
            <Row gutter={[32, 24]}>
              <Col xs={24} sm={12}>
                <Flex vertical gap={8}>
                  <Text className={styles.contactLabel}>E-mail</Text>
                  <Text className={styles.contactValue}>admin@js-music.ru</Text>
                </Flex>
              </Col>
              <Col xs={24} sm={12}>
                <Flex vertical gap={8}>
                  <Text className={styles.contactLabel}>Адрес</Text>
                  <Text className={styles.contactValue}>г. Уфа, ул. Гагарина, д.7</Text>
                </Flex>
              </Col>
              <Col xs={24} sm={12}>
                <Flex vertical gap={8}>
                  <Text className={styles.contactLabel}>Телефон</Text>
                  <Text className={styles.contactValue}>+7 (929) 757-38-38</Text>
                </Flex>
              </Col>
              <Col xs={24} sm={12}>
                <Flex gap={16} className={styles.socialButtons} align='flex-end' style={{ height: '100%' }}>
                  <Button type='primary' shape='circle' icon={<Icon type='vk' />} className={styles.socialButton} />
                  <Button type='primary' shape='circle' icon={<Icon type='telegram' />} className={styles.socialButton} />
                </Flex>
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.logoContainer}>
              <Image src='/Logo_Gray.png' preview={false} className={styles.footerLogo} />
            </div>
          </Col>
        </Row>
      </div>

      {/* Нижний темный блок */}
      <div className={styles.footerBottom}>
        <Row justify='space-between' align='middle'>
          <Col xs={24} md={18}>
            <Flex vertical gap={4}>
              <Text className={styles.companyName}>ИП Туманов Евгений Алексеевич</Text>
              <Text className={styles.companyInn}>ИНН 024403372499</Text>
            </Flex>
          </Col>
          <Col xs={24} md={6}>
            <Text className={styles.agreement}>Пользовательское соглашение</Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;

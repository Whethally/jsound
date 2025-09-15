import { Layout, Row, Col, Flex, Typography, Button, Image } from 'antd';
import styles from './Footer.module.scss';
import { Icon } from '@/common/UI/icon';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <Row gutter={[16, 16]} justify='space-between' wrap>
        <Col lg={8} xs={24}>
          <Row gutter={[16, 16]}>
            <Col lg={12} xs={24}>
              <Flex vertical gap={16}>
                <Flex vertical gap={4}>
                  <Text>E-mail</Text>
                  <Text>admin@js-music.ru</Text>
                </Flex>
                <Flex vertical gap={4}>
                  <Text>Телефон</Text>
                  <Text>+7 (929) 757-38-38</Text>
                </Flex>
              </Flex>
            </Col>
            <Col lg={12} xs={24}>
              <Flex vertical gap={16} justify='space-between' style={{ height: '100%' }}>
                <Flex vertical gap={4}>
                  <Text>Адрес</Text>
                  <Text>г. Уфа, ул. Гагарина, д.7</Text>
                </Flex>
                <Flex gap={16}>
                  <Button type='primary' shape='circle' icon={<Icon type='vk' />} />
                  <Button type='primary' shape='circle' icon={<Icon type='telegram' />} />
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Col>
        <Col lg={8} xs={24}>
          <Image src='/Logo_Gray.png' preview={false} />
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;

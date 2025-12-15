import { Button, Col, Row, Typography, Space } from 'antd';
import styles from './Hero.module.scss';
import { Icon } from '@/common/UI/icon';
import Card from '@/common/components/UI/Card/Card';
import { SignupForm } from '@/common/components/UI/SignUp/Form/SignupForm';

const { Text } = Typography;

const Hero = () => {
  return (
    <>
      <Space direction='vertical' size={40} style={{ width: '100%' }}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <Row gutter={[48, 48]} align='middle'>
              <Col span={24}>
                <div className={styles.titleContainer}>
                  <Text className={styles.title}>Студия творческого развития</Text>
                  <Text className={styles.title}>J–Sound</Text>
                </div>
              </Col>

              <Col xs={24} md={14}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text className={styles.subtitle}>Начать обучение музыке никогда не поздно</Text>
                  <Text className={styles.lead}>— для детей и взрослых любого уровня в нашей музыкальной школе в Уфе!</Text>

                  <Space size={16} wrap style={{ marginTop: 32 }} className={styles.desktopSocials}>
                    <Button
                      style={{ color: 'white', border: '2px solid #ffffff40' }}
                      type='text'
                      shape='circle'
                      icon={<Icon type='vk' />}
                      aria-label='VK'
                      href='https://vk.com/jsound_ufa'
                      target='_blank'
                    />
                    <Button
                      style={{ color: 'white', border: '2px solid #ffffff40' }}
                      type='text'
                      shape='circle'
                      icon={<Icon type='telegram' />}
                      aria-label='Telegram'
                      href='https://t.me/jsound_ufa'
                      target='_blank'
                    />
                    <Button
                      style={{ color: 'white', border: '2px solid #ffffff40' }}
                      type='text'
                      shape='circle'
                      icon={<Icon type='whatsapp' />}
                      aria-label='WhatsApp'
                      href='https://wa.me/79297573838'
                      target='_blank'
                    />
                    <Button style={{ color: 'white', border: '2px solid #ffffff40' }} type='text' shape='round' href='tel:+79297573838'>
                      +7 (929) 757-38-38
                    </Button>
                  </Space>
                </div>
              </Col>

              <Col xs={24} md={10}>
                <SignupForm variant='light' buttonText='Записаться' />
              </Col>

              {/* Мобильные соц. сети внизу */}
              <Col xs={24} className={styles.mobileSocials}>
                <Space size={16} style={{ justifyContent: 'space-between', width: '100%' }}>
                  <Button
                    style={{ color: 'white', border: '2px solid #ffffff40' }}
                    type='text'
                    size='large'
                    shape='circle'
                    icon={<Icon type='vk' />}
                    aria-label='VK'
                    href='https://vk.com/jsound_ufa'
                    target='_blank'
                  />
                  <Button
                    style={{ color: 'white', border: '2px solid #ffffff40' }}
                    type='text'
                    size='large'
                    shape='circle'
                    icon={<Icon type='telegram' />}
                    aria-label='Telegram'
                    href='https://t.me/jsound_ufa'
                    target='_blank'
                  />
                  <Button
                    style={{ color: 'white', border: '2px solid #ffffff40' }}
                    type='text'
                    size='large'
                    shape='circle'
                    icon={<Icon type='whatsapp' />}
                    aria-label='WhatsApp'
                    href='https://wa.me/79297573838'
                    target='_blank'
                  />
                  <Button
                    style={{ color: 'white', border: '2px solid #ffffff40' }}
                    type='text'
                    size='large'
                    shape='round'
                    href='tel:+79297573838'
                  >
                    +7 (929) 757-38-38
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <Row
          gutter={[
            { xs: 10, lg: 40 },
            { xs: 10, lg: 40 }
          ]}
          className={styles.benefitsRow}
        >
          {[
            { title: 'ОПЫТНЫЕ ПРЕПОДАВАТЕЛИ', text: 'с индивидуальным подходом к каждому ученику' },
            { title: 'ГИБКОЕ РАСПИСАНИЕ', text: '— выбирайте удобное время занятий' },
            { title: 'ДРУЖЕЛЮБНАЯ и КОМФОРТНАЯ АТМОСФЕРА', text: 'для обучения музыке' },
            { title: 'ОБУЧЕНИЕ С НУЛЯ', text: '— подходит для детей и взрослых любого уровня' }
          ].map((b) => (
            <Col key={b.title} xs={24} sm={12} lg={6}>
              <Card
                cardPadding={16}
                cardBorderRadius={16}
                cardShadow
                cardBorder
                cardHeaderProps={{
                  titleProps: {
                    title: b.title,
                    titleType: 'pink',
                    titleSize: 'smallSize'
                  }
                }}
                cardGap={0}
                cardContent={<Text style={{ display: 'inline-block', fontSize: 16, fontWeight: 700, lineHeight: '18px' }}>{b.text}</Text>}
              />
            </Col>
          ))}
        </Row>
      </Space>
    </>
  );
};

export default Hero;

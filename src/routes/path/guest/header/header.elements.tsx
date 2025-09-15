import { Button, Col, Flex, Row, Typography } from 'antd';

const { Title, Text } = Typography;

const About = () => (
  <Row>
    <Col span={24}>
      <Title level={2}>О нас</Title>
    </Col>
    <Row gutter={16}>
      <Col span={18}>
        <Flex vertical gap={24}>
          <Text>
            Мы — современная музыкальная школа в Уфе, в районе Сипайлово, с 5-летним опытом обучения детей и взрослых. Помогаем раскрыть
            музыкальный талант и развить навыки игры на инструментах и вокала.{' '}
          </Text>
          <Text>
            Наша миссия — сделать обучение музыке в Уфе доступным, увлекательным и эффективным для каждого ученика, независимо от возраста и
            уровня подготовки.
          </Text>
        </Flex>
      </Col>
      <Col span={6}>
        <Flex vertical gap={10} align='end'>
          <Button type='primary'>Записаться</Button>
          <Button>Подробнее</Button>
        </Flex>
      </Col>
    </Row>
  </Row>
);
const Education = () => <Title level={2}>Обучение</Title>;
const Location = () => <Title level={2}>Местоположение</Title>;
const Teachers = () => <Title level={2}>Преподаватели</Title>;
const Reviews = () => <Title level={2}>Отзывы</Title>;
const Faq = () => <Title level={2}>F.A.Q</Title>;

export const headerElements = {
  about: <About />,
  education: <Education />,
  location: <Location />,
  teachers: <Teachers />,
  reviews: <Reviews />,
  faq: <Faq />
};

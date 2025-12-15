import { Col, Flex, Row, Typography } from 'antd';
import './Directions.module.scss';
import { IIconType } from '@/common/UI/icon';
import { SectionTitle } from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/Card/Card';

const { Text } = Typography;

// Направления (иконки и описания)
const directionCards: { icon: IIconType; title: string; desc: string; color: string[] }[] = [
  {
    icon: 'microphone',
    title: 'Вокал',
    desc: 'Индивидуальные и групповые уроки вокала для детей и взрослых. Поможем развить голос, дыхание и уверенность на сцене.',
    color: ['#FF72AA', '#FF0065']
  },
  {
    icon: 'guitar',
    title: 'Гитара',
    desc: 'Обучение игре на акустической гитаре с нуля и для продолжающих. Осваивайте аккорды, ритмы и техники исполнения.',
    color: ['#C0AAFF', '#9000FF']
  },
  {
    icon: 'eguitar',
    title: 'Электрогитара/Бас-гитара',
    desc: 'Современные методы игры на электрогитаре и бас-гитаре, развитие техники и музыкального слуха для всех уровней.',
    color: ['#729AFF', '#0022FF']
  },
  {
    icon: 'accompaniment',
    title: 'Аккомпанемент',
    desc: 'Индивидуальные и групповые уроки вокала для детей и взрослых. Поможем развить голос, дыхание и уверенность на сцене.',
    color: ['#A1F4AD', '#53EA0E']
  },
  {
    icon: 'drums',
    title: 'Барабаны',
    desc: 'Уроки игры на ударных инструментах, развитие чувства ритма, координации и техники исполнения.',
    color: ['#72FFE3', '#00BBFF']
  },
  {
    icon: 'synth',
    title: 'Синтезатор',
    desc: 'Обучение игре на синтезаторе и клавишных, освоение основ музыкальной теории и импровизации.',
    color: ['#FFE372', '#FF8000']
  }
];

const Directions = () => (
  <Flex vertical gap={32}>
    <Flex vertical gap={16}>
      <SectionTitle>Наши направления</SectionTitle>
      <Text
        style={{
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px ',
          letterSpacing: '0%'
        }}
      >
        Уроки вокала, гитары, ударных и синтезатора в Уфе — музыкальная школа
      </Text>
    </Flex>

    <Row gutter={[24, 24]}>
      {directionCards.map((card) => (
        <Col key={card.title} xl={8} md={12} xs={24}>
          <Card
            cardBorder
            cardShadow
            cardPadding='40px 24px'
            cardHeaderProps={{
              titleProps: {
                title: card.title,
                titleType: 'default'
              },
              suffixProps: {
                suffixIcon: card.icon,
                suffixType: 'coloredSuffix',
                background: `linear-gradient(140deg, ${card.color[0]} 6.37%, ${card.color[1]} 100%)`
              }
            }}
            cardGap={10}
            cardContent={
              <Flex vertical gap={12} style={{ height: '100%', alignItems: 'center', textAlign: 'center' }}>
                <Text
                  style={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%'
                  }}
                >
                  {card.desc}
                </Text>
              </Flex>
            }
          />
        </Col>
      ))}
    </Row>
  </Flex>
);

export default Directions;

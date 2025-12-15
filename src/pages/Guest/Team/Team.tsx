import { Button, Carousel, Flex, Tag, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import styles from './Team.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';

const { Title, Text } = Typography;

// Команда (карусель карточек преподавателей с подробной информацией)
const teamData = [
  {
    name: 'Моисеев Антон Сергеевич',
    roles: ['Гитара', 'Электрогитара'],
    img: '/Team/Moiseev.png',
    fullName: 'Моисеев Антон Сергеевич'
  },
  {
    name: 'Бакирова Майя Раисовна',
    roles: ['Вокал', 'Синтезатор'],
    img: '/Team/Bakirova.png',
    fullName: 'Бакирова Майя Раисовна'
  },
  {
    name: 'Садыкова Ильмира Рашитовна',
    roles: ['Вокал'],
    img: '/Team/Sadikova.png',
    fullName: 'Садыкова Ильмира Рашитовна'
  },
  {
    name: 'Шарипов Азамат Ильдарович',
    roles: ['Гитара', 'Электрогитара'],
    img: '/Team/Sharipov.png',
    fullName: 'Шарипов Азамат Ильдарович'
  }
];

const Team = () => {
  const carouselRef = useRef<CarouselRef>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <Flex vertical className={styles.teamSection}>
      <Flex className={styles.teamHeader}>
        <Flex align='center' justify='space-between' className={styles.teamTitleContainer}>
          <Flex vertical gap={10}>
            <SectionTitle variant='light'>Наша супер команда</SectionTitle>
            <Text className={styles.teamSubtitle}>Все на вес золота, большие молодцы, отличные профессионалы!</Text>
          </Flex>
          <Flex gap={12} className={styles.teamNavigation}>
            <Button size='large' icon={<LeftOutlined />} onClick={handlePrev} aria-label='Предыдущий' className={styles.navButton} />
            <Button size='large' icon={<RightOutlined />} onClick={handleNext} aria-label='Следующий' className={styles.navButton} />
          </Flex>
        </Flex>
      </Flex>

      <Carousel
        ref={carouselRef}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        draggable
        arrows={false}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]}
        className={styles.teamCarousel}
      >
        {teamData.map((member) => (
          <div key={member.name} className={styles.teamSlide}>
            <div className={styles.teamCard}>
              <div className={styles.teamImageContainer}>
                <img src={member.img} alt={member.name} className={styles.teamImage} />
                <div className={styles.teamOverlay}>
                  <Title level={4} className={styles.memberName}>
                    {member.fullName}
                  </Title>
                  <Flex wrap className={styles.memberRoles}>
                    {member.roles.map((role) => (
                      <Tag key={role} className={styles.roleTag}>
                        {role}
                      </Tag>
                    ))}
                  </Flex>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Team;

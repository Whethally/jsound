import { useMemo } from 'react';
import { Button, Carousel, Flex, Typography, Grid } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './Team.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';
import { TEAM_CONTENT, TEAM_DATA, CAROUSEL_CONFIG } from './constants';
import { useTeam } from './hooks/useTeam';
import { TeamCard } from './TeamCard';

const { Text } = Typography;

const Team = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;
  const { carouselRef, handlePrev, handleNext } = useTeam();

  const carouselSettings = useMemo(
    () => ({
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: true,
      arrows: false,
      responsive: [
        {
          breakpoint: CAROUSEL_CONFIG.desktop.breakpoint,
          settings: {
            slidesToShow: CAROUSEL_CONFIG.tablet.slidesToShow
          }
        },
        {
          breakpoint: CAROUSEL_CONFIG.tablet.breakpoint,
          settings: {
            slidesToShow: CAROUSEL_CONFIG.mobile.slidesToShow
          }
        },
        {
          breakpoint: CAROUSEL_CONFIG.mobile.breakpoint,
          settings: {
            slidesToShow: CAROUSEL_CONFIG.small.slidesToShow
          }
        }
      ]
    }),
    []
  );

  return (
    <Flex vertical className={styles.teamSection}>
      <Flex className={styles.teamHeader}>
        <Flex align='center' justify='space-between' className={styles.teamTitleContainer}>
          <Flex vertical gap={10}>
            <SectionTitle variant='light'>{TEAM_CONTENT.title}</SectionTitle>
            <Text className={styles.teamSubtitle}>{TEAM_CONTENT.subtitle}</Text>
          </Flex>
          {!isMobile && (
            <Flex gap={12} className={styles.teamNavigation}>
              <Button size='large' icon={<LeftOutlined />} onClick={handlePrev} aria-label='Предыдущий' className={styles.navButton} />
              <Button size='large' icon={<RightOutlined />} onClick={handleNext} aria-label='Следующий' className={styles.navButton} />
            </Flex>
          )}
        </Flex>
      </Flex>

      <Carousel ref={carouselRef} {...carouselSettings} className={styles.teamCarousel}>
        {TEAM_DATA.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default Team;

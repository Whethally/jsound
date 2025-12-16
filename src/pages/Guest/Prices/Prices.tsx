import { useMemo } from 'react';
import { Typography, Button, Menu, Flex, Space, Grid } from 'antd';
import styles from './Prices.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/Card/Card';
import SignupModal from '@/common/components/UI/SignUp/SignupModal';
import { PRICES_CONTENT, DIRECTIONS_DATA } from './constants';
import { usePrices } from './hooks/usePrices';
import type { DirectionData } from './constants';

const { Text } = Typography;

const PriceCard = ({
  direction,
  isActive,
  onClick,
  onEnroll
}: {
  direction: DirectionData;
  isActive: boolean;
  onClick: () => void;
  onEnroll: () => void;
}) => (
  <Card
    cardClassName={styles.directionCard}
    cardEffects={{
      isActive,
      cardOnClick: onClick
    }}
    cardHeaderProps={{
      suffixProps: {
        suffixIcon: direction.icon,
        suffixDirection: 'right',
        suffixType: 'coloredSuffix',
        background: direction.gradient
      }
    }}
    cardGap={10}
    cardContent={
      <Space direction='vertical' size={40} className={styles.cardContent}>
        <Text className={styles.directionTitle}>{direction.title}</Text>
        {direction.packages.map((pkg) => (
          <Flex vertical key={pkg.pack} className={styles.packageWrapper}>
            <Text className={styles.packageTitle}>{pkg.pack}</Text>
            <div className={styles.priceRow}>
              <Text>{PRICES_CONTENT.priceLabels.individual}</Text>
              <Text className={styles.price}>{pkg.individual}</Text>
            </div>
            <div className={styles.priceRow}>
              <Text>{PRICES_CONTENT.priceLabels.group}</Text>
              <Text className={styles.price}>{pkg.group}</Text>
            </div>
          </Flex>
        ))}
        <Button size='large' type='primary' className={styles.enrollButton} onClick={onEnroll}>
          {PRICES_CONTENT.enrollButton}
        </Button>
      </Space>
    }
  />
);

const Prices = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const {
    isModalOpen,
    selectedDirection,
    sliderRef,
    menuItems,
    selectedDirectionData,
    handleDirectionChange,
    handleOpenModal,
    handleCloseModal
  } = usePrices();

  const mobileButtons = useMemo(
    () => (
      <div className={styles.mobileDirectionsButtons}>
        {DIRECTIONS_DATA.map((direction) => (
          <Button
            key={direction.id}
            size='large'
            type={selectedDirection === direction.id ? 'primary' : 'default'}
            onClick={() => handleDirectionChange(direction.id)}
            className={`${styles.mobileDirectionButton} ${selectedDirection === direction.id ? styles.active : ''}`}
          >
            {direction.title}
          </Button>
        ))}
      </div>
    ),
    [selectedDirection, handleDirectionChange]
  );

  return (
    <div className={styles.priceContainer}>
      {!isMobile && (
        <>
          <img src='/Price/Vector_1.svg' alt='' className={styles.vector1} aria-hidden='true' />
          <img src='/Price/Vector_2.svg' alt='' className={styles.vector2} aria-hidden='true' />
          <img src='/Price/Blur_1.svg' alt='' className={styles.blur1} aria-hidden='true' />
        </>
      )}
      <div className={styles.pricesPage}>
        {isMobile && (
          <>
            <SectionTitle>{PRICES_CONTENT.title}</SectionTitle>
            <Text className={styles.pageSubtitle}>{PRICES_CONTENT.subtitle}</Text>
            {mobileButtons}
          </>
        )}

        <div className={styles.pricesContent}>
          {!isMobile && (
            <Flex vertical gap={24}>
              <SectionTitle>{PRICES_CONTENT.title}</SectionTitle>
              <Text className={styles.pageSubtitle}>{PRICES_CONTENT.subtitle}</Text>
              <Menu
                mode='vertical'
                selectedKeys={[selectedDirection]}
                items={menuItems}
                onClick={(e) => handleDirectionChange(e.key)}
                className={styles.directionsMenu}
              />
            </Flex>
          )}

          {!isMobile && (
            <div className={styles.directionsSlider} ref={sliderRef}>
              {DIRECTIONS_DATA.map((direction) => (
                <PriceCard
                  key={direction.id}
                  direction={direction}
                  isActive={selectedDirection === direction.id}
                  onClick={() => handleDirectionChange(direction.id)}
                  onEnroll={handleOpenModal}
                />
              ))}
            </div>
          )}

          {isMobile && selectedDirectionData && (
            <PriceCard direction={selectedDirectionData} isActive={true} onClick={() => {}} onEnroll={handleOpenModal} />
          )}
        </div>

        <SignupModal visible={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Prices;

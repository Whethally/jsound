import { useState, useRef } from 'react';
import { Typography, Button, Menu, Flex, Space } from 'antd';
import styles from './Prices.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/Card/Card';
import SignupModal from '@/common/components/UI/SignUp/SignupModal';

const { Text } = Typography;

type PricePackage = {
  pack: string;
  individual: string;
  group: string;
};

type DirectionData = {
  id: string;
  title: string;
  icon: 'microphone' | 'guitar' | 'drums' | 'eguitar' | 'synth' | 'accompaniment';
  color: string;
  packages: PricePackage[];
};

const directionsData: DirectionData[] = [
  {
    id: 'vocal',
    title: 'Вокал',
    icon: 'microphone',
    color: 'linear-gradient(140deg, #FF72AA, #FF0065)',
    packages: [
      { pack: 'Разовое занятие', individual: '1300₽', group: '700₽' },
      { pack: '8 занятий', individual: '1300₽', group: '700₽' },
      { pack: '16 занятий', individual: '1300₽', group: '700₽' },
      { pack: '32 занятия', individual: '1300₽', group: '700₽' }
    ]
  },
  {
    id: 'guitar',
    title: 'Гитара',
    icon: 'guitar',
    color: 'linear-gradient(140deg, #C0AAFF, #9000FF)',
    packages: [
      { pack: 'Разовое занятие', individual: '1300₽', group: '700₽' },
      { pack: '8 занятий', individual: '1300₽', group: '700₽' },
      { pack: '16 занятий', individual: '1300₽', group: '700₽' },
      { pack: '32 занятия', individual: '1300₽', group: '700₽' }
    ]
  },
  {
    id: 'drums',
    title: 'Барабаны',
    icon: 'drums',
    color: 'linear-gradient(140deg, #729AFF, #0022FF)',
    packages: [
      { pack: 'Разовое занятие', individual: '1300₽', group: '700₽' },
      { pack: '8 занятий', individual: '1300₽', group: '700₽' },
      { pack: '16 занятий', individual: '1300₽', group: '700₽' },
      { pack: '32 занятия', individual: '1300₽', group: '700₽' }
    ]
  },
  {
    id: 'synth',
    title: 'Синтезатор',
    icon: 'synth',
    color: 'linear-gradient(140deg, #A1F4AD, #53EA0E)',
    packages: [
      { pack: 'Разовое занятие', individual: '1300₽', group: '700₽' },
      { pack: '8 занятий', individual: '1300₽', group: '700₽' },
      { pack: '16 занятий', individual: '1300₽', group: '700₽' },
      { pack: '32 занятия', individual: '1300₽', group: '700₽' }
    ]
  },
  {
    id: 'accompaniment',
    title: 'Аккомпанемент',
    icon: 'accompaniment',
    color: 'linear-gradient(140deg, #72FFE3, #00BBFF)',
    packages: [
      { pack: 'Разовое занятие', individual: '1300₽', group: '700₽' },
      { pack: '8 занятий', individual: '1300₽', group: '700₽' },
      { pack: '16 занятий', individual: '1300₽', group: '700₽' },
      { pack: '32 занятия', individual: '1300₽', group: '700₽' }
    ]
  },
  {
    id: 'eguitar',
    title: 'Электрогитара/Бас-гитара',
    icon: 'eguitar',
    color: 'linear-gradient(140deg, #FFE372, #FF8000)',
    packages: [
      { pack: 'Разовое занятие', individual: '1300₽', group: '700₽' },
      { pack: '8 занятий', individual: '1300₽', group: '700₽' },
      { pack: '16 занятий', individual: '1300₽', group: '700₽' },
      { pack: '32 занятия', individual: '1300₽', group: '700₽' }
    ]
  }
];

const Prices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState<string>('vocal');
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDirectionChange = (directionId: string) => {
    setSelectedDirection(directionId);

    // Прокрутка слайдера к выбранному направлению
    const selectedIndex = directionsData.findIndex((d) => d.id === directionId);
    if (sliderRef.current && selectedIndex !== -1) {
      const cardWidth = 320; // Ширина карточки + gap
      const scrollPosition = selectedIndex * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = directionsData.map((direction) => ({
    key: direction.id,
    label: direction.title,
    className: selectedDirection === direction.id ? styles.activeMenuItem : ''
  }));

  return (
    <div className={styles.pricesPage}>
      <Flex vertical>
        <Flex vertical>
          <SectionTitle>Цены</SectionTitle>
          <Text className={styles.pageSubtitle}>Выбери то, что подходит тебе!</Text>
        </Flex>

        {/* Мобильные кнопки направлений */}
        <div className={styles.mobileDirectionsButtons}>
          {directionsData.map((direction) => (
            <Button
              key={direction.id}
              size='large'
              onClick={() => handleDirectionChange(direction.id)}
              className={`${styles.mobileDirectionButton} ${selectedDirection === direction.id ? styles.active : ''}`}
            >
              {direction.title}
            </Button>
          ))}
        </div>

        <Flex gap={40} className={styles.pricesContent}>
          {/* Десктопное меню */}
          <div className={styles.directionsFilter}>
            <Menu
              mode='vertical'
              selectedKeys={[selectedDirection]}
              items={menuItems}
              onClick={({ key }) => handleDirectionChange(key)}
              className={styles.directionsMenu}
            />
          </div>

          {/* Десктопный слайдер */}
          <div className={styles.sliderContainer}>
            <div ref={sliderRef} className={styles.directionsSlider}>
              {directionsData.map((direction) => {
                const isActive = selectedDirection === direction.id;
                return (
                  <Card
                    key={direction.id}
                    cardClassName={styles.directionCard}
                    cardEffects={{
                      isActive,
                      cardOnClick: () => handleDirectionChange(direction.id)
                    }}
                    cardHeaderProps={{
                      suffixProps: {
                        suffixIcon: direction.icon,
                        suffixDirection: 'right',
                        suffixType: 'coloredSuffix',
                        background: direction.color
                      }
                    }}
                    cardGap={10}
                    cardContent={
                      <Space direction='vertical' size={40} style={{ width: '100%' }}>
                        <Text className={styles.directionTitle}>{direction.title}</Text>
                        {direction.packages.map((pkg) => (
                          <Flex vertical key={pkg.pack} style={{ width: '100%' }}>
                            <Text className={styles.packageTitle}>{pkg.pack}</Text>
                            <div className={styles.priceRow}>
                              <Text>Индивидуальные</Text>
                              <Text className={styles.price}>{pkg.individual}</Text>
                            </div>
                            <div className={styles.priceRow}>
                              <Text>Групповые</Text>
                              <Text className={styles.price}>{pkg.group}</Text>
                            </div>
                          </Flex>
                        ))}
                        <Button size='large' type='primary' className={styles.enrollButton} onClick={() => setIsModalOpen(true)}>
                          Записаться →
                        </Button>
                      </Space>
                    }
                  />
                );
              })}
            </div>
          </div>

          {/* Мобильная одиночная карточка */}
          <div className={styles.mobileCardContainer}>
            {(() => {
              const direction = directionsData.find((d) => d.id === selectedDirection);
              if (!direction) return null;

              return (
                <Card
                  cardClassName={styles.directionCard}
                  cardEffects={{
                    isActive: true
                  }}
                  cardHeaderProps={{
                    suffixProps: {
                      suffixIcon: direction.icon,
                      suffixDirection: 'right',
                      suffixType: 'coloredSuffix',
                      background: direction.color
                    }
                  }}
                  cardGap={10}
                  cardContent={
                    <Space direction='vertical' size={40} style={{ width: '100%' }}>
                      <Text className={styles.directionTitle}>{direction.title}</Text>
                      {direction.packages.map((pkg) => (
                        <Flex vertical key={pkg.pack} style={{ width: '100%' }}>
                          <Text className={styles.packageTitle}>{pkg.pack}</Text>
                          <div className={styles.priceRow}>
                            <Text>Индивидуальные</Text>
                            <Text className={styles.price}>{pkg.individual}</Text>
                          </div>
                          <div className={styles.priceRow}>
                            <Text>Групповые</Text>
                            <Text className={styles.price}>{pkg.group}</Text>
                          </div>
                        </Flex>
                      ))}
                      <Button size='large' type='primary' className={styles.enrollButton} onClick={() => setIsModalOpen(true)}>
                        Записаться →
                      </Button>
                    </Space>
                  }
                />
              );
            })()}
          </div>
        </Flex>
      </Flex>
      <SignupModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Prices;

import { Button, Carousel, Flex, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import styles from './Reviews.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';
import Card from '@/common/components/UI/CardOld/Card';
import Link from 'antd/es/typography/Link';

const { Text } = Typography;

const reviewData = [
  {
    id: 1,
    name: 'Инна Сергеевна',
    direction: 'Гитара',
    text: 'Начали посещать студию в сентябре 2024 года, дочь подросток (12 лет), захотела научиться играть на гитаре, брали абонемент на индивидуальные занятия к Антону Сергеевичу, Софье нравится, ходит с удовольствием! У преподавателя индивидуальный подход к обучению, находит общий язык и располагает к себе Учеников))) планируем в ближайшем будущем , ходить на вокал к педагогу по вокалу Снежанне Сергеевне. Прекрасная студия, работают профессионалы, самое главное дети довольны и посещают с удовольствием 👍🏼',
    photo: '/Review/Sergeevna.webp',
    review_url:
      'https://yandex.ru/maps/org/98660504964/reviews?reviews%5BpublicId%5D=8rka65j0dgdyhdm3fpjg5q63wr&si=46xb1x51puwqr8tahf81ndrq38&utm_source=review'
  },
  {
    id: 2,
    name: 'Юлия Пименова',
    direction: 'Вокал',
    text: 'Дочка с большим удовольствием ходит на уроки вокала, ждёт новые занятия. Очень приятный педагог, наша благодарность 🙏 цена занятий очень даже хорошая , если сравнивать',
    photo: '/Team/Bakirova.png',
    review_url:
      'https://yandex.ru/maps/org/98660504964/reviews?reviews%5BpublicId%5D=9u09jbcgn9ph07f31vvzcu4x40&si=46xb1x51puwqr8tahf81ndrq38&utm_source=review'
  },
  {
    id: 3,
    name: 'Эмиль',
    direction: 'Электро-гитара',
    text: 'Спасибо моему педагогу Руслану за обучение не электрогитаре, начинаем разбирать уже металику',
    photo: '/Team/Moiseev.png',
    review_url:
      'https://yandex.ru/maps/org/98660504964/reviews?reviews%5BpublicId%5D=e977ntwy9qmctp085nmeh2pj0c&si=46xb1x51puwqr8tahf81ndrq38&utm_source=review'
  }
];

const Reviews = () => {
  const reviewCarouselRef = useRef<CarouselRef>(null);

  const handleReviewPrev = () => {
    reviewCarouselRef.current?.prev();
  };

  const handleReviewNext = () => {
    reviewCarouselRef.current?.next();
  };

  return (
    <Flex vertical gap={32} className={styles.reviewsSection}>
      <SectionTitle>Отзывы</SectionTitle>
      <div className={styles.reviewsContainer}>
        <Carousel
          ref={reviewCarouselRef}
          dots={false}
          arrows={false}
          autoplay={false}
          slidesToShow={1}
          slidesToScroll={1}
          className={styles.reviewsCarousel}
        >
          {reviewData.map((review) => (
            <div key={review.id} className={styles.reviewSlide}>
              <Card padding='l' fullHeight>
                <Flex vertical style={{ height: '100%', justifyContent: 'space-between' }}>
                  <Flex gap={32} className={styles.reviewContent}>
                    <div className={styles.reviewPhotoContainer}>
                      <img src={review.photo} alt={review.name} className={styles.reviewPhoto} />
                    </div>
                    <Flex vertical gap={20} justify='center' className={styles.reviewTextContent}>
                      <Text className={styles.reviewText}>&ldquo;{review.text}&rdquo;</Text>
                      <Flex vertical className={styles.reviewAuthor}>
                        <Text strong className={styles.reviewName}>
                          {review.name}
                        </Text>
                        <Text type='secondary' className={styles.reviewDirection}>
                          Направление: {review.direction}
                        </Text>
                        <Link href={review.review_url} target='_blank' rel='noopener noreferrer' className={styles.link}>
                          Читать отзыв на Яндекс.Картах →
                        </Link>
                      </Flex>
                    </Flex>
                  </Flex>
                  <div className={styles.reviewNavigation}>
                    <Button size='large' icon={<LeftOutlined />} onClick={handleReviewPrev} aria-label='Предыдущий отзыв' />
                    <Button size='large' icon={<RightOutlined />} onClick={handleReviewNext} aria-label='Следующий отзыв' />
                  </div>
                </Flex>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </Flex>
  );
};

export default Reviews;

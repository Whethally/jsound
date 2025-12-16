import { Carousel, Flex, Grid } from 'antd';
import styles from './Reviews.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';
import { REVIEWS_CONTENT, REVIEWS_DATA } from './constants';
import { useReviews } from './hooks/useReviews';
import { ReviewCard } from './ReviewCard';

const Reviews = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const { carouselRef, handlePrev, handleNext } = useReviews();

  return (
    <div className={styles.reviewContainer}>
      {!isMobile && (
        <>
          <img src='/Review/Vector_1.svg' alt='' className={styles.vector1} aria-hidden='true' />
          <img src='/Review/Blur_1.svg' alt='' className={styles.blur1} aria-hidden='true' />
        </>
      )}
      <Flex vertical gap={32} className={styles.reviewsSection}>
        <SectionTitle>{REVIEWS_CONTENT.title}</SectionTitle>
        <div className={styles.reviewsContainer}>
          <Carousel
            ref={carouselRef}
            dots={false}
            arrows={false}
            autoplay={false}
            slidesToShow={1}
            slidesToScroll={1}
            className={styles.reviewsCarousel}
          >
            {REVIEWS_DATA.map((review) => (
              <ReviewCard key={review.id} review={review} onPrev={handlePrev} onNext={handleNext} />
            ))}
          </Carousel>
        </div>
      </Flex>
    </div>
  );
};

export default Reviews;

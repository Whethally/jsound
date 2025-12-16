import { Button, Flex, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import styles from '../Reviews.module.scss';
import Card from '@/common/components/UI/CardOld/Card';
import { REVIEWS_CONTENT } from '../constants';
import type { Review } from '../constants';

const { Text } = Typography;

type ReviewCardProps = {
  review: Review;
  onPrev: () => void;
  onNext: () => void;
};

export const ReviewCard = ({ review, onPrev, onNext }: ReviewCardProps) => {
  return (
    <div className={styles.reviewSlide}>
      <Card padding='l' fullHeight>
        <Flex vertical justify='space-between' className={styles.reviewCardContent}>
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
                  {REVIEWS_CONTENT.directionLabel} {review.direction}
                </Text>
                <Link href={review.review_url} target='_blank' rel='noopener noreferrer' className={styles.link}>
                  {REVIEWS_CONTENT.readMoreLabel}
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <div className={styles.reviewNavigation}>
            <Button size='large' icon={<LeftOutlined />} onClick={onPrev} aria-label='Предыдущий отзыв' />
            <Button size='large' icon={<RightOutlined />} onClick={onNext} aria-label='Следующий отзыв' />
          </div>
        </Flex>
      </Card>
    </div>
  );
};

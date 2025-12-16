import { useRef, useCallback } from 'react';
import type { CarouselRef } from 'antd/es/carousel';

export const useReviews = () => {
  const carouselRef = useRef<CarouselRef>(null);

  const handlePrev = useCallback(() => {
    carouselRef.current?.prev();
  }, []);

  const handleNext = useCallback(() => {
    carouselRef.current?.next();
  }, []);

  return {
    carouselRef,
    handlePrev,
    handleNext
  };
};

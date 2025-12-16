import { useState, useRef, useCallback, useMemo } from 'react';
import { DIRECTIONS_DATA, SLIDER_CONFIG } from '../constants';

export const usePrices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState<string>(SLIDER_CONFIG.defaultDirection);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDirectionChange = useCallback((directionId: string) => {
    setSelectedDirection(directionId);

    const selectedIndex = DIRECTIONS_DATA.findIndex((d) => d.id === directionId);
    if (sliderRef.current && selectedIndex !== -1) {
      const scrollPosition = selectedIndex * SLIDER_CONFIG.cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const menuItems = useMemo(
    () =>
      DIRECTIONS_DATA.map((direction) => ({
        key: direction.id,
        label: direction.title
      })),
    []
  );

  const selectedDirectionData = useMemo(() => DIRECTIONS_DATA.find((d) => d.id === selectedDirection), [selectedDirection]);

  return {
    isModalOpen,
    selectedDirection,
    sliderRef,
    menuItems,
    selectedDirectionData,
    handleDirectionChange,
    handleOpenModal,
    handleCloseModal
  };
};

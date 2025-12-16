import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { guestRoutes } from '@/routes/guest.routes';
import { MENU_ORDER, OBSERVER_CONFIG } from '../constants';

export const useHeader = () => {
  const [activeKey, setActiveKey] = useState<string>('/about');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filteredRoutes = useMemo(
    () => MENU_ORDER.map((p) => guestRoutes.find((r) => r.path === p)).filter((r): r is NonNullable<typeof r> => Boolean(r)),
    []
  );

  const handleMenuClick = useCallback((path: string) => {
    setDrawerOpen(false);
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0.1)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          const id = visible[0].target.id;
          if (MENU_ORDER.includes(id as (typeof MENU_ORDER)[number])) {
            setActiveKey(id);
          }
        }
      },
      { ...OBSERVER_CONFIG, threshold: [...OBSERVER_CONFIG.threshold] }
    );

    MENU_ORDER.forEach((id) => {
      const el = document.querySelector(`section[id="${id}"]`);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return {
    activeKey,
    drawerOpen,
    filteredRoutes,
    handleMenuClick,
    handleDrawerToggle
  };
};

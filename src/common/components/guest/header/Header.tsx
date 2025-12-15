import { Icon } from '@/common/UI/icon';
import { Layout, Menu, Select, Drawer, Flex, Grid } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { guestRoutes } from '@/routes/guest.routes';
import Link from 'antd/es/typography/Link';
import { useEffect, useState, useRef } from 'react';
import styles from './Header.module.scss';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();

  const menuOrder = ['/about', '/methods', '/directions', '/team', '/reviews', '/faq'];
  const filteredRoutes = menuOrder.map((p) => guestRoutes.find((r) => r.path === p)).filter((r): r is NonNullable<typeof r> => Boolean(r));

  const [activeKey, setActiveKey] = useState<string>('/about');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0.1)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          const id = visible[0].target.id;
          if (menuOrder.includes(id)) {
            setActiveKey(id);
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    );

    menuOrder.forEach((id) => {
      const el = document.querySelector(`section[id="${id}"]`);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const menuItems = filteredRoutes.map((item) => ({
    key: item.path,
    label: (
      <Link
        onClick={() => {
          setDrawerOpen(false);
          document.getElementById(item.path)?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{ color: 'white', fontWeight: 500 }}
      >
        {item.label}
      </Link>
    )
  }));

  const desktopMenu = (
    <Menu
      mode='horizontal'
      theme='dark'
      items={menuItems}
      selectedKeys={[activeKey]}
      style={{ background: 'transparent', border: 'none', flex: 1, justifyContent: 'center' }}
    />
  );

  const mobileMenu = (
    <Menu mode='vertical' items={menuItems} theme='dark' selectedKeys={[activeKey]} style={{ background: 'transparent', border: 'none' }} />
  );

  return (
    <>
      <AntHeader className={styles.header} style={{ padding: 0 }}>
        <Flex align='center' justify='space-between' style={{ height: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
          {/* Логотип — всегда слева */}

          <Icon type='logo' style={{ fontSize: '5.5rem', color: 'white' }} />

          {/* Десктоп: меню + выбор филиала */}
          {screens.md && (
            <>
              {desktopMenu}
              <Select
                defaultValue='sipaylovo'
                style={{ width: 280 }}
                options={[
                  {
                    value: 'sipaylovo',
                    label: (
                      <Flex gap={8} align='center'>
                        <Icon type='mark' />
                        Сипайлово, ул. Гагарина, д. 7
                      </Flex>
                    )
                  }
                ]}
              />
            </>
          )}

          {/* Мобилька: только бургер */}
          {!screens.md && (
            <button
              onClick={() => setDrawerOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
              aria-label='Открыть меню'
            >
              <MenuOutlined style={{ fontSize: '2rem', color: 'white' }} />
            </button>
          )}
        </Flex>
      </AntHeader>

      {/* Мобильное меню — Drawer */}
      <Drawer
        placement='top'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        height='100vh'
        headerStyle={{ display: 'none' }}
        bodyStyle={{ padding: 0, background: 'linear-gradient(135deg, #0f0f2b, #1a1a3a)' }}
      >
        <div style={{ padding: '2rem 1.5rem', color: 'white' }}>
          <Flex justify='space-between' align='center' style={{ marginBottom: '3rem' }}>
            <Icon type='logo' style={{ fontSize: '5rem' }} />
            <button
              onClick={() => setDrawerOpen(false)}
              style={{ background: 'none', border: 'none', fontSize: '2.5rem', color: 'white', cursor: 'pointer' }}
            >
              <CloseOutlined />
            </button>
          </Flex>

          {mobileMenu}

          <div style={{ marginTop: '3rem', fontSize: '1.1rem', opacity: 0.9 }}>
            <Flex gap={8} align='center'>
              <Icon type='mark' />
              Сипайлово, ул. Гагарина, д. 7
            </Flex>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

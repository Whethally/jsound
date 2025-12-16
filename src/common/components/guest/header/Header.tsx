import { useMemo } from 'react';
import { Layout, Menu, Drawer, Flex, Grid, Button, Space } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { Icon } from '@/common/UI/icon';
import { BRANCH_INFO } from './constants';
import { useHeader } from './hooks/useHeader';
import styles from './Header.module.scss';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();
  const { activeKey, drawerOpen, filteredRoutes, handleMenuClick, handleDrawerToggle } = useHeader();

  const menuItems = useMemo(
    () =>
      filteredRoutes.map((item) => ({
        key: item.path,
        label: (
          <Link onClick={() => handleMenuClick(item.path)} className={styles.menuLink}>
            {item.label}
          </Link>
        )
      })),
    [filteredRoutes, handleMenuClick]
  );

  const desktopMenu = <Menu mode='horizontal' theme='dark' items={menuItems} selectedKeys={[activeKey]} className={styles.desktopMenu} />;

  const mobileMenu = <Menu mode='vertical' items={menuItems} theme='dark' selectedKeys={[activeKey]} className={styles.mobileMenu} />;

  return (
    <>
      <AntHeader className={styles.header}>
        <Flex align='center' justify='space-between' className={styles.headerInner}>
          <Icon type='logo' className={styles.logo} />

          {screens.md && (
            <>
              {desktopMenu}
              <Button
                type='text'
                href={BRANCH_INFO.mapUrl}
                size='large'
                shape='round'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.branchButton}
                icon={<Icon type='mark' />}
              >
                {BRANCH_INFO.address}
              </Button>
            </>
          )}

          {!screens.md && (
            <Button
              type='text'
              size='large'
              onClick={handleDrawerToggle}
              className={styles.burgerButton}
              icon={<MenuOutlined className={styles.burgerIcon} />}
              aria-label='Открыть меню'
            />
          )}
        </Flex>
      </AntHeader>

      <Drawer
        placement='top'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        height='100vh'
        className={styles.drawer}
        headerStyle={{ display: 'none' }}
      >
        <Space direction='vertical' size='large' className={styles.drawerContent}>
          <Flex justify='space-between' align='center' className={styles.drawerHeader}>
            <Icon type='logo' className={styles.logoMobile} />
            <Button
              type='text'
              onClick={handleDrawerToggle}
              className={styles.closeButton}
              icon={<CloseOutlined className={styles.closeIcon} />}
              aria-label='Закрыть меню'
            />
          </Flex>

          {mobileMenu}

          <Button
            type='text'
            href={BRANCH_INFO.mapUrl}
            size='large'
            shape='round'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.branchButton}
            icon={<Icon type='mark' />}
          >
            {BRANCH_INFO.address}
          </Button>
        </Space>
      </Drawer>
    </>
  );
};

export default Header;

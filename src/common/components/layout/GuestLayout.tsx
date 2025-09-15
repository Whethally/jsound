import styles from './GuestLayout.module.scss';
import { Layout, Space } from 'antd';
import Header from '../guest/header/Header';
import Footer from '../guest/footer/Footer';
import { useEffect, useRef } from 'react';
import { useCookies } from '@/hooks/useCookies';
import { guestRoutes } from '@/routes/guest.routes';
import Modal from '../modal/Modal';

const { Content } = Layout;

const GuestLayout = () => {
  const { openNotification, isModalOpen, handleOk, handleCancel, contextHolder } = useCookies();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    openNotification('bottom');
    setTimeout(() => {
      if (topRef.current) {
        const headerHeight = 150;
        const topPosition = topRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <Layout className={styles.layout}>
      <Modal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
      {contextHolder}
      <Space size={16} direction='vertical' style={{ width: '100%' }}>
        <Header />
        <Content className={styles.content}>
          {guestRoutes.map((item, key) => (
            <section key={key} id={item.path} ref={key === 0 ? topRef : null}>
              {item.element}
            </section>
          ))}
        </Content>
        <Footer />
      </Space>
    </Layout>
  );
};

export default GuestLayout;

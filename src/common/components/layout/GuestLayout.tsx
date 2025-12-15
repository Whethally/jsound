import styles from './GuestLayout.module.scss';
import { Layout, Space } from 'antd';
import Header from '../guest/header/Header';
import Footer from '../guest/footer/Footer';
import { useRef } from 'react';
import { useCookies } from '@/hooks/useCookies';
import { guestRoutes } from '@/routes/guest.routes';
import Modal from '../modal/Modal';

const { Content } = Layout;

const GuestLayout = () => {
  const { isModalOpen, handleOk, handleCancel, contextHolder } = useCookies();
  const topRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   openNotification('bottom');
  //   setTimeout(() => {
  //     if (topRef.current) {
  //       const headerHeight = 150;
  //       const topPosition = topRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
  //       window.scrollTo({ top: topPosition, behavior: 'smooth' });
  //     }
  //   }, 100);
  // }, []);

  return (
    <Layout className={styles.layout}>
      <Modal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
      {contextHolder}
      <Space size={0} direction='vertical' style={{ width: '100%' }}>
        <div className={styles.container}>
          <Header />
        </div>
        <Content className={styles.content}>
          <Space direction='vertical' size={36} style={{ width: '100%' }}>
            {guestRoutes.map((item, key) => {
              const section = (
                <section id={item.path} ref={key === 0 ? topRef : null}>
                  {item.element}
                </section>
              );

              // Остальные секции в контейнере 1440px
              return (
                <div className={styles.container} key={item.path}>
                  {section}
                </div>
              );
            })}
          </Space>
        </Content>
        <div className={styles.container}>
          <Footer />
        </div>
      </Space>
    </Layout>
  );
};

export default GuestLayout;

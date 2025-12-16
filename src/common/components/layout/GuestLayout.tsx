import styles from './GuestLayout.module.scss';
import { Layout, Space, FloatButton } from 'antd';
import Header from '../guest/header/Header';
import Footer from '../guest/footer/Footer';
import SignupModal from '../UI/SignUp/SignupModal';
import { useRef, useState, useEffect } from 'react';
import { guestHomeRoutes } from '@/routes/guest.routes';

const { Content } = Layout;

const GuestLayout = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [showFloatButton, setShowFloatButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatButton(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout className={styles.layout}>
      <Space size={0} direction='vertical' className={styles.full}>
        <div className={styles.container}>
          <Header />
        </div>
        <Content className={styles.content}>
          <Space direction='vertical' size={36} className={styles.full}>
            {guestHomeRoutes.map((item, key) => {
              const section = (
                <section id={item.path} ref={key === 0 ? topRef : null}>
                  {item.element}
                </section>
              );

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

      {showFloatButton && (
        <FloatButton
          description='ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК'
          shape='square'
          onClick={() => setIsSignupModalVisible(true)}
          style={{ width: 300 }}
        />
      )}

      <SignupModal visible={isSignupModalVisible} onClose={() => setIsSignupModalVisible(false)} />
    </Layout>
  );
};

export default GuestLayout;

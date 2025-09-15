import styles from './GuestLayout.module.scss';
import { Layout, Space } from 'antd';
import { guestRoutes } from '@/routes/guest.routes';
import { Footer, Header } from 'antd/es/layout/layout';
import AppRouter from '@/router';
const { Content } = Layout;

const GuestLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Space size={16} direction='vertical'>
        <Header />
        <Content className={styles.content}>
          <AppRouter routes={guestRoutes} />
        </Content>
        <Footer />
      </Space>
    </Layout>
  );
};

export default GuestLayout;

import { Layout, Space } from 'antd';
import styles from './UserLayout.module.scss';
import { userRoutes } from '@/routes/user.routes';
import { Content, Footer } from 'antd/es/layout/layout';
import AppRouter from '@/router';

const UserLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Space direction='vertical' size={40}>
        <Content className={styles.content}>
          <AppRouter routes={userRoutes} />
        </Content>
        <Footer />
      </Space>
    </Layout>
  );
};

export default UserLayout;

import '@ant-design/v5-patch-for-react-19';
import GuestLayout from '@/common/components/layout/GuestLayout';
import UserLayout from '@/common/components/layout/UserLayout';

const App = () => {
  const isAuthenticated = false;

  return <>{isAuthenticated ? <UserLayout /> : <GuestLayout />}</>;
};

export default App;

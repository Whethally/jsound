import '@ant-design/v5-patch-for-react-19';
import { Routes, Route } from 'react-router-dom';
import GuestLayout from '@/common/components/layout/GuestLayout';
import UserLayout from '@/common/components/layout/UserLayout';
import { guestLegalRoutes } from '@/routes/guest.routes';

const App = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      <Route path='/' element={<GuestLayout />} />

      {guestLegalRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {isAuthenticated && <Route path='/*' element={<UserLayout />} />}
    </Routes>
  );
};

export default App;

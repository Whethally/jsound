import { Routes, Route, useNavigate } from 'react-router-dom';
import type { IRoute } from '@/types/route';
import { Button, Result } from 'antd';

type AppRouterProps = {
  routes: IRoute[];
};

const AppRouter = ({ routes }: AppRouterProps) => {
  const navigate = useNavigate();

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route
        path='*'
        element={
          <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={
              <Button type='primary' onClick={() => navigate('/')}>
                Back Home
              </Button>
            }
          />
        }
      />
    </Routes>
  );
};
export default AppRouter;

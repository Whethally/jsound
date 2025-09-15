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
            title='Страница не найдена'
            extra={
              <Button type='primary' onClick={() => navigate('/')}>
                Перейти на главную
              </Button>
            }
          />
        }
      />
    </Routes>
  );
};
export default AppRouter;

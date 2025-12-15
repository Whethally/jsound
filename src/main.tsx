import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ea2271',
          colorInfo: '#ea2271',
          colorTextBase: '#3a3838',
          colorBgBase: '#f6f6f6'
        },
        components: {
          Input: {
            colorBgContainer: 'rgba(255,255,255,0)',
            controlHeight: 50,
            colorTextBase: '#ffffff'
          },
          Select: {
            colorBgContainer: 'rgba(255,255,255,0)',
            colorText: '#ffffff',
            borderRadius: 50,
            colorBorder: 'rgba(255,255,255,0.4)'
          },
          Button: {
            defaultShadow: '0 2px 0 rgba(0,0,0,0)',
            primaryShadow: '0 2px 0 rgba(0,0,0,0)'
          }
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}

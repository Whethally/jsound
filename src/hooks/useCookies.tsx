import { Button, notification, NotificationArgsProps, Space } from 'antd';
import { useState } from 'react';
type NotificationPlacement = NotificationArgsProps['placement'];

export const useCookies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type='link' size='small' onClick={showModal}>
          Подробнее о cookie
        </Button>
        <Button size='small' onClick={() => api.destroy()}>
          Отклонить
        </Button>
        <Button type='primary' size='small' onClick={() => api.destroy(key)}>
          Принять
        </Button>
      </Space>
    );
    api.open({
      message: ``,
      description: 'Продолжая использовать наш сайт, вы соглашаетесь с использованием cookie-файлов в соответствии с настоящей политикой.',
      btn,
      key,
      duration: 0,
      placement
    });
  };

  return {
    isModalOpen,
    handleOk,
    handleCancel,
    contextHolder,
    openNotification
  };
};

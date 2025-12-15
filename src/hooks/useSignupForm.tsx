import { Form, FormInstance, message } from 'antd';
import emailjs from '@emailjs/browser';
import type { EmailJSResponseStatus } from '@emailjs/browser';
import { useState } from 'react';

type FormValues = {
  user_name: string;
  user_phone: string;
  user_email?: string;
};

type UseSignupFormOptions = {
  onSuccess?: () => void;
  form?: FormInstance<FormValues>;
};

export const useSignupForm = ({ onSuccess, form: externalForm }: UseSignupFormOptions = {}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const internalForm = Form.useForm<FormValues>()[0];
  const form = externalForm || internalForm;

  const sendEmail = async (values: FormValues) => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_4fns2zc',
        'template_1aga0wv',
        {
          user_name: values.user_name,
          user_phone: values.user_phone || 'Не указан',
          reply_to: values.user_phone || values.user_email || 'no-reply@example.com'
        },
        'EDZTIdTtZ9V675KTn'
      );

      messageApi.success('Заявка отправлена! Мы свяжемся с вами в течение 24 часов');
      form.resetFields();
      onSuccess?.();
    } catch (error) {
      const err = error as EmailJSResponseStatus;
      console.error('EmailJS error:', err.status, err.text);

      const errorMessages: Record<number, string> = {
        400: 'Некорректные данные',
        402: 'Лимит отправок исчерпан',
        422: 'Проверьте правильность данных'
      };

      messageApi.error(errorMessages[err.status] || 'Не удалось отправить заявку. Звоните: +7 (929) 757-38-38');
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    sendEmail,
    messageContext: contextHolder
  };
};

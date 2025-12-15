import { Button, Form, Input } from 'antd';
import styles from './SignupForm.module.scss';
import { useSignupForm } from '@/hooks/useSignupForm';

type SignupFormProps = {
  onSuccess?: () => void;
  buttonText?: string;
  variant?: 'dark' | 'light';
};

export const SignupForm = ({ onSuccess, buttonText = 'Записаться', variant = 'dark' }: SignupFormProps) => {
  const { form, loading, sendEmail, messageContext } = useSignupForm({ onSuccess });

  return (
    <>
      {messageContext}
      <Form form={form} layout='vertical' onFinish={sendEmail} autoComplete='off'>
        <Form.Item name='user_name' rules={[{ required: true, message: 'Введите имя' }]}>
          <Input placeholder='Ваше имя' className={`${styles.input} ${styles[variant]}`} />
        </Form.Item>

        <Form.Item
          name='user_phone'
          rules={[
            { required: true, message: 'Введите телефон' },
            {
              pattern: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
              message: 'Формат: +7 (999) 999-99-99'
            }
          ]}
        >
          <Input placeholder='+7 (000) 000-00-00' className={`${styles.input} ${styles[variant]}`} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' block size='large' loading={loading} className={styles.button}>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

import { Button, Form, Input } from 'antd';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import styles from './SignupForm.module.scss';
import { useSignupForm } from '@/hooks/useSignupForm';
import { SIGNUP_FORM_CONTENT, FORM_VALIDATION } from './constants';
import 'react-phone-number-input/style.css';

type SignupFormProps = {
  onSuccess?: () => void;
  buttonText?: string;
  variant?: 'dark' | 'light';
};

export const SignupForm = ({ onSuccess, buttonText = SIGNUP_FORM_CONTENT.defaultButtonText, variant = 'dark' }: SignupFormProps) => {
  const { form, loading, sendEmail, messageContext } = useSignupForm({ onSuccess });

  const handleFinish = (values: { user_name: string; user_phone: string }) => {
    const sanitizedValues = {
      user_name: FORM_VALIDATION.name.sanitize(values.user_name),
      user_phone: FORM_VALIDATION.phone.sanitize(values.user_phone)
    };

    sendEmail(sanitizedValues);
  };

  return (
    <>
      {messageContext}
      <Form form={form} layout='vertical' onFinish={handleFinish} autoComplete='off'>
        <Form.Item
          name='user_name'
          rules={[
            { required: true, message: SIGNUP_FORM_CONTENT.fields.name.errorMessage },
            { min: FORM_VALIDATION.name.minLength, message: `Минимум ${FORM_VALIDATION.name.minLength} символа` },
            { max: FORM_VALIDATION.name.maxLength, message: `Максимум ${FORM_VALIDATION.name.maxLength} символов` },
            {
              pattern: FORM_VALIDATION.name.pattern,
              message: 'Имя может содержать только буквы, пробелы и дефисы'
            },
            {
              validator: (_, value) => {
                if (value && /[<>{}[\]\\/'"`;()$]/.test(value)) {
                  return Promise.reject('Недопустимые символы');
                }
                return Promise.resolve();
              }
            }
          ]}
        >
          <Input
            placeholder={SIGNUP_FORM_CONTENT.fields.name.placeholder}
            className={`${styles.input} ${styles[variant]}`}
            maxLength={SIGNUP_FORM_CONTENT.fields.name.maxLength}
          />
        </Form.Item>

        <Form.Item
          name='user_phone'
          rules={[
            { required: true, message: SIGNUP_FORM_CONTENT.fields.phone.errorMessage },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject(SIGNUP_FORM_CONTENT.fields.phone.errorMessage);
                }
                if (!isValidPhoneNumber(value)) {
                  return Promise.reject(SIGNUP_FORM_CONTENT.fields.phone.formatError);
                }
                return Promise.resolve();
              }
            }
          ]}
        >
          <PhoneInput
            defaultCountry='RU'
            international
            withCountryCallingCode
            className={`${styles.phoneInput} ${styles[variant]}`}
            onChange={(value) => form.setFieldValue('user_phone', value)}
          />
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

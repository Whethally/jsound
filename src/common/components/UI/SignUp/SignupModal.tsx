import { Modal, Typography, Image, Flex } from 'antd';
import styles from './SignupModal.module.scss';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import { SignupForm } from './Form/SignupForm';

const { Text } = Typography;

type SignupModalProps = {
  visible: boolean;
  onClose: () => void;
};

// Reusable модальный компонент с формой записи
const SignupModal = ({ visible, onClose }: SignupModalProps) => {
  return (
    <>
      <Modal visible={visible} onCancel={onClose} footer={null} centered width={600} className={styles.modal} destroyOnClose>
        <Image src='JSOUND.png' preview={false} alt='J-Sound Студия творческого развития' />
        <Flex vertical gap={16}>
          <Flex vertical justify='center' align='center'>
            <Title>Бесплатный урок</Title>
            <Text style={{ textAlign: 'center' }}>Заполните форму ниже и мы свяжемся с вами в течение 24 часов</Text>
          </Flex>
          <SignupForm onSuccess={onClose} buttonText='Отправить' />

          <Text style={{ textAlign: 'center' }}>
            Отправляя данные обращение Вы подтверждаете, что ознакомлены и согласны с{' '}
            <Link href='/privacy' target='_blank' rel='noopener noreferrer'>
              условиями обработки данных
            </Link>
          </Text>
        </Flex>
      </Modal>
    </>
  );
};

export default SignupModal;

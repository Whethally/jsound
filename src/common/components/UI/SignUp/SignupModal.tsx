import { Modal, Typography, Image, Flex } from 'antd';
import styles from './SignupModal.module.scss';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import { SignupForm } from './Form/SignupForm';
import { SIGNUP_MODAL_CONTENT } from './constants';

const { Text } = Typography;

type SignupModalProps = {
  visible: boolean;
  onClose: () => void;
};

const SignupModal = ({ visible, onClose }: SignupModalProps) => {
  return (
    <Modal visible={visible} onCancel={onClose} footer={null} centered width={600} className={styles.modal} destroyOnClose>
      <Image src={SIGNUP_MODAL_CONTENT.logo.src} preview={false} alt={SIGNUP_MODAL_CONTENT.logo.alt} />
      <Flex vertical gap={16}>
        <Flex vertical justify='center' align='center'>
          <Title>{SIGNUP_MODAL_CONTENT.title}</Title>
          <Text className={styles.subtitle}>{SIGNUP_MODAL_CONTENT.subtitle}</Text>
        </Flex>
        <SignupForm onSuccess={onClose} buttonText={SIGNUP_MODAL_CONTENT.buttonText} />

        <Text className={styles.privacyText}>
          {SIGNUP_MODAL_CONTENT.privacyText}{' '}
          <Link href={SIGNUP_MODAL_CONTENT.privacyLinkHref} target='_blank' rel='noopener noreferrer'>
            {SIGNUP_MODAL_CONTENT.privacyLinkText}
          </Link>
        </Text>
      </Flex>
    </Modal>
  );
};

export default SignupModal;

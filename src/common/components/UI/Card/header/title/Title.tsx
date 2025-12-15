import Text from 'antd/es/typography/Text';
import styles from './Title.module.scss';

export type TitleProps = {
  title?: React.ReactNode;
  titleSize?: 'defaultSize' | 'largeSize' | 'smallSize';
  titleType?: 'default' | 'pink' | 'purple';
};

const Title = ({ title, titleSize = 'defaultSize', titleType = 'pink' }: TitleProps) => (
  <Text className={`${styles.title} ${styles[titleType]} ${styles[titleSize]}`}>{title}</Text>
);

export default Title;

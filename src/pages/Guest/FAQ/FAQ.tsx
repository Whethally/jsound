import { Collapse } from 'antd';
import styles from './FAQ.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';
import { FAQ_CONTENT, FAQ_ITEMS } from './constants';

const FAQ = () => (
  <div className={styles.faqSection}>
    <SectionTitle>{FAQ_CONTENT.title}</SectionTitle>
    <Collapse items={FAQ_ITEMS} className={styles.faqCollapse} expandIconPosition='end' ghost size='large' />
  </div>
);

export default FAQ;

import { Collapse } from 'antd';
import styles from './FAQ.module.scss';
import SectionTitle from '@/common/components/UI/SectionTitle/SectionTitle';

// FAQ (Collapse)
const faqItems = [
  {
    key: '1',
    label: 'СКОЛЬКО ВРЕМЕНИ ДЛИТСЯ УРОК?',
    children: <p>Стандартное занятие длится 60 минут.</p>
  },
  {
    key: '2',
    label: 'СО СКОЛЬКИ ЛЕТ МОЖНО ПРИВОДИТЬ РЕБЁНКА?',
    children: <p>Мы принимаем учеников с 5 лет.</p>
  },
  {
    key: '3',
    label: 'МОЖНО ЛИ АРЕНДОВАТЬ ИНСТРУМЕНТ НА ПЕРИОД ОБУЧЕНИЯ?',
    children: <p>Да, у нас есть ограниченный фонд инструментов для аренды на период обучения.</p>
  }
];

const FAQ = () => (
  <div className={styles.faqSection}>
    <SectionTitle>F.A.Q</SectionTitle>
    <Collapse items={faqItems} className={styles.faqCollapse} expandIconPosition='end' ghost size='large' />
  </div>
);

export default FAQ;

import { Icon, IIconType } from '@/common/UI/icon';
import styles from './Suffix.module.scss';

export type SuffixProps = {
  suffixIcon?: IIconType;
  suffixType?: 'defaultSuffix' | 'coloredSuffix';
  suffixDirection?: 'left' | 'right';
  suffixClassName?: string;
  background?: string;
};

const Suffix = ({ suffixIcon, suffixType = 'defaultSuffix', suffixClassName, background }: SuffixProps) =>
  suffixIcon && <Icon className={`${styles[suffixType]} ${suffixClassName || ''}`} type={suffixIcon} style={{ background }} />;

export default Suffix;

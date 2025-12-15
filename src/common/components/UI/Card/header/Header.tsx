import { Flex } from 'antd';
import React from 'react';
import styles from './Header.module.scss';
import Title, { type TitleProps } from './title/Title';
import Suffix, { type SuffixProps } from './suffix/Suffix';
import Link from 'antd/es/typography/Link';

export type HeaderProps = {
  titleProps?: TitleProps;
  suffixProps?: SuffixProps;
  extra?: React.ReactNode;
  extraDirection?: 'vertical' | 'horizontal' | 'vertical-end';
  onSubmit?: () => void;
};

const Header = ({ titleProps, suffixProps, extra, extraDirection = 'horizontal', onSubmit }: HeaderProps) => {
  const suffixDirection = suffixProps?.suffixDirection || 'left';

  const Wrapper = onSubmit ? Link : 'div';
  const wrapperProps = onSubmit ? { onClick: onSubmit } : {};

  return (
    <Flex
      justify={suffixProps?.suffixIcon && suffixDirection === 'left' ? 'center' : 'space-between'}
      align={extraDirection === 'vertical' ? 'start' : 'center'}
      className={styles.header}
      gap={10}
      vertical={extraDirection === 'vertical' ? true : false}
    >
      {extra && extraDirection === 'vertical' && <div>{extra}</div>}
      <Wrapper {...wrapperProps} className={styles.titleContainer}>
        <Flex vertical gap={10} align='center'>
          {suffixProps?.suffixIcon && suffixDirection === 'left' && <Suffix {...suffixProps} />}
          {suffixProps?.suffixIcon && suffixDirection === 'right' && <Suffix {...suffixProps} />}
          {titleProps?.title && <Title {...titleProps} />}
        </Flex>
      </Wrapper>
      {extra && extraDirection === 'horizontal' && <div>{extra}</div>}
      {extra && extraDirection === 'vertical-end' && <div>{extra}</div>}
    </Flex>
  );
};

export default Header;

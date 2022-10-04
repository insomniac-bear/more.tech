import { FC } from 'react';
import styles from './Title.module.css';
import { ITitleProps } from './Title.props';

export const Title: FC<ITitleProps> = ({ tag, size, children, className = '', ...props }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={`${styles.title} ${styles[`title__size_${size}`]} ${className}`} {...props}>{children}</h1>;
    default:
      return <h2>{children}</h2>;
  }
};

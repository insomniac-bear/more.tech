import { FC } from 'react';
import styles from './Title.module.css';
import { ITitleProps } from './Title.props';

export const Title: FC<ITitleProps> = ({
  tag = 'h2', size = 'm', children, className = '', ...props
}) => {
  switch (tag) {
    case 'h1':
      return <h1 className={`${styles.title} ${styles[`size_${size}`]} ${className}`} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={`${styles.title} ${styles[`size_${size}`]} ${className}`} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={`${styles.title} ${styles[`size_${size}`]} ${className}`} {...props}>{children}</h3>;
    default:
      return <h2 className={`${styles.title} ${styles[`size_${size}`]} ${className}`} {...props}>{children}</h2>;
  }
};

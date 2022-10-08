import { FC } from 'react';
import styles from './ControlItem.module.css';
import { IControlItemProps } from './ControlItem.props';

const ControlItem: FC<IControlItemProps> = ({
  buttonLabel, identifierColor, className = '', ...props
}) => (
  <div className={`${styles.item} ${className}`} {...props}>
    <button type="button" className={styles.item__btn}>{buttonLabel}</button>
    <span className={`${styles.item__identifier} ${styles[`item__identifier_${identifierColor}`]}`} />
  </div>
);

export default ControlItem;

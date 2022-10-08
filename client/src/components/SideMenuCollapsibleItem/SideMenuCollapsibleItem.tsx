import { FC, useState } from 'react';
import { BracketArrow } from '../Icons';
import styles from './SideMenuCollapsibleItem.module.css';
import { ISideMenuCollapsibleItemProps } from './SideMenuCollapsibleItem.props';

const SideMenuCollapsibleItem: FC<ISideMenuCollapsibleItemProps> = ({
  label, children, className = '', ...props
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const style = isHidden
    ? { maxHeight: 0 }
    : { maxHeight: '500px' };

  const toggleHiddenState = () => setIsHidden(!isHidden);

  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <button type="button" className={styles.button} onClick={toggleHiddenState}>
        <span className={styles.button__text}>{label}</span>
        <BracketArrow className={isHidden ? styles.button__icon : styles.button__icon_active} />
      </button>
      <div className={styles.itemsContainer} style={style}>
        {children}
      </div>
    </div>
  );
};

export default SideMenuCollapsibleItem;

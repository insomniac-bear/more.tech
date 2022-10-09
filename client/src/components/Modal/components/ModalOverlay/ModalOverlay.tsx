/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC } from 'react';
import styles from './ModalOverlay.module.css';
import { IModalOverlayProps } from './ModalOverLay.props';

const ModalOverlay: FC<IModalOverlayProps> = ({ handleClick }) => <div className={styles.overlay} onClick={handleClick} />;

export default ModalOverlay;

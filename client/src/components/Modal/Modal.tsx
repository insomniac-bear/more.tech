import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { CrossIcon } from '../Icons';
import ModalOverlay from './components/ModalOverlay/ModalOverlay';
import { IModalProps } from './Modal.props';

const rootModals = document.getElementById('modals');

const Modal: FC<IModalProps> = ({
  closeModal, children, className = '', ...props
}) => {
  useEffect(() => {
    const closeModalByEsc = (e: KeyboardEvent) => {
      // eslint-disable-next-line no-unused-expressions
      e.key === 'Escape' && closeModal();
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <section className={`${styles.popup} ${className}`} {...props}>
      <div className={`${styles.popup__container}`}>
        <button type="button" className={styles.popup__closeButton} onClick={closeModal}>
          <CrossIcon className={styles.modal__btnIcon} />
        </button>
        {children}
      </div>
      <ModalOverlay handleClick={closeModal} />
    </section>,
    rootModals!,
  );
};

export default Modal;

import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

import { AnimatePresence, motion } from 'framer-motion';

import { BsCheckCircle } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import ScrollToTop from 'components/ScrollToTop';

function Modal({ openModal, children, textoCabecalho, onClick, onClose }) {
    const modalRef = useRef(null);

    const aoClicarFora = (e) => {
        const modalDimension = e.currentTarget.getBoundingClientRect();
        if (
            e.clientX < modalDimension.left ||
            e.clientX > modalDimension.right ||
            e.clientY < modalDimension.top ||
            e.clientY > modalDimension.bottom
        ) {
            onClose && onClose()
        }
    }

    useEffect(() => {
        const fecharModal = () => {
            onClose && onClose();
        }

        const modal = modalRef.current;
        modal?.addEventListener('close', fecharModal);

        return () => {
            modal?.removeEventListener('close', fecharModal);
        }

    }, [onClose])

    useEffect(() => {
        const modal = modalRef.current

        if (openModal && !modalRef.current?.open) {
            modal?.showModal();

        } else if (!openModal && modalRef.current?.open) {
            onClose && onClose()

        }

    }, [openModal, onClose]);

    return (
        <>
            <AnimatePresence>
                {openModal && (
                    <motion.dialog
                        className={styles.modal}
                        ref={modalRef}
                        aria-labelledby='dialog-title'
                        onClick={(e) => aoClicarFora(e)}
                        initial={{ opacity: 0, y: "100vh" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100vh" }}
                        transition={{ duration: 1, type: "spring", stiffness: 800, damping: 45 }}
                    >
                        <div className={styles.modalCabecalho}>
                            <BsCheckCircle size={32} style={{ color: 'var(--amarelo)' }} />
                            <p id="dialog-title">{textoCabecalho}</p>
                            <IoClose size={26} className={styles.closeIcon} onClick={onClick} aria-label="Fechar modal" />
                        </div>
                        {children}
                    </motion.dialog>
                )}
            </AnimatePresence>
            <ScrollToTop />
        </>
    )
}

export default Modal;
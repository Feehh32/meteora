import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

import { BsCheckCircle } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

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
            e.currentTarget.close();
        } 
    }

    useEffect(() => {
        const fecharModal = () => {
            onClose && onClose()
        }

        const modal = modalRef.current;
        modal?.addEventListener('close', fecharModal);

        return () => {
            modal?.removeEventListener('close', fecharModal);
        }
        
    },[onClose])

    useEffect(() => {

        if (openModal && !modalRef.current?.open) {
            modalRef.current?.showModal();

        } else if (!openModal && modalRef.current?.open) {
            modalRef.current?.close();

        }

    }, [openModal]);

    return (
        <dialog className={styles.modal} ref={modalRef} aria-labelledby='dialog-title' onClick={(e) => aoClicarFora(e)}>
            <div className={styles.modalCabecalho}>
                <BsCheckCircle size={32} style={{ color: 'var(--amarelo)' }} />
                <p id="dialog-title">{textoCabecalho}</p>
                <IoClose size={26} style={{ color: '#6C757D', cursor: "pointer" }} onClick={onClick} aria-label="Fechar modal" />
            </div>
            {children}
        </dialog>
    )
}

export default Modal
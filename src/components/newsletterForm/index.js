import React from 'react';
import styles from './newsletterForm.module.css';

import Modal from 'components/Modal';
import ModalNewsletter from 'components/ModalNewsletter';

import { useState } from 'react';

function NewsLetterForm() {
    const [openModal, setOpenModal] = useState(false)

    const handleModal = () => {
        setOpenModal(!openModal);
    }
    
    console.log(openModal)
    return (
        <>
            <form className={styles.formContainer}>
                <fieldset >
                    <label htmlFor="email" className={styles.formLabel}>
                        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <span>Cadastre-se!</span>
                    </label>
                    <input type="email" placeholder='Digite seu e-mail' id="email" className={styles.inputForm} />
                    <button type="button" className={styles.formButton} onClick={handleModal}>Enviar</button>
                </fieldset>
            </form>
            <Modal
                openModal={openModal}
                textoCabecalho="E-mail cadastrado com sucesso!"
                onClick={() => setOpenModal(!openModal)}
                onClose={() => setOpenModal(false)}
            >
                <ModalNewsletter />
            </Modal>
        </>
    )
}

export default NewsLetterForm;
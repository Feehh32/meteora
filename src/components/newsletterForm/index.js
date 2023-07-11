import React from 'react';
import styles from './newsletterForm.module.css';

import Modal from 'components/Modal';
import ModalNewsletter from 'components/ModalNewsletter';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    email: yup.string()
        .required('O campo de email não pode estar vazio.')
        .email('Insira um email válido.')
})

function NewsLetterForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const [openModal, setOpenModal] = useState(false)

    const onSubmit = () => {
        reset();
        setOpenModal(!openModal);
    }

    return (
        <>
            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} noValidate >
                <fieldset >
                    <label htmlFor="email" className={styles.formLabel}>
                        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <span>Cadastre-se!</span>
                    </label>
                    <input type="email" placeholder='Digite seu e-mail' id="email" className={styles.inputForm} {...register("email")} />
                    <button type="submit" className={styles.formButton}>Enviar</button>
                    {errors.email && <span className={styles.msgError}>{errors.email.message}</span>}
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
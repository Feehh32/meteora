import React, { useEffect, useState } from 'react'
import styles from './MenuHamburger.module.css';

import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

function MenuHamburguer() {
    const [open, setOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState("187px");
    
    const iconIsClose = <GiHamburgerMenu size={18} />;
    const iconIsOpen = <AiOutlineClose size={18} />;
    const mdScreen = window.innerWidth >= 760;

    useEffect(() => {
        if (mdScreen) {
            setOpen(true);
            setMenuHeight("fit-content");

        } else {
            setOpen(false);
        }

    }, [mdScreen]);

    const openMenu = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    return (
        <>
            <div className={styles.navbar} onClick={openMenu} >
                {iconIsClose}
            </div>
            <nav className={styles.navigate} style={!open ? { height: 0 } : { height: menuHeight }}>
                <ul className={styles.menu}>
                    <div className={styles.navbar} onClick={openMenu} >
                        {iconIsOpen}
                    </div>
                    <li>
                        <Link className={styles.link} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to='/'>Nossas lojas</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to='/'>Novidades</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to='/'>Promoções</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MenuHamburguer;
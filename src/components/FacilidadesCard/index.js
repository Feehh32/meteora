import React from 'react';
import styles from './FacilidadesCard.module.css'

function FacilidadesCard({icon, alt, subtitulo, paragrafo}) {
    return ( 
            <div className={styles.containerCard}>
                <div className={styles.cardIcon}>
                    <img src={icon} alt={alt} />
                </div>
                <div className={styles.cardInfo}>
                    <p>{subtitulo}</p>
                    <p>{paragrafo}</p>
                </div>
            </div>
    )
}

export default FacilidadesCard;
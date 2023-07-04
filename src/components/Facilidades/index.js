import React from 'react';
import styles from './Facilidades.module.css';

import FacilidadesCard from 'components/FacilidadesCard';
import cards from './facilidades.json';

function Facilidades() {
    return (
        <section className={styles.container}>
            <h4>Conheça todas as nossas facilidades</h4>
            <ul className={styles.containerFacilidades}>
                {cards.map((card) => {
                    return (
                        <li key={card.id}>
                            <FacilidadesCard
                                icon={card.icon}
                                alt={card.subtitle}
                                subtitulo={card.subtitle}
                                paragrafo={card.paragraph}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Facilidades;
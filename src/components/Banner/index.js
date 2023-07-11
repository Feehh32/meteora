import React from 'react'
import styles from './Banner.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';

function Banner() {
    const isTablet = useMediaQuery({ minWidth: "768px" });
    const isDesktop = useMediaQuery({ minWidth: "1080px", maxWidth: '1440px' });

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            className={styles.carousel}
            touch={true}
            autoPlay={true}
            interval={4000}
        >
            <div className={styles.containerCarousel}>
                {isDesktop ? (
                    <img src="/assets/desktop/banner-carousel-desktop-1.png" alt="Banner de promoções" />
                ) : isTablet ? (
                    <img src="/assets/tablet/banner-carousel-1-tablet.png" alt="Banner de promoções" />
                ) : (
                    <img src="/assets/mobile/banner-carousel-mobile-1.png" alt="Banner de promoções" />
                )}
            </div>
            <div className={styles.containerCarousel}>
                {isDesktop ? (
                    <>
                        <img src="/assets/desktop/banner-carousel-desktop-2.png" alt="Banner de promoções" />
                        <div className={styles.infoContainer}>
                            <h3 className={styles.carouselTitulo}>Coleção Atemporal</h3>
                            <p className={styles.carouselParagrafo}>Estilo e qualidade para durar</p>
                        </div>
                    </>
                ) : isTablet ? (
                    <>
                        <img src="/assets/tablet/banner-carousel-2-tablet.png" alt="Banner de promoções" />
                        <div className={styles.infoContainer}>
                            <h3 className={styles.carouselTitulo}>Coleção Atemporal</h3>
                            <p className={styles.carouselParagrafo}>Estilo e qualidade para durar</p>
                        </div>
                    </>
                ) : (
                    <>
                        <img src="/assets/mobile/banner-carousel-mobile-2.png" alt="Banner de promoções" />
                        <div className={styles.infoContainer}>
                            <h3 className={styles.carouselTitulo}>Coleção <br /> Atemporal</h3>
                            <p className={styles.carouselParagrafo}>Estilo e qualidade para durar</p>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.containerCarousel3}>
                {isDesktop ? (
                    <>
                        <img src="/assets/desktop/banner-carousel-desktop-3.png" alt="Banner de promoções" />
                        <div className={styles.infoContainer3}>
                            <h3 className={styles.carouselTitulo}>Coleção Atemporal</h3>
                            <p className={styles.carouselParagrafo}>Alto impacto visual, baixo impacto ambiental.</p>
                        </div>
                    </>
                ) : isTablet ? (
                    <>
                        <img src="/assets/tablet/banner-carousel-3-tablet.png" alt="Banner de promoções" />
                        <div className={styles.infoContainer3}>
                            <h3 className={styles.carouselTitulo}>Coleção Atemporal</h3>
                            <p className={styles.carouselParagrafo}>Alto impacto visual, baixo impacto ambiental.</p>
                        </div>
                    </>
                ) : (
                    <>
                        <img src="/assets/mobile/banner-carousel-mobile-3.png" alt="Banner de promoções" />
                        <div className={styles.infoContainer3}>
                            <h3 className={styles.carouselTitulo}>Coleção <br /> Atemporal</h3>
                            <p className={styles.carouselParagrafo}>Alto impacto visual, baixo impacto <br /> ambiental.</p>
                        </div>
                    </>
                )}
            </div>
        </Carousel>

    )
}

export default Banner;
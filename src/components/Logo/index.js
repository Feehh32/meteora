import React from 'react'
import styles from './Logo.module.css';

import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Logo() {
	const isTablet = useMediaQuery({minWidth: "768px"});
	const isDesktop = useMediaQuery({minWidth: "1080px"});
	
	return (
		<Link to="/" className={styles.container}>
			{isDesktop? (
				<img src="/assets/desktop/logo-desktop.png" alt="logo do meteora" />
			): isTablet? (
				<img src="/assets/tablet/logo-tablet.png" alt="logo do meteora" />
			):(
				<img src="/assets/mobile/logo-mobile.png" alt="logo do meteora" />
			)}
		</Link>
	)
}

export default Logo;
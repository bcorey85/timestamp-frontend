import React from 'react';

import { Logo } from '../../../shared/Svg/Logo';
import { Nav } from '../Nav/Nav';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<a>
				<Logo />
			</a>
			<Nav />
		</header>
	);
};

export { Header };

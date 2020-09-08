import React from 'react';

import { Nav } from '../Nav/Nav';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<img src='/images/logo-temp.svg' />
			<Nav />
		</header>
	);
};

export { Header };

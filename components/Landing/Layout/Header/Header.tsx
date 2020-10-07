import React from 'react';
import Link from 'next/link';

import { Logo } from '../../../shared/Svg/Logo';
import { Nav } from '../Nav/Nav';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>

			<Nav />
		</header>
	);
};

export { Header };

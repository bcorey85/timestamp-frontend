import React from 'react';
import Link from 'next/link';

import { NavToggle } from './NavToggle';
import { Breadcrumb } from './Breadcrumb';
import { Search } from './Search';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.nav_container}>
				<NavToggle />
				<Link href='#'>
					<a>
						<img src={'/images/logo-temp.svg'} />
					</a>
				</Link>
				<Breadcrumb />
			</div>

			<Search />
		</header>
	);
};

export { Header };

import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { NavToggle } from './NavToggle';
import { Search } from './Search';

import { selectUser } from '../../../../redux/user';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	return (
		<header className={styles.header}>
			<div className={styles.nav_container}>
				<NavToggle />
				<Link
					href='/app/[userId]/projects'
					as={`/app/${userId}/projects`}>
					<img src='/images/logo-temp.svg' />
				</Link>
			</div>
			<Search />
		</header>
	);
};

export { Header };

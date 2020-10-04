import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { NavToggle } from './NavToggle';
import { Search } from './Search/Search';

import { selectUser } from '../../../../redux/user';
import styles from './Header.module.scss';
import { Logo } from '../../../shared/Svg/Logo';

const Header = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	return (
		<header className={styles.header}>
			<div className={styles.nav_container}>
				<NavToggle />
				<Link
					href='/app/[userId]/dashboard'
					as={`/app/${userId}/dashboard`}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<Search />
		</header>
	);
};

export { Header };

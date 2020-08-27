import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/user';

import styles from './Nav.module.scss';

const Nav = (): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				{!!userId && !!token ? (
					<li>
						<Link
							href='/app/[userId]/projects'
							as={`/app/${userId}/projects`}>
							<a>Dashboard</a>
						</Link>
					</li>
				) : (
					<li>
						<Link href='/auth'>
							<a>Login</a>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export { Nav };

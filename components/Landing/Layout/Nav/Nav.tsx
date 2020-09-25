import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../../redux/user';

import styles from './Nav.module.scss';
import { useAuthentication } from '../../../../hooks/useAuthentication';

const Nav = (): JSX.Element => {
	const { isAuthenticated, tokenExpired, userId } = useAuthentication();

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				{isAuthenticated && !tokenExpired ? (
					<li>
						<Link
							href='/app/[userId]/dashboard'
							as={`/app/${userId}/dashboard`}>
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

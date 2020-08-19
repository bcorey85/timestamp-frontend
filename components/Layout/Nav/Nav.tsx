import React from 'react';

import Link from 'next/link';

import styles from './Nav.module.scss';

const Nav = (): JSX.Element => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/auth'>
						<a>Login</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Nav };

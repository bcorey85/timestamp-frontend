import Link from 'next/link';

import styles from './Nav.module.scss';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
				</li>
				<li>
					<Link href='/login'>
						<a>Login</a>
					</Link>
				</li>
				<li>
					<Link href='/signup'>
						<a>Signup</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Nav };

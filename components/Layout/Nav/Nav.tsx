import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../../redux/user';

import { Button } from '../../shared/Button';

import styles from './Nav.module.scss';

const Nav = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const handleLogout = () => {
		dispatch(logout());
		console.log(user);
	};

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					{!user.token ? (
						<Link href='/auth'>
							<a>Login</a>
						</Link>
					) : (
						<Button onClick={handleLogout} type='link_primary'>
							Logout
						</Button>
					)}
				</li>
			</ul>
		</nav>
	);
};

export { Nav };

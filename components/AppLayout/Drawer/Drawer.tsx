import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { DrawerLink } from './DrawerLink';
import { Button } from '../../shared/Button';

import { logout } from '../../../redux/user';
import { selectInterface } from '../../../redux/interface';
import { selectUser } from '../../../redux/user';
import styles from './Drawer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Drawer = (): JSX.Element => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { userId } = useSelector(selectUser);
	const { drawerOpen } = useSelector(selectInterface);

	const handleLogout = () => {
		dispatch(logout());
		router.push('/');
		return;
	};

	return (
		<aside className={drawerOpen ? styles.drawer : styles.drawer_closed}>
			<div className={styles.btn_container}>
				<Link href='/app/[userId]/create' as={`/app/${userId}/create`}>
					<a className={styles.create_btn}>
						<FontAwesomeIcon
							icon={faPlus}
							className={styles.create_icon}
						/>
						Create
					</a>
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.nav_links}>
					<DrawerLink route={`dashboard`}>Dashboard</DrawerLink>
					<DrawerLink route={`projects`}>Projects</DrawerLink>
					<DrawerLink route={`tasks`}>Tasks</DrawerLink>
					<DrawerLink route={`notes`}>Notes</DrawerLink>
					<DrawerLink route={`activity`}>Activity</DrawerLink>
				</ul>
				<ul className={styles.nav_links}>
					<DrawerLink route={`settings`}>Settings</DrawerLink>
					<DrawerLink onClick={handleLogout}>Logout</DrawerLink>
				</ul>
			</nav>
		</aside>
	);
};

export { Drawer };

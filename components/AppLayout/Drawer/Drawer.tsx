import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import styles from './Drawer.module.scss';
import { DrawerLink } from './DrawerLink';
import { Button } from '../../shared/Button';
import { logout } from '../../../redux/user';

const Drawer = (): JSX.Element => {
	const dispatch = useDispatch();
	const router = useRouter();
	const handleCreate = () => {};

	const handleLogout = () => {
		dispatch(logout());
		router.push('/');
		return;
	};

	return (
		<aside className={styles.drawer}>
			<div className={styles.btn_container}>
				<Button btnStyle='primary' onClick={handleCreate}>
					Create
				</Button>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.nav_links}>
					<DrawerLink href='#' isActive={true}>
						Dashboard
					</DrawerLink>
					<DrawerLink href='#' isActive={false}>
						Projects
					</DrawerLink>
					<DrawerLink href='#' isActive={false}>
						Tasks
					</DrawerLink>
					<DrawerLink href='#' isActive={false}>
						Notes
					</DrawerLink>
					<DrawerLink href='#' isActive={false}>
						Activity
					</DrawerLink>
				</ul>
				<ul className={styles.nav_links}>
					<DrawerLink href='#' isActive={false}>
						Settings
					</DrawerLink>
					<DrawerLink onClick={handleLogout} isActive={false}>
						Logout
					</DrawerLink>
				</ul>
			</nav>
		</aside>
	);
};

export { Drawer };

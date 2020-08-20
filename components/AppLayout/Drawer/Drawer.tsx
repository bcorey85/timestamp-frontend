import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { DrawerLink } from './DrawerLink';
import { Button } from '../../shared/Button';

import { logout } from '../../../redux/user';
import { selectInterface, Pages } from '../../../redux/interface';
import { selectUser } from '../../../redux/user';
import styles from './Drawer.module.scss';

const Drawer = (): JSX.Element => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { drawerOpen, currentPage } = useSelector(selectInterface);

	const handleCreate = () => {};

	const handleLogout = () => {
		dispatch(logout());
		router.push('/');
		return;
	};
	console.log(currentPage);

	return (
		<aside className={drawerOpen ? styles.drawer : styles.drawer_closed}>
			<div className={styles.btn_container}>
				<Link href='#'>
					<a>
						<img src={'/images/logo-temp.svg'} />
					</a>
				</Link>
				<Button btnStyle='primary' onClick={handleCreate}>
					Create
				</Button>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.nav_links}>
					<DrawerLink
						route={`dashboard`}
						isActive={currentPage === Pages.dashboard}
						page={Pages.dashboard}>
						Dashboard
					</DrawerLink>
					<DrawerLink
						route={`projects`}
						isActive={currentPage === Pages.projects}
						page={Pages.projects}>
						Projects
					</DrawerLink>
					<DrawerLink
						route={`tasks`}
						isActive={currentPage === Pages.tasks}
						page={Pages.tasks}>
						Tasks
					</DrawerLink>
					<DrawerLink
						route={`notes`}
						isActive={currentPage === Pages.notes}
						page={Pages.notes}>
						Notes
					</DrawerLink>
					<DrawerLink
						route={`activity`}
						isActive={currentPage === Pages.activity}
						page={Pages.activity}>
						Activity
					</DrawerLink>
				</ul>
				<ul className={styles.nav_links}>
					<DrawerLink
						route={`settings`}
						isActive={currentPage === Pages.settings}
						page={Pages.settings}>
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

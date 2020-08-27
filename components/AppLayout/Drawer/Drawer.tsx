import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
	BiNote,
	BiCheckSquare,
	BiCog,
	BiTime,
	BiLogOut,
	BiGridAlt,
	BiSearchAlt2,
	BiClipboard,
	BiPlus
} from 'react-icons/bi';

import { DrawerLink } from './DrawerLink';

import { logout } from '../../../redux/user';
import { selectInterface } from '../../../redux/interface';
import { selectUser } from '../../../redux/user';
import styles from './Drawer.module.scss';

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
						<BiPlus className={styles.create_icon} />
						Create
					</a>
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.nav_links}>
					<DrawerLink route={`dashboard`}>
						<BiGridAlt className={styles.drawer_icon} />
						Dashboard
					</DrawerLink>
					<DrawerLink route={`projects`}>
						<BiClipboard className={styles.drawer_icon} />Projects
					</DrawerLink>
					<DrawerLink route={`tasks`}>
						<BiCheckSquare className={styles.drawer_icon} />Tasks
					</DrawerLink>
					<DrawerLink route={`notes`}>
						<BiNote className={styles.drawer_icon} />Notes
					</DrawerLink>
					<DrawerLink route={`activity`}>
						<BiTime className={styles.drawer_icon} />Activity
					</DrawerLink>
					<DrawerLink route={`search`}>
						<BiSearchAlt2 className={styles.drawer_icon} />Search
					</DrawerLink>
				</ul>
				<ul className={styles.nav_links}>
					<DrawerLink route={`settings`}>
						<BiCog className={styles.drawer_icon} />Settings
					</DrawerLink>
					<DrawerLink onClick={handleLogout}>
						<BiLogOut className={styles.drawer_icon} />Logout
					</DrawerLink>
				</ul>
			</nav>
		</aside>
	);
};

export { Drawer };

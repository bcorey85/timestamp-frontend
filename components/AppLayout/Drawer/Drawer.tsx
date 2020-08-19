import React from 'react';

import styles from './Drawer.module.scss';
import { DrawerLink } from './DrawerLink';
import { Button } from '../../shared/Button';

const Drawer = (): JSX.Element => {
	const handleCreate = () => {};

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
					<DrawerLink href='#' isActive={false}>
						Logout
					</DrawerLink>
				</ul>
			</nav>
		</aside>
	);
};

export { Drawer };

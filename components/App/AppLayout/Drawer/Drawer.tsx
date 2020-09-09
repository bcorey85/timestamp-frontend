import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { Button } from '../../../shared/Button';

import { logout } from '../../../../redux/user';
import { selectInterface, toggleDrawer } from '../../../../redux/interface';
import { selectUser } from '../../../../redux/user';
import { useRouterService } from '../../../../hooks/useRouterService';

import styles from './Drawer.module.scss';

interface Props {
	toggleCreateModal: (mode, config) => void;
	mobile?: boolean;
}

const Drawer = ({ toggleCreateModal, mobile }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { router } = useRouterService();
	const { userId } = useSelector(selectUser);
	const { drawerOpen } = useSelector(selectInterface);

	const handleMobileClose = () => {
		dispatch(toggleDrawer());
	};

	const handleLogout = () => {
		dispatch(logout());
		router.push.root();
		return;
	};

	return (
		<React.Fragment>
			{drawerOpen && mobile ? (
				<div
					className={styles.mobile_overlay}
					onClick={handleMobileClose}
				/>
			) : null}

			<aside
				className={drawerOpen ? styles.drawer : styles.drawer_closed}
				onClick={mobile ? handleMobileClose : null}>
				<div className={styles.btn_container}>
					<Button
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'project'
							})}
						btnStyle='primary'>
						<BiPlus className={styles.create_icon} />
						Create
					</Button>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.nav_links}>
						<DrawerLink route={`dashboard`}>
							<BiGridAlt className={styles.drawer_icon} />
							Dashboard
						</DrawerLink>
						<DrawerLink route={`projects`}>
							<BiClipboard
								className={styles.drawer_icon}
							/>Projects
						</DrawerLink>
						<DrawerLink route={`tasks`}>
							<BiCheckSquare
								className={styles.drawer_icon}
							/>Tasks
						</DrawerLink>
						<DrawerLink route={`notes`}>
							<BiNote className={styles.drawer_icon} />Notes
						</DrawerLink>
						<DrawerLink route={`activity`}>
							<BiTime className={styles.drawer_icon} />Activity
						</DrawerLink>
						<DrawerLink route={`search`}>
							<BiSearchAlt2
								className={styles.drawer_icon}
							/>Search
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
		</React.Fragment>
	);
};

export { Drawer };

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	BiCog,
	BiTime,
	BiLogOut,
	BiGridAlt,
	BiSearchAlt2
} from 'react-icons/bi';

import { DrawerLink } from './DrawerLink';
import { Button } from '../../../shared/Button';
import { TypeIcon } from '../../shared/TypeIcon';

import { logout } from '../../../../redux/user';
import { selectInterface, toggleDrawer } from '../../../../redux/interface';
import { useRouterService } from '../../../../hooks/useRouterService';
import {
	ModalConfig,
	ModalMode
} from '../../../../hooks/create/useCreateModal';
import { clearAppData } from '../../../../redux/appData';

import styles from './Drawer.module.scss';

interface Props {
	toggleCreateModal: (mode: keyof ModalMode, config: ModalConfig) => void;
	mobile?: boolean;
}

const Drawer = ({ toggleCreateModal, mobile }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { router } = useRouterService();
	const { drawerOpen } = useSelector(selectInterface);

	const handleMobileClose = () => {
		dispatch(toggleDrawer());
	};

	const handleLogout = () => {
		dispatch(logout());
		dispatch(clearAppData());
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
						Create
					</Button>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.nav_links}>
						<DrawerLink route={`dashboard`}>
							<BiGridAlt className={styles.drawer_icon} />
							Dashboard
						</DrawerLink>
						<DrawerLink route={`activity`}>
							<BiTime className={styles.drawer_icon} />Activity
						</DrawerLink>
						<DrawerLink route={`search`}>
							<BiSearchAlt2
								className={styles.drawer_icon}
							/>Search
						</DrawerLink>

						<DrawerLink route={`projects`}>
							<span className={styles.drawer_type_icon}>
								<TypeIcon type='project' />
							</span>Projects
						</DrawerLink>
						<DrawerLink route={`tasks`}>
							<span className={styles.drawer_type_icon}>
								<TypeIcon type='task' />
							</span>
							Tasks
						</DrawerLink>
						<DrawerLink route={`notes`}>
							<span className={styles.drawer_type_icon}>
								<TypeIcon type='note' />
							</span>Notes
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

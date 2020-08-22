import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import { Footer } from '../Layout/Footer/Footer';
import { Breadcrumb } from './Breadcrumb';
import { IconType, TypeIcon } from '../App/shared/TypeIcon';

import styles from './AppLayout.module.scss';
import { MobileCreateButton } from './MobileCreateButton';
import { selectUser } from '../../redux/user';

interface Props {
	children?: any;
}

const AppLayout = ({ children }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const [ breadcrumbLinks, setBreadcrumLinks ] = useState([
		{
			iconType: IconType.none,
			href: `/app/${userId}/dashboard`,
			text: 'Dashboard'
		},
		{
			iconType: IconType.project,
			href: `/app/${userId}/dashboard`,
			text: 'Project'
		},
		{
			iconType: IconType.task,
			href: `/app/${userId}/dashboard`,
			text: 'Task'
		},
		{
			iconType: IconType.note,
			href: `/app/${userId}/dashboard`,
			text: 'Note'
		}
	]);
	const router = useRouter();

	// Build dictionary?
	const routes = [];

	useEffect(() => {
		// filter if in dictionary
		const routeArr = router.route.split('/').filter(route => {});
	}, []);

	return (
		<div className={styles.app_layout}>
			<Header />
			<div className={styles.main_container}>
				<Drawer />
				<main className={styles.main}>
					<nav className={styles.nav_container}>
						<Breadcrumb links={breadcrumbLinks} />
					</nav>
					<div className={styles.wrapper}>{children}</div>
				</main>
				<MobileCreateButton />
			</div>

			<Footer />
		</div>
	);
};

export { AppLayout };

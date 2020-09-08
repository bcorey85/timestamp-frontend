import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import { Footer } from '../Layout/Footer/Footer';
import { Breadcrumb } from './Breadcrumb';
import { IconType, TypeIcon } from '../App/shared/TypeIcon';
import { MobileCreateButton } from './MobileCreateButton';
import { CreateModal } from '../App/shared/CreateModal';

import { selectUser } from '../../redux/user';

import styles from './AppLayout.module.scss';
import { selectCreateModal } from '../../redux/createModal';
import { useCreateModal } from '../../hooks/useCreateModal';

interface Props {
	children?: any;
}

const AppLayout = ({ children }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	const {
		createModalOpen,
		createModalPage,
		toggleCreateModal,
		currentTaskId,
		currentProjectId
	} = useCreateModal();

	const dispatch = useDispatch();

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
			<div className={styles.content}>
				<Drawer toggleCreateModal={toggleCreateModal} />
				<main className={styles.main}>
					{children}
					<CreateModal
						isOpen={createModalOpen}
						toggleModal={toggleCreateModal}
						type={createModalPage}
						initialTaskId={currentTaskId}
						initialProjectId={currentProjectId}
					/>
				</main>
				<MobileCreateButton toggleCreateModal={toggleCreateModal} />
			</div>

			<Footer />
		</div>
	);
};

export { AppLayout };

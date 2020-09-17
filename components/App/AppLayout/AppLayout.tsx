import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppData } from '../../../hooks/useAppData';

import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import { Footer } from '../../Landing/Layout/Footer/Footer';
import { Breadcrumb } from './Breadcrumb';
import { IconType, TypeIcon } from '../shared/TypeIcon';
import { MobileCreateButton } from './MobileCreateButton';
import { CreateModal } from '../Create/CreateModal';
import { Loading } from '../../shared/Loading';

import { selectUser } from '../../../redux/user';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { setAppDataSynced } from '../../../redux/appData';
import styles from './AppLayout.module.scss';

interface Props {
	children?: any;
}

const AppLayout = ({ children }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const [ isLoading, setIsLoading ] = useState(true);
	const { fetchAppData, appData, appDataErrors } = useAppData();
	const {
		createModalOpen,
		createModalPage,
		toggleCreateModal,
		currentTaskId,
		currentProjectId
	} = useCreateModal();
	const dispatch = useDispatch();

	useEffect(
		() => {
			console.log(appData.synced);
			if (appData.synced === false) {
				fetchAppData();
			}
			console.log(appDataErrors);
			if (appDataErrors.length > 0) {
				return;
			}

			dispatch(setAppDataSynced(true));

			setIsLoading(false);
		},
		[ appData.synced ]
	);

	const errorMessage = (
		<div>
			An error occurred while fetching your account data. Please contact
			an admin for support
		</div>
	);

	return (
		<div className={styles.app_layout}>
			<Header />
			<div className={styles.content}>
				<div className={styles.mobile_drawer}>
					<Drawer
						toggleCreateModal={toggleCreateModal}
						mobile={true}
					/>
				</div>
				<div className={styles.desktop_drawer}>
					<Drawer
						toggleCreateModal={toggleCreateModal}
						mobile={false}
					/>
				</div>

				<main className={styles.main}>
					{isLoading ? <Loading /> : null}
					{!isLoading && appDataErrors.length > 0 ? (
						errorMessage
					) : null}
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

// const [ breadcrumbLinks, setBreadcrumbLinks ] = useState([
// 	{
// 		iconType: IconType.none,
// 		href: `/app/${userId}/dashboard`,
// 		text: 'Dashboard'
// 	},
// 	{
// 		iconType: IconType.project,
// 		href: `/app/${userId}/dashboard`,
// 		text: 'Project'
// 	},
// 	{
// 		iconType: IconType.task,
// 		href: `/app/${userId}/dashboard`,
// 		text: 'Task'
// 	},
// 	{
// 		iconType: IconType.note,
// 		href: `/app/${userId}/dashboard`,
// 		text: 'Note'
// 	}
// ]);

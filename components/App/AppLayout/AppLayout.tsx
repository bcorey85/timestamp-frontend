import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppData } from '../../../hooks/useAppData';

import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import { Footer } from '../../Landing/Layout/Footer/Footer';
import { MobileCreateButton } from './MobileCreateButton';
import { CreateModal } from '../Create/CreateModal';
import { Loading } from '../../shared/Loading/Loading';

import { UiService } from '../../../utils/UiService';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { setAppDataSynced } from '../../../redux/appData';
import styles from './AppLayout.module.scss';
import { useDarkModeToggle } from '../../../hooks/useDarkModeToggle';
import { selectInterface } from '../../../redux/interface';

interface Props {
	children?: any;
}

const AppLayout = ({ children }: Props): JSX.Element => {
	const [ isLoading, setIsLoading ] = useState(true);
	const { fetchAppData, appData, appDataErrors, userId } = useAppData();
	const { createModalOpen, toggleCreateModal } = useCreateModal();
	const { darkColorMode } = useSelector(selectInterface);
	const dispatch = useDispatch();

	// const { darkModeChecked } = useDarkModeToggle();
	// console.log('app', darkModeChecked);

	useEffect(
		() => {
			const getAppData = async () => {
				if (userId && appData.synced === false) {
					await fetchAppData();
				}

				if (appDataErrors.length > 0) {
					return;
				}

				dispatch(setAppDataSynced(true));

				setIsLoading(false);
			};
			getAppData();
		},
		[ appData.synced ]
	);

	const errorMessage = (
		<div>
			An error occurred while fetching your account data. Please contact
			an admin for support
		</div>
	);

	if (isLoading) {
		return (
			<div id='app' className={darkColorMode === true ? 'dark' : null}>
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
							<Loading />
						</main>
					</div>
					<Footer />
				</div>
			</div>
		);
	}

	return (
		<div id='app' className={darkColorMode === true ? 'dark' : null}>
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

					<main className={styles.main} id='app-main'>
						{!isLoading && appDataErrors.length > 0 ? (
							errorMessage
						) : (
							children
						)}

						<CreateModal
							isOpen={createModalOpen}
							toggleModal={toggleCreateModal}
						/>
					</main>
					<MobileCreateButton toggleCreateModal={toggleCreateModal} />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export { AppLayout };

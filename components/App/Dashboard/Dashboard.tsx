import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { ListSection } from '../shared/ListSection/ListSection';
import { Loading } from '../../shared/Loading';
import { PinnedFavorites } from './PinnedFavorites';
import { Modal } from '../../shared/Modal/Modal';
import { CreateModal } from '../Create/CreateModal';

import { selectUser } from '../../../redux/user';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { getUserApiConfig } from '../../../api/user';
import { selectAppData, setAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import { useToggle } from '../../../hooks/useToggle';

const Dashboard = (): JSX.Element => {
	const {
		request: getUserRequest,
		data: getUserData,
		errors: getUserErrors
	} = useApiRequest();
	const [ isLoading, setIsLoading ] = useState(true);
	const [ createModalOpen, toggleCreateModal ] = useToggle(false);
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const dispatch = useDispatch();
	const { router } = useRouterService();
	const pinnedItems = [
		...appData.notes,
		...appData.projects,
		...appData.tasks
	].filter(item => item.pinned === true);

	useEffect(() => {
		const getUserData = async () => {
			const config = getUserApiConfig({ userId, token });
			const res = await getUserRequest(config);

			if (res.success === true) {
				setIsLoading(false);

				dispatch(setAppData({ appData: res.data.user }));
			}
		};

		getUserData();
	}, []);

	if (isLoading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='Welcome to Timestamp'
					subheading='Dashboard'
					subheadingType={IconType.generic}
				/>
				<AppPageHeaderControls>
					<Button btnStyle='secondary' onClick={toggleCreateModal}>
						<TypeIcon type={IconType.project} />
						New Project
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>
			<AppPageSection>
				<StatsBar>
					<StatCard
						type={IconType.time}
						title={'Hours'}
						stat={appData.hours}
						href={'/app/[userId]/activity'}
						as={`/app/${userId}/activity`}
						linkText='View Activity'
					/>
					<StatCard
						type={IconType.project}
						title={'Projects'}
						stat={appData.projects.length}
						href={'/app/[userId]/projects'}
						as={`/app/${userId}/projects`}
						linkText='View Projects'
					/>
					<StatCard
						type={IconType.task}
						title={'Tasks'}
						stat={appData.tasks.length}
						href={'/app/[userId]/tasks'}
						as={`/app/${userId}/tasks`}
						linkText='View Tasks'
					/>
					<StatCard
						type={IconType.note}
						title={'Notes'}
						stat={appData.notes.length}
						href={'/app/[userId]/notes'}
						as={`/app/${userId}/notes`}
						linkText='View Notes'
					/>
				</StatsBar>
			</AppPageSection>
			<AppPageSection title='Pinned Favorites'>
				<PinnedFavorites items={pinnedItems} />
			</AppPageSection>
			<AppPageSection title='Recent Notes'>
				<ListSection type='note' items={appData.recentItems.notes} />
			</AppPageSection>
			<AppPageSection title='Recent Tasks'>
				<ListSection type='task' items={appData.recentItems.tasks} />
			</AppPageSection>
			<AppPageSection title='Recent Projects'>
				<ListSection
					type='project'
					items={appData.recentItems.projects}
				/>
			</AppPageSection>

			<CreateModal
				toggleModal={toggleCreateModal}
				isOpen={createModalOpen}
				type='project'
			/>
		</React.Fragment>
	);
};

export { Dashboard };

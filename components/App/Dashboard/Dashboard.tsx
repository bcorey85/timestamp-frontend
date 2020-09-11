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

import { selectUser } from '../../../redux/user';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useAppData } from '../../../hooks/useAppData';

const Dashboard = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	const { appData } = useAppData();
	const { toggleCreateModal } = useCreateModal();

	const pinnedItems = [
		...appData.notes,
		...appData.projects,
		...appData.tasks
	].filter(item => item.pinned === true);

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='Welcome to Timestamp'
					subheading='Dashboard'
					subheadingType={IconType.generic}
				/>
				<AppPageHeaderControls>
					<Button
						btnStyle='secondary'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'project'
							})}>
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
		</React.Fragment>
	);
};

export { Dashboard };

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { ListSection } from '../shared/ListSection/ListSection';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { PinnedFavorites } from './PinnedFavorites';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions/OverflowToggleVisible';

import { selectUser } from '../../../redux/user';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useAppData } from '../../../hooks/useAppData';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { VisibleItemsHeader } from '../shared/VisibleItemsHeader';

const Dashboard = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const { appData } = useAppData();
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();

	const { toggleCreateModal } = useCreateModal();

	const pinnedItems = [
		...visibleItems.projects,
		...visibleItems.tasks,
		...visibleItems.notes
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
					<OverflowMenu>
						<OverflowToggleVisible
							selected={selected}
							handleClick={handleSelect}
						/>
					</OverflowMenu>
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
			<VisibleItemsHeader visible={selected} />
			<AppPageSection>
				<AppPageSectionHeading title='Pinned Favorites' />
				<PinnedFavorites items={pinnedItems} />
			</AppPageSection>
			<AppPageSection>
				<AppPageSection>
					<AppPageSectionHeading title='Recent Projects'>
						<Button
							btnStyle='link_gray'
							onClick={() =>
								toggleCreateModal('new', {
									createModalPage: 'project'
								})}>
							<ListAddIcon />
						</Button>
					</AppPageSectionHeading>
					<ListSection
						type='project'
						items={visibleItems.recentProjects}
					/>
				</AppPageSection>

				<AppPageSection>
					<AppPageSectionHeading title='Recent Tasks'>
						<Button
							btnStyle='link_gray'
							onClick={() =>
								toggleCreateModal('new', {
									createModalPage: 'task'
								})}>
							<ListAddIcon />
						</Button>
					</AppPageSectionHeading>
					<ListSection type='task' items={visibleItems.recentTasks} />
				</AppPageSection>
				<AppPageSectionHeading title='Recent Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'note'
							})}>
						<ListAddIcon />
					</Button>
				</AppPageSectionHeading>
				<ListSection type='note' items={visibleItems.recentNotes} />
			</AppPageSection>
		</React.Fragment>
	);
};

export { Dashboard };

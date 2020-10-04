import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { ListSection } from '../shared/ListSection/ListSection';
import { PinnedFavorites } from './PinnedFavorites';

import { selectUser } from '../../../redux/user';
import { useAppData } from '../../../hooks/useAppData';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { VisibilityFilterToggle } from '../shared/VisibilityFilterToggle';

const Dashboard = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const { appData } = useAppData();
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();

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
			<VisibilityFilterToggle
				selected={selected}
				handleClick={handleSelect}
			/>
			<AppPageSection>
				<AppPageSectionHeading title='Pinned Favorites' />
				<PinnedFavorites items={pinnedItems} />
			</AppPageSection>

			<AppPageSection>
				<ListSection
					type='project'
					items={visibleItems.recentProjects}
					title='Recent Projects'
					addType='new'
				/>
			</AppPageSection>

			<AppPageSection>
				<ListSection
					type='task'
					items={visibleItems.recentTasks}
					title='Recent Tasks'
					addType='new'
				/>
			</AppPageSection>
			<AppPageSection>
				<ListSection
					type='note'
					items={visibleItems.recentNotes}
					title='Recent Notes'
					addType='new'
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { Dashboard };

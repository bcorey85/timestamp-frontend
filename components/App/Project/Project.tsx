import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';

const Project = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Projects'
					subheading='Project'
					subheadingType={IconType.project}
				/>

				<AppPageHeaderControls>
					<Button
						btnStyle='outline'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'project'
							})}>
						<TypeIcon type={IconType.project} />
						New Project
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>
			{/* <AppPageSection>
				<StatsBar>
					<StatCard
						type={IconType.time}
						title={'Hours'}
						stat={appData.hours}
						href={'/app/[userId/activity'}
						as={`/app/${userId}/activity`}
						linkText='View Activity'
					/>
					<StatCard
						type={IconType.project}
						title={'Projects'}
						stat={appData.projects.length}
						href={'/app/[userId/projects'}
						as={`/app/${userId}/projects`}
						linkText='View Projects'
					/>
					<StatCard
						type={IconType.task}
						title={'Tasks'}
						stat={appData.tasks.length}
						href={'/app/[userId/tasks'}
						as={`/app/${userId}/tasks`}
						linkText='View Tasks'
					/>
					<StatCard
						type={IconType.note}
						title={'Notes'}
						stat={appData.notes.length}
						href={'/app/[userId/notes'}
						as={`/app/${userId}/notes`}
						linkText='View Notes'
					/>
				</StatsBar>
			</AppPageSection> */}
			<AppPageSection title='Projects'>
				<ListSection type='project' items={appData.projects} />
			</AppPageSection>
		</div>
	);
};

export { Project };

import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageMeta } from '../shared/AppPage/AppPageMeta';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';

import { useCreateModal } from '../../../hooks/useCreateModal';

const ProjectSingle = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	const currentProject = appData.projects.filter(project => {
		return project.project_id === Number(router.query.projectId);
	})[0];

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading={currentProject.title}
					subheading='Project'
					subheadingType={IconType.project}>
					<AppPageMeta>
						<p>{currentProject.description}</p>
						<p>Hours: {currentProject.hours}</p>
						<p>
							Started On:{' '}
							{new Date(
								Date.parse(currentProject.created_at)
							).toLocaleDateString()}
						</p>
					</AppPageMeta>
				</AppPageTitle>

				<AppPageHeaderControls>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							router.pushUnique('create?action=project')}>
						Edit
					</Button>

					<Button
						btnStyle='secondary'
						onClick={() =>
							toggleCreateModal({
								createModalPage: 'task',
								currentItemId: {
									noteId: '',
									projectId: currentProject.project_id || '',
									taskId: ''
								}
							})}>
						<TypeIcon type={IconType.task} />
						Add Task
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>

			<AppPageSection title='Tasks'>
				<ListSection
					type='task'
					items={appData.tasks.filter(
						task => task.project_id === currentProject.project_id
					)}
				/>
			</AppPageSection>
			<AppPageSection title='Recent Notes'>
				<ListSection
					type='note'
					items={appData.notes.filter(
						note => note.project_id === currentProject.project_id
					)}
				/>
			</AppPageSection>
		</div>
	);
};

export { ProjectSingle };

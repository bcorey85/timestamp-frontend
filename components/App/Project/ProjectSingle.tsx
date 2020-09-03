import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageMeta } from '../shared/AppPage/AppPageMeta';
import { ListSection } from '../shared/ListSection/ListSection';
import { CreateModal } from '../Create/CreateModal';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import { useRouterService } from '../../../hooks/useRouterService';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { useToggle } from '../../../hooks/useToggle';

const ProjectSingle = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const [ createModalOpen, toggleCreateModal ] = useToggle(false);
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

					<Button btnStyle='secondary' onClick={toggleCreateModal}>
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
			<CreateModal
				toggleModal={toggleCreateModal}
				isOpen={createModalOpen}
				type='task'
				initialProjectId={currentProject.project_id}
			/>
		</div>
	);
};

export { ProjectSingle };

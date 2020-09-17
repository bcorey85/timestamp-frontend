import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageMeta } from '../shared/AppPage/AppPageMeta';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { ListSection } from '../shared/ListSection/ListSection';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowEdit } from '../shared/OverflowMenu/OverflowActions/OverflowEdit';
import { OverflowDelete } from '../shared/OverflowMenu/OverflowActions/OverflowDelete';
import { DeleteModal } from '../shared/DeleteModal';

import { selectAppData, setAppDataSynced } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import { useRouterService } from '../../../hooks/useRouterService';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useToggle } from '../../../hooks/useToggle';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { deleteProjectApiConfig } from '../../../api/project';

const ProjectSingle = (): JSX.Element => {
	const dispatch = useDispatch();
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentProject = appData.projects.filter(project => {
		return project.project_id.toString() === Number(router.query.projectid);
	})[0] || {
		title: '',
		description: '',
		hours: '',
		created_at: new Date(Date.now()).toISOString(),
		project_id: '1'
	};

	const { toggleCreateModal } = useCreateModal(currentProject);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);

	const { request: deleteTaskRequest } = useApiRequest();

	const handleDelete = async () => {
		const config = deleteProjectApiConfig({
			projectId: currentProject.project_id,
			userId,
			token
		});

		await deleteTaskRequest(config);

		dispatch(setAppDataSynced(false));
		toggleDeleteModal();
		router.push.dashboard();
	};

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
					<OverflowMenu>
						<OverflowEdit
							handleClick={() => toggleCreateModal('edit')}>
							Edit
						</OverflowEdit>
						<OverflowDelete handleClick={toggleDeleteModal}>
							Delete
						</OverflowDelete>
					</OverflowMenu>
					<Button
						btnStyle='outline'
						onClick={() => toggleCreateModal('addChild')}>
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
			<DeleteModal
				title='Delete Project'
				deleteItem={currentProject.title}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export { ProjectSingle };

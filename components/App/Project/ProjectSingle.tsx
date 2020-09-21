import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageMeta } from '../AppPage/AppPageMeta';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
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
		return project.projectId === Number(router.query.projectId);
	})[0] || {
		title: '',
		description: '',
		hours: '',
		createdAt: new Date(Date.now()).toISOString(),
		projectId: '1'
	};

	const { toggleCreateModal } = useCreateModal(currentProject);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);

	const { request: deleteTaskRequest } = useApiRequest();

	const handleDelete = async () => {
		const config = deleteProjectApiConfig({
			projectId: currentProject.projectId,
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
						<p>
							Created:{' '}
							{new Date(
								Date.parse(currentProject.createdAt)
							).toLocaleDateString()}
						</p>
						<p>Hours: {currentProject.hours}</p>

						<p>{currentProject.description}</p>
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
				</AppPageHeaderControls>
			</AppPageHeader>

			<AppPageSection>
				<AppPageSectionHeading title='Tasks'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('addChild', {
								createModalPage: 'task'
							})}>
						<TypeIcon type={IconType.task} />
						Add Task
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='task'
					items={appData.tasks.filter(
						task => task.projectId === currentProject.projectId
					)}
				/>
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Recent Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('addChild', {
								createModalPage: 'note'
							})}>
						<TypeIcon type={IconType.note} />
						Add Note
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='note'
					items={appData.notes.filter(
						note => note.projectId === currentProject.projectId
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

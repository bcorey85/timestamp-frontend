import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageMeta } from '../shared/AppPage/AppPageMeta';
import { ListSection } from '../shared/ListSection/ListSection';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowEdit } from '../shared/OverflowMenu/OverflowActions/OverflowEdit';
import { OverflowDelete } from '../shared/OverflowMenu/OverflowActions/OverflowDelete';
import { DeleteModal } from '../shared/DeleteModal';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import { useRouterService } from '../../../hooks/useRouterService';
import { useCreateModal } from '../../../hooks/useCreateModal';
import { useToggle } from '../../../hooks/useToggle';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { deleteTaskApiConfig } from '../../../api/task';

const TaskSingle = (): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { toggleCreateModal } = useCreateModal();
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);
	const { router } = useRouterService();
	const { request: deleteTaskRequest } = useApiRequest();

	const currentTask = appData.tasks.filter(task => {
		return task.task_id === Number(router.query.taskId);
	})[0];

	const handleDelete = async () => {
		const config = deleteTaskApiConfig({
			taskId: currentTask.task_id,
			userId,
			token
		});

		await deleteTaskRequest(config);

		toggleDeleteModal();
		router.push.dashboard();
	};

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading={currentTask.title}
					subheading='Task'
					subheadingType={IconType.task}>
					<AppPageMeta>
						<p>{currentTask.description}</p>
						<p>Hours: {currentTask.hours}</p>
						<p>
							Started On:
							{new Date(
								Date.parse(currentTask.created_at)
							).toLocaleDateString()}
						</p>
					</AppPageMeta>
				</AppPageTitle>

				<AppPageHeaderControls>
					<OverflowMenu>
						<OverflowEdit handleClick={() => {}}>Edit</OverflowEdit>
						<OverflowDelete handleClick={toggleDeleteModal}>
							Delete
						</OverflowDelete>
					</OverflowMenu>
					<Button
						btnStyle='secondary'
						onClick={() =>
							toggleCreateModal({
								createModalPage: 'note',
								currentItemId: {
									noteId: '',
									projectId: currentTask.project_id || '',
									taskId: currentTask.task_id || ''
								}
							})}>
						<TypeIcon type={IconType.note} />
						Add Note
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>

			<AppPageSection title='Notes'>
				<ListSection
					type='note'
					items={appData.notes.filter(
						note => note.task_id === currentTask.task_id
					)}
				/>
			</AppPageSection>
			<DeleteModal
				title='Delete Task'
				deleteItem={currentTask.title}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export { TaskSingle };

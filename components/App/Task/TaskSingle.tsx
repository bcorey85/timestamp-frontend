import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { AppPageMeta } from '../AppPage/AppPageMeta';
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
import { deleteTaskApiConfig } from '../../../api/task';
import { Item } from '../../../utils/ItemService';
import { MathService } from '../../../utils/MathService';

const TaskSingle = (): JSX.Element => {
	const dispatch = useDispatch();
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	const currentTask: Item = appData.tasks.filter(task => {
		return task.itemId.taskId === Number(router.query.taskId);
	})[0];

	const { toggleCreateModal } = useCreateModal(currentTask);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);

	const { request: deleteTaskRequest } = useApiRequest();

	const handleDelete = async () => {
		const config = deleteTaskApiConfig({
			taskId: currentTask.itemId.taskId,
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
					heading={currentTask.title}
					subheading='Task'
					subheadingType={IconType.task}>
					<AppPageMeta>
						<p>{currentTask.tags || null} </p>
						<p>
							{new Date(
								Date.parse(currentTask.meta.createdAt)
							).toLocaleDateString()}&nbsp; - &nbsp;
							{MathService.round(currentTask.meta.hours, 1)} hr
						</p>

						<p>{currentTask.description}</p>
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
				<AppPageSectionHeading title='Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() => toggleCreateModal('addChild')}>
						<TypeIcon type={IconType.note} />
						Add Note
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='note'
					items={appData.notes.filter(
						note => note.taskId === currentTask.itemId.taskId
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

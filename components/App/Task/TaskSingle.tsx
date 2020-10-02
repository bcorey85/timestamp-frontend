import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import {
	AppPageSection,
	AppPageTitle,
	AppPageSectionHeading,
	AppPageHeader,
	AppPageHeaderControls,
	AppPageMeta
} from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowHeader } from '../shared/OverflowMenu/OverflowHeader';
import { OverflowDivider } from '../shared/OverflowMenu/OverflowDivider';
import {
	OverflowEdit,
	OverflowDelete,
	OverflowToggleVisible,
	OverflowComplete
} from '../shared/OverflowMenu/OverflowActions';

import { DeleteModal } from '../shared/DeleteModal';
import { CompleteModal } from '../shared/CompleteModal';

import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useTaskActions } from '../../../hooks/itemActions/useTaskActions';
import { Item } from '../../../utils/ItemService';
import { MathService } from '../../../utils/MathService';
import { StringService } from '../../../utils/StringService';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { VisibleItemsHeader } from '../shared/VisibleItemsHeader';
import { DateTimeService } from '../../../utils/DateTimeService';

const TaskSingle = (): JSX.Element => {
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentTask: Item = appData.tasks.filter(task => {
		return task.itemId.taskId === Number(router.query.taskId);
	})[0];

	const { toggleCreateModal } = useCreateModal(currentTask);

	const {
		handleComplete,
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal,
		completeModalOpen,
		toggleCompleteModal
	} = useTaskActions(currentTask);
	const taskIsComplete = currentTask.meta.completedOn !== null;
	const taskCompleteDate = DateTimeService.formatDate(
		currentTask.meta.completedOn
	);

	return (
		<React.Fragment>
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
						<p>
							{StringService.pluralize(currentTask.notes || 0, {
								singular: 'note',
								plural: 'notes'
							})}
						</p>
						<p>
							{taskIsComplete ? (
								<strong>Completed on {taskCompleteDate}</strong>
							) : null}
						</p>
					</AppPageMeta>
				</AppPageTitle>
				<AppPageHeaderControls>
					<OverflowMenu>
						<OverflowHeader>Actions</OverflowHeader>
						<OverflowComplete
							handleClick={toggleCompleteModal}
							completed={currentTask.meta.completedOn !== null}
						/>
						<OverflowEdit handleClick={handleEdit}>
							Edit
						</OverflowEdit>
						<OverflowDivider />
						<OverflowHeader>Danger Zone</OverflowHeader>
						<OverflowDelete handleClick={toggleDeleteModal}>
							Delete
						</OverflowDelete>
					</OverflowMenu>
				</AppPageHeaderControls>
			</AppPageHeader>
			<AppPageSection>
				<ListSection
					type='note'
					items={appData.notes.filter(
						(note: Item) =>
							note.itemId.taskId === currentTask.itemId.taskId
					)}
					pagination={true}
					limit={6}
					title='Notes'
					addType='addChild'
					item={currentTask}
				/>
			</AppPageSection>
			<DeleteModal
				item={currentTask}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
			<CompleteModal
				item={currentTask}
				isOpen={completeModalOpen}
				toggleModal={toggleCompleteModal}
				handleComplete={handleComplete}
			/>
		</React.Fragment>
	);
};

export { TaskSingle };

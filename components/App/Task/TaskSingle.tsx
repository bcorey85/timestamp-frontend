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

const TaskSingle = (): JSX.Element => {
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentTask: Item = appData.tasks.filter(task => {
		return task.itemId.taskId === Number(router.query.taskId);
	})[0];

	const { toggleCreateModal } = useCreateModal(currentTask);
	const { selected, handleSelect } = useVisibilityFilter();

	const {
		handleComplete,
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal,
		completeModalOpen,
		toggleCompleteModal
	} = useTaskActions(currentTask);

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
					</AppPageMeta>
				</AppPageTitle>
				<AppPageHeaderControls>
					<OverflowMenu>
						<OverflowHeader>Actions</OverflowHeader>
						<OverflowComplete handleClick={toggleCompleteModal} />
						<OverflowEdit handleClick={handleEdit}>
							Edit
						</OverflowEdit>
						<OverflowDelete handleClick={toggleDeleteModal}>
							Delete
						</OverflowDelete>
						<OverflowToggleVisible
							selected={selected}
							handleClick={handleSelect}
						/>
					</OverflowMenu>
				</AppPageHeaderControls>
			</AppPageHeader>

			<AppPageSection>
				<AppPageSectionHeading title='Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() => toggleCreateModal('addChild')}>
						<ListAddIcon />
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='note'
					items={appData.notes.filter(
						(note: Item) =>
							note.itemId.taskId === currentTask.itemId.taskId
					)}
					pagination={true}
					limit={6}
				/>
			</AppPageSection>
			<DeleteModal
				title='Delete Task'
				deleteItem={currentTask.title}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
			<CompleteModal
				title='Complete Task'
				completeItem={currentTask.title}
				isOpen={completeModalOpen}
				toggleModal={toggleCompleteModal}
				handleComplete={handleComplete}
			/>
		</React.Fragment>
	);
};

export { TaskSingle };

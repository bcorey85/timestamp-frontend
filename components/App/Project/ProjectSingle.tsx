import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
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
import { CompleteModal } from '../shared/CompleteModal';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions/OverflowToggleVisible';
import { OverflowHeader } from '../shared/OverflowMenu/OverflowHeader';
import { OverflowComplete } from '../shared/OverflowMenu/OverflowActions/OverflowComplete';

import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { Item } from '../../../utils/ItemService';
import { MathService } from '../../../utils/MathService';
import { StringService } from '../../../utils/StringService';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { useProjectActions } from '../../../hooks/itemActions/useProjectActions';

const ProjectSingle = (): JSX.Element => {
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentProject: Item = appData.projects.filter(project => {
		return project.itemId.projectId === Number(router.query.projectId);
	})[0];
	const { toggleCreateModal } = useCreateModal(currentProject);
	const { selected, handleSelect } = useVisibilityFilter();

	const {
		handleComplete,
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal,
		completeModalOpen,
		toggleCompleteModal
	} = useProjectActions(currentProject);

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading={currentProject.title}
					subheading='Project'
					subheadingType={IconType.project}>
					<AppPageMeta>
						<p>
							{new Date(
								Date.parse(currentProject.meta.createdAt)
							).toLocaleDateString()}&nbsp; - &nbsp;{MathService.round(currentProject.meta.hours, 1)}{' '}
							hr
						</p>
						<p>{currentProject.description}</p>
						<p>
							{StringService.pluralize(
								currentProject.tasks || 0,
								{
									singular: 'task',
									plural: 'tasks'
								}
							)}{' '}
							- {' '}
							{StringService.pluralize(
								currentProject.notes || 0,
								{
									singular: 'note',
									plural: 'notes'
								}
							)}
						</p>
						<p />
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
				<AppPageSectionHeading title='Tasks'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('addChild', {
								createModalPage: 'task'
							})}>
						<ListAddIcon />
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='task'
					items={appData.tasks.filter(
						(task: Item) =>
							task.itemId.projectId ===
							currentProject.itemId.projectId
					)}
				/>
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('addChild', {
								createModalPage: 'note'
							})}>
						<ListAddIcon />
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='note'
					items={appData.notes.filter(
						(note: Item) =>
							note.itemId.projectId ===
							currentProject.itemId.projectId
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
			<CompleteModal
				title='Complete Project'
				completeItem={currentProject.title}
				isOpen={completeModalOpen}
				toggleModal={toggleCompleteModal}
				handleComplete={handleComplete}
			/>
		</div>
	);
};

export { ProjectSingle };

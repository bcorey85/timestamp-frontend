import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import {
	AppPageSection,
	AppPageTitle,
	AppPageMeta,
	AppPageHeader,
	AppPageHeaderControls
} from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowHeader } from '../shared/OverflowMenu/OverflowHeader';
import { OverflowDivider } from '../shared/OverflowMenu/OverflowDivider';
import {
	OverflowEdit,
	OverflowDelete,
	OverflowComplete
} from '../shared/OverflowMenu/OverflowActions';
import { DeleteModal } from '../shared/Modals/DeleteModal';
import { CompleteModal } from '../shared/Modals/CompleteModal';
import { VisibilityFilterToggle } from '../shared/VisibilityFilterToggle';
import { CompleteBadge } from '../shared/CompletedBadge';

import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
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
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();

	const {
		handleComplete,
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal,
		completeModalOpen,
		toggleCompleteModal
	} = useProjectActions(currentProject);
	const projectIsComplete = currentProject.meta.completedOn !== null;

	let projectItemSource = projectIsComplete ? appData : visibleItems;

	return (
		<React.Fragment>
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
							)}&nbsp; - &nbsp;
							{StringService.pluralize(
								currentProject.notes || 0,
								{
									singular: 'note',
									plural: 'notes'
								}
							)}
						</p>
						{projectIsComplete ? (
							<CompleteBadge
								date={currentProject.meta.completedOn}
							/>
						) : null}
					</AppPageMeta>
				</AppPageTitle>
				<AppPageHeaderControls>
					<OverflowMenu>
						<OverflowHeader>Actions</OverflowHeader>
						<OverflowComplete
							handleClick={toggleCompleteModal}
							completed={currentProject.meta.completedOn !== null}
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
			{projectIsComplete ? null : (
				<VisibilityFilterToggle
					selected={selected}
					handleClick={handleSelect}
				/>
			)}
			<AppPageSection>
				<ListSection
					type='task'
					items={projectItemSource.tasks.filter(
						(task: Item) =>
							task.itemId.projectId ===
							currentProject.itemId.projectId
					)}
					pagination={true}
					limit={6}
					title='Tasks'
					addType='addChild'
					item={currentProject}
				/>
			</AppPageSection>
			<AppPageSection>
				<ListSection
					type='note'
					items={projectItemSource.notes.filter(
						(note: Item) =>
							note.itemId.projectId ===
							currentProject.itemId.projectId
					)}
					pagination={true}
					limit={6}
					title='Notes'
					addType='addChild'
					item={currentProject}
				/>
			</AppPageSection>
			<DeleteModal
				item={currentProject}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
			<CompleteModal
				item={currentProject}
				isOpen={completeModalOpen}
				toggleModal={toggleCompleteModal}
				handleComplete={handleComplete}
			/>
		</React.Fragment>
	);
};

export { ProjectSingle };

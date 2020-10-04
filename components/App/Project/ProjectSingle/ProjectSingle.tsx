import React from 'react';
import { useSelector } from 'react-redux';

import {
	AppPageTitle,
	AppPageHeader,
	AppPageHeaderControls
} from '../../AppPage';

import { OverflowMenu } from '../../shared/OverflowMenu/OverflowMenu';
import { OverflowHeader } from '../../shared/OverflowMenu/OverflowHeader';
import { OverflowDivider } from '../../shared/OverflowMenu/OverflowDivider';
import {
	OverflowEdit,
	OverflowDelete,
	OverflowComplete
} from '../../shared/OverflowMenu/OverflowActions';
import { DeleteModal } from '../../shared/Modals/DeleteModal';
import { CompleteModal } from '../../shared/Modals/CompleteModal';
import { VisibilityFilterToggle } from '../../shared/VisibilityFilterToggle';

import { selectAppData } from '../../../../redux/appData';
import { useRouterService } from '../../../../hooks/useRouterService';
import { Item } from '../../../../utils/ItemService';
import { useVisibilityFilter } from '../../../../hooks/useVisibilityFilter';
import { useProjectActions } from '../../../../hooks/itemActions/useProjectActions';
import { ProjectSingleMeta } from './ProjectSingleMeta';
import { ProjectSingleItemList } from './ProjectSingleItemList';

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
					subheadingType='project'>
					<ProjectSingleMeta project={currentProject} />
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
			<ProjectSingleItemList
				itemSource={projectItemSource}
				project={currentProject}
			/>
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

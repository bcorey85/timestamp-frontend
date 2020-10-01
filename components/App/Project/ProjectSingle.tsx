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
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions/OverflowToggleVisible';
import { OverflowHeader } from '../shared/OverflowMenu/OverflowHeader';

import { selectAppData, setAppDataSynced } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import { useRouterService } from '../../../hooks/useRouterService';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useToggle } from '../../../hooks/useToggle';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { deleteProjectApiConfig } from '../../../api/project';
import { Item } from '../../../utils/ItemService';
import { MathService } from '../../../utils/MathService';
import { StringService } from '../../../utils/StringService';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';

const ProjectSingle = (): JSX.Element => {
	const dispatch = useDispatch();
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentProject: Item = appData.projects.filter(project => {
		return project.itemId.projectId === Number(router.query.projectId);
	})[0];
	const { toggleCreateModal } = useCreateModal(currentProject);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);
	const { request: deleteTaskRequest } = useApiRequest();
	const { selected, handleSelect } = useVisibilityFilter();

	const handleDelete = async () => {
		const config = deleteProjectApiConfig({
			projectId: currentProject.itemId.projectId,
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
						<OverflowEdit
							handleClick={() => toggleCreateModal('edit')}>
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
				<AppPageSectionHeading title='Recent Notes'>
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
		</div>
	);
};

export { ProjectSingle };

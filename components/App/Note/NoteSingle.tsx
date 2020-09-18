import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageMeta } from '../AppPage/AppPageMeta';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { AppPageTitle } from '../AppPage/AppPageTitle';
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
import { deleteNoteApiConfig } from '../../../api/note';

const NoteSingle = (): JSX.Element => {
	const dispatch = useDispatch();
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentNote = appData.notes.filter(note => {
		return note.note_id === Number(router.query.noteId);
	})[0] || {
		title: '',
		description: '',
		hours: '',
		created_at: new Date(Date.now()).toISOString(),
		project_id: '1',
		task_id: '1',
		note_id: '1'
	};

	const { toggleCreateModal } = useCreateModal(currentNote);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);

	const { request: deleteNoteRequest } = useApiRequest();

	const handleDelete = async () => {
		const config = deleteNoteApiConfig({
			noteId: currentNote.note_id,
			userId,
			token
		});

		await deleteNoteRequest(config);

		dispatch(setAppDataSynced(false));
		toggleDeleteModal();
		router.push.dashboard();
	};

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading={currentNote.title}
					subheading='Note'
					subheadingType={IconType.note}>
					<AppPageMeta>
						<p>{currentNote.description}</p>
						<p>Hours: {currentNote.hours}</p>
						<p>
							Started On:
							{new Date(
								Date.parse(currentNote.created_at)
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
				</AppPageHeaderControls>
			</AppPageHeader>

			<DeleteModal
				title='Delete Note'
				deleteItem={currentNote.title}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export { NoteSingle };

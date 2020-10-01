import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageMeta } from '../AppPage/AppPageMeta';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowEdit } from '../shared/OverflowMenu/OverflowActions/OverflowEdit';
import { OverflowDelete } from '../shared/OverflowMenu/OverflowActions/OverflowDelete';
import { DeleteModal } from '../shared/DeleteModal';
import { CompleteModal } from '../shared/CompleteModal';
import { AppPageSection } from '../AppPage/AppPageSection';
import { NoteBody } from './NoteBody';
import { OverflowHeader } from '../shared/OverflowMenu/OverflowHeader';
import { OverflowComplete } from '../shared/OverflowMenu/OverflowActions/OverflowComplete';

import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import { Item } from '../../../utils/ItemService';
import { useNoteActions } from '../../../hooks/itemActions/useNoteActions';

const NoteSingle = (): JSX.Element => {
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();
	const currentNote: Item = appData.notes.filter(note => {
		return note.itemId.noteId === Number(router.query.noteId);
	})[0];

	const {
		handleComplete,
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal,
		completeModalOpen,
		toggleCompleteModal
	} = useNoteActions(currentNote);

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading={currentNote.title}
					subheading='Note'
					subheadingType={IconType.note}>
					<AppPageMeta>
						<p>{currentNote.tags || null}</p>
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
					</OverflowMenu>
				</AppPageHeaderControls>
			</AppPageHeader>
			<AppPageSection>
				<NoteBody currentNote={currentNote} />
			</AppPageSection>

			<DeleteModal
				title='Delete Note'
				deleteItem={currentNote.title}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
			<CompleteModal
				title='Complete Note'
				completeItem={currentNote.title}
				isOpen={completeModalOpen}
				toggleModal={toggleCompleteModal}
				handleComplete={handleComplete}
			/>
		</div>
	);
};

export { NoteSingle };

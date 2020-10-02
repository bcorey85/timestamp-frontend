import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import {
	AppPageHeader,
	AppPageMeta,
	AppPageHeaderControls,
	AppPageTitle,
	AppPageSection
} from '../AppPage';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowHeader } from '../shared/OverflowMenu/OverflowHeader';
import { OverflowDivider } from '../shared/OverflowMenu/OverflowDivider';
import {
	OverflowEdit,
	OverflowDelete
} from '../shared/OverflowMenu/OverflowActions';
import { DeleteModal } from '../shared/DeleteModal';

import { NoteBody } from './NoteBody';

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
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal
	} = useNoteActions(currentNote);

	return (
		<React.Fragment>
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
				<NoteBody currentNote={currentNote} />
			</AppPageSection>

			<DeleteModal
				title='Delete Note'
				deleteItem={currentNote.title}
				isOpen={deleteModalOpen}
				toggleModal={toggleDeleteModal}
				handleDelete={handleDelete}
			/>
		</React.Fragment>
	);
};

export { NoteSingle };

import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/user';
import { useApiRequest } from '../useApiRequest';
import { deleteNoteApiConfig } from '../../api/note';
import { Item } from '../../utils/ItemService';
import { setAppDataSynced } from '../../redux/appData';
import { useCreateModal } from '../create/useCreateModal';
import { useToggle } from '../useToggle';
import { useRouterService } from '../useRouterService';

const useNoteActions = (currentNote: Item) => {
	const { userId, token } = useSelector(selectUser);
	const { request: deleteNoteRequest } = useApiRequest();

	const { toggleCreateModal } = useCreateModal(currentNote);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);
	const { router } = useRouterService();
	const dispatch = useDispatch();

	const handleDelete = async () => {
		const config = deleteNoteApiConfig({
			noteId: currentNote.itemId.noteId,
			userId,
			token
		});

		await deleteNoteRequest(config);

		dispatch(setAppDataSynced(false));
		toggleDeleteModal();
		router.push.dashboard();
	};

	const handleEdit = () => {
		toggleCreateModal('edit');
	};

	return {
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal
	};
};

export { useNoteActions };

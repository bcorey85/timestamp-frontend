import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/user';
import { useApiRequest } from '../useApiRequest';
import { deleteTaskApiConfig, completeTaskApiConfig } from '../../api/task';
import { Item } from '../../utils/ItemService';
import { setAppDataSynced } from '../../redux/appData';
import { useCreateModal } from '../create/useCreateModal';
import { useToggle } from '../useToggle';
import { useRouterService } from '../useRouterService';

const useTaskActions = (currentTask: Item) => {
	const { userId, token } = useSelector(selectUser);
	const { request: deleteTaskRequest } = useApiRequest();
	const { request: completeTaskRequest } = useApiRequest();
	const { toggleCreateModal } = useCreateModal(currentTask);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);
	const [ completeModalOpen, toggleCompleteModal ] = useToggle(false);
	const { router } = useRouterService();
	const dispatch = useDispatch();

	const handleDelete = async () => {
		const config = deleteTaskApiConfig({
			taskId: currentTask.itemId.taskId,
			userId,
			token
		});

		await deleteTaskRequest(config);

		dispatch(setAppDataSynced(false));
		toggleDeleteModal();
		router.push.dashboard();
	};

	const handleComplete = async () => {
		const config = completeTaskApiConfig({
			taskId: currentTask.itemId.taskId,
			userId,
			token
		});

		await completeTaskRequest(config);
		dispatch(setAppDataSynced(false));
		toggleCompleteModal();
	};

	const handleEdit = () => {
		toggleCreateModal('edit');
	};

	return {
		handleComplete,
		handleEdit,
		handleDelete,
		deleteModalOpen,
		toggleDeleteModal,
		completeModalOpen,
		toggleCompleteModal
	};
};

export { useTaskActions };

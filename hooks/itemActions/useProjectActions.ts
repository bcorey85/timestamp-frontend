import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/user';
import { useApiRequest } from '../useApiRequest';
import {
	deleteProjectApiConfig,
	completeProjectApiConfig
} from '../../api/project';
import { Item } from '../../utils/ItemService';
import { setAppDataSynced } from '../../redux/appData';
import { useCreateModal } from '../create/useCreateModal';
import { useToggle } from '../useToggle';
import { useRouterService } from '../useRouterService';

const useProjectActions = (currentProject: Item) => {
	const { userId, token } = useSelector(selectUser);
	const { request: deleteProjectRequest } = useApiRequest();
	const { request: completeProjectRequest } = useApiRequest();
	const { toggleCreateModal } = useCreateModal(currentProject);
	const [ deleteModalOpen, toggleDeleteModal ] = useToggle(false);
	const [ completeModalOpen, toggleCompleteModal ] = useToggle(false);
	const { router } = useRouterService();
	const dispatch = useDispatch();

	const handleDelete = async () => {
		const config = deleteProjectApiConfig({
			projectId: currentProject.itemId.projectId,
			userId,
			token
		});

		await deleteProjectRequest(config);

		dispatch(setAppDataSynced(false));
		toggleDeleteModal();
		router.push.dashboard();
	};

	const handleComplete = async () => {
		const config = completeProjectApiConfig({
			projectId: currentProject.itemId.projectId,
			userId,
			token
		});

		await completeProjectRequest(config);
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

export { useProjectActions };

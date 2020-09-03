import { useDispatch, useSelector } from 'react-redux';

import {
	toggleCreateModal,
	selectCreateModal,
	setCreateModalPage,
	setCurrentItemId
} from '../redux/createModal';
import { ItemType } from '../utils/ItemService';

interface ModalConfig {
	createModalPage?: keyof ItemType;
	currentItemId?: {
		noteId?: string;
		taskId?: string;
		projectId?: string;
	};
}

const useCreateModal = () => {
	const { createModalOpen, createModalPage, currentItemId } = useSelector(
		selectCreateModal
	);
	const dispatch = useDispatch();

	const setCreateModalOpen = (config: ModalConfig) => {
		dispatch(toggleCreateModal({ config }));
	};

	return {
		createModalOpen,
		toggleCreateModal: setCreateModalOpen,
		createModalPage,
		currentProjectId: currentItemId.projectId,
		currentTaskId: currentItemId.taskId
	};
};

export { useCreateModal };

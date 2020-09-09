import { useDispatch, useSelector } from 'react-redux';

import {
	toggleCreateModal,
	selectCreateModal,
	setCreateModalPage
} from '../../redux/createModal';
import { ItemType, Item } from '../../utils/ItemService';
import { CreateModalService } from '../../utils/CreateModalService';

interface ModalConfig {
	createModalPage?: keyof ItemType;
	currentItemId?: {
		noteId?: number | string;
		taskId?: number | string;
		projectId?: number | string;
	};
}

interface ModalMode {
	new: 'new';
	addChild: 'addChild';
	edit: 'edit';
}

const useCreateModal = (item?: Item) => {
	const { createModalOpen, createModalPage, currentItemId } = useSelector(
		selectCreateModal
	);
	const dispatch = useDispatch();
	const createModalService = new CreateModalService();

	let addChildItemConfig, editCurrentItemConfig;
	if (item) {
		addChildItemConfig = createModalService.addChildItemConfig(item);
		editCurrentItemConfig = createModalService.editCurrentItemConfig(item);
	}

	const setCreateModalOpen = (
		mode: keyof ModalMode,
		config?: ModalConfig
	) => {
		switch (mode) {
			case 'addChild':
				dispatch(toggleCreateModal({ config: addChildItemConfig }));
				break;
			case 'edit':
				dispatch(toggleCreateModal({ config: editCurrentItemConfig }));
				break;
			default:
				dispatch(toggleCreateModal({ config: config }));
		}
	};

	const setPage = (page: string) => {
		dispatch(setCreateModalPage(page));
	};

	return {
		createModalOpen,
		toggleCreateModal: setCreateModalOpen,
		setCreateModalPage: setPage,
		createModalPage,
		currentProjectId: currentItemId.projectId,
		currentTaskId: currentItemId.taskId,
		addChildItemConfig,
		editCurrentItemConfig
	};
};

export { useCreateModal };

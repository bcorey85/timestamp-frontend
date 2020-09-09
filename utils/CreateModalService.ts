import { Item, ItemType, ItemService } from './ItemService';

interface ItemIdentifier {
	noteId?: number | string;
	taskId?: number | string;
	projectId?: number | string;
}

class CreateModalService {
	static parseConfig = (state, action) => {
		if (action.payload.config.currentItemId) {
			state.currentItemId = action.payload.config.currentItemId;
		}

		if (action.payload.config.createModalPage) {
			state.createModalPage = action.payload.config.createModalPage;
		}

		if (action.payload.config.createModalEditMode) {
			state.createModalEditMode =
				action.payload.config.createModalEditMode;
		}
	};

	static resetCurrentItem = state => {
		state.currentItemId = {
			noteId: '',
			taskId: '',
			projectId: ''
		};
	};

	public addChildItemConfig = (item: Item) => {
		const itemIds = this.prefillItemIds(item);
		const itemType = new ItemService(item).type;
		const childPage = this.assignChildType(itemType);

		return {
			currentItemId: itemIds,
			createModalPage: childPage
		};
	};

	public editCurrentItemConfig = (item: Item) => {
		const itemIds = this.prefillItemIds(item);
		const itemType = new ItemService(item).type;

		return {
			currentItemId: itemIds,
			createModalPage: itemType
		};
	};

	private prefillItemIds = (item: Item) => {
		let prefilledItemIds: ItemIdentifier = {
			noteId: item.note_id || '',
			taskId: item.task_id || '',
			projectId: item.project_id || ''
		};

		return prefilledItemIds;
	};

	private assignChildType = (type: keyof ItemType) => {
		let childType;
		if (type === 'project') {
			childType = 'task';
		} else if (type === 'task') {
			childType = 'note';
		} else {
			childType = null;
		}

		return childType;
	};

	static loadItemForEdit = (item: Item) => {};
}

export { CreateModalService };

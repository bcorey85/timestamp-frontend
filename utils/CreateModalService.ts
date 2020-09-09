import moment from 'moment';

import { Item, ItemType, ItemService } from './ItemService';
import { initialCurrentItemId, initialCurrentItem } from '../redux/createModal';
import { TagService } from './TagService';

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

		if (action.payload.config.currentItem) {
			state.currentItem = action.payload.config.currentItem;
		}

		if (action.payload.config.createModalPage) {
			state.createModalPage = action.payload.config.createModalPage;
		}

		if (action.payload.config.createModalEditMode) {
			state.createModalEditMode =
				action.payload.config.createModalEditMode;
		} else {
			state.createModalEditMode = false;
		}
	};

	static resetCurrentItem = state => {
		state.currentItemId = initialCurrentItemId;
		state.currentItem = initialCurrentItem;
	};

	public addChildItemConfig = (item: Item) => {
		const itemIds = this.prefillItemIds(item);
		const itemType = new ItemService(item).type;
		const childPage = this.assignChildType(itemType);

		return {
			currentItemId: itemIds,
			createModalPage: childPage,
			createModalEditMode: false
		};
	};

	public editCurrentItemConfig = (item: Item) => {
		const itemIds = this.prefillItemIds(item);
		const itemType = new ItemService(item).type;
		const currentTags = item.tags ? TagService.split(item.tags) : [];
		const formattedTime = this.splitDateTime(item);

		const config = {
			currentItemId: itemIds,
			currentItem: {
				...item,
				type: itemType,
				tags: currentTags,
				formattedTime
			},
			createModalPage: itemType,
			createModalEditMode: true
		};

		return config;
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

	private splitDateTime = item => {
		let formattedTime = {
			startTime: '',
			endTime: '',
			startDate: '',
			endDate: ''
		};

		if (item.start_time) {
			const start = Date.parse(item.start_time);
			formattedTime.startTime = moment(start).format('HH:mm');
			formattedTime.startDate = moment(start).format('YYYY-MM-DD');
		}

		if (item.end_time) {
			const end = Date.parse(item.end_time);
			formattedTime.endTime = moment(end).format('HH:mm');
			formattedTime.endDate = moment(end).format('YYYY-MM-DD');
		}

		return formattedTime;
	};
}

export { CreateModalService };

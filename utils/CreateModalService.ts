import moment from 'moment';

import { Item, ItemType, ItemService } from './ItemService';
import {
	initialCurrentItemId,
	initialCurrentItem,
	CreateModalState
} from '../redux/createModal';
import { TagService } from './TagService';
import { PayloadAction } from '@reduxjs/toolkit';

interface ItemIdentifier {
	noteId?: number | string;
	taskId?: number | string;
	projectId?: number | string;
}

interface ConfigPayload {
	config?: {
		currentItemId?: {};
		currentItem?: {};
		createModalPage: keyof ItemType;
		createModalEditMode: boolean;
	};
}

export interface ChildItemConfig {
	currentItemId: ItemIdentifier;
	createModalPage: keyof ItemType;
	createModalEditMode: boolean;
}

export interface EditItemConfig {
	currentItemId: ItemIdentifier;
	currentItem: {};
	createModalPage: keyof ItemType;
	createModalEditMode: boolean;
}

class CreateModalService {
	static parseConfig = (
		state: CreateModalState,
		action: PayloadAction<ConfigPayload>
	) => {
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

	static resetCurrentItem = (state: CreateModalState) => {
		state.currentItemId = initialCurrentItemId;
		state.currentItem = initialCurrentItem;
		state.createModalEditMode = false;
	};

	public addChildItemConfig = (item: Item): ChildItemConfig => {
		const itemIds = this.prefillItemIds(item);
		const itemType = item.type;
		const childPage = this.assignChildType(itemType);

		return {
			currentItemId: itemIds,
			createModalPage: childPage,
			createModalEditMode: false
		};
	};

	public editCurrentItemConfig = (item: Item) => {
		const itemIds = this.prefillItemIds(item);
		const itemType = item.type;
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
			noteId: item.itemId.noteId || '',
			taskId: item.itemId.taskId || '',
			projectId: item.itemId.projectId || ''
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

	private splitDateTime = (item: Item) => {
		let formattedTime = {
			startTime: '',
			endTime: '',
			startDate: '',
			endDate: ''
		};

		if (item.meta.startTime) {
			const start = Date.parse(item.meta.startTime);
			formattedTime.startTime = moment(start).format('HH:mm');
			formattedTime.startDate = moment(start).format('YYYY-MM-DD');
		}

		if (item.meta.endTime) {
			const end = Date.parse(item.meta.endTime);
			formattedTime.endTime = moment(end).format('HH:mm');
			formattedTime.endDate = moment(end).format('YYYY-MM-DD');
		}

		return formattedTime;
	};
}

export { CreateModalService };

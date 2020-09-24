import moment from 'moment';

import { Item, ItemType } from './ItemService';
import { initialCurrentItem, CreateModalState } from '../redux/createModal';
import { TagService } from './TagService';
import { PayloadAction } from '@reduxjs/toolkit';

interface ConfigPayload {
	config?: {
		currentItem?: Item;
		createModalPage: keyof ItemType;
		createModalEditMode: boolean;
	};
}

export interface ChildItemConfig {
	currentItem: Item;
	createModalPage: keyof ItemType;
	createModalEditMode: boolean;
}

export interface EditItemConfig {
	currentItem: Item;
	createModalPage: keyof ItemType;
	createModalEditMode: boolean;
}

class CreateModalService {
	static parseConfig = (
		state: CreateModalState,
		action: PayloadAction<ConfigPayload>
	) => {
		if (action.payload.config.currentItem) {
			state.currentItem = action.payload.config.currentItem as Item;
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
		state.currentItem = initialCurrentItem;
		state.createModalEditMode = false;
	};

	public addChildItemConfig = (item: Item): ChildItemConfig => {
		const itemType = item.type;
		const childPage = this.assignChildType(itemType);
		const prefilledItem = {
			...initialCurrentItem,
			itemId: {
				...initialCurrentItem.itemId,
				projectId: item.itemId.projectId || null,
				taskId: item.itemId.taskId || null,
				noteId: item.itemId.noteId || null
			}
		};

		return {
			currentItem: prefilledItem,
			createModalPage: childPage,
			createModalEditMode: false
		};
	};

	public editCurrentItemConfig = (item: Item): EditItemConfig => {
		const config = {
			currentItem: item,
			createModalPage: item.type,
			createModalEditMode: true
		};

		return config;
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
}

export { CreateModalService };

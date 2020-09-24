import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Item, ItemType } from '../utils/ItemService';
import { UiService } from '../utils/UiService';
import { CreateModalService } from '../utils/CreateModalService';

export const initialCurrentItem: Item = {
	itemId: {
		userId: null as number,
		projectId: null as number,
		taskId: null as number,
		noteId: null as number
	},
	title: '',
	description: '',
	meta: {
		startTime: null as string,
		endTime: null as string,
		createdAt: null as string,
		updatedAt: null as string,
		hours: null as string,
		date: null as string
	},
	pinned: false,
	tags: null as string,
	type: null as keyof ItemType,
	pathname: {
		as: null as string,
		href: null as string
	}
};

export interface CreateModalState {
	createModalOpen: boolean;
	createModalEditMode: boolean;
	currentItem: Item;
	createModalPage: keyof ItemType;
}

const createModalSlice = createSlice({
	name: 'createModal',
	initialState: {
		createModalOpen: false,
		createModalEditMode: false,
		currentItem: initialCurrentItem,
		createModalPage: 'project' as keyof ItemType
	},
	reducers: {
		toggleCreateModal: (state, action) => {
			const nextModalState = !state.createModalOpen;
			state.createModalOpen = nextModalState;

			UiService.preventBodyScrollOnModalOpen(nextModalState);

			if (action.payload && action.payload.config) {
				CreateModalService.parseConfig(state, action);
			} else {
				CreateModalService.resetCurrentItem(state);
				state.createModalEditMode = false;
			}
		},
		setCreateModalPage: (state, action) => {
			state.createModalPage = action.payload;
			CreateModalService.resetCurrentItem(state);
		}
	}
});

export const createModalReducer = createModalSlice.reducer;

export const selectCreateModal = (state: RootState) => state.createModal;

export const {
	toggleCreateModal,
	setCreateModalPage
} = createModalSlice.actions;

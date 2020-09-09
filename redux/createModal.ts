import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ItemType } from '../utils/ItemService';
import { UiService } from '../utils/UiService';
import { CreateModalService } from '../utils/CreateModalService';

const createModalSlice = createSlice({
	name: 'createModal',
	initialState: {
		createModalOpen: false,
		createModalEditMode: false,
		currentItemId: {
			noteId: '',
			taskId: '',
			projectId: ''
		},
		createModalPage: 'project' as keyof ItemType
	},
	reducers: {
		toggleCreateModal: (state, action) => {
			const nextModalState = !state.createModalOpen;
			state.createModalOpen = nextModalState;

			UiService.preventBodyScrollOnModalOpen(nextModalState);
			console.log(action.payload);

			if (action.payload && action.payload.config) {
				CreateModalService.parseConfig(state, action);
			} else {
				CreateModalService.resetCurrentItem(state);
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

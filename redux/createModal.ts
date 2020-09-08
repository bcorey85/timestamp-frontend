import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ItemType } from '../utils/ItemService';
import { UiService } from '../utils/UiService';

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

			if (action.payload && action.payload.config) {
				if (action.payload.config.currentItemId) {
					state.currentItemId = action.payload.config.currentItemId;
				}

				if (action.payload.config.createModalPage) {
					state.createModalPage =
						action.payload.config.createModalPage;
				}

				if (action.payload.config.createModalEditMode) {
					state.createModalEditMode =
						action.payload.config.createModalEditMode;
				}
			}
		},
		setCurrentItemId: (state, action) => {
			state.currentItemId = action.payload;
		},
		setCreateModalPage: (state, action) => {
			state.createModalPage = action.payload as keyof ItemType;
		}
	}
});

export const createModalReducer = createModalSlice.reducer;

export const selectCreateModal = (state: RootState) => state.createModal;

export const {
	toggleCreateModal,
	setCurrentItemId,
	setCreateModalPage
} = createModalSlice.actions;

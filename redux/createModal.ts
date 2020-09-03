import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ItemType } from '../utils/ItemService';

const createModalSlice = createSlice({
	name: 'createModal',
	initialState: {
		currentItemId: {
			noteId: '',
			taskId: '',
			projectId: ''
		},
		createModalPage: 'project' as keyof ItemType
	},
	reducers: {
		setCurrentItemId: (state, action) => {
			state.currentItemId = action.payload.currentItemId;
		},
		setCreateModalPage: (state, action) => {
			state.createModalPage = action.payload.createModalPage;
		}
	}
});

export const createModalReducer = createModalSlice.reducer;

export const selectCreateModal = (state: RootState) => state.createModal;

export const {
	setCurrentItemId,
	setCreateModalPage
} = createModalSlice.actions;

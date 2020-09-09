import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ItemType } from '../utils/ItemService';
import { UiService } from '../utils/UiService';
import { CreateModalService } from '../utils/CreateModalService';

export const initialCurrentItemId = {
	noteId: '',
	taskId: '',
	projectId: ''
};

export const initialCurrentItem = {
	title: '',
	description: '',
	start_time: '',
	end_time: '',
	formattedTime: {
		startTime: '',
		endTime: '',
		startDate: '',
		endDate: ''
	},
	hours: null,
	note_id: null,
	pinned: false,
	project_id: null,
	tags: [] as string[],
	task_id: null,
	type: '',
	created_at: '',
	updated_at: '',
	user_id: null
};

const createModalSlice = createSlice({
	name: 'createModal',
	initialState: {
		createModalOpen: false,
		createModalEditMode: false,
		currentItemId: initialCurrentItemId,
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

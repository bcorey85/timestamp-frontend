import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ItemType } from '../utils/ItemService';

const createModalSlice = createSlice({
	name: 'createModal',
	initialState: {
		createModalOpen: false,

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

			if (nextModalState === true) {
				document.body.style.position = 'fixed';
				document.body.style.top = `-${window.scrollY}px`;
			} else {
				const scrollY = document.body.style.top;
				document.body.style.position = '';
				document.body.style.top = '';
				window.scrollTo(0, parseInt(scrollY || '0') * -1);
			}

			if (action.payload && action.payload.config) {
				if (action.payload.config.currentItemId) {
					console.log(action.payload.config.currentItemId);

					state.currentItemId = action.payload.config.currentItemId;
				}

				if (action.payload.config.createModalPage) {
					state.createModalPage =
						action.payload.config.createModalPage;
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

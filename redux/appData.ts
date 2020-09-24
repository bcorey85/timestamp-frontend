import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

import { Item } from '../utils/ItemService';

const initialState = {
	synced: false,
	email: null as string,
	notes: [] as Item[],
	projects: [] as Item[],
	tasks: [] as Item[],
	hours: null as string,
	createdAt: null as string,
	lastLogin: null as string,
	recentItems: {
		notes: [] as Item[],
		tasks: [] as Item[],
		projects: [] as Item[]
	}
};

const appDataSlice = createSlice({
	name: 'appData',
	initialState: initialState,
	reducers: {
		setAppData: (state, action) => {
			state.email = action.payload.appData.email;
			state.notes = action.payload.appData.notes;
			state.projects = action.payload.appData.projects;
			state.tasks = action.payload.appData.tasks;
			state.hours = action.payload.appData.hours;
			state.notes = action.payload.appData.notes;
			state.createdAt = action.payload.appData.createdAt;
			state.lastLogin = action.payload.appData.lastLogin;
			state.recentItems = action.payload.appData.recentItems;
		},
		setAppDataSynced: (state, action) => {
			state.synced = action.payload;
		},
		clearAppData: () => {
			return initialState;
		}
	}
});

export const appDataReducer = appDataSlice.reducer;

export const selectAppData = (state: RootState) => state.appData;

export const {
	setAppData,
	setAppDataSynced,
	clearAppData
} = appDataSlice.actions;

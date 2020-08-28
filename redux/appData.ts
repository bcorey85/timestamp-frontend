import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const appDataSlice = createSlice({
	name: 'appData',
	initialState: {
		email: null,
		notes: [],
		projects: [],
		tasks: [],
		hours: null,
		createdAt: null,
		lastLogin: null,
		recentItems: []
	},
	reducers: {
		setAppData: (state, action) => {
			state.email = action.payload.appData.email;
			state.notes = action.payload.appData.notes;
			state.projects = action.payload.appData.projects;
			state.tasks = action.payload.appData.tasks;
			state.hours = action.payload.appData.hours;
			state.notes = action.payload.appData.notes;
			state.createdAt = action.payload.appData.created_at;
			state.lastLogin = action.payload.appData.last_login;
			state.recentItems = action.payload.appData.recentItems;
		}
	}
});

export const appDataReducer = appDataSlice.reducer;

export const selectAppData = (state: RootState) => state.appData;

export const { setAppData } = appDataSlice.actions;

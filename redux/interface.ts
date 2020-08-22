import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export enum Pages {
	dashboard = 'dashboard',
	projects = 'projects',
	tasks = 'tasks',
	notes = 'notes',
	activity = 'activity',
	settings = 'settings',
	search = 'search',
	create = 'create'
}

const interfaceSlice = createSlice({
	name: 'interface',
	initialState: {
		drawerOpen: true,
		searchOpen: false,

		baseUrl: null
	},
	reducers: {
		toggleDrawer: state => {
			state.drawerOpen = !state.drawerOpen;
		},
		toggleSearch: state => {
			state.searchOpen = !state.searchOpen;
		}
	}
});

export const interfaceReducer = interfaceSlice.reducer;

export const selectInterface = (state: RootState) => state.interface;

export const { toggleDrawer, toggleSearch } = interfaceSlice.actions;
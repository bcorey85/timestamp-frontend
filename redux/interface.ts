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
		currentPage: Pages.dashboard,
		baseUrl: null
	},
	reducers: {
		toggleDrawer: state => {
			state.drawerOpen = !state.drawerOpen;
		},
		toggleSearch: state => {
			state.searchOpen = !state.searchOpen;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload.page;
		},
		setBaseUrl: (state, action) => {
			state.baseUrl = `/app/${action.payload.userId}`;
		}
	}
});

export const interfaceReducer = interfaceSlice.reducer;

export const selectInterface = (state: RootState) => state.interface;

export const {
	toggleDrawer,
	toggleSearch,
	setCurrentPage,
	setBaseUrl
} = interfaceSlice.actions;

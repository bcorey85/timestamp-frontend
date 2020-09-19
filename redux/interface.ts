import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UiService } from '../utils/UiService';

const interfaceSlice = createSlice({
	name: 'interface',
	initialState: {
		drawerOpen: false,
		searchOpen: false,
		createModalOpen: false,
		darkColorMode: false
	},
	reducers: {
		toggleDrawer: state => {
			state.drawerOpen = !state.drawerOpen;
		},
		toggleSearch: state => {
			state.searchOpen = !state.searchOpen;
		},
		setDarkColorMode: (state, action) => {
			UiService.toggleDarkMode(action.payload.darkColorMode);

			state.darkColorMode = action.payload.darkColorMode;
		}
	}
});

export const interfaceReducer = interfaceSlice.reducer;

export const selectInterface = (state: RootState) => state.interface;

export const {
	toggleDrawer,
	toggleSearch,
	setDarkColorMode
} = interfaceSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const interfaceSlice = createSlice({
	name: 'interface',
	initialState: {
		drawerOpen: true,
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
			const darkMode = action.payload.darkColorMode;
			if (darkMode === true) {
				document.body.classList.add('dark');
			} else {
				document.body.classList.remove('dark');
			}

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

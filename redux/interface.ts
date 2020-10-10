import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Check initial state for drawerOpen
// Should be open for desktop, but closed for mobile
let screenWidth;
if (typeof window !== 'undefined') {
	screenWidth = window.innerWidth;
}

const interfaceSlice = createSlice({
	name: 'interface',
	initialState: {
		drawerOpen: screenWidth > 1024 ? true : false,
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

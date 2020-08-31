import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		slider: {
			width: null,
			currentOffset: null,
			filter: null
		}
	},
	reducers: {
		setSlider: (state, action) => {
			state.slider = action.payload.slider;
		}
	}
});

export const dashboardReducer = dashboardSlice.reducer;

export const selectDashboard = (state: RootState) => state.dashboard;

export const { setSlider } = dashboardSlice.actions;

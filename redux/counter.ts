import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	// Dont return something from state reducer
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		}
	}
});

export const counterReducer = counterSlice.reducer;

export const selectCounter = state => state.counter.value;

export const { increment, decrement } = counterSlice.actions;

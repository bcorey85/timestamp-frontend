import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userId: null,
		token: null,
		data: []
	},
	reducers: {
		login: (state, action) => {
			state.userId = action.payload.userId;
			state.token = action.payload.token;
			state.data = action.payload.data;
		},
		logout: state => {
			state.userId = null;
			state.token = null;
			state.data = [];
		},
		updateData: (state, action) => {
			state.data = action.payload.data;
		}
	}
});

export const userReducer = userSlice.reducer;

export const selectUser = state => state.user;

export const { login, logout, updateData } = userSlice.actions;

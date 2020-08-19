import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userId: null,
		token: null
	},
	reducers: {
		login: (state, action) => {
			state.userId = action.payload.userId;
			state.token = action.payload.token;
		},
		logout: state => {
			state.userId = null;
			state.token = null;
		}
	}
});

export const userReducer = userSlice.reducer;

export const selectUser = (state: RootState) => state.user;

export const { login, logout } = userSlice.actions;

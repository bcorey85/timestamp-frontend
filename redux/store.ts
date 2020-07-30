import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { userReducer } from './user';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer
	},
	devTools: true
});

export { store };

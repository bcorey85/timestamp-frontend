import React from 'react';
import {
	combineReducers,
	configureStore,
	getDefaultMiddleware
} from '@reduxjs/toolkit';
import { userReducer } from '../../redux/user';
import { Provider } from 'react-redux';

const mockRootReducer = combineReducers({
	user: userReducer
});

export const mockStore = configureStore({
	reducer: mockRootReducer,
	devTools: true
});

interface MockProps {
	children?: any;
	reduxStore: any;
}

export const MockReduxProvider = ({ children, reduxStore }: MockProps) => (
	<Provider store={reduxStore}>{children}</Provider>
);

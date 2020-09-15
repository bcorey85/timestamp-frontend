import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../redux/user';
import { appDataReducer } from '../../redux/appData';
import { createModalReducer } from '../../redux/createModal';
import { interfaceReducer } from '../../redux/interface';
import { Provider } from 'react-redux';

const mockRootReducer = combineReducers({
	user: userReducer,
	interface: interfaceReducer,
	appData: appDataReducer,
	createModal: createModalReducer
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

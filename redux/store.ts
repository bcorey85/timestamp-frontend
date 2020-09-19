import {
	combineReducers,
	configureStore,
	getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { userReducer } from './user';
import { interfaceReducer } from './interface';
import { appDataReducer } from './appData';
import { createModalReducer } from './createModal';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
	return {
		getItem(_key) {
			return Promise.resolve(null);
		},
		setItem(_key, value) {
			return Promise.resolve(value);
		},
		removeItem(_key) {
			return Promise.resolve();
		}
	};
};

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage();

const rootReducer = combineReducers({
	user: userReducer,
	interface: interfaceReducer,
	appData: appDataReducer,
	createModal: createModalReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
	key: 'timestamp',
	version: 1,
	storage,
	whitelist: [ 'user', 'interface', 'appData' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [
				FLUSH,
				REHYDRATE,
				PAUSE,
				PERSIST,
				PURGE,
				REGISTER
			]
		}
	}),
	devTools: true
});

const persistor = persistStore(store);

export { store, persistor };

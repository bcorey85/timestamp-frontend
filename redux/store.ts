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
import storage from 'redux-persist/lib/storage';

import { counterReducer } from './counter';
import { userReducer } from './user';

const rootReducer = combineReducers({
	counter: counterReducer,
	user: userReducer
});

const persistConfig = {
	key: 'timestamp',
	version: 1,
	storage,
	whitelist: [ 'navigation' ]
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

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Layout } from '../components/Layout/Layout';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/index.scss';

function App({ Component, pageProps }) {
	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</PersistGate>
		</Provider>
	);
}

export default App;

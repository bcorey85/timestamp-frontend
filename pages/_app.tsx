import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

import { PersistGate } from 'redux-persist/integration/react';

import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

MyApp.getInitialProps = async appContext => {
	return {};
};

export default MyApp;

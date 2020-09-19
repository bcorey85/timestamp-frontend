import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-datetime/css/react-datetime.css';

import { UiService } from '../utils/UiService';

import { store, persistor } from '../redux/store';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const appState = JSON.parse(localStorage.getItem('persist:timestamp'));

		if (appState) {
			const appInterface = JSON.parse(appState.interface);

			UiService.toggleDarkMode(appInterface.darkColorMode);
		}
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
					/>
				</Head>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

MyApp.getInitialProps = async appContext => {
	return {};
};

export default MyApp;

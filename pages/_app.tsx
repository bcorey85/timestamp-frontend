import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/index.scss';

import { UiService } from '../utils/UiService';

function MyApp({ Component, pageProps }) {
	console.log(process.env.NEXT_PUBLIC_API_URL);
	useEffect(() => {
		const appState = JSON.parse(localStorage.getItem('persist:timestamp'));
		const appInterface = JSON.parse(appState.interface);

		UiService.toggleDarkMode(appInterface.darkColorMode);
	}, []);

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

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';

import { PersistGate } from 'redux-persist/integration/react';

import '../styles/index.scss';
import 'react-datetime/css/react-datetime.css';
import 'flatpickr/dist/themes/airbnb.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const appState = JSON.parse(localStorage.getItem('persist:timestamp'));
		const appInterface = JSON.parse(appState.interface);

		if (appInterface.darkColorMode === true) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
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

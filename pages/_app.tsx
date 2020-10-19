import { Provider } from 'react-redux';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-datetime/css/react-datetime.css';
import 'react-quill/dist/quill.snow.css';

import { store, persistor } from '../redux/store';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
					/>

					<title>Timestamp</title>
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

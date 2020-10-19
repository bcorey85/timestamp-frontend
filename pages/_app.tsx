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
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicon/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon/favicon-16x16.png'
					/>
					<link
						rel='icon'
						type='image/x-icon'
						href='/favicon/favicon.ico'
					/>
					<link rel='manifest' href='/favicon/site.webmanifest' />

					<title>Timestamp</title>
					<meta
						name='description'
						content='Timestamp is a full stack notes and productivity app focused on helping users maximize efficiency when learning new skills.'
					/>

					<meta itemProp='name' content='Timestamp' />
					<meta
						itemProp='description'
						content='Timestamp is a full stack notes and productivity app focused on helping users maximize efficiency when learning new skills.'
					/>
					<meta
						itemProp='image'
						content='https://timestampapp.vercel.app/images/timestamp-multi.png'
					/>

					<meta
						property='og:url'
						content='https://timestampapp.vercel.app'
					/>
					<meta property='og:type' content='website' />
					<meta property='og:title' content='Timestamp' />
					<meta
						property='og:description'
						content='Timestamp is a full stack notes and productivity app focused on helping users maximize efficiency when learning new skills.'
					/>
					<meta property='og:image' content='' />

					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content='Timestamp' />
					<meta
						name='twitter:description'
						content='https://timestampapp.vercel.app/images/timestamp-multi.png'
					/>
					<meta name='twitter:image' content='' />
					{/* <meta property='og:title' content='Timestamp App' />

					<meta
						property='og:image'
						content='https://timestampapp.vercel.app/images/timestamp-multi.png'
					/>

					<meta
						property='og:description'
						content='Timestamp is a full stack notes and productivity app focused on helping users maximize efficiency when learning new skills.'
					/>

					<meta
						property='og:url'
						content='https://timestampapp.vercel.app/'
					/> */}
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

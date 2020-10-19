import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
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
						content='/images/timestamp-multi.png'
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
					<meta
						property='og:image'
						content='/images/timestamp-multi.png'
					/>

					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content='Timestamp' />
					<meta
						name='twitter:description'
						content='Timestamp is a full stack notes and productivity app focused on helping users maximize efficiency when learning new skills.'
					/>
					<meta
						name='twitter:image'
						content='/images/timestamp-multi.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

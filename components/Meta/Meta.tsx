import React from 'react';

import Head from 'next/head';

interface Props {
	pageTitle: string;
}

const Meta = ({ pageTitle }: Props): JSX.Element => {
	return (
		<Head>
			<title>Timestamp App | {pageTitle}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
		</Head>
	);
};

export { Meta };

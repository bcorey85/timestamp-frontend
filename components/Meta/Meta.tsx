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
			<link
				href='https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700&family=Inter:wght@400;500;600&display=swap'
				rel='stylesheet'
			/>
		</Head>
	);
};

export { Meta };

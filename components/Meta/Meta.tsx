import Head from 'next/head';

const Meta = props => {
	return (
		<Head>
			<title>Timestamp App | {props.pageTitle}</title>
			<link rel='icon' href='/favicon.ico' />
			<link
				href='https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700&family=Inter:wght@400;600&display=swap'
				rel='stylesheet'
			/>
		</Head>
	);
};

export { Meta };

import React from 'react';

import { LoadingSpinner } from './LoadingSpinner';

import styles from './Loading.module.scss';

const Loading = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<LoadingSpinner />
			<h1>Loading...</h1>
		</div>
	);
};

export { Loading };

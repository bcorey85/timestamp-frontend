import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.spinner}>
				<BiLoaderAlt />
			</div>
		</div>
	);
};

export { LoadingSpinner };

import React, { useState } from 'react';

import styles from './AuthContainer.module.scss';

interface Props {
	children?: any;
}

const AuthContainer = ({ children }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<img src='/images/timestamp-icon.svg' className={styles.logo} />
				{children}
			</div>

			<div className={styles.image} />
		</div>
	);
};

export { AuthContainer };

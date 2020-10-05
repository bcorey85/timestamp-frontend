import React, { useState } from 'react';
import { LogoIcon } from '../../../shared/Svg/LogoIcon';

import styles from './AuthContainer.module.scss';

interface Props {
	children?: any;
}

const AuthContainer = ({ children }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<LogoIcon className={styles.logo} />
				{children}
			</div>
			<div className={styles.image} />
		</div>
	);
};

export { AuthContainer };

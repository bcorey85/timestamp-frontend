import { useState } from 'react';

import styles from './AuthContainer.module.scss';

const AuthContainer = (props): JSX.Element => {
	const [ resetPasswordMode, setResetPasswordMode ] = useState(false);

	const toggleForm = () => {
		setResetPasswordMode(!resetPasswordMode);
	};

	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<img src='/images/logo-temp.svg' className={styles.logo} />
				{props.children}
			</div>

			<div className={styles.image} />
		</div>
	);
};

export { AuthContainer };

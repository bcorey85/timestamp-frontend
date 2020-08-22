import React from 'react';

import styles from './BaseForm.module.scss';

interface Props {
	children?: any;
}

interface RowProps {
	half?: boolean;
	children?: any;
}

export const FormRow = ({ half, children }: RowProps): JSX.Element => {
	return (
		<div className={half ? styles.half_input : styles.full_input}>
			{children}
		</div>
	);
};

const BaseForm = ({ children }: Props): JSX.Element => {
	return <form className={styles.form}>{children}</form>;
};

export { BaseForm };

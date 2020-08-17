import React, { useState } from 'react';

import styles from './Input.module.scss';

interface Input {
	id: string;
	type: string;
	label: string;
	error?: Error;
	onChange: () => {};
	autoComplete: string;
}

interface Error {
	field: string;
	message: string;
}

const Input = ({ id, type, label, error, ...rest }: Input) => {
	const labelElement = (
		<label htmlFor={id} className={styles.input_label}>
			{label}
		</label>
	);

	if (type === 'textarea') {
		return (
			<div className={styles.container}>
				{label ? labelElement : null}
				<textarea id={id} {...rest} className={styles.textarea} />
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{label ? labelElement : null}
			<input type={type} id={id} {...rest} className={styles.input} />
			<div className={styles.error_container}>
				{(error && error.message) || null}
			</div>
		</div>
	);
};

export { Input };

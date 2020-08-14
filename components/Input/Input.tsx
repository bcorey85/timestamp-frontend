import React, { useState } from 'react';

import styles from './Input.module.scss';

interface Input {
	id: string;
	type: string;
	label: string;
	onChange: () => {};
}

const Input = ({ id, type, label, ...rest }: Input) => {
	console.log({ ...rest });

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
		</div>
	);
};

export { Input };

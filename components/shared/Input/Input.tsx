import React from 'react';

import { InputProps } from './index';
import { InputLabel } from './InputLabel';
import { InputError } from './InputError';

import styles from './Input.module.scss';

const Input = ({
	label,
	id,
	value,
	type,
	error,
	...rest
}: InputProps): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <InputLabel id={id}>{label}</InputLabel> : null}
			<input
				type={type}
				id={id}
				{...rest}
				className={styles.input}
				value={value}
			/>
			<InputError error={error} />
		</div>
	);
};

export { Input };

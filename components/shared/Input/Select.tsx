import React from 'react';

import { InputProps } from './index';
import { InputLabel } from './InputLabel';
import { InputError } from './InputError';

import styles from './Input.module.scss';

const Select = ({
	id,
	label,
	value,
	error,
	children,
	disabled,
	...rest
}: InputProps): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <InputLabel id={id}>{label}</InputLabel> : null}
			<select
				className={styles.select}
				value={value}
				disabled={disabled}
				{...rest}>
				{children}
			</select>
			<InputError error={error} />
		</div>
	);
};

export { Select };

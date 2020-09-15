import React from 'react';

import { InputProps } from './index';
import { InputLabel } from './InputLabel';
import { InputError } from './InputError';

import styles from './Input.module.scss';

const TextArea = ({
	label,
	id,
	value,
	error,
	...rest
}: InputProps): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <InputLabel id={id}>{label}</InputLabel> : null}
			<textarea
				id={id}
				{...rest}
				className={styles.textarea}
				value={value}
			/>
			<InputError error={error} />
		</div>
	);
};

export { TextArea };

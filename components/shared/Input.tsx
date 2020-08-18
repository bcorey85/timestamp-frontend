import React from 'react';

import styles from './Input.module.scss';

interface Error {
	field: string;
	message: string;
}

interface Props {
	id: string;
	type: string;
	label: string;
	value: string | number;
	error?: Error;
	onChange: (props: any) => any;
	autoComplete?: string;
}

const Input = ({
	id,
	type,
	label,
	value,
	error,
	...rest
}: Props): JSX.Element => {
	const labelElement = (
		<label htmlFor={id} className={styles.input_label}>
			{label}
		</label>
	);

	if (type === 'textarea') {
		return (
			<div className={styles.container}>
				{label ? labelElement : null}
				<textarea
					id={id}
					{...rest}
					className={styles.textarea}
					value={value}
				/>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{label ? labelElement : null}
			<input
				type={type}
				id={id}
				{...rest}
				className={styles.input}
				value={value}
			/>
			<div className={styles.error_container}>
				{(error && error.message) || null}
			</div>
		</div>
	);
};

export { Input };

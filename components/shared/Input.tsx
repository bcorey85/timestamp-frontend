import React from 'react';

import styles from './Input.module.scss';

interface Props {
	id: string;
	type: string;
	label?: string;
	value: string | number;
	error?: string;
	onChange: (props: any) => any;
	autoComplete?: string;
	children?: any;
}

interface LabelProps {
	id: string;
	children?: any;
}

const Label = ({ id, children }: LabelProps): JSX.Element => {
	return (
		<label htmlFor={id} className={styles.input_label}>
			{children}
		</label>
	);
};

const TextArea = ({ label, id, value, error, ...rest }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <Label id={id}>{label}</Label> : null}
			<textarea
				id={id}
				{...rest}
				className={styles.textarea}
				value={value}
			/>
			<div className={styles.error_container}>{error || null}</div>
		</div>
	);
};

const Select = ({
	id,
	label,
	value,
	error,
	children,
	...rest
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <Label id={id}>{label}</Label> : null}
			<select className={styles.select} value={value} {...rest}>
				{children}
			</select>
			<div className={styles.error_container}>{error || null}</div>
		</div>
	);
};

const BaseInput = ({
	label,
	id,
	value,
	type,
	error,
	...rest
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <Label id={id}>{label}</Label> : null}
			<input
				type={type}
				id={id}
				{...rest}
				className={styles.input}
				value={value}
			/>
			<div className={styles.error_container}>{error || null}</div>
		</div>
	);
};

const Input = ({
	id,
	type,
	label,
	value,
	error,
	children,
	...rest
}: Props): JSX.Element => {
	if (type === 'select') {
		return (
			<Select
				label={label}
				id={id}
				type={type}
				value={value}
				error={error}
				{...rest}>
				{children}
			</Select>
		);
	}

	if (type === 'textarea') {
		return (
			<TextArea
				label={label}
				id={id}
				type={type}
				value={value}
				error={error}
				{...rest}
			/>
		);
	}

	return (
		<BaseInput
			label={label}
			id={id}
			type={type}
			error={error}
			{...rest}
			value={value}
		/>
	);
};

export { Input };

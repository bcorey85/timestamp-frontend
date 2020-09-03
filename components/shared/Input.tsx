import React from 'react';
import Flatpickr from 'react-flatpickr';

import { InputLabel } from './InputLabel';
import { InputError } from './InputError';

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

const TextArea = ({ label, id, value, error, ...rest }: Props): JSX.Element => {
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
			{label ? <InputLabel id={id}>{label}</InputLabel> : null}
			<select className={styles.select} value={value} {...rest}>
				{children}
			</select>
			<InputError error={error} />
		</div>
	);
};

const DateTime = ({
	label,
	id,
	value,
	type,
	error,
	...rest
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <InputLabel id={id}>{label}</InputLabel> : null}

			<Flatpickr
				id={id}
				{...rest}
				className={styles.input}
				value={value}
				options={{
					enableTime: true,
					time_24hr: false,
					formatDate: {
						dateFormat: 'Z'
					}
				}}
			/>

			<InputError error={error} />
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

	if (type === 'date-time') {
		return (
			<DateTime
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

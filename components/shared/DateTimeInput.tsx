import React from 'react';

import { InputLabel } from './InputLabel';
import { InputError } from './InputError';

import styles from './DateTimeInput.module.scss';

interface Props {
	id: string;
	label?: string;
	dateValue: string | number;
	timeValue: string | number;
	error?: string;
	handleDate: (props: any) => any;
	handleTime: (props: any) => any;
	autoComplete?: string;
	children?: any;
}

const DateTimeInput = ({
	label,
	id,
	dateValue,
	timeValue,
	handleDate,
	handleTime,
	error,
	...rest
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <InputLabel id={`${id}-date`}>{label}</InputLabel> : null}
			<div className={styles.input_container}>
				<input
					type='date'
					id={`${id}-date`}
					{...rest}
					className={styles.input}
					value={dateValue}
					onChange={handleDate}
				/>
				<input
					type='time'
					id={`${id}-time`}
					{...rest}
					className={styles.input}
					value={timeValue}
					onChange={handleTime}
				/>
			</div>

			<InputError error={error} />
		</div>
	);
};

export { DateTimeInput };

import React from 'react';
import DatePicker from 'react-datetime';
import moment, { Moment } from 'moment';

import { InputLabel } from './InputLabel';
import { InputError } from './InputError';

import styles from './DateTimeInput.module.scss';

interface Props {
	id: string;
	label?: string;
	dateValue: string | Date | Moment;
	error?: string;
	handleDate: (props: any) => any;
	autoComplete?: string;
	children?: any;
}

const DateTimeInput = ({
	label,
	id,
	dateValue,
	handleDate,
	error,
	...rest
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{label ? <InputLabel id={`${id}-date`}>{label}</InputLabel> : null}

			<DatePicker
				value={dateValue}
				onChange={handleDate}
				dateFormat='M/D/YYYY'
			/>

			<InputError error={error} />
		</div>
	);
};

export { DateTimeInput };

import React from 'react';

import styles from './Calendar.module.scss';
import { CalendarCell } from './CalendarCell';

interface Props {
	monthlyCreatedTotals: number[];
}

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

const Calendar = ({ monthlyCreatedTotals }: Props): JSX.Element => {
	const max = Math.max(...monthlyCreatedTotals);

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{monthlyCreatedTotals.map((total, i) => {
					return (
						<CalendarCell
							month={months[i]}
							total={total}
							colorAlpha={total / max}
							isMax={total === max}
							key={months[i]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export { Calendar };

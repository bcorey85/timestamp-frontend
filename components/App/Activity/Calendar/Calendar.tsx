import React from 'react';

import { CalendarCell } from './CalendarCell';

import { DateTimeService } from '../../../../utils/DateTimeService';
import styles from './Calendar.module.scss';

interface Props {
	monthlyCreatedTotals: number[];
}

const Calendar = ({ monthlyCreatedTotals }: Props): JSX.Element => {
	const max = Math.max(...monthlyCreatedTotals);
	const months = DateTimeService.createMonthsArray();

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{monthlyCreatedTotals.map((total, i) => {
					return (
						<CalendarCell
							month={months[i]}
							total={total}
							colorAlpha={total / max}
							key={months[i]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export { Calendar };

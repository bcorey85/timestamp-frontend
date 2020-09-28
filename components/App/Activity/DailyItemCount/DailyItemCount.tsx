import React from 'react';
import moment from 'moment';

import { DailyItemCell } from './DailyItemCell';

import styles from './DailyItemCount.module.scss';

interface Count {
	date: string;
	count: number;
}

interface Props {
	dailyItemCounts: Count[];
}

const DailyItemCount = ({ dailyItemCounts }: Props): JSX.Element => {
	const counts = dailyItemCounts
		.map(day => (day.count !== 0 ? day.count : null))
		.filter(day => day !== null);

	const max = Math.max(...counts);

	const dayLabels = [ '', 'Mon', '', 'Wed', '', 'Fri' ];
	const monthLabels = [ ...moment.monthsShort() ];

	return (
		<div className={styles.grid_container}>
			<div className={styles.month_labels}>
				{monthLabels.map((label, i) => {
					return (
						<div
							key={label}
							className={styles[`month_label_${i + 1}`]}>
							{label}
						</div>
					);
				})}
			</div>
			<div className={styles.days}>
				<div className={styles.day_labels}>
					{dayLabels.map((label, i) => {
						return <div key={i}>{label}</div>;
					})}
				</div>
				<div className={styles.grid}>
					{dailyItemCounts.map(day => {
						return (
							<DailyItemCell
								date={day.date}
								count={day.count}
								colorAlpha={day.count / max}
								key={day.date}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export { DailyItemCount };

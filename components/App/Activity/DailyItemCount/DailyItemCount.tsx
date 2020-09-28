import React from 'react';
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

	return (
		<div>
			<div>month labels</div>
			<div>day labels</div>
			<div className={styles.grid_container}>
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

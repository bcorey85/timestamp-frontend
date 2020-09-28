import React from 'react';
import { UiService } from '../../../../utils/UiService';

import styles from './DailyItemCell.module.scss';

interface Props {
	date: string;
	count: number | null;
	colorAlpha: number;
}

const DailyItemCell = ({ date, count, colorAlpha }: Props): JSX.Element => {
	const color = UiService.calculateAlpha(colorAlpha);

	return (
		<div className={styles.day} style={{ backgroundColor: `${color}` }}>
			<div className={styles.tooltip}>
				{date}
				{count}
			</div>
		</div>
	);
};

export { DailyItemCell };

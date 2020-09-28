import React from 'react';
import chroma from 'chroma-js';
import { MathService } from '../../../../utils/MathService';

import styles from './CalendarCell.module.scss';
import { UiService } from '../../../../utils/UiService';

interface Props {
	month: string;
	total: number;
	colorAlpha: number;
	isMax: boolean;
}

const CalendarCell = ({
	month,
	total,
	colorAlpha,
	isMax
}: Props): JSX.Element => {
	const color = UiService.calculateAlpha(colorAlpha);

	return (
		<div className={isMax ? styles.container_max : styles.container}>
			<div className={styles.month}>{month}</div>
			<div className={styles.total}>
				<span style={{ color: `${color}` }}>{total}</span>
			</div>
		</div>
	);
};

export { CalendarCell };

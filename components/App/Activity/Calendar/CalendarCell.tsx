import React from 'react';
import chroma from 'chroma-js';
import { MathService } from '../../../../utils/MathService';

import styles from './CalendarCell.module.scss';
import { UiService } from '../../../../utils/UiService';

interface Props {
	month: string;
	total: number;
	colorAlpha: number;
}

const CalendarCell = ({ month, total, colorAlpha }: Props): JSX.Element => {
	const color =
		colorAlpha === 0
			? UiService.calculateAlpha(colorAlpha, '--text500')
			: UiService.calculateAlpha(colorAlpha, '--primary400');

	return (
		<div className={styles.container}>
			<div className={styles.month}>{month}</div>
			<div className={styles.total}>
				<span style={{ color: `${color}` }}>{total}</span>
			</div>
		</div>
	);
};

export { CalendarCell };

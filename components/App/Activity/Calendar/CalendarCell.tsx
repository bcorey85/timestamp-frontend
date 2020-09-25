import React from 'react';
import { MathService } from '../../../../utils/MathService';

import styles from './CalendarCell.module.scss';

interface Props {
	month: string;
	total: number;
	colorAlpha: number;
}

const changeHSLtoHSLA = (hsl: string, alpha: number) => {
	const trim = hsl.trim();
	const aFlagAdded = trim.replace('hsl', 'hsla');
	const alphaAdded = aFlagAdded.replace(')', `, ${alpha})`);
	console.log('alphaAdded', alphaAdded);

	return alphaAdded;
};

const CalendarCell = ({ month, total, colorAlpha }: Props): JSX.Element => {
	let adjustedAlpha;

	if (MathService.lte(colorAlpha, 0)) {
		adjustedAlpha = 0.2;
	} else if (MathService.between(colorAlpha, 0, 0.5)) {
		adjustedAlpha = 0.5;
	} else if (MathService.between(colorAlpha, 0.6, 0.8)) {
		adjustedAlpha = 0.7;
	} else {
		adjustedAlpha = 1;
	}

	const bodyStyles = getComputedStyle(document.body);
	const textColor = bodyStyles.getPropertyValue('--text500');
	const hsla = changeHSLtoHSLA(textColor, adjustedAlpha);
	console.log('textColor', textColor);
	console.log('hsla', hsla);

	return (
		<div className={styles.container}>
			<div className={styles.month}>{month}</div>
			<div className={styles.total}>
				<span style={{ color: `${hsla}` }}>{total}</span>
			</div>
		</div>
	);
};

export { CalendarCell };

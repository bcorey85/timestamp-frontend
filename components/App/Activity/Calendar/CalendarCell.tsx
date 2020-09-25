import React from 'react';
import chroma from 'chroma-js';
import { MathService } from '../../../../utils/MathService';

import styles from './CalendarCell.module.scss';

interface Props {
	month: string;
	total: number;
	colorAlpha: number;
}

// Chroma package workaround for webpack converting hsl values to hex on compile
const changeHSLAlpha = (hsl: any[], alpha: number) => {
	if (isNaN(hsl[0])) {
		hsl[0] = 160;
	}
	const hue = hsl[0];
	const saturation = parseInt(hsl[1]) * 100;
	const lightness = hsl[2] * 100;

	return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
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
	const hsla = changeHSLAlpha(chroma(textColor.trim()).hsl(), adjustedAlpha);

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

import React, { useState } from 'react';
import { StringService } from '../../../../utils/StringService';
import { UiService } from '../../../../utils/UiService';

import styles from './DailyItemCell.module.scss';

interface Props {
	date: string;
	count: number | null;
	colorAlpha: number;
}

const DailyItemCell = ({ date, count, colorAlpha }: Props): JSX.Element => {
	const [ tooltipShowing, setTooltipShowing ] = useState(false);
	const color =
		colorAlpha === 0
			? UiService.calculateAlpha(colorAlpha, '--text500')
			: UiService.calculateAlpha(colorAlpha, '--primary400');

	const showTooltip = () => {
		setTooltipShowing(true);
	};

	const hideTooltip = () => {
		setTooltipShowing(false);
	};

	return (
		<div
			className={styles.day}
			style={{ backgroundColor: `${color}` }}
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}>
			<div
				className={
					tooltipShowing ? styles.tooltip : styles.tooltip_hidden
				}>
				<div>{date}</div>
				<div>
					{StringService.pluralize(count, {
						singular: 'item',
						plural: 'items'
					})}
				</div>
			</div>
		</div>
	);
};

export { DailyItemCell };

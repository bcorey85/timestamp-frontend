import React from 'react';
import { DateTimeService } from '../../../../../utils/DateTimeService';
import { MathService } from '../../../../../utils/MathService';

import styles from './ListItem.module.scss';

interface Props {
	startTime: string;
	endTime: string;
	hours: string;
}

const ListNote = ({ startTime, endTime, hours }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<div className={styles.time}>
				{DateTimeService.formatTime(startTime)}
			</div>
			<div className={styles.time}>
				{DateTimeService.formatTime(endTime)}
			</div>
			<div className={styles.time}>{MathService.round(hours, 1)}</div>
		</React.Fragment>
	);
};

export { ListNote };

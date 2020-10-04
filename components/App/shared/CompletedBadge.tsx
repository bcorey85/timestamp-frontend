import React from 'react';
import { DateTimeService } from '../../../utils/DateTimeService';

import styles from './CompletedBadge.module.scss';

interface Props {
	date: string;
}

const CompleteBadge = ({ date }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<span>Completed on {DateTimeService.formatDate(date)}</span>
		</div>
	);
};

export { CompleteBadge };

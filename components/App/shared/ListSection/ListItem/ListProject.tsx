import React from 'react';
import { MathService } from '../../../../../utils/MathService';

import styles from './ListItem.module.scss';

interface Props {
	tasks: number;
	notes: number;
	hours: string;
}
const ListProject = ({ tasks, notes, hours }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<div className={styles.time}>{tasks || 0}</div>
			<div className={styles.number}>{notes || 0}</div>
			<div className={styles.number}>{MathService.round(hours, 1)}</div>
		</React.Fragment>
	);
};

export { ListProject };

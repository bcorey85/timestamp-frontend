import React from 'react';
import { MathService } from '../../../../../utils/MathService';

import styles from './ListItem.module.scss';

interface Props {
	notes: number;
	hours: string;
}
const ListTask = ({ notes, hours }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<div className={styles.time}>{null}</div>
			<div className={styles.time}>{notes}</div>
			<div className={styles.time}>{MathService.round(hours, 1)}</div>
		</React.Fragment>
	);
};

export { ListTask };

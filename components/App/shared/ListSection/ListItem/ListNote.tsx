import React from 'react';

import styles from './ListItem.module.scss';

interface Props {
	startTime: string;
	endTime: string;
	hours: string;
}

const ListNote = ({ startTime, endTime, hours }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<div className={styles.time}>{startTime}</div>
			<div className={styles.time}>{endTime}</div>
			<div className={styles.time}>{hours}</div>
		</React.Fragment>
	);
};

export { ListNote };

import React from 'react';

import styles from './ListItem.module.scss';

interface Props {
	tasks: number;
	notes: number;
	hours: string;
}
const ListProject = ({ tasks, notes, hours }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<div className={styles.time}>{tasks}</div>
			<div className={styles.number}>{notes}</div>
			<div className={styles.number}>{hours}</div>
		</React.Fragment>
	);
};

export { ListProject };

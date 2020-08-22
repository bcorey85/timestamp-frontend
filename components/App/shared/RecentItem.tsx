import React from 'react';

import styles from './RecentItem.module.scss';
import { TypeIcon, IconType } from './TypeIcon';

interface Props {
	type: IconType;
	title: string;
	date: string;
	time: string;
}

const RecentItem = ({ type, title, date, time }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<TypeIcon type={type} />
				{title}
			</div>
			<div className={styles.meta}>
				<div className={styles.date}>{date}</div>
				<div className={styles.time}>{time}</div>
			</div>
		</div>
	);
};

export { RecentItem };

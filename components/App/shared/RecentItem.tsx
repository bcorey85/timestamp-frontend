import React from 'react';

import styles from './RecentItem.module.scss';
import { TypeIcon, IconType } from './TypeIcon';

const RecentItem = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<TypeIcon type={IconType.note} />This is a title
			</div>
			<div className={styles.meta}>
				<div className={styles.date}>10/24/2019</div>
				<div className={styles.time}>12:00pm - 12:00am</div>
			</div>
		</div>
	);
};

export { RecentItem };

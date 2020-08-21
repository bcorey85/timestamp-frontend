import React from 'react';
import Link from 'next/link';

import { TypeIcon, IconType } from './TypeIcon';

import styles from './StatCard.module.scss';

const StatCard = (): JSX.Element => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<TypeIcon type={IconType.time} />Hours
			</div>

			<div className={styles.stat}>10,000</div>
			<div className={styles.link}>
				<Link href='/'>
					<a>View Activity</a>
				</Link>
			</div>
		</div>
	);
};

export { StatCard };

import React from 'react';

import { StatCard } from './StatCard';

import styles from './StatsBar.module.scss';
import { IconType } from './TypeIcon';

const StatsBar = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<StatCard
				type={IconType.time}
				title={'Hours'}
				stat={'10,000'}
				href={'/'}
				as={'/'}
				linkText='View Activity'
			/>
			<StatCard
				type={IconType.project}
				title={'Projects'}
				stat={'4'}
				href={'/'}
				as={'/'}
				linkText='View Projects'
			/>
			<StatCard
				type={IconType.task}
				title={'Tasks'}
				stat={'25'}
				href={'/'}
				as={'/'}
				linkText='View Tasks'
			/>
			<StatCard
				type={IconType.note}
				title={'Notes'}
				stat={'482'}
				href={'/'}
				as={'/'}
				linkText='View Notes'
			/>
		</div>
	);
};

export { StatsBar };

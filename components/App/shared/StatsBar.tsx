import React from 'react';

import { StatCard } from './StatCard';

import styles from './StatsBar.module.scss';

const StatsBar = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<StatCard />
			<StatCard />
			<StatCard />
			<StatCard />
		</div>
	);
};

export { StatsBar };

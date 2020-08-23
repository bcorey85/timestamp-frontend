import React from 'react';

import styles from './StatsBar.module.scss';

interface Props {
	children?: any;
}

const StatsBar = ({ children }: Props): JSX.Element => {
	return <div className={styles.container}>{children}</div>;
};

export { StatsBar };

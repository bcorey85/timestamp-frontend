import React from 'react';
import styles from './DashboardPage.module.scss';

interface Props {
	children?: any;
}

const DashboardPage = ({ children }: Props): JSX.Element => {
	return <div className={styles.container}>{children}</div>;
};

export { DashboardPage };

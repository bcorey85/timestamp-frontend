import React from 'react';

import styles from './DashboardHeader.module.scss';

interface Props {
	heading: string;
	subheading: string;
}

const DashboardHeader = ({ heading, subheading }: Props): JSX.Element => {
	return (
		<hgroup className={styles.container}>
			<h4>{subheading}</h4>
			<h1>{heading}</h1>
		</hgroup>
	);
};

export { DashboardHeader };

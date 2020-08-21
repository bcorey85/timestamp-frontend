import React from 'react';

import styles from './DashboardSection.module.scss';

interface Props {
	children?: any;
	title?: string;
}

const DashboardSection = ({ children, title }: Props): JSX.Element => {
	return (
		<section className={styles.container}>
			{title ? <h3>{title}</h3> : null}
			{children}
		</section>
	);
};

export { DashboardSection };

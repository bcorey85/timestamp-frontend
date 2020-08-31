import React from 'react';

import styles from './DashboardSection.module.scss';

interface Props {
	children?: any;
	full?: boolean;
}

const DashboardSection = ({ children, full }: Props): JSX.Element => {
	return (
		<section className={full ? styles.container_full : styles.container}>
			{children}
		</section>
	);
};

export { DashboardSection };

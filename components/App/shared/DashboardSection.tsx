import React from 'react';

import styles from './DashboardSection.module.scss';

interface Props {
	children?: any;
	title?: string;
}

const DashboardSection = ({ children, title }: Props): JSX.Element => {
	return (
		<section className={styles.container}>
			{title ? <h2 className='section_heading'>{title}</h2> : null}
			{children}
		</section>
	);
};

export { DashboardSection };

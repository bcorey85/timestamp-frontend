import React from 'react';

import styles from './AppPageSectionHeading.module.scss';

interface Props {
	children?: any;
	title?: string;
}

const AppPageSectionHeading = ({ title, children }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{title ? <h2 className={styles.section_heading}>{title}</h2> : null}
			{children}
		</div>
	);
};

export { AppPageSectionHeading };

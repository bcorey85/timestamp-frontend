import React from 'react';

import styles from './AppPageSection.module.scss';

interface Props {
	children?: any;

	full?: boolean;
}

const AppPageSection = ({ children, full }: Props): JSX.Element => {
	return (
		<section className={full ? styles.container_full : styles.container}>
			{children}
		</section>
	);
};

export { AppPageSection };

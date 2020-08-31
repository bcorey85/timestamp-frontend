import React from 'react';

import styles from './SectionHeading.module.scss';

interface Props {
	children: string;
}
const SectionHeading = ({ children }: Props): JSX.Element => {
	return <h2 className={styles.section_heading}>{children}</h2>;
};

export { SectionHeading };

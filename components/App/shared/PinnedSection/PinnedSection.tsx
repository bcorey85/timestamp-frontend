import React from 'react';
import styles from './PinnedSection.module.scss';

interface Props {
	children?: any;
}

const PinnedSection = ({ children }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<section className={styles.container}>{children}</section>
		</React.Fragment>
	);
};

export { PinnedSection };

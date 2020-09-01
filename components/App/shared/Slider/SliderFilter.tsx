import React from 'react';
import { BiFilter } from 'react-icons/bi';

import styles from './SliderFilter.module.scss';

interface Props {
	children?: any;
}

const SliderFilter = ({ children }: Props): JSX.Element => {
	return (
		<nav className={styles.nav}>
			{' '}
			<BiFilter />
			{children}
		</nav>
	);
};

export { SliderFilter };

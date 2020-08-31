import React from 'react';

import styles from './SliderFilter.module.scss';

interface Props {
	children?: any;
}

const SliderFilter = ({ children }: Props): JSX.Element => {
	return <nav className={styles.nav}>{children}</nav>;
};

export { SliderFilter };

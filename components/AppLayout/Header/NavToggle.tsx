import React from 'react';

import styles from './NavToggle.module.scss';

const NavToggle = (): JSX.Element => {
	return (
		<button className={styles.nav_toggle}>
			<span />
			<span />
			<span />
		</button>
	);
};

export { NavToggle };

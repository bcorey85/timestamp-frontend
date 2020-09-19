import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDrawer, toggleSearch } from '../../../../redux/interface';

import styles from './NavToggle.module.scss';

const NavToggle = (): JSX.Element => {
	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleDrawer());
	};

	return (
		<button className={styles.nav_toggle} onClick={toggle}>
			<div className={styles.container}>
				<span />
				<span />
				<span />
			</div>
		</button>
	);
};

export { NavToggle };

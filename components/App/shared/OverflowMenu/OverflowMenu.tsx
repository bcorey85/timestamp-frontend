import React from 'react';
import { OverflowButton } from './OverflowButton';

import styles from './OverflowMenu.module.scss';
import { useToggle } from '../../../../hooks/useToggle';

interface Props {
	children?: any;
}

const OverflowMenu = ({ children }: Props): JSX.Element => {
	const [ menuOpen, toggleMenu ] = useToggle(false);

	return (
		<nav className={styles.container}>
			<OverflowButton toggleMenu={toggleMenu} />
			<ul
				className={menuOpen ? styles.menu_open : styles.menu_closed}
				onClick={toggleMenu}>
				{children}
			</ul>
		</nav>
	);
};

export { OverflowMenu };

import React, { useCallback, useRef, useState } from 'react';

import { OverflowButton } from './OverflowButton';

import { useToggle } from '../../../../hooks/useToggle';
import { useClickOutside } from '../../../../hooks/useClickOutside';

import styles from './OverflowMenu.module.scss';

interface Props {
	children?: any;
}

const OverflowMenu = ({ children }: Props): JSX.Element => {
	const [ menuOpen, toggleMenu ] = useToggle(false);

	const menuRef = useRef<HTMLUListElement>();

	useClickOutside(menuRef, toggleMenu);

	return (
		<div className={styles.container}>
			<OverflowButton toggleMenu={toggleMenu} />
			{menuOpen ? (
				<ul className={styles.menu} ref={menuRef}>
					{children}
				</ul>
			) : null}
		</div>
	);
};

export { OverflowMenu };

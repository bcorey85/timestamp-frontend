import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import styles from './OverflowButton.module.scss';

interface Props {
	toggleMenu: () => void;
}

const OverflowButton = ({ toggleMenu }: Props): JSX.Element => {
	return (
		<button onClick={toggleMenu} className={styles.button}>
			<BiDotsVerticalRounded />
		</button>
	);
};

export { OverflowButton };

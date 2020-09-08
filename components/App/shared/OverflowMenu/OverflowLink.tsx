import React from 'react';

import styles from './OverflowLink.module.scss';

interface Props {
	children?: any;
	handleClick: () => void;
}

const OverflowLink = ({ children, handleClick }: Props): JSX.Element => {
	return (
		<li className={styles.link}>
			<button onClick={handleClick}>{children}</button>
		</li>
	);
};

export { OverflowLink };

import React from 'react';

import styles from './OverflowHeader.module.scss';

interface Props {
	children?: any;
}

const OverflowHeader = ({ children }: Props): JSX.Element => {
	return <p className={styles.header}>{children}</p>;
};

export { OverflowHeader };

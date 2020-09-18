import React from 'react';

import styles from './AppPageHeader.module.scss';

interface Props {
	children?: any;
}

const AppPageHeader = ({ children }: Props): JSX.Element => {
	return <div className={styles.header}>{children}</div>;
};

export { AppPageHeader };

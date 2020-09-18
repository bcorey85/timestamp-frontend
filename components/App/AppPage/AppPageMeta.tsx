import React from 'react';

import styles from './AppPageMeta.module.scss';

interface Props {
	children?: any;
}

const AppPageMeta = ({ children }: Props): JSX.Element => {
	return <div className={styles.meta}>{children}</div>;
};

export { AppPageMeta };

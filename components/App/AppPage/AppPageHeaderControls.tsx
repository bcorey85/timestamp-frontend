import React from 'react';

import styles from './AppPageHeaderControls.module.scss';

interface Props {
	children?: any;
}

const AppPageHeaderControls = ({ children }: Props): JSX.Element => {
	return <div className={styles.btn_container}>{children}</div>;
};

export { AppPageHeaderControls };

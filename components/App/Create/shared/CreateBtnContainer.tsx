import React from 'react';

import styles from './CreateBtnContainer.module.scss';

interface Props {
	children?: any;
}

const CreateBtnContainer = ({ children }: Props): JSX.Element => {
	return <div className={styles.container}>{children}</div>;
};

export { CreateBtnContainer };

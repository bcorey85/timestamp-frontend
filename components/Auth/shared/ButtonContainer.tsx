import React from 'react';

import styles from './ButtonContainer.module.scss';

interface Props {
	children?: any;
}

const ButtonContainer = ({ children }: Props): JSX.Element => {
	return <div className={styles.btn_container}>{children}</div>;
};

export { ButtonContainer };

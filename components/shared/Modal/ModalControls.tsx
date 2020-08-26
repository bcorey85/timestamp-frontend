import React from 'react';

import styles from './ModalControls.module.scss';

interface Props {
	children?: any;
}

const ModalControls = ({ children }: Props): JSX.Element => {
	return <div className={styles.modal_controls}>{children}</div>;
};

export { ModalControls };

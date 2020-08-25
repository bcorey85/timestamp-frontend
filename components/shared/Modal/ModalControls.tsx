import React from 'react';

import styles from './ModalControls.module.scss';

const ModalControls = props => {
	return <div className={styles.modal_controls}>{props.children}</div>;
};

export { ModalControls };

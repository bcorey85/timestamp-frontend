import React from 'react';

import styles from './ModalContent.module.scss';

const ModalContent = props => {
	return <div className={styles.modal_content}>{props.children}</div>;
};

export { ModalContent };

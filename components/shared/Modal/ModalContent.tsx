import React from 'react';

import styles from './ModalContent.module.scss';

interface Props {
	children?: any;
}

const ModalContent = ({ children }: Props): JSX.Element => {
	return <div className={styles.modal_content}>{children}</div>;
};

export { ModalContent };

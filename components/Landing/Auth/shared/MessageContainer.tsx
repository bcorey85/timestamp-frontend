import React from 'react';

import styles from './MessageContainer.module.scss';

interface Props {
	children?: any;
}

const MessageContainer = ({ children }: Props): JSX.Element => {
	return <div className={styles.container}>{children}</div>;
};

export { MessageContainer };

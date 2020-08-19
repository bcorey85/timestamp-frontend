import React from 'react';

import styles from './AuthHeader.module.scss';

interface Props {
	children?: any;
}

const AuthHeader = ({ children }: Props): JSX.Element => {
	return <hgroup className={styles.header}>{children}</hgroup>;
};
export { AuthHeader };

import React from 'react';

import styles from './Input.module.scss';

interface Props {
	error?: string;
}

const InputError = ({ error }: Props): JSX.Element => {
	return <div className={styles.error_container}>{error || null}</div>;
};

export { InputError };

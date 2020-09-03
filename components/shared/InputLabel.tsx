import React from 'react';

import styles from './InputLabel.module.scss';

interface Props {
	id: string;
	children?: any;
}

const InputLabel = ({ id, children }: Props): JSX.Element => {
	return (
		<label htmlFor={id} className={styles.input_label}>
			{children}
		</label>
	);
};

export { InputLabel };

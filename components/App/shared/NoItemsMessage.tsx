import React from 'react';

import { StringService } from '../../../utils/StringService';
import styles from './NoItemsMessage.module.scss';

interface Props {
	type?: string;
}

const NoItemsMessage = ({ type }: Props): JSX.Element => {
	if (!type) {
		return <p className={styles.message}>( No Items )</p>;
	}

	return (
		<p className={styles.message}>
			( No {StringService.capitalize(type)}s )
		</p>
	);
};

export { NoItemsMessage };

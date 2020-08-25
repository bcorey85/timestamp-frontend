import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Tag.module.scss';

interface Props {
	tagName: string;
	handleRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Tag = ({ tagName, handleRemove }: Props) => {
	return (
		<button className={styles.tag} onClick={e => handleRemove(e)}>
			{tagName}
			<FontAwesomeIcon icon={faTimesCircle} />
		</button>
	);
};

export { Tag };

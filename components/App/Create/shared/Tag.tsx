import React from 'react';

import styles from './Tag.module.scss';
import { BiXCircle } from 'react-icons/bi';

interface Props {
	tagName: string;
	handleRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Tag = ({ tagName, handleRemove }: Props) => {
	return (
		<button className={styles.tag} onClick={e => handleRemove(e)}>
			{tagName}
			<BiXCircle />
		</button>
	);
};

export { Tag };

import React from 'react';
import { BiNotepad, BiTask } from 'react-icons/bi';

import styles from './VisibleItemsHeader.module.scss';

interface Props {
	visible: 'completed' | 'active';
}

const VisibleItemsHeader = ({ visible }: Props): JSX.Element => {
	return (
		<h3 className={styles.header}>
			{visible === 'completed' ? <BiTask /> : <BiNotepad />}
			{visible === 'completed' ? 'Completed Items' : 'Active Items'}
		</h3>
	);
};

export { VisibleItemsHeader };

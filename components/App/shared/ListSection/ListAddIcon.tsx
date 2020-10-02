import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import styles from './ListAddIcon.module.scss';

const ListAddIcon = () => {
	return (
		<div className={styles.container}>
			<BiPlusCircle className={styles.icon} />
		</div>
	);
};

export { ListAddIcon };

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './MobileCreateButton.module.scss';

const MobileCreateButton = () => {
	return (
		<div className={styles.container}>
			<Link href='#'>
				<a className={styles.button}>
					<FontAwesomeIcon icon={faPlus} />
				</a>
			</Link>
		</div>
	);
};

export default MobileCreateButton;

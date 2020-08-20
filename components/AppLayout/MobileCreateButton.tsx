import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { selectUser } from '../../redux/user';

import styles from './MobileCreateButton.module.scss';

const MobileCreateButton = () => {
	const { userId } = useSelector(selectUser);

	return (
		<div className={styles.container}>
			<Link href='/app/[userId]/create' as={`/app/${userId}/create`}>
				<a className={styles.button}>
					<FontAwesomeIcon icon={faPlus} />
				</a>
			</Link>
		</div>
	);
};

export { MobileCreateButton };

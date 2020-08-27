import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user';

import styles from './MobileCreateButton.module.scss';
import { BiPlus } from 'react-icons/bi';

const MobileCreateButton = () => {
	const { userId } = useSelector(selectUser);

	return (
		<div className={styles.container}>
			<Link href='/app/[userId]/create' as={`/app/${userId}/create`}>
				<a className={styles.button}>
					<BiPlus />
				</a>
			</Link>
		</div>
	);
};

export { MobileCreateButton };

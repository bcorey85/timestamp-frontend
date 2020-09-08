import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../../redux/user';

interface Props {
	route?: string;
	children?: any;
	onClick?: () => any;
}

import styles from './DrawerLink.module.scss';
import { useRouter } from 'next/router';

const DrawerLink = ({ route, children, onClick }: Props): JSX.Element => {
	const router = useRouter();

	const isActive = router.route.includes(route);

	const { userId } = useSelector(selectUser);

	if (onClick) {
		return (
			<li>
				<button
					className={isActive ? styles.active : styles.inactive}
					onClick={onClick}>
					{children}
				</button>
			</li>
		);
	}

	return (
		<li>
			<Link
				href={`/app/[userId]/${route}`}
				as={`/app/${userId}/${route}`}>
				<a className={isActive ? styles.active : styles.inactive}>
					{children}
				</a>
			</Link>
		</li>
	);
};

export { DrawerLink };

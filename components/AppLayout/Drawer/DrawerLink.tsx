import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentPage,
	Pages,
	selectInterface
} from '../../../redux/interface';
import { selectUser } from '../../../redux/user';

interface Props {
	route?: string;
	children: string;
	isActive: boolean;
	onClick?: () => any;
	page?: Pages;
}

import styles from './DrawerLink.module.scss';

const DrawerLink = ({
	route,
	children,
	isActive,
	onClick,
	page
}: Props): JSX.Element => {
	const dispatch = useDispatch();

	const { userId } = useSelector(selectUser);
	const { baseUrl } = useSelector(selectInterface);

	const handleRouteChange = () => {
		dispatch(setCurrentPage({ page }));
	};

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
				<a
					className={isActive ? styles.active : styles.inactive}
					onClick={handleRouteChange}>
					{children}
				</a>
			</Link>
		</li>
	);
};

export { DrawerLink };

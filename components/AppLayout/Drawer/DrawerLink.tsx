import React from 'react';
import Link from 'next/link';

interface Props {
	href?: string;
	children: string;
	isActive: boolean;
	onClick?: () => any;
}

import styles from './DrawerLink.module.scss';

const DrawerLink = ({
	href,
	children,
	isActive,
	onClick
}: Props): JSX.Element => {
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
			<Link href={href}>
				<a className={isActive ? styles.active : styles.inactive}>
					{children}
				</a>
			</Link>
		</li>
	);
};

export { DrawerLink };

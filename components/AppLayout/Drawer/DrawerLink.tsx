import React from 'react';
import Link from 'next/link';

interface Props {
	href: string;
	children: string;
	isActive: boolean;
}

import styles from './DrawerLink.module.scss';

const DrawerLink = ({ href, children, isActive }: Props): JSX.Element => {
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

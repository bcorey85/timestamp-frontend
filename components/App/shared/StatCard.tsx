import React from 'react';
import Link from 'next/link';

import { TypeIcon, IconType } from './TypeIcon';

import styles from './StatCard.module.scss';

interface Props {
	title: string;
	type: IconType;
	stat: string;
	href: string;
	as: string;
	linkText: string;
}

const StatCard = ({
	type,
	title,
	stat,
	href,
	as,
	linkText
}: Props): JSX.Element => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<TypeIcon type={type} />
				{title}
			</div>

			<div className={styles.stat}>{stat}</div>
			<div className={styles.link}>
				<Link href={href} as={as}>
					<a>{linkText}</a>
				</Link>
			</div>
		</div>
	);
};

export { StatCard };

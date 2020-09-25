import React from 'react';
import Link from 'next/link';

import { TypeIcon, IconType } from '../TypeIcon';

import styles from './StatCard.module.scss';
import { MathService } from '../../../../utils/MathService';

interface Props {
	title: string;
	type: IconType;
	stat: string | number;
	href?: string;
	as?: string;
	linkText?: string;
}

const StatCard = ({
	type,
	title,
	stat,
	href,
	as,
	linkText
}: Props): JSX.Element => {
	if (!href || !as || !linkText) {
		return (
			<article className={styles.card_noclick}>
				<div className={styles.header}>
					<TypeIcon type={type} />
					{title}
				</div>

				<div className={styles.stat}>{MathService.round(stat, 1)}</div>
			</article>
		);
	}

	return (
		<Link href={href} as={as}>
			<article className={styles.card}>
				<div className={styles.header}>
					<TypeIcon type={type} />
					{title}
				</div>

				<div className={styles.stat}>{MathService.round(stat, 1)}</div>
				<div className={styles.link}>
					<a>{linkText}</a>
				</div>
			</article>
		</Link>
	);
};

export { StatCard };

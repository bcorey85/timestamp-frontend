import React from 'react';
import Link from 'next/link';

import { TypeIcon } from '../TypeIcon';
import { ItemType } from '../../../../utils/ItemService';
import { PinnedIcon } from './PinnedIcon';

import styles from './PinnedCard.module.scss';

interface Props {
	href: string;
	as: string;
	type: keyof ItemType;
	title: string;
	hours?: string;
	date?: string;
	time?: string;
	description: string;
	label1: string;
	label2: string;
	stat1: string;
	stat2: string;
}

const CardHours = ({ hourAmount }: { hourAmount: string }) => {
	return (
		<div>
			<span className={styles.hourAmount}>{hourAmount}</span> hr
		</div>
	);
};

const CardDate = ({ date, time }: { date: string; time: string }) => {
	return (
		<React.Fragment>
			<div>{date}</div>
			<div>{time}</div>
		</React.Fragment>
	);
};

const PinnedCard = ({
	href,
	as,
	type,
	title,
	hours,
	date,
	time,
	description,
	label1,
	label2,
	stat1,
	stat2
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<article className={styles.card}>
				<div className={styles.title}>
					<div className={styles.title_container}>
						<TypeIcon type={type} />
						{title}
					</div>
					<div className={styles.pinned}>
						<PinnedIcon pinned={true} />
					</div>
				</div>

				<div className={styles.time}>
					<CardDate date={date} time={time} />
				</div>
				<div className={styles.body}>{description}</div>
				<div className={styles.stats}>
					<div>{label1}</div>
					<div>{stat1}</div>
				</div>
				<div className={styles.stats}>
					<div>{label2}</div>
					<div>{stat2}</div>
				</div>
			</article>
		</Link>
	);
};

export { PinnedCard };

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
}

const CardDate = ({
	date,
	time,
	hours
}: {
	date: string;
	time: string;
	hours: string;
}) => {
	return (
		<React.Fragment>
			<div>{date}</div>
			<div>{time ? time : hours}</div>
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
	description
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<article className={styles.card}>
				<div className={styles.pinned}>
					<PinnedIcon pinned={true} />
				</div>
				<div className={styles.title}>
					<div className={styles.title_container}>
						<TypeIcon type={type} />
						{title}
					</div>
				</div>

				<div className={styles.time}>
					<CardDate date={date} time={time} hours={hours} />
				</div>
				<div className={styles.body}>{description}</div>
			</article>
		</Link>
	);
};

export { PinnedCard };

import React from 'react';

import { IconType, TypeIcon } from '../TypeIcon';

import styles from './PinnedCard.module.scss';

interface Props {
	title: string;
	type: IconType;
	hours?: string;
	date?: string;
	time?: string;
	body: string;
	label1: string;
	label2: string;
	stat1: string;
	stat2: string;
}

const CardHours = ({ hourAmount }: { hourAmount: string }) => {
	return (
		<div>
			<span className={styles.hourAmount}>{hourAmount}</span> hours
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
	title,
	type,
	hours,
	date,
	time,
	body,
	label1,
	label2,
	stat1,
	stat2
}: Props): JSX.Element => {
	return (
		<div className={styles.card}>
			<div className={styles.title}>
				<TypeIcon type={type} />
				<span>{title}</span>
			</div>

			<div className={styles.time}>
				{hours ? (
					<CardHours hourAmount={hours} />
				) : (
					<CardDate date={date} time={time} />
				)}
			</div>
			<div className={styles.body}>{body}</div>
			<div className={styles.stats}>
				<div>{label1}</div>
				<div>{stat1}</div>
			</div>
			<div className={styles.stats}>
				<div>{label2}</div>
				<div>{stat2}</div>
			</div>
		</div>
	);
};

export { PinnedCard };

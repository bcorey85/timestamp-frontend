import React from 'react';
import Link from 'next/link';

import { PinnedIcon } from '../PinnedSection/PinnedIcon';

import { ItemType } from '../../../../utils/ItemService';
import { TypeIcon, IconType } from '../TypeIcon';
import styles from './ListItem.module.scss';
import { StringService } from '../../../../utils/StringService';

interface Props {
	type: keyof ItemType;
	title: string;
	date: string;
	time: string;
	href: string;
	as: string;
	pinned: boolean;
}

const ListItem = ({
	type,
	title,
	date,
	time,
	href,
	as,
	pinned
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<div className={styles.container}>
				<div className={styles.title}>
					<TypeIcon type={type} />
					{StringService.truncate(title, 60)}
				</div>
				<div className={styles.date}>{date}</div>
				<div className={styles.time}>{time !== null ? time : null}</div>
				<div className={styles.pinned}>
					{pinned ? <PinnedIcon pinned={true} /> : null}
				</div>
			</div>
		</Link>
	);
};

export { ListItem };

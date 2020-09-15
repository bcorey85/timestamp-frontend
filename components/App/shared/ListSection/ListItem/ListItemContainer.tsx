import React from 'react';
import Link from 'next/link';

import { TypeIcon } from '../../../shared/TypeIcon';
import { PinnedIcon } from '../../PinnedSection/PinnedIcon';

import { ItemType } from '../../../../../utils/ItemService';
import styles from './ListItem.module.scss';

interface Props {
	type: keyof ItemType;
	title: string;
	date: string;
	href: string;
	as: string;
	pinned: boolean;
	children?: any;
}

const ListItemContainer = ({
	href,
	as,
	date,
	type,
	title,
	pinned,
	children
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<article className={styles.container}>
				<div className={styles.date}>{date}</div>
				<div className={styles.title}>
					<TypeIcon type={type} />
					{title}
				</div>

				{children}

				<div className={styles.pinned}>
					{pinned ? <PinnedIcon pinned={true} /> : null}
				</div>
			</article>
		</Link>
	);
};

export { ListItemContainer };

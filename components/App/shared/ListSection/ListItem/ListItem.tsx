import React from 'react';
import Link from 'next/link';

import { ListItemContainer } from './ListItemContainer';
import { ListNote } from './ListNote';
import { TypeIcon } from '../../../shared/TypeIcon';
import { PinnedIcon } from '../../PinnedSection/PinnedIcon';

import { ItemType } from '../../../../../utils/ItemService';
import styles from './ListItem.module.scss';
import { ListTask } from './ListTask';
import { ListProject } from './ListProject';

interface Item {
	type: keyof ItemType;
	title: string;
	date: string;
	hours: string;
	href: string;
	startTime: string;
	endTime: string;
	as: string;
	pinned: boolean;
	tasks: number;
	notes: number;
}

interface Props {
	item: Item;
	userId: string;
}

const ListItem = ({ item, userId }: Props): JSX.Element => {
	return (
		<ListItemContainer
			href={`/app/[userId]/${item.href}`}
			as={`/app/${userId}/${item.as}`}
			date={item.date}
			type={item.type}
			title={item.title}
			pinned={item.pinned}>
			{item.type === 'note' ? (
				<ListNote
					startTime={item.startTime}
					endTime={item.endTime}
					hours={item.hours}
				/>
			) : null}

			{item.type === 'task' ? (
				<ListTask notes={item.notes} hours={item.hours} />
			) : null}

			{item.type === 'project' ? (
				<ListProject
					notes={item.notes}
					tasks={item.tasks}
					hours={item.hours}
				/>
			) : null}
		</ListItemContainer>
	);
};

export { ListItem };

import React from 'react';

import { ListItemContainer } from './ListItemContainer';
import { ListNote } from './ListNote';

import { Item, ItemType } from '../../../../../utils/ItemService';

import { ListTask } from './ListTask';
import { ListProject } from './ListProject';

interface Props {
	item: Item;
	userId: string;
}

const ListItem = ({ item, userId }: Props): JSX.Element => {
	return (
		<ListItemContainer
			href={`/app/[userId]/${item.pathname.href}`}
			as={`/app/${userId}/${item.pathname.as}`}
			date={item.meta.date}
			type={item.type}
			title={item.title}
			pinned={item.pinned}>
			{item.type === 'note' ? (
				<ListNote
					startTime={item.meta.startTime}
					endTime={item.meta.endTime}
					hours={item.meta.hours}
				/>
			) : null}

			{item.type === 'task' ? (
				<ListTask notes={item.notes} hours={item.meta.hours} />
			) : null}

			{item.type === 'project' ? (
				<ListProject
					notes={item.notes}
					tasks={item.tasks}
					hours={item.meta.hours}
				/>
			) : null}
		</ListItemContainer>
	);
};

export { ListItem };

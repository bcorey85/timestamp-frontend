import React from 'react';

import { PinnedCard } from '../shared/PinnedSection/PinnedCard';

import { Item, ItemService } from '../../../utils/ItemService';

interface Props {
	items: Item[];
	userId: string;
}

const PinnedItems = ({ items, userId }: Props): JSX.Element => {
	return (
		<React.Fragment>
			{items.map(item => {
				const currentItem = new ItemService(item);
				const { href, as } = currentItem.pathname;
				const {
					title,
					createdAt,
					description,
					notes,
					tasks,
					tags
				} = currentItem.item;

				const { date, time, hours } = currentItem.meta;
				const { type } = currentItem;

				return (
					<PinnedCard
						href={`/app/[userId]/${href}`}
						as={`/app/${userId}/${as}`}
						title={title}
						type={type}
						hours={hours}
						date={date}
						time={time}
						notes={notes}
						tasks={tasks}
						description={description}
						key={createdAt.toString()}
						tags={tags}
					/>
				);
			})}
		</React.Fragment>
	);
};

export { PinnedItems };

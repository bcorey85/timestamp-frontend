import React from 'react';

import { PinnedCard } from '../shared/PinnedSection/PinnedCard/PinnedCard';

import { Item } from '../../../utils/ItemService';

interface Props {
	items: Item[];
	userId: string;
}

const PinnedItems = ({ items, userId }: Props): JSX.Element => {
	return (
		<React.Fragment>
			{items.map(item => {
				const { as } = item.pathname;

				return <PinnedCard item={item} key={as} />;
			})}
		</React.Fragment>
	);
};

export { PinnedItems };

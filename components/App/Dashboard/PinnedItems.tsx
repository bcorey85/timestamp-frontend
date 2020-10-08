import React from 'react';

import { PinnedCard } from '../shared/PinnedSection/PinnedCard/PinnedCard';

import { Item } from '../../../utils/ItemService';

interface Props {
	items: Item[];
}

const PinnedItems = ({ items }: Props): JSX.Element => {
	return (
		<React.Fragment>
			{items.length > 0 ? (
				items.map(item => {
					const { as } = item.pathname;

					return <PinnedCard item={item} key={as} />;
				})
			) : null}
		</React.Fragment>
	);
};

export { PinnedItems };

import React, { useState } from 'react';

import { Button } from '../../shared/Button';
import { PinnedItems } from './PinnedItems';
import { SliderFilter } from '../shared/Slider/SliderFilter';
import { Slider } from '../shared/Slider/Slider';
import { NoItemsMessage } from '../shared/NoItemsMessage';

import { Item } from '../../../utils/ItemService';
import { PinnedSection } from '../shared/PinnedSection/PinnedSection';
import { SortingService } from '../../../utils/SortingService';

interface Props {
	items: Item[];
}

const PinnedFavorites = ({ items }: Props): JSX.Element => {
	const [ currentPage, setCurrentPage ] = useState('all');
	const itemPixelWidth = 256;

	const changePage = (page: string) => {
		setCurrentPage(page);
	};

	if (items.length === 0) {
		return (
			<div>
				<NoItemsMessage />
			</div>
		);
	}

	const sortedItemsByDate = items.sort((a, b) =>
		SortingService.sortByDate({ value1: a.meta.date, value2: b.meta.date })
	);

	let selectedItems;
	if (currentPage === 'all') {
		selectedItems = sortedItemsByDate;
	} else {
		selectedItems = sortedItemsByDate.filter(
			item => item.type === currentPage
		);
	}

	let cardAmount = selectedItems.length;

	return (
		<PinnedSection>
			<SliderFilter>
				<Button
					btnStyle='link_gray_small'
					onClick={() => changePage('all')}>
					All
				</Button>
				<Button
					btnStyle='link_gray_small'
					onClick={() => changePage('project')}>
					Projects
				</Button>
				<Button
					btnStyle='link_gray_small'
					onClick={() => changePage('task')}>
					Tasks
				</Button>
				<Button
					btnStyle='link_gray_small'
					onClick={() => changePage('note')}>
					Notes
				</Button>
			</SliderFilter>
			<Slider itemPixelWidth={itemPixelWidth} cardAmount={cardAmount}>
				<PinnedItems items={selectedItems} />
			</Slider>
		</PinnedSection>
	);
};

export { PinnedFavorites };

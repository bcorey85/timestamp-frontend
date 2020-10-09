import React, { useState } from 'react';

import { Button } from '../../shared/Button';
import { PinnedItems } from './PinnedItems';
import { SliderFilter } from '../shared/Slider/SliderFilter';
import { Slider } from '../shared/Slider/Slider';

import { Item } from '../../../utils/ItemService';
import { PinnedSection } from '../shared/PinnedSection/PinnedSection';
import { SortingService } from '../../../utils/SortingService';
import { PinnedFavoritesSlider } from './PinnedFavoritesSlider';
import { current } from '@reduxjs/toolkit';

interface Props {
	items: Item[];
}

const PinnedFavorites = ({ items }: Props): JSX.Element => {
	const [ currentPage, setCurrentPage ] = useState('all');

	const changePage = (page: string) => {
		setCurrentPage(page);
	};

	const sortedItemsByDate = items.sort((a, b) =>
		SortingService.sortByDate({ value1: a.meta.date, value2: b.meta.date })
	);

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
			<PinnedFavoritesSlider
				items={sortedItemsByDate}
				currentPage={currentPage}
			/>
		</PinnedSection>
	);
};

export { PinnedFavorites };

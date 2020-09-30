import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';

import { Button } from '../../shared/Button';
import { PinnedItems } from './PinnedItems';
import { SliderFilter } from '../shared/Slider/SliderFilter';
import { Slider } from '../shared/Slider/Slider';

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
		return <div style={{ color: 'var(--text200)' }}>( Empty )</div>;
	}

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
			{currentPage === 'all' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems items={sortedItemsByDate} />
				</Slider>
			) : null}

			{currentPage === 'project' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={sortedItemsByDate.filter(
							item => item.type === 'project'
						)}
					/>
				</Slider>
			) : null}

			{currentPage === 'task' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={sortedItemsByDate.filter(
							item => item.type === 'task'
						)}
					/>
				</Slider>
			) : null}

			{currentPage === 'note' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={sortedItemsByDate.filter(
							item => item.type === 'note'
						)}
					/>
				</Slider>
			) : null}
		</PinnedSection>
	);
};

export { PinnedFavorites };

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';

import { Button } from '../../shared/Button';
import { PinnedItems } from './PinnedItems';
import { SliderFilter } from '../shared/Slider/SliderFilter';
import { Slider } from '../shared/Slider/Slider';

import { Item } from '../../../utils/ItemService';
import { PinnedSection } from '../shared/PinnedSection/PinnedSection';

interface Props {
	items: Item[];
}

const PinnedFavorites = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const [ currentPage, setCurrentPage ] = useState('all');
	const itemPixelWidth = 256;

	const changePage = (page: string) => {
		setCurrentPage(page);
	};

	if (items.length === 0) {
		return <div style={{ color: 'var(--text200)' }}>( Empty )</div>;
	}

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
					<PinnedItems items={items} userId={userId} />
				</Slider>
			) : null}

			{currentPage === 'project' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={items.filter(item => item.type === 'project')}
						userId={userId}
					/>
				</Slider>
			) : null}

			{currentPage === 'task' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={items.filter(item => item.type === 'task')}
						userId={userId}
					/>
				</Slider>
			) : null}

			{currentPage === 'note' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={items.filter(item => item.type === 'note')}
						userId={userId}
					/>
				</Slider>
			) : null}
		</PinnedSection>
	);
};

export { PinnedFavorites };

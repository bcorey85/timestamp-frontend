import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';
import { BiFilter } from 'react-icons/bi';

import { Button } from '../../shared/Button';
import { PinnedCard } from '../shared/PinnedSection/PinnedCard';
import { SliderFilter } from '../shared/Slider/SliderFilter';
import { Slider } from '../shared/Slider/Slider';

import { ItemService } from '../../../utils/ItemService';
import { PinnedSection } from '../shared/PinnedSection/PinnedSection';

interface PinnedItemsProps {
	items: any[];
	userId: string;
}

const PinnedItems = ({ items, userId }: PinnedItemsProps): JSX.Element => {
	return (
		<React.Fragment>
			{items.map(item => {
				const currentItem = new ItemService(item);
				const { href, as } = currentItem.pathname;
				const { title, created_at, description } = currentItem.item;
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
						description={description}
						key={created_at.toString()}
					/>
				);
			})}
		</React.Fragment>
	);
};

interface Props {
	items: any[];
}

const PinnedFavorites = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const [ currentPage, setCurrentPage ] = useState('all');
	const itemPixelWidth = 256;

	const changePage = (page: string) => {
		setCurrentPage(page);
	};

	if (items.length === 0) {
		return <div>( Empty )</div>;
	}

	return (
		<PinnedSection>
			<SliderFilter>
				<Button btnStyle='link_gray' onClick={() => changePage('all')}>
					All
				</Button>
				<Button
					btnStyle='link_gray'
					onClick={() => changePage('project')}>
					Projects
				</Button>
				<Button btnStyle='link_gray' onClick={() => changePage('task')}>
					Tasks
				</Button>
				<Button btnStyle='link_gray' onClick={() => changePage('note')}>
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
						items={items.filter(
							item => new ItemService(item).type === 'project'
						)}
						userId={userId}
					/>
				</Slider>
			) : null}

			{currentPage === 'task' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={items.filter(
							item => new ItemService(item).type === 'task'
						)}
						userId={userId}
					/>
				</Slider>
			) : null}

			{currentPage === 'note' ? (
				<Slider itemPixelWidth={itemPixelWidth}>
					<PinnedItems
						items={items.filter(
							item => new ItemService(item).type === 'note'
						)}
						userId={userId}
					/>
				</Slider>
			) : null}
		</PinnedSection>
	);
};

export { PinnedFavorites };

import React from 'react';
import { Item } from '../../../utils/ItemService';
import { Slider } from '../shared/Slider/Slider';
import { PinnedItems } from './PinnedItems';

interface Props {
	currentPage: string;
	items: Item[];
}

const PinnedFavoritesSlider = ({ currentPage, items }: Props): JSX.Element => {
	let selectedItems;
	if (currentPage === 'all') {
		selectedItems = items;
	} else {
		selectedItems = items.filter(item => item.type === currentPage);
	}
	const itemPixelWidth = 256;
	const cardAmount = selectedItems.length;

	// Need to render different component to reset slider ref
	// and position logic without triggering scroll back animation
	return (
		<React.Fragment>
			{currentPage === 'all' && (
				<Slider itemPixelWidth={itemPixelWidth} cardAmount={cardAmount}>
					<PinnedItems
						items={selectedItems}
						currentPage={currentPage}
					/>
				</Slider>
			)}
			{currentPage === 'project' && (
				<Slider itemPixelWidth={itemPixelWidth} cardAmount={cardAmount}>
					<PinnedItems
						items={selectedItems}
						currentPage={currentPage}
					/>
				</Slider>
			)}
			{currentPage === 'task' && (
				<Slider itemPixelWidth={itemPixelWidth} cardAmount={cardAmount}>
					<PinnedItems
						items={selectedItems}
						currentPage={currentPage}
					/>
				</Slider>
			)}
			{currentPage === 'note' && (
				<Slider itemPixelWidth={itemPixelWidth} cardAmount={cardAmount}>
					<PinnedItems
						items={selectedItems}
						currentPage={currentPage}
					/>
				</Slider>
			)}
		</React.Fragment>
	);
};

export { PinnedFavoritesSlider };

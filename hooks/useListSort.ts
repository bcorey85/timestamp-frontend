import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { SortingService } from '../utils/SortingService';

interface SortProps {
	filter: string;
	sortDesc: boolean;
}

const useListSort = (items: any[]) => {
	const [ currentFilter, setCurrentFilter ] = useState('date');
	const [ sortDesc, setSortDesc ] = useState(false);
	const [ filteredItems, setFilteredItems ] = useState(items);

	const sortItems = (
		array: any[],
		filter: string,
		sortDesc: boolean = false
	) => {
		const sorted = [ ...array ].sort((a, b) => {
			if (a[filter] === null || b[filter] === null) {
				return SortingService.handleNull();
			}

			if (filter === 'pinned') {
				return SortingService.sort({
					value1: a[filter],
					value2: b[filter]
				});
			}

			if (filter === 'hours') {
				const value1 = parseFloat(a.meta[filter]);
				const value2 = parseFloat(b.meta[filter]);

				return SortingService.sort({
					value1,
					value2
				});
			}

			if (filter === 'startTime' || filter === 'endTime') {
				return SortingService.sortByTime({
					value1: a.meta[filter],
					value2: b.meta[filter]
				});
			}

			if (filter === 'date') {
				return SortingService.sortByDate({
					value1: a.meta[filter],
					value2: b.meta[filter]
				});
			}

			if (typeof a[filter] === 'string') {
				return SortingService.sortString({
					value1: a[filter],
					value2: b[filter]
				});
			}

			return SortingService.sort({
				value1: a[filter],
				value2: b[filter]
			});
		});

		if (sortDesc === true) {
			return sorted.reverse();
		}

		return sorted;
	};

	const handleSort = ({ filter, sortDesc }: SortProps): void => {
		let filteredItems;

		if (filter !== currentFilter) {
			setCurrentFilter(filter);
			setSortDesc(false);
			filteredItems = sortItems(items, filter, false);
		} else {
			setSortDesc(sortDesc);
			filteredItems = sortItems(items, filter, sortDesc);
		}
		setFilteredItems(filteredItems);
	};

	return { currentFilter, handleSort, filteredItems, sortDesc };
};

export { useListSort };

import React, { useState, useEffect } from 'react';

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
			const item1 = a[filter] || null;
			const item2 = b[filter] || null;

			if (item1 === null || item2 === null) {
				return -1;
			}

			if (filter === 'startTime' || filter === 'endTime') {
				const time1 = a[filter];
				const time2 = b[filter];

				return (
					Date.parse('01/01/1970 ' + time1).valueOf() -
					Date.parse('01/01/1970 ' + time2).valueOf()
				);
			}

			if (filter === 'pinned') {
				return item1 - item2;
			}

			return item1.localeCompare(item2);
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

import React, { useState, useEffect } from 'react';

const useListSort = (items: any[]) => {
	const [ currentFilter, setCurrentFilter ] = useState('date');
	const [ sortDesc, setSortDesc ] = useState(true);
	const [ filteredItems, setFilteredItems ] = useState(items);

	useEffect(
		() => {
			const sorted = sortItems(items, currentFilter, sortDesc);

			setFilteredItems(sorted);
		},
		[ currentFilter, sortDesc ]
	);

	const sortItems = (
		array: any[],
		filter: string,
		sortDesc: boolean = false
	) => {
		const sorted = [ ...array ].sort((a, b) => {
			const item1 = a[filter];
			const item2 = b[filter];

			if (item1 === undefined || item2 === undefined) {
				return -1;
			}

			if (typeof item1 !== 'string') {
				return item1 - item2;
			}

			return item1.localeCompare(item2);
		});

		if (sortDesc === true) {
			return sorted.reverse();
		}

		return sorted;
	};

	const handleSort = (param: string) => {
		if (param !== currentFilter) {
			setCurrentFilter(param);
			setSortDesc(false);
		} else {
			setSortDesc(!sortDesc);
		}
	};

	return { currentFilter, handleSort, filteredItems, sortDesc };
};

export { useListSort };

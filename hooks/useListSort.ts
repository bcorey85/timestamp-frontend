import React, { useState, useEffect } from 'react';

const useListSort = (items: any[]) => {
	const [ currentFilter, setCurrentFilter ] = useState('date');
	const [ sortDesc, setSortDesc ] = useState(true);
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
				console.log(time1, time2);

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

	const handleSort = (filter: string) => {
		let filteredItems;

		if (filter !== currentFilter) {
			setCurrentFilter(filter);
			setSortDesc(false);
			filteredItems = sortItems(items, filter, false);
		} else {
			setSortDesc(!sortDesc);
			filteredItems = sortItems(items, filter, !sortDesc);
		}
		setFilteredItems(filteredItems);
	};

	return { currentFilter, handleSort, filteredItems, sortDesc };
};

export { useListSort };

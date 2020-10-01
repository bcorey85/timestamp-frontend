import React, { useEffect, useState } from 'react';

const usePagination = (array: any[], limit: number) => {
	const [ items, setItems ] = useState(array);
	const startIndex = 0;
	const endIndex = items.length - 1;
	const [ currentIndex, setCurrentIndex ] = useState(0);
	const [ page, setPage ] = useState(items.slice(startIndex, limit));
	const [ pageNumber, setPageNumber ] = useState(1);
	const totalPages = Math.ceil(array.length / limit);

	useEffect(
		() => {
			setPage(items.slice(currentIndex, currentIndex + limit));
		},
		[ items ]
	);

	const next = () => {
		const nextIndex = currentIndex + limit;
		const limitPastEnd = nextIndex > endIndex;

		if (limitPastEnd) {
			setCurrentIndex(endIndex);
			setPage(items.slice(endIndex, endIndex + limit));
			setPageNumber(1);
		} else {
			setCurrentIndex(nextIndex);
			setPage(items.slice(nextIndex, nextIndex + limit));
			setPageNumber(pageNumber + 1);
		}
	};

	const back = () => {
		const nextIndex = currentIndex - limit;
		if (nextIndex < 0) {
			setCurrentIndex(0);
			setPage(items.slice(startIndex, limit));
			setPageNumber(1);
		} else {
			setCurrentIndex(nextIndex);
			setPage(items.slice(nextIndex, nextIndex + limit));
			setPageNumber(pageNumber - 1);
		}
	};

	const updatePaginationItems = (newItems: any[]) => {
		setItems(newItems);
	};

	const showNextButton = currentIndex + limit <= endIndex;
	const showBackButton = currentIndex !== startIndex;

	return {
		next,
		back,
		page,
		showNextButton,
		showBackButton,
		pageNumber,
		totalPages,
		updatePaginationItems
	};
};

export { usePagination };

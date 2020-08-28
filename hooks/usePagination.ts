import React, { useState } from 'react';

const usePagination = (array: any[], limit: number) => {
	const startIndex = 0;
	const endIndex = array.length - 1;
	const [ currentIndex, setCurrentIndex ] = useState(0);
	const [ page, setPage ] = useState(array.slice(startIndex));

	const next = () => {
		const nextIndex = currentIndex + limit;
		if (nextIndex > endIndex) {
			setCurrentIndex(endIndex);
			setPage(array.slice(endIndex));
		} else {
			setCurrentIndex(nextIndex);
			setPage(array.slice(nextIndex));
		}
	};

	const back = () => {
		const nextIndex = currentIndex - limit;
		if (nextIndex < 0) {
			setCurrentIndex(0);
			setPage(array.slice(0));
			return;
		} else {
			setCurrentIndex(nextIndex);
			setPage(array.slice(nextIndex));
		}
	};

	return { next, back, page, currentIndex, startIndex, endIndex };
};

export { usePagination };

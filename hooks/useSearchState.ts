import React, { useState } from 'react';

const useSearchState = () => {
	const [ field, setField ] = useState<string>('title');
	const [ searchValue, setSearchValue ] = useState<string>('');

	const handleField = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setField(e.currentTarget.value);
	};

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	};

	return {
		field,
		searchValue,
		handleField,
		handleSearchValue,
		setField,
		setSearchValue
	};
};

export { useSearchState };

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ItemService } from '../utils/ItemService';
import { useRouterService } from './useRouterService';

const useSearchState = (initialData: any[]) => {
	const [ field, setField ] = useState<string>('title');
	const [ searchValue, setSearchValue ] = useState<string>('');
	const [ data, setData ] = useState<any[]>(initialData);
	const [ results, setResults ] = useState<any[]>([]);
	const { router } = useRouterService();

	const handleField = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setField(e.currentTarget.value);
	};

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value);
	};

	const filterResults = (field: string, searchValue: string) => {
		if (searchValue.trim() === '') {
			return setResults([]);
		}

		const filteredData = data.filter(item => {
			const formattedItem = new ItemService(item).getItem();

			if (!formattedItem[field]) {
				return false;
			}

			return formattedItem[field]
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});

		setResults(filteredData);

		if (
			router.query.field !== field ||
			router.query.searchValue !== searchValue
		) {
			router.pushUnique(
				`search?field=${field}&searchValue=${searchValue}`
			);
		}
	};

	return {
		field,
		searchValue,
		handleField,
		handleSearchValue,
		setField,
		setSearchValue,
		data,
		setData,
		filterResults,
		results
	};
};

export { useSearchState };

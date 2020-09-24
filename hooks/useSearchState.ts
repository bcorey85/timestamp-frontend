import React, { useState } from 'react';
import { Item } from '../utils/ItemService';
import { useRouterService } from './useRouterService';

const useSearchState = (initialData?: any[]) => {
	const [ field, setField ] = useState<string>('title');
	const [ searchValue, setSearchValue ] = useState<string>('');
	const [ data, setData ] = useState<any[]>(initialData || []);
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

		const filteredData: Item[] = data.filter(item => {
			if (field === 'date') {
				return item.meta.date
					.toLowerCase()
					.includes(searchValue.toLowerCase());
			}

			if (!item[field]) {
				return false;
			}

			return item[field]
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

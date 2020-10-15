import React, { useState } from 'react';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { Item, ItemService } from '../utils/ItemService';
import { useRouterService } from './useRouterService';

const useSearchState = (initialData?: any[]) => {
	const [ field, setField ] = useState<string>('title');
	const [ searchValue, setSearchValue ] = useState<string>('');
	const [ data, setData ] = useState<any[]>(initialData || []);
	const [ results, setResults ] = useState<any[]>([]);
	const { router } = useRouterService();
	const itemService = new ItemService();

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

			if (item.type === 'note' && field === 'description') {
				const string = new QuillDeltaToHtmlConverter(
					item.description
				).convert();

				return string.toLowerCase().includes(searchValue.toLowerCase());
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

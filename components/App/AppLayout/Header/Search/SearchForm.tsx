import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { SearchInput } from '../../../Search/SearchInput';

import { toggleSearch } from '../../../../../redux/interface';
import { useRouterService } from '../../../../../hooks/useRouterService';
import { useSearchState } from '../../../../../hooks/useSearchState';
import styles from './SearchForm.module.scss';
import { useClickOutside } from '../../../../../hooks/useClickOutside';

const SearchForm = () => {
	const dispatch = useDispatch();
	const {
		field,
		searchValue,
		handleField,
		handleSearchValue
	} = useSearchState();
	const { router } = useRouterService();
	const searchRef = useRef<HTMLDivElement>();
	useClickOutside(searchRef, () => dispatch(toggleSearch()));

	const handleSearch = () => {
		dispatch(toggleSearch());
		router.pushUnique(`search?field=${field}&searchValue=${searchValue}`);
	};
	return (
		<div className={styles.search} ref={searchRef}>
			<SearchInput
				handleSearch={handleSearch}
				field={field}
				setField={handleField}
				searchValue={searchValue}
				setSearchValue={handleSearchValue}
			/>
		</div>
	);
};

export { SearchForm };

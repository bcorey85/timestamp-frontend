import React from 'react';
import { useDispatch } from 'react-redux';

import { SearchInput } from '../../../Search/SearchInput';

import { toggleSearch } from '../../../../../redux/interface';
import { useRouterService } from '../../../../../hooks/useRouterService';
import { useSearchState } from '../../../../../hooks/useSearchState';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
	const dispatch = useDispatch();
	const {
		field,
		searchValue,
		handleField,
		handleSearchValue
	} = useSearchState();

	const { router } = useRouterService();

	const handleSearch = () => {
		dispatch(toggleSearch());
		router.pushUnique(`search?field=${field}&searchValue=${searchValue}`);
	};
	return (
		<React.Fragment>
			<div className={styles.search}>
				<SearchInput
					handleSearch={handleSearch}
					field={field}
					setField={handleField}
					searchValue={searchValue}
					setSearchValue={handleSearchValue}
				/>
			</div>
		</React.Fragment>
	);
};

export { SearchForm };

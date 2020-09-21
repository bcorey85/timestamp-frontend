import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import styles from './SearchInput.module.scss';

interface Props {
	handleSearch: () => void;
	field: string;
	setField: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	searchValue: string;
	setSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
	handleSearch,
	field,
	setField,
	searchValue,
	setSearchValue
}: Props): JSX.Element => {
	return (
		<div className={styles.search_input}>
			<select id='search' name='search' value={field} onChange={setField}>
				<option value='title'>Title</option>
				<option value='description'>Description</option>
				<option value='tags'>Tag</option>
			</select>
			<input
				id='search'
				type='text'
				value={searchValue}
				onChange={setSearchValue}
			/>
			<button className={styles.search_btn} onClick={handleSearch}>
				<BiSearchAlt2 />
			</button>
		</div>
	);
};

export { SearchInput };

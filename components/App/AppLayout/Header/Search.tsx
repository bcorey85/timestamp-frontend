import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch, selectInterface } from '../../../../redux/interface';
import { useInputState } from '../../../../hooks/useInputState';
import { FiSearch } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';

import styles from './Search.module.scss';

const SearchForm = () => {
	const dispatch = useDispatch();
	const [ searchValue, setSearchValue ] = useInputState('');

	const handleSearch = () => {
		dispatch(toggleSearch());
	};
	return (
		<React.Fragment>
			<div className={styles.search}>
				<div className={styles.search_input}>
					<select id='search' name='search'>
						<option value='note'>Note</option>
						<option value='task'>Task</option>
						<option value='project'>Project</option>
						<option value='tag'>Tag</option>
					</select>
					<input
						id='search'
						type='text'
						value={searchValue}
						onChange={setSearchValue}
					/>
					<button
						className={styles.search_btn}
						onClick={handleSearch}>
						<BiSearchAlt2 />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

const SearchToggle = () => {
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(toggleSearch());
	};

	return (
		<button onClick={handleToggle} className={styles.search_toggle_btn}>
			<BiSearchAlt2 />
		</button>
	);
};

const Search = (): JSX.Element => {
	const { searchOpen } = useSelector(selectInterface);

	return (
		<div className={styles.search_container}>
			<SearchToggle />
			{searchOpen && <SearchForm />}
		</div>
	);
};

export { Search };

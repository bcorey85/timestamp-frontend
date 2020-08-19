import React from 'react';

import { Input } from '../../shared/Input';
import styles from './Search.module.scss';

const Search = (): JSX.Element => {
	const handleSearch = () => {};

	return (
		<div className={styles.search}>
			<select id='search' name='search'>
				<option value='note'>Note</option>
				<option value='task'>Task</option>
				<option value='project'>Project</option>
				<option value='tag'>Tag</option>
			</select>
			<input
				id='search'
				type='text'
				value={null}
				onChange={handleSearch}
			/>
			<button className={styles.search_btn}>Go</button>
		</div>
	);
};

export { Search };

import React from 'react';
import { useDispatch } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';

import { toggleSearch } from '../../../../../redux/interface';
import styles from './SearchToggle.module.scss';

const SearchToggle = (): JSX.Element => {
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

export { SearchToggle };

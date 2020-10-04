import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';

import { selectInterface, toggleSearch } from '../../../../../redux/interface';
import styles from './SearchToggle.module.scss';

const SearchToggle = (): JSX.Element => {
	const dispatch = useDispatch();
	const { searchOpen } = useSelector(selectInterface);

	const handleToggle = () => {
		dispatch(toggleSearch());
	};

	return (
		<button
			onClick={handleToggle}
			className={styles.search_toggle_btn}
			disabled={searchOpen}>
			<BiSearchAlt2 />
		</button>
	);
};

export { SearchToggle };

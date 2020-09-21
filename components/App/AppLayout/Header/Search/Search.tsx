import React from 'react';
import { useSelector } from 'react-redux';
import { selectInterface } from '../../../../../redux/interface';

import { SearchForm } from './SearchForm';
import { SearchToggle } from './SearchToggle';

const Search = (): JSX.Element => {
	const { searchOpen } = useSelector(selectInterface);

	return (
		<div>
			<SearchToggle />
			{searchOpen && <SearchForm />}
		</div>
	);
};

export { Search };

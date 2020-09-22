import React from 'react';

import { Search } from '../../../components/App/Search/Search';
import { PrivateRoute } from '../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const SearchPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Search' />
			<Search />
		</PrivateRoute>
	);
};

export default SearchPage;

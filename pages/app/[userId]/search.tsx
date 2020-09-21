import React from 'react';

import { Search } from '../../../components/App/Search/Search';
import { PrivateRoute } from '../../../components/Landing/Auth/PrivateRoute';
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

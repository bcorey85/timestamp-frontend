import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const SearchPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Search' />
			search page
		</PrivateRoute>
	);
};

export default SearchPage;

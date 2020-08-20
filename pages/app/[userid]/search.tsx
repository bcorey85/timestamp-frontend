import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const SearchPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Search' />
				search page
			</AppLayout>
		</PrivateRoute>
	);
};

export default SearchPage;

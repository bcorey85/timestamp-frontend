import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const ActivityPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Activity' />
			ActivityPage
		</PrivateRoute>
	);
};

export default ActivityPage;

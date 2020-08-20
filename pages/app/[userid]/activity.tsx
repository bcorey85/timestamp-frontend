import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const ActivityPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Activity' />
				ActivityPage
			</AppLayout>
		</PrivateRoute>
	);
};

export default ActivityPage;

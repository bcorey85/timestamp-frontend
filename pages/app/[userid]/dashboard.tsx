import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Dashboard } from '../../../components/Dashboard/Dashboard';
import { Meta } from '../../../components/Meta/Meta';

const DashboardPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Dashboard' />
				<Dashboard />
			</AppLayout>
		</PrivateRoute>
	);
};

export default DashboardPage;

import React from 'react';

import { PrivateRoute } from '../../../components/Landing/Auth/PrivateRoute';
import { Dashboard } from '../../../components/App/Dashboard/Dashboard';
import { Meta } from '../../../components/Meta/Meta';

const DashboardPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Dashboard' />
			<Dashboard />
		</PrivateRoute>
	);
};

export default DashboardPage;

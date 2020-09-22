import React from 'react';

import { Activity } from '../../../components/App/Activity/Activity';
import { PrivateRoute } from '../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const ActivityPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Activity' />
			<Activity />
		</PrivateRoute>
	);
};

export default ActivityPage;

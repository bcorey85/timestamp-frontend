import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const TasksPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Tasks' />
				TasksPage
			</AppLayout>
		</PrivateRoute>
	);
};

export default TasksPage;

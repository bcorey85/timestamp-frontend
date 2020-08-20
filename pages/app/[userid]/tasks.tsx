import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const TasksPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Tasks' />
			TasksPage
		</PrivateRoute>
	);
};

export default TasksPage;

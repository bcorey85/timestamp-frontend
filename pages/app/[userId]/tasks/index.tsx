import React from 'react';

import { Task } from '../../../../components/App/Task/Task';
import { PrivateRoute } from '../../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const TasksPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Tasks' />
			<Task />
		</PrivateRoute>
	);
};

export default TasksPage;

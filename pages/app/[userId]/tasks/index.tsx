import React from 'react';

import { Task } from '../../../../components/App/Task/Task';
import { PrivateRoute } from '../../../../components/Landing/Auth/PrivateRoute';
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

import React from 'react';

import { TaskList } from '../../../../components/App/Task/TaskList';
import { PrivateRoute } from '../../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const TasksPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Tasks' />
			<TaskList />
		</PrivateRoute>
	);
};

export default TasksPage;

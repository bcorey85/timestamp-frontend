import React from 'react';

import { TaskSingle } from '../../../../components/App/Task/TaskSingle/TaskSingle';
import { PrivateRoute } from '../../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const TaskSinglePage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Task' />
			<TaskSingle />
		</PrivateRoute>
	);
};

export default TaskSinglePage;

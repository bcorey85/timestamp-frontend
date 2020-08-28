import React from 'react';

import { TaskSingle } from '../../../../components/App/Task/TaskSingle';
import { PrivateRoute } from '../../../../components/Auth/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const TaskSinglePage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Tasks' />
			<TaskSingle />
		</PrivateRoute>
	);
};

export default TaskSinglePage;

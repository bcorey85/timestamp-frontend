import React from 'react';

import { ProjectList } from '../../../../components/App/Project/ProjectList';
import { PrivateRoute } from '../../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const ProjectsPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Projects' />
			<ProjectList />
		</PrivateRoute>
	);
};

export default ProjectsPage;

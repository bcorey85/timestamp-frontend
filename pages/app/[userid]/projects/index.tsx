import React from 'react';

import { Project } from '../../../../components/App/Project/Project';
import { PrivateRoute } from '../../../../components/Auth/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const ProjectsPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Projects' />
			<Project />
		</PrivateRoute>
	);
};

export default ProjectsPage;

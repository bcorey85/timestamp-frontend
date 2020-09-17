import React from 'react';

import { ProjectSingle } from '../../../../components/App/Project/ProjectSingle';
import { PrivateRoute } from '../../../../components/Landing/Auth/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const ProjectSinglePage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Projects' />
			<ProjectSingle />
		</PrivateRoute>
	);
};

export default ProjectSinglePage;

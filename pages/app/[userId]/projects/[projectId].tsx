import React from 'react';

import { ProjectSingle } from '../../../../components/App/Project/ProjectSingle/ProjectSingle';
import { PrivateRoute } from '../../../../components/App/shared/PrivateRoute';
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

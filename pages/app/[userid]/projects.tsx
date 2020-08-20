import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const ProjectsPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Projects' />
			ProjectsPage
		</PrivateRoute>
	);
};

export default ProjectsPage;

import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const ProjectsPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Projects' />
				ProjectsPage
			</AppLayout>
		</PrivateRoute>
	);
};

export default ProjectsPage;

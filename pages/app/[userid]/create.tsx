import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const CreatePage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Create' />
				CreatePage
			</AppLayout>
		</PrivateRoute>
	);
};

export default CreatePage;

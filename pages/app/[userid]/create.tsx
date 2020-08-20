import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const CreatePage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Create' />
			CreatePage
		</PrivateRoute>
	);
};

export default CreatePage;

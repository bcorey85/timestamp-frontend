import React from 'react';

import { PrivateRoute } from '../../../components/Landing/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';
import { Create } from '../../../components/App/Create/Create';

const CreatePage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Create' />
			<Create />
		</PrivateRoute>
	);
};

export default CreatePage;

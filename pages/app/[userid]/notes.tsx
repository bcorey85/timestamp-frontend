import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const NotesPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Notes' />
			NotesPage
		</PrivateRoute>
	);
};

export default NotesPage;

import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const NotesPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Notes' />
				NotesPage
			</AppLayout>
		</PrivateRoute>
	);
};

export default NotesPage;

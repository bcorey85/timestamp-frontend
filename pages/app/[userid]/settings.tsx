import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { AppLayout } from '../../../components/AppLayout/AppLayout';
import { Meta } from '../../../components/Meta/Meta';

const SettingsPage = () => {
	return (
		<PrivateRoute>
			<AppLayout>
				<Meta pageTitle='Settings' />
				SettingsPage
			</AppLayout>
		</PrivateRoute>
	);
};

export default SettingsPage;

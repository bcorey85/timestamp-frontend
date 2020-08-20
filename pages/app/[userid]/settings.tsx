import React from 'react';

import { PrivateRoute } from '../../../components/Auth/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';

const SettingsPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Settings' />
			SettingsPage
		</PrivateRoute>
	);
};

export default SettingsPage;

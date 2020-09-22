import React from 'react';

import { PrivateRoute } from '../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../components/Meta/Meta';
import { Settings } from '../../../components/App/Settings/Settings';

const SettingsPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Settings' />
			<Settings />
		</PrivateRoute>
	);
};

export default SettingsPage;

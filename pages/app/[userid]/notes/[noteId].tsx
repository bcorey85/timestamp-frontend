import React from 'react';

import { NoteSingle } from '../../../../components/App/Note/NoteSingle';
import { PrivateRoute } from '../../../../components/Landing/Auth/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const NoteSinglePage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Note' />
			<NoteSingle />
		</PrivateRoute>
	);
};

export default NoteSinglePage;

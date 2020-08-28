import React from 'react';

import { Note } from '../../../../components/App/Note/Note';
import { PrivateRoute } from '../../../../components/Auth/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const NotesPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Notes' />
			<Note />
		</PrivateRoute>
	);
};

export default NotesPage;

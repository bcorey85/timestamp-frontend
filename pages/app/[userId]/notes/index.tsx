import React from 'react';

import { NoteList } from '../../../../components/App/Note/NoteList';
import { PrivateRoute } from '../../../../components/App/shared/PrivateRoute';
import { Meta } from '../../../../components/Meta/Meta';

const NotesPage = () => {
	return (
		<PrivateRoute>
			<Meta pageTitle='Notes' />
			<NoteList />
		</PrivateRoute>
	);
};

export default NotesPage;

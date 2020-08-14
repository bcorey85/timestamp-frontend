import React from 'react';

import { Auth } from '../components/Auth/Auth';
import { Meta } from '../components/Meta/Meta';

const AuthPage = () => {
	return (
		<React.Fragment>
			<Meta pageTitle='Home' />
			<Auth />
		</React.Fragment>
	);
};

export default AuthPage;

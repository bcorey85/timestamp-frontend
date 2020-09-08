import React from 'react';

import { Layout } from '../../components/Landing/Layout/Layout';
import { Auth } from '../../components/Landing/Auth/Auth';
import { Meta } from '../../components/Meta/Meta';

const AuthPage = () => {
	return (
		<Layout>
			<Meta pageTitle='Sign In' />
			<Auth />
		</Layout>
	);
};

export default AuthPage;

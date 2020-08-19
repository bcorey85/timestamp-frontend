import React from 'react';

import { Layout } from '../../components/Layout/Layout';
import { Auth } from '../../components/Auth/Auth';
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

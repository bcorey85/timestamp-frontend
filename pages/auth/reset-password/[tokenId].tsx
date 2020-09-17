import React from 'react';

import { Layout } from '../../../components/Landing/Layout/Layout';
import { Meta } from '../../../components/Meta/Meta';
import { ResetPassword } from '../../../components/Landing/Auth/ResetPassword';

const ResetPasswordPage = () => {
	return (
		<Layout>
			<Meta pageTitle='Reset Password' />
			<ResetPassword />
		</Layout>
	);
};

export default ResetPasswordPage;

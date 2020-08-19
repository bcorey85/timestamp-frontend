import React from 'react';

import { Layout } from '../../../components/Layout/Layout';
import { Meta } from '../../../components/Meta/Meta';
import { ResetPassword } from '../../../components/Auth/ResetPassword';

const ResetPasswordPage = () => {
	return (
		<Layout>
			<Meta pageTitle='Reset Password' />
			<ResetPassword />
		</Layout>
	);
};

export default ResetPasswordPage;

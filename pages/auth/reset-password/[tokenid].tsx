import React from 'react';

import { Meta } from '../../../components/Meta/Meta';
import { ResetPassword } from '../../../components/Auth/ResetPassword';

const ResetPasswordPage = () => {
	return (
		<React.Fragment>
			<Meta pageTitle='Reset Password' />
			<ResetPassword />
		</React.Fragment>
	);
};

export default ResetPasswordPage;

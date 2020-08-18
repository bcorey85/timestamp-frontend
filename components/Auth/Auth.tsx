import { useState } from 'react';

import { SignIn } from './SignIn';
import { ForgotPassword } from './ForgotPassword';
import { AuthContainer } from './shared/AuthContainer';

const Auth = () => {
	const [ resetPasswordMode, setResetPasswordMode ] = useState(false);

	const toggleForm = () => {
		setResetPasswordMode(!resetPasswordMode);
	};

	return (
		<AuthContainer>
			{resetPasswordMode ? (
				<ForgotPassword toggleForm={toggleForm} />
			) : (
				<SignIn toggleForm={toggleForm} />
			)}
		</AuthContainer>
	);
};

export { Auth };

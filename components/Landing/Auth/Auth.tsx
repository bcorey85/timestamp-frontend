import React, { useState } from 'react';

import { Login } from './Login';
import { ForgotPassword } from './ForgotPassword';
import { AuthContainer } from './shared/AuthContainer';
import { Register } from './Register';

const Auth = (): JSX.Element => {
	const [ formMode, setFormMode ] = useState<
		'signin' | 'register' | 'forgot-password'
	>('signin');

	const toggleForm = (mode: 'signin' | 'register' | 'forgot-password') => {
		setFormMode(mode);
	};

	let authComponent;
	if (formMode === 'forgot-password') {
		authComponent = <ForgotPassword toggleForm={toggleForm} />;
	} else if (formMode === 'register') {
		authComponent = <Register toggleForm={toggleForm} />;
	} else {
		authComponent = <Login toggleForm={toggleForm} />;
	}

	return <AuthContainer>{authComponent}</AuthContainer>;
};

export { Auth };

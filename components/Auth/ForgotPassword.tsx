import React, { useEffect, useState, SyntheticEvent } from 'react';

import { Input } from '../shared/Input';
import { Button } from '../shared/Button';
import { ButtonContainer } from './shared/ButtonContainer';
import { AuthHeader } from './shared/AuthHeader';

import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';
import { forgotPasswordApiConfig } from '../../api/auth';
import { ApiError } from '../../api/index';
import { ErrorService } from '../../utils/ErrorService';
import styles from './ForgotPassword.module.scss';

interface Props {
	toggleForm: () => void;
}

interface Errors {
	email?: string;
	generic?: ApiError[];
}

const ForgotPassword = ({ toggleForm }: Props): JSX.Element => {
	const [ email, setEmail ] = useInputState('');
	const [ formSent, setFormSent ] = useState(false);
	const [ errors, setErrors ] = useState<Errors>({
		email: null,
		generic: []
	});
	const {
		request: forgotPasswordRequest,
		errors: forgotPasswordErrors
	} = useApiRequest();

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'email' ],
				forgotPasswordErrors
			);

			setErrors(errors);
		},
		[ forgotPasswordErrors ]
	);

	const handlePasswordRequest = async (e: SyntheticEvent) => {
		e.preventDefault();
		const config = forgotPasswordApiConfig(email);

		const res = await forgotPasswordRequest(config);

		if (res.success === false) {
			return;
		}

		setFormSent(true);
	};

	if (formSent) {
		return (
			<React.Fragment>
				<AuthHeader>
					<h1 className='serif'>Thank You</h1>
					<h5>
						Please check your email to complete your password reset
						request
					</h5>
				</AuthHeader>
				<Button onClick={toggleForm} btnStyle='primary'>
					Back
				</Button>
			</React.Fragment>
		);
	}

	return (
		<form className={styles.form}>
			<AuthHeader>
				<h1>Forgot Password</h1>
				<h5>Please enter your email to initiate a request</h5>
			</AuthHeader>
			<div className={styles.input_container}>
				<Input
					type='email'
					id='email'
					label='Email'
					error={errors.email}
					onChange={setEmail}
					value={email}
					autoComplete='username'
				/>
			</div>

			<ButtonContainer>
				<Button onClick={toggleForm} btnStyle='outline'>
					Cancel
				</Button>
				<Button onClick={handlePasswordRequest} btnStyle='primary'>
					Reset Password
				</Button>
			</ButtonContainer>
		</form>
	);
};

export { ForgotPassword };

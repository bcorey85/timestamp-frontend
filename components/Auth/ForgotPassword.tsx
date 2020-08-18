import React, { useEffect, useState } from 'react';

import { Input } from '../shared/Input';
import { Button } from '../shared/Button';
import { ButtonContainer } from './shared/ButtonContainer';
import { AuthHeader } from './shared/AuthHeader';

import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';
import { forgotPasswordRequestConfig } from '../../api/auth';

import styles from './ForgotPassword.module.scss';

interface Props {
	toggleForm: () => void;
}

const ForgotPassword = ({ toggleForm }: Props): JSX.Element => {
	const [ email, setEmail ] = useInputState('');
	const [ formSent, setFormSent ] = useState(false);
	const [ errors, setErrors ] = useState({ email: null });
	const [
		forgotPasswordRequest,
		forgotPasswordData,
		forgotPasswordErrors
	] = useApiRequest();

	useEffect(
		() => {
			const errors = {
				email:
					forgotPasswordErrors[
						forgotPasswordErrors.findIndex(
							err => err.field === 'email'
						)
					] || null
			};

			setErrors(errors);
		},
		[ forgotPasswordErrors ]
	);

	const handlePasswordRequest = async e => {
		e.preventDefault();
		const config = forgotPasswordRequestConfig(email);

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
					<h1>Thank You</h1>
					<h5>
						Please check your email to complete your password reset
						request
					</h5>
				</AuthHeader>
				<Button onClick={toggleForm} type='primary'>
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
				<Button type='outline' onClick={toggleForm}>
					Cancel
				</Button>
				<Button onClick={handlePasswordRequest} type='primary'>
					Reset Password
				</Button>
			</ButtonContainer>
		</form>
	);
};

export { ForgotPassword };

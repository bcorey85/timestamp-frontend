import React, { useEffect, useState, SyntheticEvent } from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { ButtonContainer } from './shared/ButtonContainer';
import { AuthHeader } from './shared/AuthHeader';
import { ErrorDisplay } from '../../shared/ErrorDisplay';
import { MessageContainer } from './shared/MessageContainer';

import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { forgotPasswordApiConfig } from '../../../api/auth';
import { ApiError } from '../../../api/index';
import { ErrorService } from '../../../utils/ErrorService';

interface Props {
	toggleForm: (mode: string) => void;
}

interface Errors {
	email?: string;
	generic?: ApiError[];
}

const ForgotPassword = ({ toggleForm }: Props): JSX.Element => {
	const [ isLoading, setIsLoading ] = useState(false);
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
		setIsLoading(true);
		const config = forgotPasswordApiConfig(email);

		const res = await forgotPasswordRequest(config);
		setIsLoading(false);

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
				<Button
					type='button'
					id='back'
					onClick={toggleForm}
					btnStyle='primary'>
					Back
				</Button>
			</React.Fragment>
		);
	}

	return (
		<form>
			<AuthHeader>
				<h1>Forgot Password</h1>
				<h5>Please enter your email to reset your password</h5>
			</AuthHeader>
			<div>
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
				<Button
					type='button'
					id='cancel'
					onClick={toggleForm}
					btnStyle='outline'>
					Cancel
				</Button>
				<Button
					type='button'
					id='submit'
					onClick={handlePasswordRequest}
					btnStyle='primary'
					isLoading={isLoading}>
					Reset Password
				</Button>
			</ButtonContainer>
			<MessageContainer>
				{isLoading ? (
					<div style={{ textAlign: 'center' }}>
						Please wait while free server warms up.
					</div>
				) : (
					<ErrorDisplay errors={errors.generic} />
				)}
			</MessageContainer>
		</form>
	);
};

export { ForgotPassword };

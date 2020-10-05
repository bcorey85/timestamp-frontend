import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { ButtonContainer } from './shared/ButtonContainer';
import { AuthHeader } from './shared/AuthHeader';
import { MessageContainer } from './shared/MessageContainer';

import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { signupApiConfig } from '../../../api/auth';
import { login } from '../../../redux/user';
import { ApiError } from '../../../api/index';
import { ErrorDisplay } from '../../shared/ErrorDisplay';
import { ErrorService } from '../../../utils/ErrorService';
import { setAppDataSynced } from '../../../redux/appData';

interface Props {
	toggleForm: (mode: string) => void;
}

interface Errors {
	email?: string;
	password?: string;
	passwordConfirm?: string;
	generic?: ApiError[];
}

const Register = ({ toggleForm }: Props): JSX.Element => {
	const [ isLoadingSignup, setIsLoadingSignup ] = useState(false);
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ passwordConfirm, setPasswordConfirm ] = useInputState('');
	const [ errors, setErrors ] = useState<Errors>({
		email: null,
		password: null,
		passwordConfirm: null,
		generic: []
	});
	const { request: signupRequest, errors: signupErrors } = useApiRequest();
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'email', 'password', 'passwordConfirm' ],
				signupErrors
			);
			console.log(signupErrors);

			setErrors(errors);
		},
		[ signupErrors ]
	);

	const handleAuth = async (e: SyntheticEvent) => {
		e.preventDefault();

		setIsLoadingSignup(true);

		setErrors({
			email: null,
			password: null,
			passwordConfirm: null,
			generic: []
		});

		const signupConfig = signupApiConfig({
			email,
			password,
			passwordConfirm
		});
		const res = await signupRequest(signupConfig);

		setIsLoadingSignup(false);

		if (res.success === false) {
			return;
		}

		dispatch(
			login({
				userId: res.data.id,
				token: res.data.token
			})
		);
		dispatch(setAppDataSynced(false));

		router.push(`/app/[userId]/dashboard`, `/app/${res.data.id}/dashboard`);
	};

	return (
		<form>
			<AuthHeader>
				<h1>Create a New Account</h1>
				<h5>Please enter the following information.</h5>
			</AuthHeader>
			<Input
				type='email'
				id='email'
				label='Email'
				error={errors.email}
				onChange={setEmail}
				value={email}
				autoComplete='username'
			/>
			<Input
				type='password'
				id='password'
				label='Password'
				error={errors.password}
				onChange={setPassword}
				value={password}
				autoComplete='off'
			/>
			<Input
				type='password'
				id='confirm-password'
				label='Confirm Password'
				error={errors.passwordConfirm}
				onChange={setPasswordConfirm}
				value={passwordConfirm}
				autoComplete='off'
			/>
			<ButtonContainer>
				<Button
					btnStyle='link_gray'
					onClick={() => {
						toggleForm('sigin');
					}}>
					Back to Login
				</Button>
				<Button
					btnStyle='primary'
					onClick={handleAuth}
					isLoading={isLoadingSignup}>
					Sign Up
				</Button>
			</ButtonContainer>
			<MessageContainer>
				{isLoadingSignup ? (
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

export { Register };

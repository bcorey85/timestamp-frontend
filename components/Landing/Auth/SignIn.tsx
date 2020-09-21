import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { ButtonContainer } from './shared/ButtonContainer';
import { AuthHeader } from './shared/AuthHeader';

import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { signupApiConfig, loginApiConfig } from '../../../api/auth';
import { login } from '../../../redux/user';
import { ApiRequest, ApiResponse, ApiError } from '../../../api/index';
import { ErrorDisplay } from '../../shared/ErrorDisplay';
import { ErrorService } from '../../../utils/ErrorService';
import styles from './SignIn.module.scss';
import { setAppDataSynced } from '../../../redux/appData';

type Request = (config: ApiRequest) => Promise<ApiResponse>;

interface Props {
	toggleForm: () => void;
}

interface Errors {
	email?: string;
	password?: string;
	generic?: ApiError[];
}

const SignIn = ({ toggleForm }: Props): JSX.Element => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ errors, setErrors ] = useState<Errors>({
		email: null,
		password: null,
		generic: []
	});
	const { request: signupRequest, errors: signupErrors } = useApiRequest();
	const { request: loginRequest, errors: loginErrors } = useApiRequest();
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(
		() => {
			const errorArray = [ ...signupErrors, ...loginErrors ];
			const errors = ErrorService.formatErrors(
				[ 'email', 'password' ],
				errorArray
			);

			setErrors(errors);
		},
		[ signupErrors, loginErrors ]
	);

	const signupConfig = signupApiConfig({ email, password });
	const loginConfig = loginApiConfig({ email, password });

	const handleAuth = async (
		e: SyntheticEvent,
		config: ApiRequest,
		request: Request
	) => {
		e.preventDefault();
		setErrors({
			email: null,
			password: null,
			generic: []
		});
		const res = await request(config);

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
				<h1>
					Capture your learning<br /> progress in time.
				</h1>
				<h5>Please sign up or login to your account</h5>
			</AuthHeader>
			<ErrorDisplay errors={errors.generic} />
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
				autoComplete='current-password'
			/>
			<div className={styles.reset_password}>
				<Button btnStyle='link_gray' onClick={toggleForm}>
					Forgot Password?
				</Button>
			</div>

			<ButtonContainer>
				<Button
					btnStyle='outline'
					onClick={e => handleAuth(e, signupConfig, signupRequest)}>
					Sign Up
				</Button>
				<Button
					btnStyle='primary'
					onClick={e => handleAuth(e, loginConfig, loginRequest)}>
					Login
				</Button>
			</ButtonContainer>
			<div className={styles.error_container} />
		</form>
	);
};

export { SignIn };

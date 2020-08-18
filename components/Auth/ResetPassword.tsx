import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { AuthContainer } from './shared/AuthContainer';
import { AuthHeader } from './shared/AuthHeader';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';
import { ErrorDisplay } from '../shared/ErrorDisplay';

import { login } from '../../redux/user';
import { resetPasswordRequestConfig } from '../../api/auth';
import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';

const ResetPassword = () => {
	const [ password, setPassword ] = useInputState('');
	const [ passwordConfirm, setPasswordConfirm ] = useInputState('');
	const [ errors, setErrors ] = useState({
		password: null,
		passwordConfirm: null
	});
	const [ resetRequest, resetData, resetErrors ] = useApiRequest();
	const router = useRouter();
	const dispatch = useDispatch();
	const { tokenid } = router.query;
	console.log(router);

	useEffect(
		() => {
			setErrors({
				password: null,
				passwordConfirm: null
			});
		},
		[ password, passwordConfirm, setErrors ]
	);

	const handlePasswordReset = async e => {
		e.preventDefault();

		if (password.length < 6) {
			return setErrors({
				...errors,
				password: {
					message:
						'Please add a valid password with at least 6 characters'
				}
			});
		}

		if (password !== passwordConfirm) {
			return setErrors({
				...errors,
				passwordConfirm: {
					message: 'Passwords do not match'
				}
			});
		}

		const config = resetPasswordRequestConfig({
			password,
			token: tokenid as string
		});
		const res = await resetRequest(config);

		if (res.success === false) {
			return;
		}

		dispatch(
			login({
				userId: res.data.id,
				token: res.data.token,
				data: {}
			})
		);

		router.push('/');
	};

	return (
		<AuthContainer>
			<AuthHeader>
				<h1>Reset Password</h1>
				<h5>Please submit a new password below</h5>
			</AuthHeader>
			<form>
				<Input
					id='password'
					label='New Password'
					type='password'
					autoComplete='new-password'
					onChange={setPassword}
					value={password}
					error={errors.password}
				/>
				<Input
					id='password'
					label='Confirm Password'
					type='password'
					autoComplete='confirm-password'
					onChange={setPasswordConfirm}
					value={passwordConfirm}
					error={errors.passwordConfirm}
				/>
				<Button onClick={handlePasswordReset} type='primary'>
					Reset Password
				</Button>
				<ErrorDisplay errors={resetErrors} />
			</form>
		</AuthContainer>
	);
};

export { ResetPassword };

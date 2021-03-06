import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Input } from '../../shared/Input';
import { useInputState } from '../../../hooks/useInputState';
import { Button } from '../../shared/Button';

import { useApiRequest } from '../../../hooks/useApiRequest';
import { updateUserApiConfig } from '../../../api/user';
import { selectUser } from '../../../redux/user';
import { ApiError } from '../../../api/index';
import { ErrorService } from '../../../utils/ErrorService';
import styles from './UpdateDetails.module.scss';

interface Props {
	mode: string;
	closeForm: () => void;
}

interface Errors {
	email?: string;
	password?: string;
	passwordConfirm?: string;
	generic: ApiError[];
}

const UpdateDetails = ({ mode, closeForm }: Props): JSX.Element => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ passwordConfirm, setPasswordConfirm ] = useInputState('');
	const [ errors, setErrors ] = useState<Errors>({
		email: null,
		password: null,
		passwordConfirm: null,
		generic: []
	});
	const [ success, setSuccess ] = useState('');
	const {
		request: updateUserRequest,
		errors: updateUserErrors
	} = useApiRequest();
	const { userId, token } = useSelector(selectUser);

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'email', 'password', 'passwordConfirm' ],
				updateUserErrors
			);

			setErrors(errors);
		},
		[ updateUserErrors ]
	);

	const handleSubmit = async (e: SyntheticEvent, type: string) => {
		e.preventDefault();

		let payload;
		if (type === 'email') {
			payload = {
				email
			};
		} else if (type === 'password') {
			payload = {
				password,
				passwordConfirm
			};
		}

		const config = updateUserApiConfig({ payload, token, userId });
		const res = await updateUserRequest(config);

		if (res.success === false) {
			return;
		}

		setSuccess(res.message);

		setTimeout(() => {
			closeForm();
		}, 2000);
	};

	if (mode === 'email') {
		return (
			<form className={styles.container}>
				<h3>Edit Email</h3>
				<Input
					type='email'
					label='Email'
					id='email'
					value={email}
					error={errors.email}
					onChange={setEmail}
				/>
				<Button
					btnStyle='primary'
					onClick={e => handleSubmit(e, 'email')}>
					Save Email
				</Button>

				{success.length > 0 ? (
					<div className={styles.success}>{success}</div>
				) : null}
			</form>
		);
	}

	return (
		<form className={styles.container}>
			<h3>Change Password</h3>

			<Input
				type='password'
				label='Password'
				id='password'
				value={password}
				error={errors.password}
				onChange={setPassword}
			/>
			<Input
				type='password'
				label='Confirm Password'
				id='confirm-password'
				value={passwordConfirm}
				error={errors.passwordConfirm}
				onChange={setPasswordConfirm}
			/>
			<Button
				btnStyle='primary'
				onClick={e => handleSubmit(e, 'password')}>
				Save Password
			</Button>
			{success.length > 0 ? (
				<div className={styles.success}>{success}</div>
			) : null}
		</form>
	);
};

export { UpdateDetails };

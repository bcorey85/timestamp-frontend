import React from 'react';

import styles from './UpdateDetails.module.scss';
import { Input } from '../../shared/Input';
import { useInputState } from '../../../hooks/useInputState';
import { Button } from '../../shared/Button';

interface Props {
	mode: string;
}

const UpdateDetails = ({ mode }: Props): JSX.Element => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ passwordConfirm, setPasswordConfirm ] = useInputState('');

	const handleSubmit = () => {
		console.log(email, password, passwordConfirm);
	};

	if (mode === 'email') {
		return (
			<form className={styles.container}>
				<h3>New Email</h3>
				<Input
					type='email'
					label='Email'
					id='email'
					value={email}
					onChange={setEmail}
				/>
				<Button btnStyle='primary' onClick={handleSubmit}>
					Save Email
				</Button>
			</form>
		);
	}

	return (
		<form className={styles.container}>
			<h3>New Password</h3>
			<Input
				type='password'
				label='Password'
				id='password'
				value={password}
				onChange={setPassword}
			/>
			<Input
				type='password'
				label='Confirm Password'
				id='confirm-password'
				value={passwordConfirm}
				onChange={setPasswordConfirm}
			/>
			<Button btnStyle='primary' onClick={handleSubmit}>
				Save Password
			</Button>
		</form>
	);
};

export { UpdateDetails };

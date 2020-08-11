import { useInputState } from '../hooks/useInputState';
import { useApiRequest } from '../hooks/useApiRequest';
import Link from 'next/link';

const Login = () => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const payload = { email, password };
	};

	return (
		<div>
			login page
			<Link href='/'>
				<a>Home</a>
			</Link>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>
						Email
						<input
							id='email'
							name='email'
							value={email}
							onChange={setEmail}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='password'>
						Password
						<input
							id='password'
							name='password'
							type='password'
							value={password}
							onChange={setPassword}
						/>
					</label>
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default Login;
